(ns cljs-snake.core
  (:require
   [cljs-snake.drawing :as drawing]
   [sablono.core :as sab :include-macros true]
   [figwheel.client :as fw :include-macros true]
   [cljs.core.async :as async
    :refer [<! >! chan alts! timeout sliding-buffer]]
   [cemerick.cljs.test :as t]
   [clojure.browser.repl :as repl])
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [cemerick.cljs.test :refer (is deftest with-test run-tests testing test-var)]))

(enable-console-print!)

;(declare immediate-mode-render!)

(fw/defonce repl-connection (repl/connect "http://localhost:9000/repl"))

(def tick-speed 150)

(def keycode-a 65)

;;; input-chan collects inputs from mouse/touch and keyboard.
;;; Two types of inputs will be put into this channel:
;;; 1) single inputs from the keyboard - :left :up :down :right
;;; 2) double inputs from mouse/touch - :upleft :upright :downleft :downright
(def input-chan (chan))

(def starting-snake-length 3) ; Snakes starting length

(defn reset-state
  ([]
     (reset-state {:ai true}))
  ([state]
     (assoc state
       :running true
       :x (int 0)
       :y (int 0)
       :score 0
       :food-pos nil
       :direction :right
       :snake-tail cljs.core.PersistentQueue.EMPTY
       :columns 18
       :rows 14
       :starting-snake-length 3)))

;; (def columns 18)
;; (def rows 14)
(def debug (atom "Debug"))

(fw/defonce state (atom (reset-state)))

(defn disable-ai [{:keys [ai] :as state}]
  (assoc state :ai false))

(defn disable-ai! []
  (swap! state disable-ai))


(memoize
 (defn all-positions [columns rows] (for [x (range columns)
                                          y (range rows)]
                                      [x y])))

(defn update-x [x direction]
  (case direction
    :left (dec x)
    :right (inc x)
    x))

(defn update-y [y direction]
  (case direction
    :up (dec y)
    :down (inc y)
    y))

(defn update-position [{:keys [direction x y snake-tail score running] :as state}]
  ;(println "update position. x,y: " x "," y ", direction: " direction )
  (if running
    (let [old-position [x y]
          x (update-x x direction)
          y (update-y y direction)
          snake-tail (conj snake-tail old-position)]
      (assoc state
        :x x
        :y y
        :snake-tail snake-tail))
    state))

;;; Input Stuff

(defn empty-positions [{:keys [x y tail columns rows] :as state}]
  ;; (-> all-positions
  ;;     filter #(TODO))
  all-positions columns rows)

(defn create-food [{:keys [food-pos x y tail columns rows] :as state}]
  (if-not food-pos
    (let [empty-positions (empty-positions state)]
      (assoc state
        :food-pos [(rand-int columns) (rand-int rows)]))
    state))

(defn eat-food [{:keys [x y food-pos score] :as state}]
  (let [snake-pos [x y]]
    (if (= snake-pos food-pos)
      (assoc state
        :food-pos nil
        :score (inc score))
      state)))

(defn update-food [state]
  (-> state
      eat-food
      create-food))

(defn head-for-food [{:keys [x y food-pos] :as state}]
  (if-let [[food-x food-y] food-pos]
    (let [new-direction (cond (< x food-x) :right
                              (< food-x x) :left
                              (< food-y y) :up
                              (< y food-y) :down
                              :default (:direction state))]
        (assoc state :direction new-direction))
    state))

(defn ai-auto-restart [{:keys [running] :as state}]
  (if running
    state
    (reset-state state)))

(defn ai [{:keys [ai] :as state}]
  "guides the snake to food"
  (if ai
    (-> state
        (ai-auto-restart)
        (head-for-food))
    state))

(defn in?
  "true if seq contains elm"
  [seq elm]
  (some #(= elm %) seq))

(defn out-of-bounds? [x y columns rows]
  (not (and (< -1 x columns)
            (< -1 y rows))))

(defn check-game-over [{:keys [x y snake-tail columns rows] :as state}]
  ;; (println (str "["x ","y "] " snake-tail))
  (if (or (in? snake-tail [x y])
          (out-of-bounds? x y columns rows))
    (assoc state :running false)
    state))

(defn truncate-snake-tail [{:keys [score snake-tail] :as state}]
  (let [current-snake-length (inc (count snake-tail))
        max-length (+ score starting-snake-length)]
    (if (< max-length current-snake-length)
      (recur (assoc state :snake-tail (pop snake-tail)))
      state)))

(defn update-state [state]
  (-> state
      (ai)
      (update-position)
      (update-food)
      (truncate-snake-tail)
      (check-game-over)))

;;; left: 37
;;; up: 38
;;; right: 39
;;; down: 40

;;; 104 keypad up
;;; 100 keypad left
;;; 102 keypad right
;;; 98 keypad down

(def keycodes->direction {37 :left ; left-arrow
                          38 :up ; up-arrow
                          39 :right ; right-arrow
                          40 :down ; down-arrow
                          74 :left ; j
                          76 :right ; l
                          75 :down ; k
                          73 :up ; i
                          })

(defn is-movement-key? [n]
  (contains? keycodes->direction n))

(defn opposite-direction [direction]
  (case direction
    :left :right
    :right :left
    :up :down
    :down :up
    :error))

(defn split-dual-direction [dual-direction]
  (case dual-direction
    :upleft [:up :left]
    :upright [:up :right]
    :downleft [:down :left]
    :downright [:down :right]
    [dual-direction]))

(defn dont-reverse [current-direction new-direction]
  (if (not= current-direction (opposite-direction new-direction))
    new-direction
    current-direction))

(defn disambiguate-direction
  "given a current direction and a compound input direction, returns which aspect of the compount direction should be applied"
  [current-direction dual-direction]
  (let [possible-directions (split-dual-direction dual-direction)]
    ;(println possible-directions "(" current-direction ")")
    (first (remove #{current-direction (opposite-direction current-direction)}
                   possible-directions))))

(defn turn
  "Change to given direction, provided that's not backwards"
  [state direction]
  (let [current-direction (:direction state)
        direction  (or (disambiguate-direction current-direction direction)
                       (dont-reverse current-direction direction))]
    (assoc state :direction direction)))

(defn handle-movement-key-event [e keycode]
  (. e preventDefault)
;  (disable-ai!)
  (let [direction (keycodes->direction keycode)]
    (do
      (go (>! input-chan direction)))))

(defn toggle-ai [{:keys [ai] :as state}]
  (assoc state :ai (not ai)))

;; Note that the defonce around the addEventListener stops this function from
;; being updated automatically.
(defn key-down-handler! [e & args]
  ;; (println (str "key-down-handler!. " (js-keys e))) ; js-keys is a pretty handy function.
  (let [keycode (.-keyCode e)]
    ;; (println (str "keycode: " keycode))
    (cond (is-movement-key? keycode) (handle-movement-key-event e keycode)
          (= keycode-a keycode) (swap! state toggle-ai)
          :default (do ;(println "reset")
                       (swap! state reset-state)))))

(fw/defonce key-listener (.addEventListener js/document "keydown" key-down-handler!))


;;; TODO: move rendering out into requestAnimationFrame
(defn tick []
  (swap! state update-state)
  (drawing/immediate-mode-render! @state))

(defn ensure-running [{:keys [running] :as state}]
  (if-not running
    (reset-state state)
    state))

(defn create-clock! []
  (go (while true
        (do (<! (timeout tick-speed))
            (let [[direction channel] (alts! [input-chan] :default nil)]
              (do
                (if direction
                  (swap! state #(-> %
                                    ensure-running
                                    disable-ai
                                    (turn direction))))
                (tick)))))))

(fw/defonce clock (create-clock!))

(defn key-handler [e]
  (.log js/console  "key-handler"))

(defn mouse-handler [e]
  (.log js/console "mouse-handler"))

(defn xy-to-column-row [e]
  (let [clientX (.-clientX e)
        clientY (.-clientY e)
        target (.-target e)
        bounding-client-rect (.getBoundingClientRect target)
        left (.-left bounding-client-rect)
        top (.-top bounding-client-rect)
        canvas-x (int (- clientX left))
        canvas-y (int (- clientY top))
        playfield-x (- canvas-x drawing/square-size)
        playfield-y (- canvas-y drawing/square-size)
        column (int (/ playfield-x drawing/square-size))
        row (int (/ playfield-y drawing/square-size))]
    [column row]))

(defn column-row-to-input-direction [column row]
  (let [state @state
        columns (:columns state)
        rows (:rows state)
        x (:x state)
        y (:y state)
        ;; For now, clicking on the same row and/or column as the snakes
        ;; head defaults to right and down.
        ;; This feels better than throwing away clicks on the snakes head,
        ;; but I suspect there's still room for improvement
        up (< row y)
        down (<= y row)
        left (< column x)
        right (<= x column)]
    (cond
     (and up left) :upleft
     (and up right) :upright
     (and down left) :downleft
     (and down right) :downright
     up :up
     left :left
     right :right
     down :down
     :default nil)))

(defn debug-event [e]
  (let [keys (js-keys e)
        values (map #(aget e %) keys)
        key-value (zipmap keys values)]
    (swap! debug (fn [_] key-value))))

(defn canvas-xy-handler [e]
  ;;(.log js/console "canvas mouse handler")
  (disable-ai!)
  (let [[column row] (xy-to-column-row e)
        direction (column-row-to-input-direction column row)]
    ;; (println (js-keys e))
    (if direction (go (>! input-chan direction)))))

(defn canvas-mouse-handler [e]
  (.preventDefault e)
  (canvas-xy-handler e))

(defn canvas-touch-handler [e]
  (.preventDefault e)
  ;; (js-keys (aget (.-touches e) 0))
  (canvas-xy-handler (aget (.-touches e) 0)))

(defn main-template [{:keys [score running columns rows] :as state}]
  (let [[canvas-width canvas-height] (drawing/canvas-size columns rows)]
    (sab/html [:div.board {;:onMouseDown mouse-handler!
                           onKeyDown key-handler}
               [:h3.score (str "Score: " score)]
               [:canvas#snakeCanvas {:onMouseDown canvas-mouse-handler
                                     :onTouchStart canvas-touch-handler
                                     :height  canvas-height
                                     :margin-left "200px auto"
                                     }]
               [:div "Arrow keys to move. 'a' to enable AI."]
               ;; [:div (str @debug)]
               ])))

(let [node (.getElementById js/document "dynamic-area")]
  (defn renderer [state]
    (.renderComponent js/React (main-template state) node)))

(add-watch state :renderer (fn [_ _ _ n]
                             (renderer n)))

(fw/watch-and-reload
 :jsload-callback (fn []
                    ;; (stop-and-start-my app)
                    ))

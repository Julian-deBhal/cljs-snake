(ns snake-game.core
  (:require
   [sablono.core :as sab :include-macros true]
   [figwheel.client :as fw :include-macros true]
   [cljs.core.async :as async :refer [<! >! chan alts! timeout]]
   [cemerick.cljs.test :as t])
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [cemerick.cljs.test
                    :refer (is deftest with-test run-tests testing test-var)]))
(enable-console-print!)

(declare immediate-mode-render!)

(def canvas (.getElementById js/document "canvas"))
(def background-color-string "#ffffdd")
(def border-color-string "#000000")
(def snake-color-string "#00dd00")
(def food-color-string "#ff0000")

(def columns 18)
(def rows 14)
(def square-size 17)
(def canvas-width (* (+ 2 columns) square-size))
(def canvas-height (* (+ 2 rows) square-size))
(def starting-snake-length 3) ; Snakes starting length

(def tick-speed 150)

(def keycode-a 65)

(def input-chan (chan))

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
       :snake-tail cljs.core.PersistentQueue.EMPTY)))

(fw/defonce state (atom (reset-state)))

(def all-positions (for [x (range columns)
                         y (range rows)]
                     [x y]))

(println all-positions)

;;; Drawing code
(defn get-context [name]
  (-> js/document
      (.getElementById name)
      (.getContext "2d")))

(defn draw-coords!
  ([ctx [x y]]
      (.fillRect ctx (* x square-size) (* y square-size)
                 square-size square-size))
  ([ctx [x y] color-string]
     (set! (.-fillStyle ctx) color-string)
     (draw-coords! ctx [x y])))

(defn draw-snake-head! [{:keys [x y ctx] :as state}]
  (draw-coords! ctx [x y] snake-color-string))

(defn draw-snake-tail! [{:keys [snake-tail ctx] :as state}]
  (set! (.-fillStyle ctx) snake-color-string)
  (doall (map (partial draw-coords! ctx) snake-tail))
  state)

(defn draw-food! [{:keys [ctx food-pos] :as state}]
  (if food-pos
    (draw-coords! ctx food-pos food-color-string) nil)
  state)

(defn draw-background! [{:keys [ctx] :as state}]
  (do
    (set! (.-fillStyle ctx) background-color-string)
    (.fillRect ctx 0 0 canvas-width canvas-height)
    state))

(defn draw-border! [{:keys [ctx] :as state}]
  (do
    (set! (.-fillStyle ctx) border-color-string)
    (let [bottom-row-pos (* square-size (inc rows))
          right-edge-pos (* square-size (inc columns))]

      (.fillRect ctx 0 0 canvas-width square-size)
      (.fillRect ctx 0 0 square-size canvas-height)
      (.fillRect ctx right-edge-pos 0 square-size canvas-height)
      (.fillRect ctx 0 bottom-row-pos canvas-width square-size))
    )
  state)

;;; state updates
(defn truncate-snake-tail [{:keys [score snake-tail] :as state}]
  (let [current-snake-length (inc (count snake-tail))
        max-length (+ score starting-snake-length)]
    (if (< max-length current-snake-length)
      (recur (assoc state :snake-tail (pop snake-tail)))
      state)))

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

(defn empty-positions [{:keys [x y tail] :as state}]
  ;; (-> all-positions
  ;;     filter #(not= % [x y]))
  all-positions)

(defn create-food [{:keys [food-pos x y tail] :as state}]
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

(defn out-of-bounds? [x y]
  (not (and (< -1 x columns)
            (< -1 y rows))))

(defn check-game-over [{:keys [x y snake-tail] :as state}]
  ;; (println (str "["x ","y "] " snake-tail))
  (if (or (in? snake-tail [x y])
          (out-of-bounds? x y))
    (assoc state :running false)
    state))

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

(defn turn
  "Change to given direction, provided that's not backwards"
  [state direction]
  (if (= direction (opposite-direction (:direction state)))
    state
    (assoc state :direction direction)))

(defn handle-movement-key-event [e keycode]
  (. e preventDefault)
  ;; I'm not sure about these yet.
  ;; Binding the movement to the keypress makes the game feel nice and snappy,
  ;; where decoupling the input and game tick makes it feel a little sluggish.
  ;;(swap! state update-position)
  ;;(immediate-mode-render! @state)
  (let [direction (keycodes->direction keycode)]
    (do ;(println (str "direction: " direction))
      (go (>! input-chan direction)))))

(defn toggle-ai [{:keys [ai] :as state}]
  (assoc state :ai (not ai)))

;; Note that the defonce around the addEventListner stops this function from being
;; updated automatically.
(defn key-down-handler! [e & args]
  ;; (println (str "key-down-handler!. " (js-keys e)))  ; this is a pretty handy function.
  (let [keycode (.-keyCode e)]
    ;(println (str "keycode: " keycode))
    (cond (is-movement-key? keycode) (handle-movement-key-event e keycode)
          (= keycode-a keycode) (swap! state toggle-ai)
          :default (do ;(println "reset")
                       (swap! state reset-state)))))

(fw/defonce key-listener (.addEventListener js/document "keydown" key-down-handler!))

(defn immediate-mode-render! [state]
  ;(println (str "immediate-mode-render! state: " state))
  (let [ctx (get-context "canvas")
        state (assoc state :ctx ctx)]
    (do
      (.setTransform ctx  1 0 0 1 0 0)
      (draw-background! state)
      (draw-border! state)
      (.setTransform ctx  1 0 0 1 square-size square-size)
      (draw-snake-tail! state)
      (draw-snake-head! state)
      (draw-food! state)

      ;; (set! (.-fillStyle ctx) "white")
      ;; (set! (.-font ctx) "bold 12px Arial")
      ;; (.fillText ctx (str "Score: " (:score state)) 0 -3)
      )))

(defn tick []
  (swap! state update-state)
  (immediate-mode-render! @state))

;;; TODO: move rendering out into requestAnimationFrame
(defn create-clock! []
  (go (while true
        (<! (timeout tick-speed))
        (let [direction (alt! input-chan :default nil)
              ]
                                        ; (println (str "val: " val))
          (do (if direction (swap! state #(assoc (turn % direction)
                                      :ai false)))
              (tick))

          ))))

(fw/defonce clock (create-clock!))

(defn key-handler [e]
  (.log js/console  "key-handler"))

(defn mouse-handler [e]
  (.log js/console "mouse-handler")
  (.preventDefault e))


(defn main-template [{:keys [score running]}]
  (sab/html [:div.board {:onMouseDown mouse-handler
                         onKeyDown key-handler
                         }
             [:h3.score (str "Score: " score)]
             [:div "Arrow keys to move. 'a' to enable AI."]
             [:p]
             ;; (if-not running
             ;;   [:a.start-button {:onClick #(reset-state)}
             ;;    "START"])
             ]))

(let [node (.getElementById js/document "dynamic-area")]
  (defn renderer [state]
    (.renderComponent js/React (main-template state) node)))

(add-watch state :renderer (fn [_ _ _ n]
                             (renderer n)))

(fw/watch-and-reload
 :jsload-callback (fn []
                    ;; (stop-and-start-my app)
                    ))

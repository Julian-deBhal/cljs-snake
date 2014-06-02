(ns cljs-snake.drawing
  (:require
   [figwheel.client :as fw :include-macros true]
   [cemerick.cljs.test :as t])
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [cemerick.cljs.test :refer (is deftest with-test run-tests testing test-var)]))

(enable-console-print!)

(def background-color-string "#ffffdd")
(def border-color-string "#000000")
(def snake-color-string "#00dd00")
(def food-color-string "#ff0000")
(def square-size 15)

(defn canvas-size [columns rows]
  (let [canvas-width (* (+ 2 columns) square-size)
        canvas-height (* (+ 2 rows) square-size)]
    [canvas-width canvas-height]))


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

(defn draw-background!
  [{:keys [ctx rows columns canvas-height canvas-width] :as state}]
  (do
    (set! (.-fillStyle ctx) background-color-string)
    (.fillRect ctx 0 0 canvas-width canvas-height)
    state))

(defn draw-border! [{:keys [ctx rows columns
                            canvas-width canvas-height] :as state}]
  (do
;    (println canvas-width ", " canvas-height)
    (let [bottom-row-pos (* square-size (inc rows))
          right-edge-pos (* square-size (inc columns))]
      (set! (.-fillStyle ctx) border-color-string)
      (.fillRect ctx 0 0 canvas-width square-size)
      (.fillRect ctx 0 0 square-size canvas-height)
      (.fillRect ctx right-edge-pos 0 square-size canvas-height)
      (.fillRect ctx 0 bottom-row-pos canvas-width square-size)))
  state)

(defn immediate-mode-render! [{:keys [columns rows] :as state}]
  ;; (println (str "immediate-mode-render! state: " state))
  (let [ctx (get-context "snakeCanvas")
        [canvas-width canvas-height] (canvas-size columns rows)
        state (assoc state
                :ctx ctx
                :canvas-height canvas-height
                :canvas-width canvas-width)]
    (do
      (draw-background! state)
      (draw-border! state)
      (.setTransform ctx  1 0 0 1 square-size square-size)
      (draw-snake-tail! state)
      (draw-snake-head! state)
      (draw-food! state)

      ;; (set! (.-fillStyle ctx) "white")
      ;; (set! (.-font ctx) "bold 12px Arial")
      ;; (.fillText ctx (str "Score: " (:score state)) 0 -3)
      (.setTransform ctx  1 0 0 1 0 0)
      )))

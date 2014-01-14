(ns async-tut1.core
  (:require [goog.dom :as dom]))

(enable-console-print!)

(.log js/console (dom/getElement "query"))

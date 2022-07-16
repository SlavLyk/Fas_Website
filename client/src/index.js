import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { history } from "./history";
import ThreeRouter from "./ThreeRouter";
import { Router, Route, BrowserRouter, Routes } from "react-router-dom";

import "swiper/css/bundle";
import "./components/About/swiper.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThreeRouter history={history}>
    <App />
  </ThreeRouter>
);
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const basename = process.env.PUBLIC_URL
  ? new URL(process.env.PUBLIC_URL).pathname   // "/Chen_Fang-s_Portfolio" or "/"
  : "/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles";
import { GlobalStyle } from "./styles";
import "./config/ReactotronConfig";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);

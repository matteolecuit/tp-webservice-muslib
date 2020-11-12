import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./components/page/HomePage";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./styles/globalStyle";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <HomePage />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn ore: https://bit.ly/CRA-vitals
reportWebVitals();

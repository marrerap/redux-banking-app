import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import the react-redux provider
import { Provider } from "react-redux";

// import store form our main redux file
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    {/* 
      Wrap <App /> with the react-redux <provider> and pass 
      the imported store as a prop
    */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

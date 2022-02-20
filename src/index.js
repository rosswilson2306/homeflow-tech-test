import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";

import "./styles.scss";
import App from "./App";
// import store from "./store/index";

// fetch("/api/properties?location=brighton")
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(json.result.properties.elements);
//     document.querySelector("#app").innerHTML =
//       "<p>Check the JS console for some data...</p>";
//   })
//   .catch((err) => {
//     console.error(err);
//     document.querySelector("#app").innerHTML =
//       "<p>Something went wrong. Check the console for details.</p>";
//   });

ReactDOM.render(
  // <Provider store={store}>
  <App />,
  // </Provider>,

  document.getElementById("root")
);

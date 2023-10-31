import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Import your CSS file if you have one
import App from "./App"; // Import your main App component
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change unregister() to register() below.
serviceWorker.unregister();

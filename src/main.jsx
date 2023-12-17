import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SteepContext from "./SteepContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SteepContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SteepContext>
);

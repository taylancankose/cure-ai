import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";
import { PrivyProvider } from "@privy-io/react-auth";

import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <PrivyProvider
    appId="clzsak050042q9xj9zqkudwm9"
    config={{
      appearance: {
        theme: "dark",
      },
    }}
  >
    <Router>
      <App />
    </Router>
  </PrivyProvider>,
);

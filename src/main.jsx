import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router } from "react-router-dom";
import { PrivyProvider } from "@privy-io/react-auth";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
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

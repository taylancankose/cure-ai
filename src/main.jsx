import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router } from "react-router-dom";
import { PrivyProvider } from "@privy-io/react-auth";

import App from "./App";
import "./index.css";
import { StateContextProvider } from "./context";
import { Buffer } from "buffer";

window.Buffer = Buffer;

ReactDOM.createRoot(document.getElementById("root")).render(
  <PrivyProvider
    appId={import.meta.env.VITE_PRIVY_APP_ID}
    config={{
      appearance: {
        theme: "dark",
      },
    }}
  >
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </PrivyProvider>,
);

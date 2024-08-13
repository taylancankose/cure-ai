import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";
import { PrivyProvider } from "@privy-io/react-auth";

import App from "./App";
import "./index.css";

const root = ReactDOM.createRoute(document.getElementById("root"));

root.render(
  <PrivyProvider
    appId=""
    config={{
      loginMethods: ["email", "wallet"],
      appearance: {
        theme: "light",
        accentColor: "#676fff",
        logo: "",
      },
    }}
  >
    <App />
  </PrivyProvider>,
);

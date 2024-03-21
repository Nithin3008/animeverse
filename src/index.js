import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Services/HelperFunc/AuthFunc";
import { DataProvider } from "./Services/Context/DataProvider";
makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <DataProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </DataProvider>
  </Router>
);

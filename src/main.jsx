import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import PizzasProvider from "./context/PizzasContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PizzasProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PizzasProvider>
  </React.StrictMode>
);

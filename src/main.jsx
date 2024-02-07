import React from "react";
import ReactDOM from "react-dom/client";
BrowserRouter;
import "./index.css";
import App from "./App";
import { MenuProvider } from "./contexts/menu.context";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MenuProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MenuProvider>
  </React.StrictMode>
);

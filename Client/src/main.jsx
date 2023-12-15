import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import MainPage from "./pages/LoginPage/index.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <MainPage />
  </React.StrictMode>
);
import React from "react";
import ReactDOM from "react-dom/client";
import PythonPage from "./Python/Python"; // Ensure correct filename and path
import "./Python/Python.css"; // Ensure this file exists

ReactDOM.createRoot(document.getElementById("python-root")).render(
  <React.StrictMode>
    <PythonPage />
  </React.StrictMode>
);

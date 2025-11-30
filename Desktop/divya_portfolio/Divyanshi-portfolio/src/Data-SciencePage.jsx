import React from "react";
import ReactDOM from "react-dom/client";
import DataSciencePage from "./Data-Science/Data-Science"; // Ensure correct filename and path
import "./Data-Science/Data-Science.css"; // Ensure this file exists


ReactDOM.createRoot(document.getElementById("data-science-root")).render(
  <React.StrictMode>
    <DataSciencePage />
  </React.StrictMode>
);

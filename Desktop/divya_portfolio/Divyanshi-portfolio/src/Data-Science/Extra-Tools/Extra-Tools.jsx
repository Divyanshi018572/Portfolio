import React from "react";
import "./Extra-Tools.css";

const ExtraTools = () => {
  return (
    <div className="extra-tools-container">
      <h2>Extra Tools</h2>
      <p>These tools can enhance your data science projects by providing additional functionality.</p>
      <ul>
        <li>Power BI & Tableau (Data Visualization)</li>
        <li>Google Colab & Jupyter Notebook</li>
        <li>Docker & Kubernetes (Model Deployment)</li>
        <li>Streamlit & Flask (Web Apps for ML Models)</li>
      </ul>
    </div>
  );
};

export default ExtraTools;

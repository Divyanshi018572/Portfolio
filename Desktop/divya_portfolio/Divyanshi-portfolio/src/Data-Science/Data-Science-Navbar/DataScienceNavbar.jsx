import React from "react";
import "./DataScienceNavbar.css";

const DataScienceNavbar = () => {
  return (
    <nav className="ds-navbar">
      <a href="/" className="home-btn">Home</a>
      <div className="nav-links">
        <a href="#basic-tools">Basic Tools</a>
        <a href="#feature-engineering">Feature Engineering</a>
        <a href="#machine-learning">Machine Learning</a>
        <a href="#deep-learning">Deep Learning</a>
        <a href="#generative-ai">Generative AI</a>
        <a href="#extra-tools">Extra Tools</a>
      </div>
    </nav>
  );
};

export default DataScienceNavbar;

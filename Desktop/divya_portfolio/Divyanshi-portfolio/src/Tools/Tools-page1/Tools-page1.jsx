import React from 'react';
import './Tools-page1.css';
import { FaCode, FaDatabase, FaChartLine, FaTools } from 'react-icons/fa';

const ToolsPage1 = () => {
  return (
    <section className="tools-page1">
      <h2 className="tools-page1-title">Advanced Tools Overview</h2>

      <div className="tools-cards-container">
        {/* Example Card 1: Python Tools */}
        <div className="tools-card">
          <FaCode className="tools-card-icon" />
          <h3>Python Tools</h3>
          <p>
            Explore essential libraries and frameworks for Python development, 
            such as Pandas, NumPy, Matplotlib, and more.
          </p>
        </div>

        {/* Example Card 2: Databases */}
        <div className="tools-card">
          <FaDatabase className="tools-card-icon" />
          <h3>Databases</h3>
          <p>
            Learn about popular database solutions (SQL & NoSQL), 
            data modeling, and best practices for data storage.
          </p>
        </div>

        {/* Example Card 3: Data Visualization */}
        <div className="tools-card">
          <FaChartLine className="tools-card-icon" />
          <h3>Data Visualization</h3>
          <p>
            Dive into Tableau, Power BI, and other tools to create interactive 
            dashboards and insightful visualizations.
          </p>
        </div>

        {/* Example Card 4: Extra Tools */}
        <div className="tools-card">
          <FaTools className="tools-card-icon" />
          <h3>Extra Tools</h3>
          <p>
            Discover additional utilities and services (e.g., Git, Docker, 
            cloud platforms) that streamline your development workflow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ToolsPage1;

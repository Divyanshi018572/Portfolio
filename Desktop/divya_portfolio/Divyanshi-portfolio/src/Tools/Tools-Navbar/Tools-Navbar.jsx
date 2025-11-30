import React from 'react';
import './Tools-Navbar.css';

const ToolsNavbar = () => {
  return (
    <nav className="tools-navbar">
      <div className="tools-navbar-container">
        {/* Left side: Home button */}
        <div className="tools-navbar-left">
          <a href="#home" className="home-button">
            Home
          </a>
        </div>

        {/* Right side: Menu items */}
        <ul className="tools-navbar-right">
          <li>
            <a href="#python-tools">Python Tools</a>
          </li>
          <li>
            <a href="#data-structures">Data Structures</a>
          </li>
          <li>
            <a href="#algorithms">Algorithms</a>
          </li>
          <li>
            <a href="#tableau">Tableau</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default ToolsNavbar;

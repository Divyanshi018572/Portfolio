// src/main.jsx (or index.js)
import React from 'react';
import ReactDOM from 'react-dom/client';
import ToolsApp from './Tools/Tools-page.jsx'; 
import './Components/index.css'; // Global or main stylesheet

// Get the root element from index.html
const rootElement = document.getElementById('root');

// Create a React root and render the App component
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    < ToolsApp />
  </React.StrictMode>
);

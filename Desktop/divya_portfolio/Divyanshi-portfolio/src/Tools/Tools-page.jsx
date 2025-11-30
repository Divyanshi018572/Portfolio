import React from 'react';
import ToolsNavbar from './Tools-Navbar/Tools-Navbar';
import ToolsPage1 from './Tools-page1/Tools-page1';

function ToolsApp() {
  return (
    <div>
      {/* Navbar at the top */}
      <ToolsNavbar />

      {/* Your Tools Page */}
      <ToolsPage1 />
    </div>
  );
}

export default ToolsApp;

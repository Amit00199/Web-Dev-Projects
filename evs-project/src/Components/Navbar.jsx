import React, { useState } from 'react';
import './Navbar.css'; // Import the styles

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
      <div className="navbar-container">
        <div className="logo">Waste Water Recycler</div>
        <div className="nav-links">
          <a href="#header">Home</a>
          <a href="#educational-content">Educational Content</a>
          <a href="#interactive-learning">Interactive Learning</a>
          <a href="#case-studies">Case Studies</a>
          <a href="#community-engagement">Community Engagement</a>
          <a href="#resource-library">Resource Library</a>
          <a href="#legislation-policies">Legislation and Policies</a>
        </div>
        <div className="mode-toggle">
          <label className="switch">
            <input type="checkbox" onChange={toggleDarkMode} />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import './Header.css'; // Import the styles

const Header = () => {
  return (
    <header id="header" className="header">
      <div className="header-container">
        <div className="header-content">
          <h1>Unlock the Power of Water Recycling</h1>
          <p>Discover sustainable solutions for a cleaner environment.</p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="header-image">
          {/* Add an image related to water recycling */}
          {/* Example: <img src="water-recycling-image.jpg" alt="Water Recycling" /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;

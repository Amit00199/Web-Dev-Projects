// CaseStudy.jsx

import React from 'react';
import './CaseStudy.css'; // Import the styles

const CaseStudy = () => {
  return (
    <section id="case-studies" className="case-studies">
      <div className="case-studies-container">
        <h2>Case Studies</h2>
        <p>Explore real-world examples of successful waste water recycling initiatives.</p>
        <div className="case-studies-grid">
          <div className="case-study-item">
            <h3>Case Study 1: Urban Water Reclamation Project</h3>
            <p>
              Learn how a city implemented a water reclamation system to meet its increasing water
              demands sustainably.
            </p>
            {/* Include visuals or media related to the case study */}
          </div>
          <div className="case-study-item">
            <h3>Case Study 2: Industrial Water Recycling</h3>
            <p>
              Explore how an industrial facility optimized its water usage by incorporating
              recycling technologies.
            </p>
            {/* Include visuals or media related to the case study */}
          </div>
          <div className="case-study-item">
            <h3>Case Study 3: Community-Led Recycling Initiatives</h3>
            <p>
              Discover how local communities came together to implement and promote water recycling
              practices.
            </p>
            {/* Include visuals or media related to the case study */}
          </div>
        </div>
        {/* Add more case study items as needed */}
      </div>
    </section>
  );
};

export default CaseStudy;

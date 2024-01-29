// CommunityEngagement.jsx

import React from 'react';
import './CommunityEng.css'; // Import the styles

const CommunityEng = () => {
  return (
    <section id="community-engagement" className="community-engagement">
      <div className="community-engagement-container">
        <h2>Community Engagement</h2>
        <p>
          Get involved in waste water recycling initiatives and contribute to a sustainable future.
        </p>
        <div className="engagement-content">
          <div className="engagement-text">
            <h3>Join Our Community Events</h3>
            <p>
              Attend workshops, seminars, and community events to learn and collaborate with others
              passionate about water recycling.
            </p>
          </div>
          <div className="engagement-image">
            {/* Add an image related to community engagement */}
            {/* Example: <img src="community-engagement-image.jpg" alt="Community Engagement" /> */}
          </div>
        </div>
        {/* Add more community engagement content as needed */}
      </div>
    </section>
  );
};

export default CommunityEng;

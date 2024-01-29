import React from 'react';
import './ResourceLib.css'; // Import the styles

const ResourceLib = () => {
  return (
    <section id="resource-library" className="resource-library">
      <div className="resource-library-container">
        <h2>Resource Library</h2>
        <p>Explore a collection of resources to deepen your knowledge of waste water recycling.</p>
        <div className="resources-grid">
          <div className="resource-item">
            <h3>Article: The Basics of Water Recycling</h3>
            <p>Learn the fundamental concepts and benefits of water recycling in this informative article.</p>
            {/* Include link to the article */}
          </div>
          <div className="resource-item">
            <h3>Document: Water Recycling Guidelines</h3>
            <p>Access official guidelines for implementing water recycling practices in various industries.</p>
            {/* Include link to the document */}
          </div>
          <div className="resource-item">
            <h3>Video: Water Recycling Explained</h3>
            <p>Watch a video that provides a visual explanation of how water recycling works.</p>
            {/* Include embedded video or link to the video */}
          </div>
        </div>
        {/* Add more resource items as needed */}
      </div>
    </section>
  );
};

export default ResourceLib;

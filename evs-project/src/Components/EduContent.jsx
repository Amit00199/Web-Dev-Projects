import React from 'react';
import './EduContent.css'; // Import the styles

const EduContent = () => {
  return (
    <section id="educational-content" className="educational-content">
      <div className="educational-content-container">
        <h2>Educational Content</h2>
        <p>
          Learn about the importance of waste water recycling and its impact on the environment.
        </p>
        <div className="content-grid">
          <div className="content-item">
            <h3>Why Recycle Water?</h3>
            <p>
              Recycling water helps conserve this precious resource and reduces the strain on
              natural water bodies.
            </p>
          </div>
          <div className="content-item">
            <h3>How Does Recycling Work?</h3>
            <p>
              Explore the processes involved in recycling waste water and turning it into a valuable
              resource.
            </p>
          </div>
          <div className="content-item">
            <h3>Benefits for the Environment</h3>
            <p>
              Discover the positive environmental impact of implementing effective waste water
              recycling systems.
            </p>
          </div>
        </div>
        {/* Add more content items as needed */}
      </div>
    </section>
  );
};

export default EduContent;

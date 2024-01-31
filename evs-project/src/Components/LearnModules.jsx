// InteractiveLearningModules.jsx

import React from 'react';
import './LearnModules.css'; // Import the styles

// Use iframes for nodules

const LearnModules = () => {
  return (
    <section id="interactive-learning" className="interactive-learning-modules">
      <div className="interactive-learning-container">
        <h2>Interactive Learning Modules</h2>
        <p>
          Engage with interactive modules to deepen your understanding of waste water recycling
          concepts.
        </p>
        <div className="modules-grid">
          <div className="module-item">
            <h3>Module 1: Water Treatment Process</h3>
            <p>Explore the step-by-step process of treating waste water for reuse.</p>
            {/* Include interactive content (e.g., videos, quizzes) */}
          </div>
          <div className="module-item">
            <h3>Module 2: Benefits of Recycling</h3>
            <p>Learn about the environmental and economic benefits of water recycling.</p>
            {/* Include interactive content (e.g., videos, quizzes) */}
          </div>
          <div className="module-item">
            <h3>Module 3: Case Studies</h3>
            <p>Examine real-world case studies showcasing successful waste water recycling projects.</p>
            {/* Include interactive content (e.g., videos, quizzes) */}
          </div>
        </div>
        {/* Add more module items as needed */}
      </div>
    </section>
  );
};

export default LearnModules;

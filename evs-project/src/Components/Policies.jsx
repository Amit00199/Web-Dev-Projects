import React from 'react';
import './Policies.css'; // Import the styles

const Policies = () => {
  return (
    <section id="legislation-policies" className="legislation-policies">
      <div className="legislation-policies-container">
        <h2>Legislation and Policies</h2>
        <p>Stay informed about the regulations and policies governing waste water recycling.</p>
        <div className="policies-grid">
          <div className="policy-item">
            <h3>Environmental Protection Act</h3>
            <p>
              Understand the key provisions of the Environmental Protection Act related to water
              recycling practices.
            </p>
            {/* Include links to relevant documents or resources */}
          </div>
          <div className="policy-item">
            <h3>National Water Recycling Strategy</h3>
            <p>
              Learn about the government's strategic plan for promoting water recycling on a national
              scale.
            </p>
            {/* Include links to relevant documents or resources */}
          </div>
          <div className="policy-item">
            <h3>Local Regulations and Compliance</h3>
            <p>
              Explore the local regulations and compliance requirements for implementing water
              recycling initiatives in your region.
            </p>
            {/* Include links to relevant documents or resources */}
          </div>
        </div>
        {/* Add more policy items as needed */}
      </div>
    </section>
  );
};

export default Policies;

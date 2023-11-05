import React from 'react';

const aboutStyles = {
  container: {
    textAlign: 'center',
  },
};

function About() {
  return (
    <div style={aboutStyles.container}>
      <h2>About Us</h2>
      <p>
        Your About Us content goes here. Provide information about your
        company, mission, and values.
      </p>
    </div>
  );
}

export default About;

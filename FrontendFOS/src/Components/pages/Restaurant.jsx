import React from 'react';

const restaurantsStyles = {
  container: {
    textAlign: 'center',
  },
};

function Restaurants() {
  return (
    <div style={restaurantsStyles.container}>
      <h2>Our Restaurants</h2>
      {/* Display your list of restaurants here */}
    </div>
  );
}

export default Restaurants;

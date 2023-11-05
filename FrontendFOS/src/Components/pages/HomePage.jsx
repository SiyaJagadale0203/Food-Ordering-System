import React from 'react';

const homePageStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'black',
    color : 'white'
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.2rem',
    marginBottom: '20px',
  },
  actionButton: {
    padding: '10px 20px',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};



function HomePage() {
  const handleOrderClick = () => {
    // Replace this alert with your desired action.
    alert('Ordering food now!');
    
  };

  return (
    <div style={homePageStyles.container}>
      <h1 style={homePageStyles.heading}>Welcome to Food Ordering System</h1>
      <p style={homePageStyles.description}>
        Order your favorite food from the comfort of your home.
      </p>
      <button
        style={homePageStyles.actionButton}
        onClick={handleOrderClick} 
        // Attach the click event handler here
      >
         Order Now 
      </button>
    </div>
  );
}

export default HomePage;

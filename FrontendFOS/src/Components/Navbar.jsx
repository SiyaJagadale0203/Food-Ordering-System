import React from 'react';
import { Link } from 'react-router-dom';

const navbarStyles = {
  container: {
    display: 'flex',
    // justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: 'white',

  },
  link: {
    textDecoration: 'none',
    color: 'white',
    margin: '0 10px',
    height: '100vh'
  },
};

function Navbar() {
  return (
    <div style={navbarStyles.container}>
      <div>
        <Link to="/" style={navbarStyles.link}>
          Home
        </Link>
        <Link to="/about" style={navbarStyles.link}>
          About
        </Link>
        <Link to="/restaurants" style={navbarStyles.link}>
          Restaurants
        </Link>
      </div>
      {/* <div>
        <Link to="/order" style={navbarStyles.link}>
          Orders
        </Link>
      </div> */}
      <div>
        <Link to="/login" style={navbarStyles.link}>
          Login
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

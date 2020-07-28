import React from 'react';
import { Link } from 'react-router-dom';

const navBar = ({ currentUser, logout }) => {
  if (currentUser) {
    return (
      <div>
        <button onClick={logout}>Logout</button>  
      </div>
    )
  } else {
    return (
      <div>
        <Link className="btn" to="/signup">Sign Up</Link>
        <Link className="btn" to="/login">Log In</Link>
      </div>
    )
  }
};

export default navBar;
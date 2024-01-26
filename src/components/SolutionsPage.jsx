import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SolutionsPage = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="solutions-page">
      <h1>Sign in to access Community Lab Alliance</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <div className="links">
          <Link to="/SignUp">Don't have an account? Sign Up</Link>
          <Link to="/reset-password">Forgot Password</Link>
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default SolutionsPage;
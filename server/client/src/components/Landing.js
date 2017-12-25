import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div style={{ textAlign: 'center' }}>
    <h1>Emaily!</h1>
    <p>Collect Feedback from your users</p>
    <Link to='/surveys'>Enter your cabinet</Link>
  </div>
);

export default Landing;

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <a href="#admin-dashboard" className="admin-dashboard">Admin Dashboard</a>
          <a href="#login">Login</a>
          <a href="#signup">Sign Up</a>
          <a href="#job-details">Job Details</a>
          <a href="#profile">Profile</a>
        </nav>
      </header>
      <div className="App-container">
        <h1>Welcome to Workforce Enroll</h1>
      </div>
    </div>
  );
}

export default App;

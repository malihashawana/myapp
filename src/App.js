import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/admin-dashboard" className="admin-dashboard">Admin Dashboard</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/job-details">Job Details</Link>
            <Link to="/profile">Profile</Link>
          </nav>
        </header>
        <div className="App-container">
          <Switch>
            <Route path="/admin-dashboard" component={AdminDashboard} />
            <Route path="/">
              <h1>Welcome to Workforce Enroll</h1>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

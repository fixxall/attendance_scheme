import React, { useState } from 'react';
import EmailListPage from './EmailListPage';
import './LoginPage.css';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Perform login logic here
    // You can make an API call or check credentials locally

    console.log('Email:', email);
    console.log('Password:', password); 
    setLoggedIn(true);

    // Clear input fields after submission
    setEmail('');
    setPassword('');
  };

  const handleLogout = () => {
    // Simulating logout
    setLoggedIn(false);
  };

  return (
    <div className="login-container">
      {isLoggedIn ? (
        <Dashboard handleLogout={handleLogout} />
      ) : (
      <div>
        <h2>Login Page</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="input-container">
          <label htmlFor="email">email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      )}
    </div>
  );
  
};
const Dashboard = ({ handleLogout }) => {
  return (
    <div>
      <h2>Welcome to the Dashboard!</h2>
      <EmailListPage />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
export default LoginPage;
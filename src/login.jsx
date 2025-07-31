import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate('/home');
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
      />
      <input
        type="password"
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;

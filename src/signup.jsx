import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';

function Signup() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function postData() {
    const formData = { name, mail, password };

    try {
      const response = await fetch('https://6886fb39071f195ca97ed54b.mockapi.io/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Signup successful!');
        navigate('/login');
      } else {
        alert('Signup failed!');
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error!');
    }
  }

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={postData}>Register</button>
    </div>
  );
}

export default Signup;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './signup.jsx';
import Login from './login.jsx';
import Home from './home.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

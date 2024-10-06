import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Signup from './components/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/nfl" element={<NFL />} />
        <Route path="/nba" element={<NBA />} />
        <Route path="/nhl" element={<NHL />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
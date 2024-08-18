
import './App.scss';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Layout from './components/Layout'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login login={login} />} />
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? <Dashboard logout={logout} /> : <Navigate to="/login" />
          } />
      </Route>
    </Routes>
  );
}

export default App;

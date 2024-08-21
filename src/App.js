
import './App.scss';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Layout from './components/Layout'

import OilGasTab from './pages/ProductTabs/OilGasTab'
import AltEnergyTab from './pages/ProductTabs/AltEnergyTab'
import MicroInvTab from './pages/ProductTabs/MicroInvTab'

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
        <Route path="/about" element={<AboutUs />} />
        <Route path="/oil-gas" element={<OilGasTab />} />
        <Route path="/alt-energy" element={<AltEnergyTab />} />
        <Route path="/micro-inv" element={<MicroInvTab />} />
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

// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import TestModule from './pages/TestModule';
import Results from './pages/Results';
import Notes from './pages/Notes';
import OldPapers from './pages/OldPapers';
import Footer from './components/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/login" 
              element={
                isLoggedIn ? 
                <Navigate to="/dashboard" /> : 
                <Login onLogin={handleLogin} />} 
            />
            <Route 
              path="/dashboard" 
              element={
                isLoggedIn ? 
                <Dashboard user={user} /> : 
                <Navigate to="/login" />} 
            />
            <Route 
              path="/tests" 
              element={
                isLoggedIn ? 
                <TestModule user={user} /> : 
                <Navigate to="/login" />} 
            />
            <Route path="/results" element={<Results />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/old-papers" element={<OldPapers />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
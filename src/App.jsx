import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import CropScanner from './pages/CropScanner/CropScanner';
import Weather from './pages/Weather/Weather';
import Insurance from './pages/Insurance/Insurance';
import Wallet from './pages/Wallet/Wallet';
import Tips from './pages/Tips/Tips';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Dashboard from './pages/Dashboard/Dashboard';
import NotFound from './pages/NotFound/NotFound';
import './styles/App.css';

function App() {
  const [user, setUser] = useState(null);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedUser = localStorage.getItem('kisanSecureUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('kisanSecureUser', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('kisanSecureUser');
  };

  return (
    <div className="app">
      <Header user={user} onLogout={handleLogout} language={language} setLanguage={setLanguage} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/crop-scanner" element={<CropScanner language={language} />} />
          <Route path="/weather" element={<Weather language={language} />} />
          <Route path="/insurance" element={<Insurance language={language} />} />
          <Route path="/wallet" element={<Wallet language={language} />} />
          <Route path="/tips" element={<Tips language={language} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} language={language} />} />
          <Route path="/signup" element={<Signup onLogin={handleLogin} language={language} />} />
          <Route
            path="/dashboard"
            element={
              user ? (
                <Dashboard user={user} language={language} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer language={language} />
    </div>
  );
}

export default App;
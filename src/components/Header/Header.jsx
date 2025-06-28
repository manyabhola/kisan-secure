import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, User, LogOut, Globe } from 'lucide-react'
import './Header.css'

const Header = ({ user, onLogout, language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    onLogout()
    navigate('/')
    setIsMenuOpen(false)
  }

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en')
  }

  const navItems = [
    { path: '/crop-scanner', label: language === 'en' ? 'Crop Scanner' : 'फसल स्कैनर' },
    { path: '/weather', label: language === 'en' ? 'Weather' : 'मौसम' },
    { path: '/insurance', label: language === 'en' ? 'Insurance' : 'बीमा' },
    { path: '/wallet', label: language === 'en' ? 'Wallet' : 'वॉलेट' },
    { path: '/tips', label: language === 'en' ? 'Farming Tips' : 'खेती के टिप्स' }
  ]

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="logo">
          <span className="logo-text">Kisan Secure</span>
          <span className="tagline">
            {language === 'en' ? 'Fasal Ki Chinta Khatam' : 'फसल की चिंता खत्म'}
          </span>
        </Link>

        <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <button className="language-toggle" onClick={toggleLanguage}>
            <Globe size={20} />
            <span>{language === 'en' ? 'हिं' : 'EN'}</span>
          </button>

          {user ? (
            <div className="user-menu">
              <Link to="/dashboard" className="user-profile">
                <User size={20} />
                <span>{user.name}</span>
              </Link>
              <button className="logout-btn" onClick={handleLogout}>
                <LogOut size={20} />
              </button>
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="btn btn-outline">
                {language === 'en' ? 'Login' : 'लॉगिन'}
              </Link>
              <Link to="/signup" className="btn btn-primary">
                {language === 'en' ? 'Sign Up' : 'साइन अप'}
              </Link>
            </div>
          )}

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header

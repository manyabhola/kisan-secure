import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import './Auth.css'

const Login = ({ onLogin, language }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate login process
    setTimeout(() => {
      const userData = {
        id: 1,
        name: formData.email.split('@')[0],
        email: formData.email,
        phone: '+91 9876543210',
        location: language === 'en' ? 'Punjab, India' : 'पंजाब, भारत'
      }
      
      onLogin(userData)
      navigate('/dashboard')
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="auth">
      <div className="container">
        <div className="auth-container">
          <div className="auth-card">
            <div className="auth-header">
              <h1 className="auth-title">
                {language === 'en' ? 'Welcome Back' : 'वापस स्वागत है'}
              </h1>
              <p className="auth-subtitle">
                {language === 'en' 
                  ? 'Sign in to your Kisan Secure account'
                  : 'अपने किसान सिक्योर खाते में साइन इन करें'}
              </p>
            </div>

            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">
                  {language === 'en' ? 'Email Address' : 'ईमेल पता'}
                </label>
                <div className="input-group">
                  <Mail size={20} className="input-icon" />
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder={language === 'en' ? 'Enter your email' : 'अपना ईमेल दर्ज करें'}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  {language === 'en' ? 'Password' : 'पासवर्ड'}
                </label>
                <div className="input-group">
                  <Lock size={20} className="input-icon" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    className="form-input"
                    placeholder={language === 'en' ? 'Enter your password' : 'अपना पासवर्ड दर्ज करें'}
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="form-options">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span>{language === 'en' ? 'Remember me' : 'मुझे याद रखें'}</span>
                </label>
                <Link to="#" className="forgot-link">
                  {language === 'en' ? 'Forgot Password?' : 'पासवर्ड भूल गए?'}
                </Link>
              </div>

              <button type="submit" className="btn btn-primary auth-btn" disabled={loading}>
                {loading 
                  ? (language === 'en' ? 'Signing In...' : 'साइन इन हो रहा है...')
                  : (language === 'en' ? 'Sign In' : 'साइन इन करें')
                }
              </button>
            </form>

            <div className="auth-divider">
              <span>{language === 'en' ? 'or' : 'या'}</span>
            </div>

            <div className="social-login">
              <button className="social-btn google-btn">
                <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" />
                {language === 'en' ? 'Continue with Google' : 'Google के साथ जारी रखें'}
              </button>
            </div>

            <div className="auth-footer">
              <p>
                {language === 'en' ? "Don't have an account?" : 'खाता नहीं है?'}{' '}
                <Link to="/signup" className="auth-link">
                  {language === 'en' ? 'Sign Up' : 'साइन अप करें'}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

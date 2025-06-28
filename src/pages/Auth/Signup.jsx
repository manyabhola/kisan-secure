import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { User, Mail, Lock, Phone, MapPin, Eye, EyeOff } from 'lucide-react'
import './Auth.css'

const Signup = ({ onLogin, language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
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
    
    if (formData.password !== formData.confirmPassword) {
      alert(language === 'en' ? 'Passwords do not match!' : 'पासवर्ड मेल नहीं खाते!')
      return
    }

    setLoading(true)

    // Simulate signup process
    setTimeout(() => {
      const userData = {
        id: 1,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        location: formData.location
      }
      
      onLogin(userData)
      navigate('/dashboard')
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="auth">
      <div className="container">
        <div className="auth-container">
          <div className="auth-card">
            <div className="auth-header">
              <h1 className="auth-title">
                {language === 'en' ? 'Join Kisan Secure' : 'किसान सिक्योर में शामिल हों'}
              </h1>
              <p className="auth-subtitle">
                {language === 'en' 
                  ? 'Create your account to get started'
                  : 'शुरू करने के लिए अपना खाता बनाएं'}
              </p>
            </div>

            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">
                  {language === 'en' ? 'Full Name' : 'पूरा नाम'}
                </label>
                <div className="input-group">
                  <User size={20} className="input-icon" />
                  <input
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder={language === 'en' ? 'Enter your full name' : 'अपना पूरा नाम दर्ज करें'}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

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
                  {language === 'en' ? 'Phone Number' : 'फोन नंबर'}
                </label>
                <div className="input-group">
                  <Phone size={20} className="input-icon" />
                  <input
                    type="tel"
                    name="phone"
                    className="form-input"
                    placeholder={language === 'en' ? 'Enter your phone number' : 'अपना फोन नंबर दर्ज करें'}
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  {language === 'en' ? 'Location' : 'स्थान'}
                </label>
                <div className="input-group">
                  <MapPin size={20} className="input-icon" />
                  <input
                    type="text"
                    name="location"
                    className="form-input"
                    placeholder={language === 'en' ? 'Enter your location' : 'अपना स्थान दर्ज करें'}
                    value={formData.location}
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
                    placeholder={language === 'en' ? 'Create a password' : 'पासवर्ड बनाएं'}
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

              <div className="form-group">
                <label className="form-label">
                  {language === 'en' ? 'Confirm Password' : 'पासवर्ड की पुष्टि करें'}
                </label>
                <div className="input-group">
                  <Lock size={20} className="input-icon" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    className="form-input"
                    placeholder={language === 'en' ? 'Confirm your password' : 'अपने पासवर्ड की पुष्टि करें'}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="form-options">
                <label className="checkbox-label">
                  <input type="checkbox" required />
                  <span>
                    {language === 'en' ? 'I agree to the' : 'मैं सहमत हूं'}{' '}
                    <Link to="#" className="auth-link">
                      {language === 'en' ? 'Terms & Conditions' : 'नियम और शर्तें'}
                    </Link>
                  </span>
                </label>
              </div>

              <button type="submit" className="btn btn-primary auth-btn" disabled={loading}>
                {loading 
                  ? (language === 'en' ? 'Creating Account...' : 'खाता बनाया जा रहा है...')
                  : (language === 'en' ? 'Create Account' : 'खाता बनाएं')
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
                {language === 'en' ? 'Already have an account?' : 'पहले से खाता है?'}{' '}
                <Link to="/login" className="auth-link">
                  {language === 'en' ? 'Sign In' : 'साइन इन करें'}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup

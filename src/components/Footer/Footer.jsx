import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'
import './Footer.css'

const Footer = ({ language }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <section className="footer-section">
            <h3 className="footer-title">Kisan Secure</h3>
            <p className="footer-description">
              {language === 'en' 
                ? 'Empowering Indian farmers with technology, insurance, and support. Fasal Ki Chinta Khatam, Kisan Secure Ke Sang.'
                : 'भारतीय किसानों को तकनीक, बीमा और सहायता के साथ सशक्त बनाना। फसल की चिंता खत्म, किसान सिक्योर के संग।'
              }
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link">
                <Instagram size={20} />
              </a>
            </div>
          </section>

          <section className="footer-section">
            <h4 className="footer-subtitle">
              {language === 'en' ? 'Quick Links' : 'त्वरित लिंक'}
            </h4>
            <nav className="footer-nav">
              <Link to="/crop-scanner" className="footer-link">
                {language === 'en' ? 'Crop Scanner' : 'फसल स्कैनर'}
              </Link>
              <Link to="/weather" className="footer-link">
                {language === 'en' ? 'Weather Forecast' : 'मौसम पूर्वानुमान'}
              </Link>
              <Link to="/insurance" className="footer-link">
                {language === 'en' ? 'Insurance' : 'बीमा'}
              </Link>
              <Link to="/wallet" className="footer-link">
                {language === 'en' ? 'Digital Wallet' : 'डिजिटल वॉलेट'}
              </Link>
            </nav>
          </section>

          <section className="footer-section">
            <h4 className="footer-subtitle">
              {language === 'en' ? 'Support' : 'सहायता'}
            </h4>
            <nav className="footer-nav">
              <Link to="/tips" className="footer-link">
                {language === 'en' ? 'Farming Tips' : 'खेती के टिप्स'}
              </Link>
              <a href="#" className="footer-link">
                {language === 'en' ? 'Help Center' : 'सहायता केंद्र'}
              </a>
              <a href="#" className="footer-link">
                {language === 'en' ? 'Contact Us' : 'संपर्क करें'}
              </a>
              <a href="#" className="footer-link">
                {language === 'en' ? 'Privacy Policy' : 'गोपनीयता नीति'}
              </a>
            </nav>
          </section>

          <section className="footer-section">
            <h4 className="footer-subtitle">
              {language === 'en' ? 'Contact Info' : 'संपर्क जानकारी'}
            </h4>
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={16} />
                <span>+91 1800-123-4567</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>support@kisansecure.in</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>
                  {language === 'en' 
                    ? 'New Delhi, India' 
                    : 'नई दिल्ली, भारत'
                  }
                </span>
              </div>
            </div>
          </section>
        </div>

        <div className="footer-bottom">
          <p>
            © 2024 Kisan Secure. {language === 'en' ? 'All rights reserved.' : 'सभी अधिकार सुरक्षित।'}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

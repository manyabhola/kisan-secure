import React from 'react';
import { Link } from 'react-router-dom';
import {
  Scan,
  Cloud,
  Shield,
  Wallet,
  BookOpen,
  Users
} from 'lucide-react';
import './Home.css';

const Home = ({ language }) => {
  const features = [
    {
      icon: <Scan size={48} />,
      title: language === 'en' ? 'AI Crop Scanner' : 'AI फसल स्कैनर',
      description: language === 'en'
        ? 'Upload crop images to detect diseases and get treatment recommendations'
        : 'बीमारियों का पता लगाने और उपचार की सिफारिशें पाने के लिए फसल की तस्वीरें अपलोड करें',
      link: '/crop-scanner'
    },
    {
      icon: <Cloud size={48} />,
      title: language === 'en' ? 'Weather Forecast' : 'मौसम पूर्वानुमान',
      description: language === 'en'
        ? 'Get accurate weather predictions for better crop planning'
        : 'बेहतर फसल योजना के लिए सटीक मौसम पूर्वानुमान प्राप्त करें',
      link: '/weather'
    },
    {
      icon: <Shield size={48} />,
      title: language === 'en' ? 'Smart Insurance' : 'स्मार्ट बीमा',
      description: language === 'en'
        ? 'Weather-linked insurance with automated claim processing'
        : 'स्वचालित दावा प्रसंस्करण के साथ मौसम-लिंक्ड बीमा',
      link: '/insurance'
    },
    {
      icon: <Wallet size={48} />,
      title: language === 'en' ? 'Digital Wallet' : 'डिजिटल वॉलेट',
      description: language === 'en'
        ? 'Secure Web3 wallet for digital payments and transactions'
        : 'डिजिटल भुगतान और लेनदेन के लिए सुरक्षित Web3 वॉलेट',
      link: '/wallet'
    },
    {
      icon: <BookOpen size={48} />,
      title: language === 'en' ? 'Farming Tips' : 'खेती के टिप्स',
      description: language === 'en'
        ? 'Get localized farming advice in your preferred language'
        : 'अपनी पसंदीदा भाषा में स्थानीयकृत खेती की सलाह प्राप्त करें',
      link: '/tips'
    },
    {
      icon: <Users size={48} />,
      title: language === 'en' ? 'Community Support' : 'सामुदायिक सहायता',
      description: language === 'en'
        ? 'Connect with fellow farmers and agricultural experts'
        : 'साथी किसानों और कृषि विशेषज्ञों से जुड़ें',
      link: '/dashboard'
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              {language === 'en'
                ? 'Welcome to Kisan Secure'
                : 'किसान सिक्योर में आपका स्वागत है'}
            </h1>
            <p className="hero-subtitle">
              {language === 'en'
                ? 'Fasal Ki Chinta Khatam, Kisan Secure Ke Sang'
                : 'फसल की चिंता खत्म, किसान सिक्योर के संग'}
            </p>
            <p className="hero-description">
              {language === 'en'
                ? 'Empowering Indian farmers with AI-powered crop monitoring, weather forecasting, smart insurance, and secure digital payments.'
                : 'AI-संचालित फसल निगरानी, मौसम पूर्वानुमान, स्मार्ट बीमा और सुरक्षित डिजिटल भुगतान के साथ भारतीय किसानों को सशक्त बनाना।'}
            </p>
            <div className="hero-actions">
              <Link to="/crop-scanner" className="btn btn-primary">
                {language === 'en' ? 'Start Scanning' : 'स्कैनिंग शुरू करें'}
              </Link>
              <Link to="/signup" className="btn btn-secondary">
                {language === 'en' ? 'Join Now' : 'अभी जुड़ें'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">
            {language === 'en' ? 'Our Services' : 'हमारी सेवाएं'}
          </h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <article key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <Link to={feature.link} className="feature-link">
                  {language === 'en' ? 'Learn More' : 'और जानें'} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3 className="stat-number">50,000+</h3>
              <p className="stat-label">
                {language === 'en' ? 'Farmers Helped' : 'किसानों की मदद की'}
              </p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">1M+</h3>
              <p className="stat-label">
                {language === 'en' ? 'Crops Scanned' : 'फसलें स्कैन की गईं'}
              </p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">₹100Cr+</h3>
              <p className="stat-label">
                {language === 'en' ? 'Insurance Claims' : 'बीमा दावे'}
              </p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">24/7</h3>
              <p className="stat-label">
                {language === 'en' ? 'Support Available' : 'सहायता उपलब्ध'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
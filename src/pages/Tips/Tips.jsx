import React, { useState } from 'react';
import { BookOpen, Leaf, Droplets, Bug, Calendar, MapPin } from 'lucide-react';
import './Tips.css';

const Tips = ({ language }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');

  const categories = [
    { id: 'all', name: language === 'en' ? 'All Tips' : 'सभी टिप्स', icon: <BookOpen size={20} /> },
    { id: 'planting', name: language === 'en' ? 'Planting' : 'रोपण', icon: <Leaf size={20} /> },
    { id: 'irrigation', name: language === 'en' ? 'Irrigation' : 'सिंचाई', icon: <Droplets size={20} /> },
    { id: 'pest-control', name: language === 'en' ? 'Pest Control' : 'कीट नियंत्रण', icon: <Bug size={20} /> },
    { id: 'seasonal', name: language === 'en' ? 'Seasonal' : 'मौसमी', icon: <Calendar size={20} /> }
  ];

  const regions = [
    { id: 'all', name: language === 'en' ? 'All Regions' : 'सभी क्षेत्र' },
    { id: 'north', name: language === 'en' ? 'North India' : 'उत्तर भारत' },
    { id: 'south', name: language === 'en' ? 'South India' : 'दक्षिण भारत' },
    { id: 'west', name: language === 'en' ? 'West India' : 'पश्चिम भारत' },
    { id: 'east', name: language === 'en' ? 'East India' : 'पूर्व भारत' }
  ];

  const tips = [/* your tips data remain unchanged */];

  const filteredTips = tips.filter(tip => {
    const categoryMatch = selectedCategory === 'all' || tip.category === selectedCategory;
    const regionMatch = selectedRegion === 'all' || tip.region === selectedRegion;
    return categoryMatch && regionMatch;
  });

  return (
    <div className="tips">
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">
            {language === 'en' ? 'Farming Tips' : 'खेती के टिप्स'}
          </h1>
          <p className="page-description">
            {language === 'en'
              ? 'Get localized farming advice from experts and experienced farmers in your preferred language.'
              : 'अपनी पसंदीदा भाषा में विशेषज्ञों और अनुभवी किसानों से स्थानीयकृत खेती की सलाह प्राप्त करें।'}
          </p>
        </header>

        <section className="filters-section">
          <div className="filter-group">
            <h3 className="filter-title">
              {language === 'en' ? 'Category' : 'श्रेणी'}
            </h3>
            <div className="filter-buttons">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <h3 className="filter-title">
              {language === 'en' ? 'Region' : 'क्षेत्र'}
            </h3>
            <select
              className="region-select"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
            >
              {regions.map((region) => (
                <option key={region.id} value={region.id}>
                  {region.name}
                </option>
              ))}
            </select>
          </div>
        </section>

        <section className="tips-section">
          <div className="tips-grid">
            {filteredTips.map((tip) => (
              <article key={tip.id} className="tip-card">
                <div className="tip-header">
                  <div className="tip-meta">
                    <span className="tip-region">
                      <MapPin size={14} />
                      {tip.region_name}
                    </span>
                    <span className="tip-date">{tip.date}</span>
                  </div>
                </div>
                <h3 className="tip-title">{tip.title}</h3>
                <p className="tip-content">{tip.content}</p>
                <div className="tip-footer">
                  <div className="tip-author">
                    <span className="author-label">
                      {language === 'en' ? 'By:' : 'द्वारा:'}
                    </span>
                    <span className="author-name">{tip.author}</span>
                  </div>
                  <div className="tip-likes">
                    <span>👍 {tip.likes}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contribute-section">
          <div className="contribute-card">
            <h2 className="contribute-title">
              {language === 'en' ? 'Share Your Knowledge' : 'अपना ज्ञान साझा करें'}
            </h2>
            <p className="contribute-description">
              {language === 'en'
                ? 'Help fellow farmers by sharing your tips and tricks.'
                : 'अपनी खेती की जानकारी साझा करके अन्य किसानों की मदद करें।'}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tips;
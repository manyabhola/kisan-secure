import React, { useState } from 'react'
import { Shield, FileText, Clock, CheckCircle, AlertCircle, DollarSign } from 'lucide-react'
import './Insurance.css'

const Insurance = ({ language }) => {
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [claims, setClaims] = useState([
    {
      id: 'CLM001',
      type: language === 'en' ? 'Weather Damage' : 'मौसम क्षति',
      status: 'approved',
      amount: 25000,
      date: '2024-01-15',
      description: language === 'en' ? 'Crop damage due to excessive rainfall' : 'अत्यधिक वर्षा के कारण फसल क्षति'
    },
    {
      id: 'CLM002',
      type: language === 'en' ? 'Drought Loss' : 'सूखा नुकसान',
      status: 'processing',
      amount: 18000,
      date: '2024-01-20',
      description: language === 'en' ? 'Crop failure due to prolonged drought' : 'लंबे सूखे के कारण फसल की विफलता'
    }
  ])

  const insurancePlans = [
    {
      id: 'basic',
      name: language === 'en' ? 'Basic Protection' : 'बेसिक सुरक्षा',
      premium: 2500,
      coverage: 50000,
      features: [
        language === 'en' ? 'Weather-based coverage' : 'मौसम आधारित कवरेज',
        language === 'en' ? 'Automated claim processing' : 'स्वचालित दावा प्रसंस्करण',
        language === 'en' ? '24/7 support' : '24/7 सहायता'
      ]
    },
    {
      id: 'premium',
      name: language === 'en' ? 'Premium Protection' : 'प्रीमियम सुरक्षा',
      premium: 4500,
      coverage: 100000,
      features: [
        language === 'en' ? 'Comprehensive weather coverage' : 'व्यापक मौसम कवरेज',
        language === 'en' ? 'Pest & disease coverage' : 'कीट और रोग कवरेज',
        language === 'en' ? 'Fast claim settlement' : 'तेज़ दावा निपटान',
        language === 'en' ? 'Expert consultation' : 'विशेषज्ञ परामर्श'
      ]
    },
    {
      id: 'enterprise',
      name: language === 'en' ? 'Enterprise Protection' : 'एंटरप्राइज़ सुरक्षा',
      premium: 7500,
      coverage: 200000,
      features: [
        language === 'en' ? 'Full crop protection' : 'पूर्ण फसल सुरक्षा',
        language === 'en' ? 'Market price guarantee' : 'बाज़ार मूल्य गारंटी',
        language === 'en' ? 'Priority claim processing' : 'प्राथमिकता दावा प्रसंस्करण',
        language === 'en' ? 'Dedicated support manager' : 'समर्पित सहायता प्रबंधक'
      ]
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved': return '#4caf50'
      case 'processing': return '#ff9800'
      case 'rejected': return '#f44336'
      default: return '#666'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'approved': return <CheckCircle size={20} />
      case 'processing': return <Clock size={20} />
      case 'rejected': return <AlertCircle size={20} />
      default: return <Clock size={20} />
    }
  }

  return (
    <div className="insurance">
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">
            {language === 'en' ? 'Smart Insurance' : 'स्मार्ट बीमा'}
          </h1>
          <p className="page-description">
            {language === 'en'
              ? 'Protect your crops with weather-linked insurance and automated claim processing.'
              : 'मौसम-लिंक्ड बीमा और स्वचालित दावा प्रसंस्करण के साथ अपनी फसलों की सुरक्षा करें।'}
          </p>
        </header>

        <section className="insurance-plans">
          <h2 className="section-title">
            {language === 'en' ? 'Choose Your Protection Plan' : 'अपना सुरक्षा प्लान चुनें'}
          </h2>
          <div className="plans-grid">
            {insurancePlans.map((plan) => (
              <article 
                key={plan.id} 
                className={`plan-card ${selectedPlan === plan.id ? 'selected' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                <div className="plan-header">
                  <h3 className="plan-name">{plan.name}</h3>
                  <div className="plan-price">
                    <span className="currency">₹</span>
                    <span className="amount">{plan.premium.toLocaleString()}</span>
                    <span className="period">/{language === 'en' ? 'year' : 'वर्ष'}</span>
                  </div>
                </div>
                <div className="plan-coverage">
                  <Shield size={24} />
                  <span>
                    {language === 'en' ? 'Coverage up to' : 'कवरेज तक'} ₹{plan.coverage.toLocaleString()}
                  </span>
                </div>
                <ul className="plan-features">
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <CheckCircle size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-primary plan-btn">
                  {language === 'en' ? 'Select Plan' : 'प्लान चुनें'}
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="claims-section">
          <h2 className="section-title">
            {language === 'en' ? 'Your Claims' : 'आपके दावे'}
          </h2>
          <div className="claims-list">
            {claims.map((claim) => (
              <article key={claim.id} className="claim-card">
                <div className="claim-header">
                  <div className="claim-info">
                    <h3 className="claim-id">#{claim.id}</h3>
                    <p className="claim-type">{claim.type}</p>
                  </div>
                  <div 
                    className="claim-status"
                    style={{ color: getStatusColor(claim.status) }}
                  >
                    {getStatusIcon(claim.status)}
                    <span>
                      {claim.status === 'approved' 
                        ? (language === 'en' ? 'Approved' : 'स्वीकृत')
                        : claim.status === 'processing'
                        ? (language === 'en' ? 'Processing' : 'प्रसंस्करण')
                        : (language === 'en' ? 'Rejected' : 'अस्वीकृत')
                      }
                    </span>
                  </div>
                </div>
                <p className="claim-description">{claim.description}</p>
                <div className="claim-details">
                  <div className="claim-amount">
                    <DollarSign size={16} />
                    <span>₹{claim.amount.toLocaleString()}</span>
                  </div>
                  <div className="claim-date">
                    <span>{language === 'en' ? 'Filed on' : 'दायर किया गया'}: {claim.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="claims-actions">
            <button className="btn btn-secondary">
              <FileText size={20} />
              {language === 'en' ? 'File New Claim' : 'नया दावा दायर करें'}
            </button>
          </div>
        </section>

        <section className="how-it-works">
          <h2 className="section-title">
            {language === 'en' ? 'How It Works' : 'यह कैसे काम करता है'}
          </h2>
          <div className="steps-grid">
            <article className="step-card">
              <div className="step-number">1</div>
              <h3>{language === 'en' ? 'Choose Plan' : 'प्लान चुनें'}</h3>
              <p>
                {language === 'en'
                  ? 'Select the insurance plan that best fits your farming needs and budget.'
                  : 'अपनी खेती की जरूरतों और बजट के अनुकूल बीमा योजना चुनें।'}
              </p>
            </article>
            <article className="step-card">
              <div className="step-number">2</div>
              <h3>{language === 'en' ? 'Automatic Monitoring' : 'स्वचालित निगरानी'}</h3>
              <p>
                {language === 'en'
                  ? 'Our system continuously monitors weather conditions and crop health.'
                  : 'हमारा सिस्टम लगातार मौसम की स्थिति और फसल के स्वास्थ्य की निगरानी करता है।'}
              </p>
            </article>
            <article className="step-card">
              <div className="step-number">3</div>
              <h3>{language === 'en' ? 'Instant Claims' : 'तत्काल दावे'}</h3>
              <p>
                {language === 'en'
                  ? 'Claims are automatically triggered and processed when conditions are met.'
                  : 'जब शर्तें पूरी होती हैं तो दावे स्वचालित रूप से ट्रिगर और प्रसंस्करित होते हैं।'}
              </p>
            </article>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Insurance

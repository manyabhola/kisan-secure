import React, { useState } from 'react'
import { User, MapPin, Phone, Mail, Scan, Cloud, Shield, Wallet, TrendingUp, Calendar } from 'lucide-react'
import './Dashboard.css'

const Dashboard = ({ user, language }) => {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    {
      icon: <Scan size={24} />,
      title: language === 'en' ? 'Crops Scanned' : 'फसलें स्कैन की गईं',
      value: '24',
      change: '+3 this week',
      color: 'var(--primary-green)'
    },
    {
      icon: <Shield size={24} />,
      title: language === 'en' ? 'Insurance Claims' : 'बीमा दावे',
      value: '2',
      change: '1 approved',
      color: 'var(--primary-orange)'
    },
    {
      icon: <Wallet size={24} />,
      title: language === 'en' ? 'Wallet Balance' : 'वॉलेट बैलेंस',
      value: '₹15,750',
      change: '+₹5,000 this month',
      color: 'var(--secondary-green)'
    },
    {
      icon: <TrendingUp size={24} />,
      title: language === 'en' ? 'Crop Health Score' : 'फसल स्वास्थ्य स्कोर',
      value: '85%',
      change: '+5% improved',
      color: 'var(--secondary-orange)'
    }
  ]

  const recentActivities = [
    {
      id: 1,
      type: 'scan',
      title: language === 'en' ? 'Crop Disease Detected' : 'फसल रोग का पता चला',
      description: language === 'en' ? 'Leaf blight detected in wheat crop' : 'गेहूं की फसल में पत्ती झुलसा का पता चला',
      time: '2 hours ago',
      status: 'warning'
    },
    {
      id: 2,
      type: 'insurance',
      title: language === 'en' ? 'Insurance Claim Approved' : 'बीमा दावा स्वीकृत',
      description: language === 'en' ? 'Weather damage claim of ₹25,000 approved' : '₹25,000 के मौसम क्षति दावे को स्वीकृत किया गया',
      time: '1 day ago',
      status: 'success'
    },
    {
      id: 3,
      type: 'wallet',
      title: language === 'en' ? 'Payment Received' : 'भुगतान प्राप्त',
      description: language === 'en' ? 'Insurance payout of ₹25,000 credited' : '₹25,000 का बीमा भुगतान जमा किया गया',
      time: '1 day ago',
      status: 'success'
    },
    {
  id: 4,
  type: 'weather',
  title: titlelanguage === 'en' ? 'Weather Alert' : 'मौसम चेतावनी',  description: language === 'en' ? 'Heavy rainfall expected in your area' : 'आपके क्षेत्र में भारी बारिश की संभावना',
  time: '3 days ago',
  status: 'info'
}
  ]

  const upcomingTasks = [
    {
      id: 1,
      task: language === 'en' ? 'Apply fertilizer to wheat field' : 'गेहूं के खेत में उर्वरक डालें',
      date: '2024-01-25',
      priority: 'high'
    },
    {
      id: 2,
      task: language === 'en' ? 'Check irrigation system' : 'सिंचाई प्रणाली की जांच करें',
      date: '2024-01-26',
      priority: 'medium'
    },
    {
      id: 3,
      task: language === 'en' ? 'Harvest tomato crop' : 'टमाटर की फसल की कटाई करें',
      date: '2024-01-28',
      priority: 'high'
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'success': return 'var(--primary-green)'
      case 'warning': return 'var(--primary-orange)'
      case 'info': return 'var(--secondary-green)'
      default: return 'var(--text-light)'
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'var(--primary-orange)'
      case 'medium': return 'var(--secondary-orange)'
      case 'low': return 'var(--primary-green)'
      default: return 'var(--text-light)'
    }
  }

  if (!user) {
    return (
      <div className="dashboard">
        <div className="container">
          <div className="auth-required">
            <h2>{language === 'en' ? 'Please Login' : 'कृपया लॉगिन करें'}</h2>
            <p>{language === 'en' ? 'You need to login to access your dashboard.' : 'अपने डैशबोर्ड तक पहुंचने के लिए आपको लॉगिन करना होगा।'}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="dashboard">
      <div className="container">
        <header className="dashboard-header">
          <div className="welcome-section">
            <h1 className="welcome-title">
              {language === 'en' ? `Welcome back, ${user.name}!` : `वापस स्वागत है, ${user.name}!`}
            </h1>
            <p className="welcome-subtitle">
              {language === 'en' 
                ? 'Here\'s what\'s happening with your farm today.'
                : 'आज आपके खेत के साथ क्या हो रहा है यहां देखें।'}
            </p>
          </div>
          <div className="user-info">
            <div className="user-avatar">
              <User size={32} />
            </div>
            <div className="user-details">
              <h3>{user.name}</h3>
              <div className="user-meta">
                <span><MapPin size={14} /> {user.location}</span>
                <span><Phone size={14} /> {user.phone}</span>
              </div>
            </div>
          </div>
        </header>

        <section className="dashboard-tabs">
          <div className="tab-buttons">
            <button 
              className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              {language === 'en' ? 'Overview' : 'अवलोकन'}
            </button>
            <button 
              className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              {language === 'en' ? 'Profile' : 'प्रोफ़ाइल'}
            </button>
          </div>
        </section>

        {activeTab === 'overview' && (
          <>
            <section className="stats-section">
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <article key={index} className="stat-card">
                    <div className="stat-icon" style={{ color: stat.color }}>
                      {stat.icon}
                    </div>
                    <div className="stat-content">
                      <h3 className="stat-value">{stat.value}</h3>
                      <p className="stat-title">{stat.title}</p>
                      <span className="stat-change">{stat.change}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <div className="dashboard-grid">
              <section className="activities-section">
                <h2 className="section-title">
                  {language === 'en' ? 'Recent Activities' : 'हाल की गतिविधियां'}
                </h2>
                <div className="activities-list">
                  {recentActivities.map((activity) => (
                    <article key={activity.id} className="activity-card">
                      <div 
                        className="activity-indicator"
                        style={{ backgroundColor: getStatusColor(activity.status) }}
                      ></div>
                      <div className="activity-content">
                        <h3 className="activity-title">{activity.title}</h3>
                        <p className="activity-description">{activity.description}</p>
                        <span className="activity-time">{activity.time}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className="tasks-section">
                <h2 className="section-title">
                  {language === 'en' ? 'Upcoming Tasks' : 'आगामी कार्य'}
                </h2>
                <div className="tasks-list">
                  {upcomingTasks.map((task) => (
                    <article key={task.id} className="task-card">
                      <div className="task-content">
                        <h3 className="task-title">{task.task}</h3>
                        <div className="task-meta">
                          <span className="task-date">
                            <Calendar size={14} />
                            {task.date}
                          </span>
                          <span 
                            className="task-priority"
                            style={{ color: getPriorityColor(task.priority) }}
                          >
                            {task.priority === 'high' 
                              ? (language === 'en' ? 'High' : 'उच्च')
                              : task.priority === 'medium'
                              ? (language === 'en' ? 'Medium' : 'मध्यम')
                              : (language === 'en' ? 'Low' : 'कम')
                            }
                          </span>
                        </div>
                      </div>
                      <button className="task-complete-btn">
                        {language === 'en' ? 'Mark Complete' : 'पूर्ण चिह्नित करें'}
                      </button>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            <section className="quick-actions">
              <h2 className="section-title">
                {language === 'en' ? 'Quick Actions' : 'त्वरित कार्य'}
              </h2>
              <div className="actions-grid">
                <button className="action-card">
                  <Scan size={32} />
                  <span>{language === 'en' ? 'Scan Crop' : 'फसल स्कैन करें'}</span>
                </button>
                <button className="action-card">
                  <Cloud size={32} />
                  <span>{language === 'en' ? 'Check Weather' : 'मौसम जांचें'}</span>
                </button>
                <button className="action-card">
                  <Shield size={32} />
                  <span>{language === 'en' ? 'File Claim' : 'दावा दायर करें'}</span>
                </button>
                <button className="action-card">
                  <Wallet size={32} />
                  <span>{language === 'en' ? 'Send Money' : 'पैसे भेजें'}</span>
                </button>
              </div>
            </section>
          </>
        )}

        {activeTab === 'profile' && (
          <section className="profile-section">
            <div className="profile-card">
              <div className="profile-header">
                <div className="profile-avatar">
                  <User size={64} />
                </div>
                <div className="profile-info">
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                </div>
              </div>
              
              <div className="profile-details">
                <div className="detail-group">
                  <label>{language === 'en' ? 'Full Name' : 'पूरा नाम'}</label>
                  <input type="text" value={user.name} readOnly />
                </div>
                <div className="detail-group">
                  <label>{language === 'en' ? 'Email' : 'ईमेल'}</label>
                  <input type="email" value={user.email} readOnly />
                </div>
                <div className="detail-group">
                  <label>{language === 'en' ? 'Phone' : 'फोन'}</label>
                  <input type="tel" value={user.phone} readOnly />
                </div>
                <div className="detail-group">
                  <label>{language === 'en' ? 'Location' : 'स्थान'}</label>
                  <input type="text" value={user.location} readOnly />
                </div>
              </div>

              <div className="profile-actions">
                <button className="btn btn-primary">
                  {language === 'en' ? 'Edit Profile' : 'प्रोफ़ाइल संपादित करें'}
                </button>
                <button className="btn btn-outline">
                  {language === 'en' ? 'Change Password' : 'पासवर्ड बदलें'}
                </button>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export default Dashboard

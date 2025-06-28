import React, { useState } from 'react'
import { Upload, Camera, Scan, AlertTriangle, CheckCircle, Info } from 'lucide-react'
import './CropScanner.css'

const CropScanner = ({ language }) => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [isScanning, setIsScanning] = useState(false)
  const [scanResult, setScanResult] = useState(null)

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target.result)
        setScanResult(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleScan = async () => {
    if (!selectedImage) return

    setIsScanning(true)
    
    // Simulate AI scanning process
    setTimeout(() => {
      const mockResults = [
        {
          disease: language === 'en' ? 'Leaf Blight' : 'पत्ती झुलसा',
          confidence: 92,
          severity: 'moderate',
          treatment: language === 'en' 
            ? 'Apply copper-based fungicide. Remove affected leaves. Ensure proper drainage.'
            : 'तांबा आधारित कवकनाशी लगाएं। प्रभावित पत्तियों को हटा दें। उचित जल निकासी सुनिश्चित करें।',
          prevention: language === 'en'
            ? 'Maintain proper spacing between plants. Avoid overhead watering.'
            : 'पौधों के बीच उचित दूरी बनाए रखें। ऊपर से पानी देने से बचें।'
        },
        {
          disease: language === 'en' ? 'Healthy Crop' : 'स्वस्थ फसल',
          confidence: 88,
          severity: 'none',
          treatment: language === 'en'
            ? 'Your crop appears healthy! Continue current care practices.'
            : 'आपकी फसल स्वस्थ दिख रही है! वर्तमान देखभाल प्रथाओं को जारी रखें।',
          prevention: language === 'en'
            ? 'Regular monitoring and balanced nutrition will keep your crops healthy.'
            : 'नियमित निगरानी और संतुलित पोषण आपकी फसलों को स्वस्थ रखेगा।'
        }
      ]
      
      setScanResult(mockResults[Math.floor(Math.random() * mockResults.length)])
      setIsScanning(false)
    }, 3000)
  }

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return '#f44336'
      case 'moderate': return '#ff9800'
      case 'low': return '#4caf50'
      case 'none': return '#4caf50'
      default: return '#666'
    }
  }

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case 'high': return <AlertTriangle size={24} />
      case 'moderate': return <Info size={24} />
      case 'low': return <CheckCircle size={24} />
      case 'none': return <CheckCircle size={24} />
      default: return <Info size={24} />
    }
  }

  return (
    <div className="crop-scanner">
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">
            {language === 'en' ? 'AI Crop Scanner' : 'AI फसल स्कैनर'}
          </h1>
          <p className="page-description">
            {language === 'en'
              ? 'Upload images of your crops to detect diseases and get treatment recommendations using advanced AI technology.'
              : 'उन्नत AI तकनीक का उपयोग करके बीमारियों का पता लगाने और उपचार की सिफारिशें पाने के लिए अपनी फसलों की तस्वीरें अपलोड करें।'}
          </p>
        </header>

        <div className="scanner-container">
          <section className="upload-section">
            <div className="upload-area">
              {selectedImage ? (
                <div className="image-preview">
                  <img src={selectedImage} alt="Selected crop" className="preview-image" />
                  <button 
                    className="change-image-btn"
                    onClick={() => document.getElementById('image-input').click()}
                  >
                    <Camera size={20} />
                    {language === 'en' ? 'Change Image' : 'तस्वीर बदलें'}
                  </button>
                </div>
              ) : (
                <div className="upload-placeholder">
                  <Upload size={48} />
                  <h3>{language === 'en' ? 'Upload Crop Image' : 'फसल की तस्वीर अपलोड करें'}</h3>
                  <p>
                    {language === 'en'
                      ? 'Select a clear image of your crop leaves or affected areas'
                      : 'अपनी फसल की पत्तियों या प्रभावित क्षेत्रों की स्पष्ट तस्वीर चुनें'}
                  </p>
                  <button 
                    className="btn btn-primary"
                    onClick={() => document.getElementById('image-input').click()}
                  >
                    <Camera size={20} />
                    {language === 'en' ? 'Choose Image' : 'तस्वीर चुनें'}
                  </button>
                </div>
              )}
              
              <input
                id="image-input"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
            </div>

            {selectedImage && (
              <div className="scan-actions">
                <button 
                  className="btn btn-secondary scan-btn"
                  onClick={handleScan}
                  disabled={isScanning}
                >
                  <Scan size={20} />
                  {isScanning 
                    ? (language === 'en' ? 'Scanning...' : 'स्कैन हो रहा है...')
                    : (language === 'en' ? 'Scan for Diseases' : 'बीमारियों के लिए स्कैन करें')
                  }
                </button>
              </div>
            )}
          </section>

          {isScanning && (
            <section className="scanning-section">
              <div className="scanning-animation">
                <div className="scanner-line"></div>
              </div>
              <p className="scanning-text">
                {language === 'en' 
                  ? 'AI is analyzing your crop image...'
                  : 'AI आपकी फसल की तस्वीर का विश्लेषण कर रहा है...'}
              </p>
            </section>
          )}

          {scanResult && (
            <section className="results-section">
              <div className="result-card">
                <div className="result-header">
                  <div 
                    className="severity-indicator"
                    style={{ color: getSeverityColor(scanResult.severity) }}
                  >
                    {getSeverityIcon(scanResult.severity)}
                  </div>
                  <div className="result-info">
                    <h3 className="disease-name">{scanResult.disease}</h3>
                    <p className="confidence-score">
                      {language === 'en' ? 'Confidence:' : 'विश्वास:'} {scanResult.confidence}%
                    </p>
                  </div>
                </div>

                <div className="result-details">
                  <div className="detail-section">
                    <h4 className="detail-title">
                      {language === 'en' ? 'Treatment Recommendation' : 'उपचार की सिफारिश'}
                    </h4>
                    <p className="detail-content">{scanResult.treatment}</p>
                  </div>

                  <div className="detail-section">
                    <h4 className="detail-title">
                      {language === 'en' ? 'Prevention Tips' : 'रोकथाम के टिप्स'}
                    </h4>
                    <p className="detail-content">{scanResult.prevention}</p>
                  </div>
                </div>

                <div className="result-actions">
                  <button className="btn btn-primary">
                    {language === 'en' ? 'Save Report' : 'रिपोर्ट सेव करें'}
                  </button>
                  <button className="btn btn-outline">
                    {language === 'en' ? 'Share with Expert' : 'विशेषज्ञ के साथ साझा करें'}
                  </button>
                </div>
              </div>
            </section>
          )}
        </div>

        <section className="tips-section">
          <h2 className="section-title">
            {language === 'en' ? 'Scanning Tips' : 'स्कैनिंग टिप्स'}
          </h2>
          <div className="tips-grid">
            <article className="tip-card">
              <h3>{language === 'en' ? 'Good Lighting' : 'अच्छी रोशनी'}</h3>
              <p>
                {language === 'en'
                  ? 'Take photos in natural daylight for best results'
                  : 'सर्वोत्तम परिणामों के लिए प्राकृतिक दिन के उजाले में फोटो लें'}
              </p>
            </article>
            <article className="tip-card">
              <h3>{language === 'en' ? 'Clear Focus' : 'स्पष्ट फोकस'}</h3>
              <p>
                {language === 'en'
                  ? 'Ensure the affected area is clearly visible and in focus'
                  : 'सुनिश्चित करें कि प्रभावित क्षेत्र स्पष्ट रूप से दिखाई दे और फोकस में हो'}
              </p>
            </article>
            <article className="tip-card">
              <h3>{language === 'en' ? 'Close-up Shots' : 'क्लोज-अप शॉट्स'}</h3>
              <p>
                {language === 'en'
                  ? 'Take close-up photos of leaves showing symptoms'
                  : 'लक्षण दिखाने वाली पत्तियों की क्लोज-अप तस्वीरें लें'}
              </p>
            </article>
          </div>
        </section>
      </div>
    </div>
  )
}

export default CropScanner

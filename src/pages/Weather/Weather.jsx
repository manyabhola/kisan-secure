import React, { useState, useEffect } from 'react';
import {
  Cloud,
  Sun,
  CloudRain,
  Wind,
  Thermometer,
  Droplets,
  Eye,
  Gauge
} from 'lucide-react';
import './Weather.css';

const Weather = ({ language }) => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeatherData(position.coords.latitude, position.coords.longitude);
        },
        () => {
          fetchWeatherData(28.6139, 77.2090); // Default to Delhi
        }
      );
    }
  }, []);

  const fetchWeatherData = async (lat, lon) => {
    setLoading(true);

    setTimeout(() => {
      const mockWeatherData = {
        location: language === 'en' ? 'New Delhi, India' : 'नई दिल्ली, भारत',
        temperature: 28,
        condition: language === 'en' ? 'Partly Cloudy' : 'आंशिक बादल',
        humidity: 65,
        windSpeed: 12,
        visibility: 8,
        pressure: 1013,
        uvIndex: 6,
        feelsLike: 32
      };

      const mockForecast = [
        {
          day: language === 'en' ? 'Today' : 'आज',
          date: new Date().toLocaleDateString(),
          high: 32,
          low: 24,
          condition: language === 'en' ? 'Sunny' : 'धूप',
          icon: 'sun',
          precipitation: 0
        },
        {
          day: language === 'en' ? 'Tomorrow' : 'कल',
          date: new Date(Date.now() + 86400000).toLocaleDateString(),
          high: 30,
          low: 22,
          condition: language === 'en' ? 'Cloudy' : 'बादल',
          icon: 'cloud',
          precipitation: 20
        },
        {
          day: language === 'en' ? 'Day 3' : 'दिन 3',
          date: new Date(Date.now() + 172800000).toLocaleDateString(),
          high: 26,
          low: 20,
          condition: language === 'en' ? 'Rainy' : 'बारिश',
          icon: 'rain',
          precipitation: 80
        },
        {
          day: language === 'en' ? 'Day 4' : 'दिन 4',
          date: new Date(Date.now() + 259200000).toLocaleDateString(),
          high: 29,
          low: 23,
          condition: language === 'en' ? 'Partly Cloudy' : 'आंशिक बादल',
          icon: 'cloud',
          precipitation: 10
        },
        {
          day: language === 'en' ? 'Day 5' : 'दिन 5',
          date: new Date(Date.now() + 345600000).toLocaleDateString(),
          high: 31,
          low: 25,
          condition: language === 'en' ? 'Sunny' : 'धूप',
          icon: 'sun',
          precipitation: 0
        }
      ];

      setWeatherData(mockWeatherData);
      setForecast(mockForecast);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="weather">
      {/* You can render weatherData and forecast here */}
      <h2>{language === 'en' ? 'Weather Component Ready' : 'मौसम सेक्शन तैयार है!'}</h2>
    </div>
  );
};

export default Weather;
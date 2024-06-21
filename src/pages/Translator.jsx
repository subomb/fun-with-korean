import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Translator.css';

const Translator = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [language, setLanguage] = useState('en'); 

  const handleTranslate = async () => {
    const options = {
      method: 'POST',
      url: 'https://google-translator9.p.rapidapi.com/v2',
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY, 
        'x-rapidapi-host': 'google-translator9.p.rapidapi.com',
        'Content-Type': 'application/json',
      },
      data: {
        q: text,
        source: language === 'en' ? 'en' : 'ko',
        target: language === 'en' ? 'ko' : 'en',
        format: 'text',
      },
    };

    try {
      const response = await axios.request(options);
      setTranslatedText(response.data.data.translations[0].translatedText);
    } catch (error) {
      console.error('Error translating text', error);
    }
  };

  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    if (newLanguage !== language) {
      setText(translatedText);
      setTranslatedText(text);
    }
    setLanguage(newLanguage);
  };

  const handleSignInClick = () => {
    navigate('/login'); 
  };

  return (
    <div className={`translator-container ${!currentUser && 'blurred'}`}>
      <h1>Translator</h1>
      <div className="translation-section">
        <div className="input-section">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text to translate"
          />
          <div className="translate-tool">
            <button onClick={handleTranslate}>Translate</button>
            <select value={language} onChange={handleLanguageChange}>
              <option value="en">English to Korean</option>
              <option value="ko">Korean to English</option>
            </select>
          </div>
        </div>
        <div className="output-section">
          {translatedText && (
            <div className="translation">
              <h2>Translated Text:</h2>
              <p>{translatedText}</p>
            </div>
          )}
        </div>
      </div>
      {!currentUser && (
        <div className="sign-in-overlay">
          <button onClick={handleSignInClick} className="sign-in-button">Sign in to access</button>
        </div>
      )}
    </div>
  );
};

export default Translator;

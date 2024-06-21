// src/components/SoundButton.jsx
import React from 'react';

const SoundButton = ({ text, language = 'Korean Female' }) => {
  const speakText = () => {
    window.responsiveVoice.speak(text, language);
  };

  return (
    <button onClick={speakText}>
      🔊
    </button>
  );
};

export default SoundButton;

import React, { useState } from 'react';
import './Quiz.css';

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowAnswer(true);
    if (option === currentQuestion.answer) {
      setTimeout(() => {
        handleNextQuestion();
      }, 1000); // Move to next question after 1 second
    } else {
      setTimeout(() => {
        resetCurrentQuestion();
      }, 1000); // Reset current question after 1 second
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setShowAnswer(false);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      alert("Good Job!");
    }
  };

  const resetCurrentQuestion = () => {
    setSelectedOption(null);
    setShowAnswer(false);
  };

  const playSound = (text) => {
    responsiveVoice.speak(text, "Korean Female");
  };

  return (
    <div className="quiz-container">
      <h2>{currentQuestion.question}</h2>
      <div className="sound-container">
        {currentQuestion.type !== 'exercise' && <div className="sound-symbol">{currentQuestion.sound}</div>}
        <button className="play-sound-button" onClick={() => playSound(currentQuestion.sound)}>🔊</button>
      </div>
      {currentQuestion.definition && (
        <div className="definition">
          {currentQuestion.definition}
        </div>
      )}
      <div className="options-container">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${showAnswer && option === currentQuestion.answer ? 'correct' : ''} ${showAnswer && option !== currentQuestion.answer ? 'wrong' : ''}`}
            onClick={() => handleOptionClick(option)}
            disabled={showAnswer}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;

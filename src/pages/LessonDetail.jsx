import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import lessons from '../data/lessons.json';
import SoundButton from '../components/SoundButton';
import Quiz from '../components/Quiz';
import { useAuth } from '../AuthContext'; 
import './LessonDetail.css';

const LessonDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth(); 
  const lesson = lessons.find((lesson) => lesson.id === parseInt(id));

  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  const renderContent = (content) => {
    return content.map((item, index) => {
      switch (item.type) {
        case 'text':
          return <p key={index}>{Array.isArray(item.value) ? item.value.join(" ") : item.value}</p>;
        case 'heading':
          return <h2 key={index}>{item.value}</h2>;
        case 'list':
          return (
            <ul key={index}>
              {item.value.map((listItem, listIndex) => (
                <li key={listIndex}>{listItem}</li>
              ))}
            </ul>
          );
        case 'image':
          return <img key={index} src={item.src} alt="Illustration" className="lesson-image" />;
        case 'pdf':
          return <a key={index} href={item.src} target="_blank" rel="noopener noreferrer">View PDF</a>;
        case 'quiz':
          return <Quiz key={index} questions={item.questions} />;
        case 'words':
          return (
            <div key={index} className="words-container">
              {item.words.map((word, wordIndex) => (
                <div key={wordIndex} className="word-item">
                  <div className="word-text">{word.text}</div>
                  {word.definition && <div className="word-definition">({word.definition})</div>}
                  <SoundButton text={word.sound} />
                </div>
              ))}
            </div>
          );
        default:
          return null;
      }
    });
  };

  const handleNavigation = (offset) => {
    const newIndex = parseInt(id) + offset;
    const restrictedBookId = 2; 
    if (newIndex > 0 && newIndex <= lessons.length) {
      const nextLesson = lessons.find((lesson) => lesson.id === newIndex);
      if (nextLesson.book === `Book ${restrictedBookId}` && !currentUser) {
        alert('Please sign in to access Book 2.');
      } else {
        navigate(`/lesson/${newIndex}`);
        window.scrollTo(0, 0);
      }
    }
  };

  return (
    <div className="lesson-detail-container">
      <h1>{lesson.title}</h1>
      {lesson.hasSoundButton && <SoundButton text={lesson.title} />}
      {renderContent(lesson.content)}
      <div className="navigation-buttons">
        <button onClick={() => handleNavigation(-1)} disabled={parseInt(id) === 1}>Previous</button>
        <button onClick={() => handleNavigation(1)} disabled={parseInt(id) === lessons.length}>Next</button>
      </div>
    </div>
  );
};

export default LessonDetail;

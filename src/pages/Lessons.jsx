import React, { useEffect, useState } from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import lessons from '../data/lessons.json';
import { db } from '../firebase-config';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import './Lessons.css';

const Lessons = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [progress, setProgress] = useState({});

  useEffect(() => {
    const fetchProgress = async () => {
      if (currentUser) {
        const docRef = doc(db, 'users', currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProgress(docSnap.data().progress || {});
        }
      } else {
        setProgress({}); 
      }
    };
    fetchProgress();
  }, [currentUser]);

  const handleCheckboxChange = async (lessonId) => {
    const newProgress = { ...progress, [lessonId]: !progress[lessonId] };
    setProgress(newProgress);
    if (currentUser) {
      await setDoc(doc(db, 'users', currentUser.uid), { progress: newProgress }, { merge: true });
    }
  };

  const handleSignInClick = () => {
    navigate('/login'); 
  };

  const renderLessons = (book) => {
    return lessons.filter(lesson => lesson.book === book).map((lesson) => (
      <li key={lesson.id} className="lesson-item">
        <input
          type="checkbox"
          checked={progress[lesson.id] || false}
          onChange={() => handleCheckboxChange(lesson.id)}
          disabled={!currentUser}
        />
        <span onClick={() => navigate(`/lesson/${lesson.id}`)}>{lesson.title}</span>
      </li>
    ));
  };

  const uniqueBooks = [...new Set(lessons.map(lesson => lesson.book))];

  return (
    <div className="lessons-container">
      <h1>Lessons</h1>
      {uniqueBooks.map(book => (
        <div key={book} className={`lessons-level ${!currentUser && book === 'Book 2' ? 'blurred' : ''}`}>
          <h2>{book}</h2>
          <ul>
            {renderLessons(book)}
          </ul>
          {!currentUser && book === 'Book 2' && (
            <div className="sign-in-overlay">
              <button onClick={handleSignInClick} className="sign-in-button">Sign in to access</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Lessons;

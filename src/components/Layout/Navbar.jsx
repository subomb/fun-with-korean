import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="navbar-brand">Fun With Korean!</Link>
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/" className="navbar-link" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/lessons" className="navbar-link" onClick={closeMenu}>Lessons</Link></li>
          <li><Link to="/translator" className="navbar-link" onClick={closeMenu}>Translator</Link></li>
          {currentUser ? (
            <li><button onClick={() => { handleLogout(); closeMenu(); }} className="navbar-link logout-button">Log out</button></li>
          ) : (
            <li><Link to="/login" className="navbar-link" onClick={closeMenu}>Log in</Link></li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

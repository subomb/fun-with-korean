import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/register'); 
  };

  return (
    <div className="home-container">
      <header className="hero-banner">
        <h1>Welcome to Fun With Korean!</h1>
        <p>Start your journey to mastering the Korean language and culture.</p>
      </header>

      <section className="benefits-section">
        <h2>Why Learn Korean?</h2>
        <div className="benefits-cards">
          <div className="card">
            <h3>Expand Your Horizons</h3>
            <p>Learning Korean opens up opportunities to explore a rich and vibrant culture.</p>
          </div>
          <div className="card">
            <h3>Boost Your Career</h3>
            <p>Knowing an additional language can enhance your resume and job prospects.</p>
          </div>
          <div className="card">
            <h3>Connect with More People</h3>
            <p>Communicate with over 75 million Korean speakers worldwide.</p>
          </div>
        </div>
      </section>

      <section className="culture">
        <h2>Discover Korean Culture</h2>
        <div className="culture-cards">
          <div className="culture-card">
            <img src="/assets/korean-culture.jpeg" alt="Traditional Korean Culture" />
            <h3>Traditional Culture</h3>
            <p>Explore traditional Korean arts, dance, painting, pottery, and more.</p>
            <a href="https://www.koreanculture.org/korea-information-culture-and-the-arts" target="_blank" rel="noopener noreferrer">Learn More</a>
          </div>
          <div className="culture-card">
            <img src="/assets/kpop.png" alt="K-Pop" />
            <h3>K-Pop</h3>
            <p>Immerse yourself in the world of K-pop, the global music phenomenon.</p>
            <a href="https://www.90daykorean.com/what-is-kpop/" target="_blank" rel="noopener noreferrer">Learn More</a>
          </div>
          <div className="culture-card">
            <img src="/assets/korean-food.jpeg" alt="Korean Cuisine" />
            <h3>Korean Cuisine</h3>
            <p>Discover the unique and delicious flavors of Korean cuisine.</p>
            <a href="https://www.superprof.com/blog/south-korean-culinary-culture/" target="_blank" rel="noopener noreferrer">Learn More</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <h2>Fun With Korean</h2>
            <p>Join us today and start your Korean learning adventure!</p>
            <button onClick={handleGetStartedClick} className="cta-button">Sign Up Now</button>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h3>Explore</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Resources</h3>
              <ul>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Tutorials</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Follow Us</h3>
              <ul className="social-icons">
                <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Fun With Korean. All rights reserved. | Terms & Conditions | Privacy Policy</p>
        </div>
      </footer>

    </div>
  );
};

export default Home;

import React, { useState } from 'react';
import { useAuth } from '../../AuthContext';
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '../../firebase-config';
import './Auth.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch (error) {
      console.error('Failed to log in', error);
    }
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(navigate);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <div className="auth-input">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="auth-input">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="auth-button">Sign In</button>
        </form>
        <p>Don't have an account? <a className="auth-link" href="/register">Sign up</a></p>
        <div className="auth-divider">OR</div>
        <button className="auth-google-button" onClick={handleGoogleSignIn}>
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;

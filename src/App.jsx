import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Feedback from './components/feedback';
import ContactUs from './components/ContactUs';
import Purchase from './components/Purchase';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <div className="logo-container">
            <img src="/src/assets/p1.jpeg" alt="Logo" className="logo" />
          </div>
          <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/feedback" className="nav-link">Feedback</Link>
            <Link to="/contact" className="nav-link">Contact Us</Link>
            <Link to="/purchase" className="nav-link">Purchase</Link>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <section className="hero">
                  <div className="hero-content">
                    <h1>Welcome to Vegetable and Fruits Mart</h1>
                    <p>Your one-stop shop for fresh and organic produce</p>
                    <button className="cta-button">Shop Now</button>
                  </div>
                  <img src="/src/assets/p2.jpeg" alt="Fresh Vegetables" className="hero-img" />
                </section>

                <section className="features">
                  <h2>Why Choose Us?</h2>
                  <div className="feature-grid">
                    <div className="feature-card">
                      <img src="/src/assets/download.jpeg" alt="Organic" />
                      <h3>100% Organic</h3>
                      <p>All our products are certified organic and pesticide-free</p>
                    </div>
                    <div className="feature-card">
                      <img src="/src/assets/fast.jpeg" alt="Delivery" />
                      <h3>Fast Delivery</h3>
                      <p>Same day delivery for orders placed before 2 PM</p>
                    </div>
                    <div className="feature-card">
                      <img src="/src/assets/p2.jpeg" alt="Quality" />
                      <h3>Best Quality</h3>
                      <p>Handpicked fresh produce from local farmers</p>
                    </div>
                  </div>
                </section>

                <section className="highlights">
                  <div className="highlight">
                    <img src="/src/assets/vsg.jpeg" alt="Vegetables" className="highlight-img" />
                    <div className="highlight-content">
                      <h2>Fresh Vegetables</h2>
                      <p>Explore our wide range of farm-fresh vegetables.</p>
                      <Link to="/purchase" className="shop-link">Shop Vegetables</Link>
                    </div>
                  </div>
                  <div className="highlight">
                    <img src="/src/assets/fruits.jpeg" alt="Fruits" className="highlight-img" />
                    <div className="highlight-content">
                      <h2>Organic Fruits</h2>
                      <p>Enjoy our delicious and healthy organic fruits.</p>
                      <Link to="/purchase" className="shop-link">Shop Fruits</Link>
                    </div>
                  </div>
                </section>
              </>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/purchase" element={<Purchase />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Contact Info</h4>
              <p>Email: info@vegmart.com</p>
              <p>Phone: +91 123 456 7890</p>
              <p>Address: 123 Green Street, Chennai, India</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <Link to="/about">About Us</Link>
              <Link to="/terms">Terms & Conditions</Link>
              <Link to="/privacy">Privacy Policy</Link>
            </div>
            <div className="footer-section">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">Twitter</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Powered by Egreen, India. All rights reserved!</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
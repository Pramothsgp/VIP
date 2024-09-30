import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section">
          <h2>Outsourcing Transformed</h2>
          <ul>
            <li>Customized solutions.</li>
            <li>Passionate culture.</li>
            <li>Committed to your success.</li>
          </ul>

          <div className="social-media">
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h2>Jobs by Service</h2>
          <ul>
            <li>Inbound Voice</li>
            <li>Outbound Voice</li>
            <li>Multi-channel Support</li>
            <li>Back-office Support</li>
            <li>Work-Secure Suite</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Jobs by Location</h2>
          <ul>
            <li>Corporate Headquarters</li>
            <li>Belize</li>
            <li>Jamaica</li>
            <li>Philippines</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Jobs by Setup</h2>
          <ul>
            <li>Remote</li>
            <li>On-site</li>
            <li>Hybrid</li>
          </ul>
          <h2>Jobs by Employment</h2>
          <ul>
            <li>Full-Time</li>
            <li>Part-Time</li>
            <li>Contractual</li>
          </ul>
        </div>
      </div>
      <div className="footer-section last">
        <nav>
          <p>© Built In 2023</p>
        </nav>
        <nav>
          <p>About TBPO</p>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

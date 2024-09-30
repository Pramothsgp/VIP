import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="header-content">
        <nav className="logo-container">
          <img
            src="../../../../public/job-icon-png-7.jpg"
            alt="Transparent BPO"
            className="logo"
          />
        </nav>
        <nav className="link-container">
          <ul>
            <li>
              <a href="#">Find Jobs</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
          </ul>
        <button className="login-btn" onClick={() => navigate("/login")}>
          Login
        </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import './Signup.css';
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showcnfrmPassword, setShowcnfrmPassword] = useState(false);
  const navigate = useNavigate();
  const handlePasswordShow = () => {
    setShowPassword((stat) => !stat);
  }
  return (
    <div className="signup-form container">
      <div className="screen">
        <div className="screen_content">
          <form className="signup">
            <div className="signup_field">
              <input
                type="text"
                className="signup_input"
                placeholder="User name "
              />
            </div>
            <div className="signup_field">
              <input
                type="text"
                className="signup_input"
                placeholder="Email"
              />
            </div>
            <div className="signup_field">
              <input
                type={showPassword ? "text" : "password"}
                className="signup_input"
                placeholder="Password"
              />
              <div className="password icon pswd" onClick={handlePasswordShow}>
              {showPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
            <div className="signup_field">
              <input
                type={showPassword ? "text" : "password"}
                className="signup_input"
                placeholder="Confirm Password"
              />
              <div className="password icon cnfrm" onClick={() => {
                setShowcnfrmPassword(() => (stat) => !stat);
              }}>
              {showcnfrmPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
            <p className="link_to_login">
              Already have an account?
              <Link to="/login" className="login link">
                Login
              </Link>
            </p>
            <button className="button signup_submit" onClick={()=>{navigate('/login')}}>
              <span className="button_text">Sign Up</span>
            </button>
          </form>
        </div>
        <div className="screen_background">
          <span className="screen_background_shape screen_background_shape4"></span>
          <span className="screen_background_shape screen_background_shape3"></span>
          <span className="screen_background_shape screen_background_shape2"></span>
          <span className="screen_background_shape screen_background_shape1"></span>
        </div>
      </div>
    </div>
  );
};

export default Signup;

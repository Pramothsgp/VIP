import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

	const navigate = useNavigate();
  const handlePasswordShow = () => {
    setShowPassword((stat) => !stat);
  };
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      
      const logindata = {
        username,
        password,
      };
      toast('user login successfy');
      localStorage.setItem("userdata", JSON.stringify(logindata));
      navigate('/home');
      return;
    }    
  }

  
  const handleSubmit = async(e) => {
    e.preventDefault();
    
    
    try {
      await axios.post('http://localhost:5000/api/login', {username, password}); 
      localStorage.setItem("token", true);
      toast('user login successfy');
      navigate('/home');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Invalid username or password');
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="login-form container">
      <div className="screen">
        <div className="screen_content">
          <form className="login" onSubmit={handleSubmit}>
            <div className="login_field">
              <input
                type="text"
                className="login_input"
                placeholder="Email"
                required
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="login_field">
              <input
                type={showPassword ? "text" : "password"}
                className="login_input"
                placeholder="Password"
                required
              onChange={(e) => {
                setPassword(e.target.value)
              }}
                onKeyDown={handleEnter}
              />
              <div className="password icon pswd" onClick={handlePasswordShow}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
            <p className="link_to_Signup">
            <span>Dont&apos;t have an account</span>
              <Link to="/signup" className="signup link">
                Signup
              </Link>
            </p>
            <button className="button login_submit">
              <span className="button_text">Log In</span>
            </button>
          </form>
        </div>
        <div className="screen_background">
          <span className="screen_background_shape screen_background_shape4"/>
          <span className="screen_background_shape screen_background_shape3"/>
          <span className="screen_background_shape screen_background_shape2"/>
          <span className="screen_background_shape screen_background_shape1"/>
        </div>
      </div>
    </div>
  );
};

export default Login;

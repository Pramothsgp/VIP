import React, { useState } from "react";
import "./Signup.css";
import emailjs from 'emailjs-com'
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";


const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showcnfrmPassword, setShowcnfrmPassword] = useState(false);
  const [otpsent,setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [userotp, setUserOtp] = useState('');
  const [userdata, setUserdata] = useState({
    username: "",
    email: "",
    password: "",
    cnfrmPassword: "",
  });
  const navigate = useNavigate();
  const handlePasswordShow = () => {
    setShowPassword((stat) => !stat);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if passwords match before proceeding
    if (userdata.password !== userdata.cnfrmPassword) {
      toast.warn("Passwords do not match");
      return;
    }
    if (!otpsent) {
      try {
      // Check if the username already exists
      const response = await axios.post(`http://localhost:5000/api/check-username/${userdata.username}`);
      if (response.data.exists) {
        toast.error("Username already exists");
        return;
      }
      // Check if the email already exists
      const emailResponse = await axios.post(`http://localhost:5000/api/check-email/${userdata.email}`);
      if (emailResponse.data.exists) {
        toast.error("Email already exists");
        return;
      }
    } catch (error) {
      console.error('Error:', error);
        toast.error(error.response.data.message);
        return;
    }
      const generatedOtp = generateOtp();
      setOtp(generatedOtp);
  
      const templateParams = {
        to_email: userdata.email,
        OTP_CODE: `${generatedOtp}`,
      };
  
      emailjs
        .send(
          "service_bilp5qo",
          "template_iywri6q",
          templateParams,
          "QYwbyMHa0ALTN56Sc"
        )
        .then((response) => {
          console.log("Email sent successfully!", response.status, response.text);
          toast.success("OTP Sent Successfully");
          setOtpSent(true);
        })
        .catch((err) => {
          console.error("Failed to send email. Error:", err);
          toast.error("Enter a valid Email");
        });
      return;
    }
  
    // Check OTP validation
    if (userotp.length !== 6) {
      toast.warn("OTP must be 6 digits");
      return;
    }
  
    if (userotp !== otp) {
      toast.warn("OTP Mismatch");
      return;
    }
    // If OTP is valid, proceed with signup
    try {
      await axios.post('http://localhost:5000/api/signup', {username: userdata.username, email: userdata.email, password: userdata.password});
      toast.success("Signup successful");
      navigate('/login');
    } catch (error) {
      console.error('Error:', error);
      toast.error(error.response.data.message);
    }
  };
  
  return (
    <div className="signup-form container">
      <div className="screen">
        <div className="screen_content">
          <form className="signup" onSubmit={handleSubmit}>
            {!otpsent ? (
              <div>
                <div className="signup_field">
                  <input
                    type="text"
                    className="signup_input"
                    placeholder="User name "
                    name="username"
                    required
                    onChange={handleInputChange}
                  />
                </div>
                <div className="signup_field">
                  <input
                    type="text"
                    className="signup_input"
                    placeholder="Email"
                    name="email"
                    required
                    onChange={handleInputChange}
                  />
                </div>
                <div className="signup_field">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="signup_input"
                    placeholder="Password"
                    name="password"
                    required
                    onChange={handleInputChange}
                  />
                  <div
                    className="password icon pswd"
                    onClick={handlePasswordShow}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </div>
                </div>
                <div className="signup_field">
                  <input
                    type={showcnfrmPassword ? "text" : "password"}
                    className="signup_input"
                    placeholder="Confirm Password"
                    name="cnfrmPassword"
                    required
                    onChange={handleInputChange}
                  />
                  <div
                    className="password icon cnfrm"
                    onClick={() => {
                      setShowcnfrmPassword( (stat) => !stat);
                    }}
                  >
                    {showcnfrmPassword ? <FaEye /> : <FaEyeSlash />}
                  </div>
                </div>
                <p className="link_to_login">
                  Already have an account?
                  <Link to="/login" className="login link">
                    Login
                  </Link>
                </p>
              </div>
            ) : (
                <div className="login_field">
                  <input
                    type= "text"
                    className="login_input"
                    placeholder="OTP"
                      minLength="6"
                      maxLength='6'
                    onChange={(e) => setUserOtp(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSubmit(e);
                      }
                    }}
                  />
                </div>
            )}
            <button className="button signup_submit">
              <span className="button_text">{otpsent ? 'Sign Up' : 'Get Otp'}</span>
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

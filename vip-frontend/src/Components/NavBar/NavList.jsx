import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const NavList = ({Style}) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("userdata");
        navigate("/login");
      };

  return (
      <div>
          <ul className={`nav-list ${Style}`}>
            <li className="nav-content">
              <Link to="/Home">Home</Link>
            </li>
            <li className="nav-content">
              <Link to="/Home">Home</Link>
            </li>
            <li className="nav-content">
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <button onClick={handleLogout} className='logout-button'>log out</button>
            </li>
          </ul>
    </div>
  )
}

export default NavList
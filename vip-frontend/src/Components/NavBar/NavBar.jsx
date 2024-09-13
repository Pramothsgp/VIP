import React, { useEffect, useState } from "react";
import "./NavBar.css";
import Profile from "../Profile/Profile";
import { img_url } from "../../Data/Image";
import NavList from "./NavList";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoCloseSharp } from "react-icons/io5";
const NavBar = () => {
  
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const [showProfile, setShowProfile] = useState(false);
  const [togglemenu, setTogglemenu] = useState(true);
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div>
    <div className="navbar container">
      <div className="profile-card-nav "
        onClick={()=>setShowProfile((e)=>!e)}
      >
      <div
        className="profile-image"
        style={{ background: `url(${img_url})` }}
        ></div>
        </div>
      <div className="nav-list-container">
        {windowDimensions.width > 920 ? (
            <NavList Style = 'row'/>
          ) : (
              <div className="toggle-menu" onClick={()=>{setTogglemenu((prev)=>!prev)}}>
                {togglemenu ? <TfiMenuAlt /> : <div className="mobile-nav-bar">
                  <IoCloseSharp />
                  <NavList Style = 'column'/>
                </div>}
                </div>
        )
        }
      </div>
      </div>
      {showProfile && <Profile setshowProfile={setShowProfile} />}
      </div>
  );
};

export default NavBar;

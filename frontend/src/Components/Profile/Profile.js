import React from "react";
import "./Profile.css";
import { img_url } from "../../Data/Image";
import Card from "../Cards/Card";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Profile = ({ setshowProfile }) => {
  return (
    <Card>
      <div className="profile container">
        <div
          className="close-icon-container"
          onClick={() => setshowProfile((prev) => !prev)} // Corrected toggle function
        >
          <IoIosCloseCircleOutline className="close-icon" />
        </div>
        <div
          className="profile-img"
          style={{ background: `url(${img_url})` }}
        ></div>
        <div className="profile-content">
          <div>
            <div className="profile-title container">
              <h1>Pramoth Natarajan</h1>
            </div>
            <div className="profile-description container">
              <p>
                Full Stack Developer with over 10 years of experience in
                Java/JS, Angular, Vue, React, Python, NumPy, SciPy,
                Scikit-learn. Led development of $500K research project which
                was deemed a "gold standard" by the client. Increased client's
                revenue 2-fold after fine-tuning AI/ML-based algorithms.
                Well-acquainted with HR methodologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Profile;

import React from "react";
import "./featuredJobs.css";
import { FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const FeaturedJobs = () => {
  const jobs = [
    { title: "Customer Service", location: "Chennai", type: "Full-Time" },
    { title: "Full-Stack Developer", location: "Bangalore", type: "Full-Time" },
    { title: "HR Director", location: "Vellor", type: "Part-Time" },
  ];

  return (
    <div className="featured-jobs">
      <h2>Latest featured jobs</h2>
      <div className="jobs-list">
        {jobs.map((job, index) => (
          <div className="featured-job-card" key={index}>
            <div className="job-img" />
            <nav className="job-data">
              <h3>{job.title}</h3>
              <p><FaClock /> {job.type}</p>
              <p> <FaLocationDot /> {job.location}</p>
              <button className="apply-btn">Apply Now</button>
            </nav>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;

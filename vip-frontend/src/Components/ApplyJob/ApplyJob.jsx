import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ApplyJob.css";

const ApplyJob = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [resume, setResume] = useState(null);
  const [username, setUsername] = useState(null);
  const [user_id, setUser_id] = useState(null);
  useEffect(() => {
    // Fetch the job details from the server
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/getjobdetail/${id}`
        );
        setJob(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching job details");
        setLoading(false);
      }
    };

    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUsername(user[0].username);
      setUser_id(user[0].id);
      setApplicantName(user[0].username);
      setApplicantEmail(user[0].email);
    }

    fetchJobDetails();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
      const formData = [{ user_id: user_id, username: username, name: applicantName, email: applicantEmail }];
    console.log(formData);
    try {
      await axios.post(`http://localhost:5000/api/apply/${id}`, formData[0]);
      alert("Application submitted successfully!");
    } catch (err) {
      alert("Error submitting application.");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="apply-job-container">
      <h1>Apply for: {job.title}</h1>
      <p>
        <strong>Company:</strong> {job.companyName}
      </p>
      <p>
        <strong>Location:</strong> {job.location}
      </p>
      <p>
        <strong>Salary:</strong> ₹{job.salary}
      </p>
      <p>
        <strong>Description:</strong> {job.description}
      </p>

      <h2>Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={applicantName}
            onChange={(e) => setApplicantName(e.target.value)} // Allow changes if needed
            required
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={applicantEmail}
            onChange={(e) => setApplicantEmail(e.target.value)} // Allow changes if needed
            required
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="resume">Resume</label>
          <input
            type="file"
            id="resume"
            onChange={(e) => setResume(e.target.files[0])}
          />
        </div>
        <button type="submit" className="apply-button">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyJob;

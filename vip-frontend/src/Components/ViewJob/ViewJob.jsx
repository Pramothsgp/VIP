import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './ViewJob.css'
const ViewJob = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/Viewjob/${id}`);
                setJob(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching job details');
                setLoading(false);
            }
        };
  
        fetchJobDetails();
    }, [id]);
  
    if (loading) {
        return <p>Loading...</p>;
    }
  
    if (error) {
        return <p>{error}</p>;
    }
  
    return (
        <div className="job-details-container">
            <h1>{job.title}</h1>
            <h2>Company: {job.companyName}</h2>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Job Setup:</strong> {job.setup}</p>
            <p><strong>Salary:</strong> ₹{job.salary}</p>
            <p><strong>Job Type:</strong> {job.jobType}</p>
            <hr />
            <div className="job-description">
                <h3>Job Description</h3>
                <p>{job.description}</p>
            </div>
            <div className="job-qualification">
                <h3>Qualification</h3>
                <p>{job.qualification}</p>
            </div>
            <div className="job-responsibilities">
                <h3>Responsibilities</h3>
                {...(job.responsibilities.split(",")).map((responsibility, index) => (
                    <p key={index}>{responsibility.replace(/"/g,"").replace(/\[/g,"").replace(/\]/g,"")}</p>
                ))}
            </div>
            <div className="job-projects">
                <h3>Projects</h3>
                {...(job.projects.split(",")).map((project, index) => (
                    <p key={index}>{project.replace(/"/g,"").replace(/\[/g,"").replace(/\]/g,"")}</p>
                ))}
            </div>
            <button className="apply-button" onClick={()=>{navigate(`/home/Applyjob/${id}`)}}>Apply Now</button>
        </div>
    );
};
export default ViewJob
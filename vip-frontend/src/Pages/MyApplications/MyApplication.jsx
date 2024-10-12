import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MyApplication.css';

const MyApplication = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    
    if (userData) {
      setUser(userData[0]);
    }
  }, []);

  useEffect(() => {
    if (!user) return;
    
    const fetchApplications = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:5000/api/myapplications/${user.id}`);
        setApplications(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching applications');
        setLoading(false);
      }
    };

    fetchApplications();
  }, [user]);


  const handleDelete = async (applicationId) => {
    try {
      await axios.delete(`http://localhost:5000/api/deleteapplication/${applicationId}`);
      setApplications(applications.filter((application) => application.application_id !== applicationId));
    } catch (err) {
      console.error('Error deleting application:', err);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="my-applications-container">
      <h1>My Applications</h1>
      {applications.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        <ul className="applications-list">
          {applications.map((application) => (
            <li key={application.application_id} className="application-item">
              <h3>{application.title}</h3>
              <p><strong>Company:</strong> {application.companyName}</p>
              <p><strong>Location:</strong> {application.location}</p>
              <p><strong>Salary:</strong> ₹{application.salary}</p>
              <p className="application-date"><strong>Date Applied:</strong> {new Date(application.application_date).toLocaleDateString()}</p>
              <p className={`status ${application.status.toLowerCase()}`}><strong>Status:</strong> {application.status}</p>
              <button className='delete-button' onClick={()=>{handleDelete(application.application_id)}}>Cancle Application</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyApplication;

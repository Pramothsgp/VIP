import axios from "axios";
import React, { useEffect, useState } from "react";
import './TotalApplications.css'
import { toast } from "react-toastify";
const TotalApplications = () => {
  const [totalApplications, setTotalApplications] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/jobs/totalapplications")
      .then((res) => {
        console.log(res);
        setTotalApplications(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleApplicationStatus = (applicationId, newStatus) => {
    axios
      .put(`http://localhost:5000/api/jobs/updateapplicationstatus/${applicationId}`, {
        status: newStatus,
      })
      .then((res) => {
        console.log(res);
        axios
      .get("http://localhost:5000/api/jobs/totalapplications")
      .then((res) => {
        console.log(res);
        setTotalApplications(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (totalApplications.length === 0) {
    return <p>No applications found.</p>;
  }
  return (
    <div className="total-applications">
      <h1>Total Applications</h1>
      <p>Total applications: {totalApplications.length}</p>
      <div className="admin-applications-list">
        {totalApplications.map((application) => (
          <div className="application-item-list" key={application._id}>
            <p>Applicant Name: {application.applicant_name}</p>
            <p>Applicant Email: {application.applicant_email}</p>
            <p>Job Title: {application.title}</p>
            <p>Company : {application.companyName}</p>
            <p> Job Type : {application.jobType}</p>
            <p>Application Status : {application.status}</p>
            <div className="application-actions">
              <button className="accept-application" onClick={()=>{handleApplicationStatus(application.id,"Accepted")}}>Accept</button>
              <button className="reject-application" onClick={()=>{handleApplicationStatus(application.id,"Rejected")}}>Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalApplications;

import axios from "axios";
import React, { useEffect, useState } from "react";

const RejectedApplication = () => {
  const [rejectedApplications, setRejectedApplications] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/jobs/rejectedapplications")
      .then((res) => {
        setRejectedApplications(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
    if(rejectedApplications.length === 0){
        return <h1>No Rejected Applications</h1>
    }
  return (
    <div className="total-applications">
      <h1>Rejected Applications</h1>
      <p>Rejected applications: {rejectedApplications.length}</p>
      <div className="admin-applications-list">
        {rejectedApplications.map((application) => (
          <div className="application-item-list" key={application._id}>
            <p>Applicant Name: {application.applicant_name}</p>
            <p>Applicant Email: {application.applicant_email}</p>
            <p>Job Title: {application.title}</p>
            <p>Company : {application.companyName}</p>
            <p>Status: {application.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RejectedApplication;

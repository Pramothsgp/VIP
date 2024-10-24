import axios from "axios";
import React, { useEffect, useState } from "react";

const AcceptedApplication = () => {
  const [acceptedApplications, setAcceptedApplications] = useState([]);
  useEffect(() => {
    const fetchAcceptedApplications = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/jobs/acceptedapplications"
        );
        setAcceptedApplications(response.data);
      } catch (error) {
        console.error("Error fetching accepted applications:", error);
      }
    };
    fetchAcceptedApplications();
  }, []);
  return (
    <div className="total-applications">
      <h1>Accepted Applications</h1>
      <p>Accepted applications: {acceptedApplications.length}</p>
      <div className="admin-applications-list">
        {acceptedApplications.map((application) => (
          <div className="application-item-list" key={application.application_id}>
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

export default AcceptedApplication;

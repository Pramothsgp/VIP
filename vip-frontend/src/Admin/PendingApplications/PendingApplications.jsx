import axios from 'axios';
import React, { useEffect, useState } from 'react'

const PendingApplications = () => {
    const [pendingApplications, setPendingApplications] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/api/jobs/pendingapplications')
            .then((res) => {
                console.log(res);
                setPendingApplications(res.data);
            }).catch((err) => {
                console.log(err);
            })
    }, []);
  return (
      <div className='pending-applications'>
          <h1>Pending Applications</h1>
          <div className="admin-applications-list">
              {pendingApplications.map((application) => (
                  <div className="application-item-list" key={application._id}>
                      <p>Applicant Name: {application.applicant_name}</p>
                      <p>Applicant Email: {application.applicant_email}</p>
                      <p>Job Title: {application.title}</p>
                      <p>Company : {application.companyName}</p>
                      <p> Job Type : {application.jobType}</p>
                      <p>Application Status : {application.status}</p>
                      <div className="application-actions">
                          <button className="accept-application">Accept</button>
                          <button className="reject-application">Reject</button>
                      </div>
                  </div>
              ))}
          </div>
    </div>
  )
}

export default PendingApplications
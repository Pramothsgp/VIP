import React from 'react'
import './JobCard.css'
const JobCard = ({key , job}) => {
  return (
      <div className='job-card'>
          <h2>{job.companyName}</h2>
          <p>{job.place}</p>
          <p>Role: {job.role}</p>
          <p>Salary : {job.salaryRange}</p>
          <p>Qualification : {job.qualification}</p>
    </div>
  )
}

export default JobCard
import React, { useState } from 'react'
import './JobCard.css'
import Card  from '../Cards/Card'
import { job_img } from '../../Data/Image';
const JobCard = ({ key, job }) => {
  const [showDetails, setshowDetails] = useState(false);
  return (
    <>
    <div className='job-card' onClick={() => { setshowDetails((prev)=>!prev) }}>
          <h2>{job.companyName}</h2>
          <p>{job.place}</p>
          <p>Role: {job.role}</p>
          <p>Qualification : {job.qualification}</p>
      </div>
      {showDetails && <div className='job-detail container'>
          <Card display={setshowDetails}>
        <div className='job-details' onClick={() => { setshowDetails((prev) => !prev) }}>
        <h2>{job.companyName}</h2>
        <p>{job.place}</p>
        <p>Role: {job.role}</p>
            <p>Qualification : {job.qualification}</p>
      </div>
            </Card>
      </div>}
    </>
  )
}

export default JobCard
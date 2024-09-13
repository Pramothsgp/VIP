import React, { useState } from 'react'
import './Home.css'
import { jobList } from '../../Data/JobData'
import JobCard from '../../Components/JobCard/JobCard';

const Home = () => {
  const [jobs, setJobs] = useState(jobList);
  return (
    <div className='home container'>
      <div className='jobs'>
        {
          jobs.map((job, index) => (
            <JobCard key={index} job ={ job } />
          ))
        }
       </div>
    </div>
  )
}

export default Home
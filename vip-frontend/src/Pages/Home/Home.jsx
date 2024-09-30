import React, { useState } from 'react'
import './Home.css'
import { jobList } from '../../Data/JobData'
import JobCard from '../../Components/JobCard/JobCard';
import Jobs from '../Jobs/Jobs'
import { Route, Routes } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Home = () => {
  const [jobs, setJobs] = useState(jobList);
  return (
    <div className='home container'>
      
      <Routes>
        <Route path='/' element={
          <div className='jobs'>
        {
          jobs.map((job, index) => (
            <JobCard key={index} job ={ job } />
          ))
        }
      </div>} />
        <Route path='jobs' element={<Jobs/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default Home
import React, { useState } from 'react'
import './Home.css'
import { jobList } from '../../Data/JobData'
import JobCard from '../../Components/JobCard/JobCard';
import Jobs from '../Jobs/Jobs'
import { Route, Routes } from 'react-router-dom';
import Footer from '../Footer/Footer';
import ApplyJob from '../../Components/ApplyJob/ApplyJob';
import ViewJob from '../../Components/ViewJob/ViewJob';

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
        <Route path='jobs' element={<Jobs />} />
        <Route path='Applyjob/:id' element={<ApplyJob />} />
        <Route path='ViewJob/:id' element={<ViewJob />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default Home
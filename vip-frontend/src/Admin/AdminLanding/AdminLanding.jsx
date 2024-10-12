import React from 'react'
import AdminSidebar from '../AdminSidebar/AdminSidebar'
import AdminNavBar from '../AdminNavBar/AdminNavBar'
import { Route, Routes } from 'react-router-dom'
import TotalApplications from '../TotalApplications/TotalApplications'
import './AdminLanding.css'
import PendingApplications from '../PendingApplications/PendingApplications'
const AdminLanding = () => {
  return (
    <div className=' admin landing'>
      <AdminNavBar />
      <div className='admin-content'>
        <AdminSidebar />
        <div className='admin-content-container'>
      <Routes>
        {/* <Route path='total-jobs' element={<TotalJobs />} /> */}
            <Route path='total-applications' element={<TotalApplications />} />
            <Route path='pending-applications' element={<PendingApplications />} />
          </Routes>
          </div>
        </div>
    </div>
  )
}

export default AdminLanding
import React, { createContext, useState } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import AdminNavBar from "../AdminNavBar/AdminNavBar";
import { Navigate, Route, Routes } from "react-router-dom";
import TotalApplications from "../TotalApplications/TotalApplications";
import "./AdminLanding.css";
import PendingApplications from "../PendingApplications/PendingApplications";
import TotalJobs from "../TotalJobs/TotalJobs";
import Addjob from "../../Pages/Addjob/AddJob";
import AcceptedApplication from "../AcceptedApplication/AcceptedApplication";
import RejectedApplication from "../RejectedApplication/RejectedApplication";
import CancledApplication from "../CancledApplication/CancledApplication";
export const updateContext = createContext();

const AdminLanding = () => {

  const [update , setUpdate] = useState(false);
  return (
    <updateContext.Provider value={{ update, setUpdate }}>
    <div className=" admin landing">
      <AdminNavBar />
      <div className="admin-content">
        <AdminSidebar />
        <div className="admin-content-container">
          <Routes>
            <Route path="/" element={< Navigate to='total-jobs'/>} />
            <Route path="total-jobs" element={<TotalJobs />} />
            <Route path="total-applications" element={<TotalApplications />} />
            <Route
              path="pending-applications"
              element={<PendingApplications />}
            />
            <Route path="accepted-applications" element={<AcceptedApplication />} />
              <Route path="rejected-applications" element={<RejectedApplication />} />
              <Route path="cancelled-applications" element={<CancledApplication />} />
            <Route path="add-job" element={<Addjob />} />
          </Routes>
        </div>
      </div>
      </div>
      </updateContext.Provider>
  );
};

export default AdminLanding;

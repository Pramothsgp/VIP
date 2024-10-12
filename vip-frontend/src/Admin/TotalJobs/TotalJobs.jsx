import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./TotalJobs.css";
const TotalJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 9;
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/jobs/getAlljobs")
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

    const handleDelete = (job_id) => {
      axios
        .delete(`http://localhost:5000/api/jobs/deletejob/${job_id}`)
          .then((res) => {
        toast.success(res.data.message);
          setJobs(jobs.filter((j) => j.id !== job_id));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob); // Get the jobs for the current page

  // Calculate total pages
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="total-jobs">
      <h1>Total Jobs</h1>
      <div className="admin-job-listings">
        {currentJobs.map((job) => (
          <div className="admin-job-listing" key={job._id}>
            <h3>{job.title}</h3>
            <p>Company: {job.companyName}</p>
            <p>Location: {job.location}</p>
            <p>Salary: {job.salary}</p>
            <p>Job Type: {job.jobType}</p>
            <p>Job Salary: {job.salary}</p>
                <button className="delete-job" onClick={() => { handleDelete(job.id) }}>
              Delete
            </button>
          </div>
        ))}
          </div>
          <div className="pagination">
              <button onClick={()=>{handlePageChange(currentPage - 1)} } disabled={currentPage === 1}>&lt;</button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
              <button onClick={()=>{handlePageChange(currentPage + 1)} } disabled={currentPage === totalPages}>&gt;</button>
      </div>
    </div>
  );
};

export default TotalJobs;

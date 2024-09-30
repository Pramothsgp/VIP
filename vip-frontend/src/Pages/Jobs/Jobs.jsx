import React, { useState } from "react";
import './Jobs.css';
import { jobList } from "../../Data/jobList";
import SideBar from "./Sidebar/SideBar";
import Footer from "../Footer/Footer";

function Jobs() {
  const [selectedJobType, setSelectedJobType] = useState("All");
  const [selectedJobSetup, setSelectedJobSetup] = useState("All");
  const [salaryRange, setSalaryRange] = useState([0, 40000]);
  const [currentPage, setCurrentPage] = useState(1);
  
  const scrollToTop = () => {
  return new Promise((resolve) => {
    const scrollOptions = {
      top: 0,
      behavior: "smooth",
    };

    window.scrollTo(scrollOptions);

    const checkIfScrolledToTop = () => {
      if (window.scrollY === 0) {
        resolve();
      } else {
        requestAnimationFrame(checkIfScrolledToTop);
      }
    };
    checkIfScrolledToTop();
  });
};

const handlePageChange = async (page) => {
  await scrollToTop();
  setCurrentPage(page);
};

  const filteredJobs = jobList.filter((job) => {
    const jobTypeMatch = selectedJobType === "All" || job.jobType.includes(selectedJobType);
    const jobSetupMatch = selectedJobSetup === "All" || job.setup.includes(selectedJobSetup);
    const salaryMatch = job.salary >= salaryRange[0] && job.salary <= salaryRange[1];

    return jobTypeMatch && jobSetupMatch && salaryMatch;
  });

  const jobsPerPage = 10;
  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const currentJobs = filteredJobs.slice(startIndex, endIndex);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredJobs.length / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="jobs">
      <main className="main">
        <SideBar
          handleJobTypeChange={setSelectedJobType}
          selectedJobType={selectedJobType}
          selectedJobSetup={selectedJobSetup}
          handleJobSetupChange={setSelectedJobSetup}
          salaryRange={salaryRange}
          handleSalaryRangeChange={setSalaryRange}
        />
        <div className="job-container">
          <div className="results">
            <h1>Showing Results : { filteredJobs.length }</h1>
            <div className="job-listings">
              {currentJobs.map((job) => (
                <div className="job-listing" key={job.title}>
                  <div className="job-title">
                    <h2>{job.title}</h2>
                    <span className="location">
                      {job.location} - {job.setup}
                    </span>
                  </div>
                  <div className="job-description">
                    <p>{job.description}</p>
                  </div>
                  <div className="job-detail">
                    <span className="salary"><span>₹{job.salary}</span>/month</span>
                    <span className="date">{job.date}</span>
                  </div>
                  <div className="job-actions">
                    <button className="view-details">View details</button>
                    <button className="apply-now">Apply Now</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="pagination">
              <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                &lt;
              </button>
              {pageNumbers.map((pageNumber) => (
                <button
                  key={pageNumber}
                  className={
                    currentPage === pageNumber
                      ? "pagination-item active"
                      : "pagination-item"
                  }
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </button>
              ))}
              <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === pageNumbers.length}>
                 &gt;
              </button>
            </div>
            {/* <Pagination currentPage={ currentPage} totalPages={totalPages} onPageChange={setCurrentPage} /> */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Jobs;

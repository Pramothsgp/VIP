import  { useEffect, useState } from "react";
import './Jobs.css';

import SideBar from "./Sidebar/SideBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Jobs() {

  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [selectedJobType, setSelectedJobType] = useState("All");
  const [selectedJobSetup, setSelectedJobSetup] = useState("All");
  const [salaryRange, setSalaryRange] = useState([200000, 500000]);
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
  const fetchSpeceficdata = async() => {
      try {
        const response = await axios.post("http://localhost:5000/api/getspeceficjobs", { job: selectedJobType, jobSetup: selectedJobSetup, salaryRange });
        console.log(response.data);
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
    }
    }
    fetchSpeceficdata();
  }, [selectedJobType, selectedJobSetup, salaryRange]);
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

  const jobsPerPage = 10;
  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const currentJobs = jobs.slice(startIndex, endIndex);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(jobs.length / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  const truncateText = (text, maxWords) => {
    const wordsArray = text.split(" ");
    if (wordsArray.length > maxWords) {
      return wordsArray.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };
  
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
            <h1>Showing Results : { jobs.length }</h1>
            <div className="job-listings">
              {currentJobs.map((job) => (
                <div className="job-listing" key={job.id}>
                  <div className="job-title">
                    <h2>{job.title}</h2>
                    <span className="location">
                      {job.location} - {job.setup}
                    </span>
                  </div>
                  <div className="job-description">
                    <p>{truncateText(job.description , 25)}</p>
                  </div>
                  <div className="job-detail">
                    <span className="salary"><span>₹{job.salary}</span>/anum</span>
                    <span className="date">{job.date}</span>
                  </div>
                  <div className="job-actions">
                    <button className="view-details" onClick={()=>{navigate(`/home/ViewJob/${job.id}`)}}>View details</button>
                    <button className="apply-now" onClick={() => { navigate(`/home/Applyjob/${job.id}`) }}>Apply Now</button>
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
          </div>
        </div>
      </main>
    </div>
  );
}

export default Jobs;

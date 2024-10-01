import  { useEffect, useState } from "react";
import './Jobs.css';

import SideBar from "./Sidebar/SideBar";
import axios from "axios";

function Jobs() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/api/getjobs");
  //       const data = await response.json();
  //       setJobs(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

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
    
    console.log(selectedJobSetup);
    console.log(selectedJobType);
    console.log(salaryRange);
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

  const filteredJobs = jobs.filter((job) => {
    const jobTypeMatch = selectedJobType === "All" || job.jobType.includes(selectedJobType);
    const jobSetupMatch = selectedJobSetup === "All" || job.setup.includes(selectedJobSetup);
    const salaryMatch = job.salary >= salaryRange[0] && job.salary <= salaryRange[1];

    return jobTypeMatch && jobSetupMatch && salaryMatch;
  });

  const jobsPerPage = 10;
  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const currentJobs = jobs.slice(startIndex, endIndex);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredJobs.length / jobsPerPage); i++) {
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
                <div className="job-listing" key={job.title}>
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

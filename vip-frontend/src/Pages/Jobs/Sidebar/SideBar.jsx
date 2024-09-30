import React from "react";
import './SideBar.css'
import { jobTypes } from "../../../Data/jobList";
const SideBar = ({
  handleJobTypeChange,
  selectedJobType,
  selectedJobSetup,
  handleJobSetupChange,
  salaryRange,
  handleSalaryRangeChange,
}) => {
  const jobSetups = ["All", "Remote", "Hybrid", "On-site"];

  return (
    <nav className="sidebar-container">
      <div className="filters">
        <h2>Filters</h2>
        <div className="filter-group">
          <h3>Job Type</h3>
          <ul>
            {jobTypes.map((type) => (
              <li key={type}>
                <input
                  className="sidebar-checkbox"
                  type="radio"
                  id={type}
                  name="jobType"
                  value={type}
                  checked={selectedJobType === type}
                  onChange={() => handleJobTypeChange(type)}
                />
                <label htmlFor={type}>{type}</label>
              </li>
            ))}
          </ul>
        </div>

        <div className="filter-group">
          <h3>Job Setup</h3>
          <ul>
            {jobSetups.map((setup) => (
              <li key={setup}>
                <input
                  type="radio"
                  id={setup}
                  name="jobSetup"
                  value={setup}
                  checked={selectedJobSetup === setup}
                  onChange={() => handleJobSetupChange(setup)}
                />
                <label htmlFor={setup}>{setup}</label>
              </li>
            ))}
          </ul>
        </div>

        <div className="filter-group">
          <h3>Salary Range</h3>
          <div className="salary-range">
            <div className="salary-input">
              <input
                type="range"
                min="0"
                max="355000"
                value={salaryRange[0]}
                onChange={(e) =>
                  handleSalaryRangeChange([parseInt(e.target.value), salaryRange[1]])
                }
              />
              <span>₹{salaryRange[0]}</span>
            </div>
            <div className="salary-input">
              <input
                type="range"
                min="0"
                max="355000"
                value={salaryRange[1]}
                onChange={(e) =>
                  handleSalaryRangeChange([salaryRange[0], parseInt(e.target.value)])
                }
              />
              <span> ₹{salaryRange[1]}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;

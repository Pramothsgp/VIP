import axios from "axios";
import React, { useContext, useState } from "react";
import "./Addjob.css";
import { toast } from "react-toastify";
import { updateContext } from "../../Admin/AdminLanding/AdminLanding";
const AddJob = () => {
  const jobTypes = ["Full-Time", "Part-Time", "Contractual", "Internship"];
  const jobSetups = ["Remote", "Hybrid", "On-site"];
  const {setUpdate} = useContext(updateContext);
  const [jobData, setJobData] = useState({
    title: "",
    location: "",
    setup: "",
    salary: "",
    description: "",
    companyName: "",
    qualification: "",
    responsibilities: "",
    projects: "",
    jobType: "",
    imagedata: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/addjob",
        jobData 
      );
      setUpdate((prev) => !prev);
        toast.success(response.data.message);
    } catch (error) {
      console.error("Error adding job:", error);
    }
  };

  const handleFileChange = (e) => {
    setJobData({ ...jobData, imagedata: e.target.files[0] }); // Handle file separately
  };
  return (
    <form className="job-form" onSubmit={handleSubmit}>
      <div>
        <h1>Add Job</h1>
        <div className="form-group">
          <div className="input-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="title"
              value={jobData.title}
              onChange={(e) =>
                setJobData({ ...jobData, title: e.target.value })
              }
            />
          </div>
          <div className="input-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={jobData.location}
              onChange={(e) =>
                setJobData({ ...jobData, location: e.target.value })
              }
            />
          </div>
          <div className="input-group">
            <label htmlFor="setup">Setup</label>
            <select
              id="setup"
              name="setup"
              value={jobData.setup}
              onChange={(e) =>
                setJobData({ ...jobData, setup: e.target.value })
              }
            >
              <option value="">Select Setup</option>
              {jobSetups.map((setup, index) => (
                <option key={index} value={setup}>
                  {setup}
                </option>
              ))}
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="salary">Salary</label>
            <input
              type="number"
              id="salary"
              name="salary"
              value={jobData.salary}
              onChange={(e) =>
                setJobData({ ...jobData, salary: e.target.value })
              }
            />
          </div>
          <div className="input-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={jobData.description}
              onChange={(e) =>
                setJobData({ ...jobData, description: e.target.value })
              }
            />
          </div>
          <div className="input-group">
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={jobData.companyName}
              onChange={(e) =>
                setJobData({ ...jobData, companyName: e.target.value })
              }
            />
          </div>
          <div className="input-group">
            <label htmlFor="qualification">Qualification</label>
            <input
              type="text"
              id="qualification"
              name="qualification"
              value={jobData.qualification}
              onChange={(e) =>
                setJobData({ ...jobData, qualification: e.target.value })
              }
            />
          </div>
          <div className="input-group">
            <label htmlFor="responsibilities">Responsibilities</label>
            <input
              type="text"
              id="responsibilities"
              name="responsibilities"
              value={jobData.responsibilities}
              onChange={(e) =>
                setJobData({ ...jobData, responsibilities: e.target.value })
              }
            />
          </div>
          <div className="input-group">
            <label htmlFor="projects">Projects</label>
            <input
              type="text"
              id="projects"
              name="projects"
              value={jobData.projects}
              onChange={(e) =>
                setJobData({ ...jobData, projects: e.target.value })
              }
            />
          </div>
          <div className="input-group">
            <label htmlFor="jobType">Job Type</label>
            <select
              id="jobType"
              name="jobType"
              value={jobData.jobType}
              onChange={(e) =>
                setJobData({ ...jobData, jobType: e.target.value })
              }
            >
              <option value="">Select Job Type</option>
              {jobTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="imagedata">Image</label>
            <input
              type="file"
              id="imagedata"
              name="imagedata"
              onChange={handleFileChange}
            />
          </div>
          <button type="submit">Add job</button>
        </div>
      </div>
    </form>
  );
};

export default AddJob;

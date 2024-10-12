const db = require("../../config/db");

const getJobCount = (req, res) => {
  const query = "SELECT COUNT(*) AS totalJobs FROM jobs";
  db.query(query, (err, result) => {
    if (err) {
      console.error("Error fetching job count:", err);
      res.status(500).json({ error: "Failed to fetch job count" });
    } else {
      res.status(200).json(result[0]);
    }
  });
};

 const getAllApplications = (req, res) => {
  const query = "SELECT * FROM applications JOIN jobs ON applications.job_id = jobs.id JOIN userdata ON applications.user_id = userdata.id";
  db.query(query, (err, result) => {
    if (err) {
      console.error("Error fetching applications:", err);
      res.status(500).json({ error: "Failed to fetch applications" });
    } else {
      res.status(200).json(result);
    }
  });
};

const getPendingApplications = (req, res) => {
  const query = "SELECT * FROM applications JOIN jobs ON applications.job_id = jobs.id JOIN userdata ON applications.user_id = userdata.id WHERE applications.status = 'Pending'";
  db.query(query, (err, result) => {
    if (err) {
      console.error("Error fetching pending applications:", err);
      res.status(500).json({ error: "Failed to fetch pending applications" });
    } else {
      res.status(200).json(result);
    }
  });
};
module.exports = {
    getJobCount,
    getAllApplications,
    getPendingApplications,
};
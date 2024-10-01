const db = require("../../config/db");

const getJobs = (req, res) => {
  const query = "SELECT * FROM jobs";
  db.query(query, (err, result) => {
    if (err) {
      console.error("Error fetching jobs:", err);
      res.status(500).json({ error: "Failed to fetch jobs" });
    } else {
      res.status(200).json(result);
    }
  });
};

const getSpeceficJobs = (req, res) => {
  const { job, jobSetup, salaryRange } = req.body;
  if (job === "All" && jobSetup === "All") {
    const query = "SELECT * FROM jobs WHERE salary BETWEEN ? AND ?";
    db.query(query, [...salaryRange], (err, result) => {
      if (err) {
        console.error("Error fetching jobs:", err);
        res.status(500).json({ error: "Failed to fetch jobs" });
      } else {
        res.status(200).json(result);
      }
    });
  } else if (job === "All" && jobSetup !== "All") {
    const query =
      "SELECT * FROM jobs WHERE setup = ? AND salary BETWEEN ? AND ?";
    db.query(query, [jobSetup, ...salaryRange], (err, result) => {
      if (err) {
        console.error("Error fetching jobs:", err);
        res.status(500).json({ error: "Failed to fetch jobs" });
      } else {
        res.status(200).json(result);
      }
    });
  } else if (job !== "All" && jobSetup === "All") {
    const query =
      "SELECT * FROM jobs WHERE jobType = ? AND salary BETWEEN ? AND ?";
    db.query(query, [job, ...salaryRange], (err, result) => {
      if (err) {
        console.error("Error fetching jobs:", err);
        res.status(500).json({ error: "Failed to fetch jobs" });
      } else {
        res.status(200).json(result);
      }
    });
  } else if (job !== "All" && jobSetup !== "All") {
    const query =
      "SELECT * FROM jobs WHERE jobType = ? AND setup = ? AND salary BETWEEN ? AND ?";
    db.query(query, [job, jobSetup, ...salaryRange], (err, result) => {
      if (err) {
        console.error("Error fetching jobs:", err);
        res.status(500).json({ error: "Failed to fetch jobs" });
      } else {
        res.status(200).json(result);
      }
    });
  }
};
module.exports = {
    getJobs,
    getSpeceficJobs
};

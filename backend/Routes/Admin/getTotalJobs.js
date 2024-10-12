const db = require("../../config/db");

const getTotalJobs = (req, res) => {
    const query = "SELECT *  FROM jobs";
  db.query(query, (err, result) => {
    if (err) {
      console.error("Error fetching job count:", err);
      res.status(500).json({ error: "Failed to fetch job count" });
    } else {
        res.status(200).json(result);
    }
  });
};

const deleteJob = (req, res) => {
    const { job_id } = req.params;
    const query = "DELETE FROM jobs WHERE id = ?";
    db.query(query, [job_id], (err, result) => {
      if (err) {
        console.error("Error deleting job:", err);
        res.status(500).json({ error: "Failed to delete job" });
      } else {
        res.status(200).json({ message: "Job deleted successfully" });
      }
    });
  };

module.exports = {
    getTotalJobs,
    deleteJob,
};
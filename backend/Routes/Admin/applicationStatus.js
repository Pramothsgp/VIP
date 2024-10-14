const db = require("../../config/db");

const changeApplicationStatus = (req, res) => {
    const { application_id } = req.params;
    const { status } = req.body;
    const query = "UPDATE applications SET status = ? WHERE application_id = ?";
    db.query(query, [status, application_id], (err, result) => {
      if (err) {
        console.error("Error updating application status:", err);
        res.status(500).json({ error: "Failed to update application status" });
      } else {
        res.status(200).json({ message: "Application status updated successfully" });
      }
    });
};
  
const getAcceptedApplications = (req, res) => {
    const query = "SELECT * FROM applications WHERE status = 'Accepted'";
    db.query(query, (err, result) => {
      if (err) {
        console.error("Error fetching accepted applications:", err);
        res.status(500).json({ error: "Failed to fetch accepted applications" });
      } else {
        res.status(200).json(result);
      }
    });
};

const getRejectedApplications = (req, res) => {
    const query = "SELECT * FROM applications WHERE status = 'Rejected'";
    db.query(query, (err, result) => {
      if (err) {
        console.error("Error fetching rejected applications:", err);
        res.status(500).json({ error: "Failed to fetch rejected applications" });
      } else {
        res.status(200).json(result);
      }
    });
};
module.exports = {
    changeApplicationStatus,
    getAcceptedApplications,
    getRejectedApplications,
};
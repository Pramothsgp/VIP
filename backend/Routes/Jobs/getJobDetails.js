const db = require("../../config/db");

const getJobDetail = (req, res) => {
    const { id } = req.params;
    const query = "SELECT * FROM jobs WHERE id = ?";
    db.query(query, [id], (err, result) => {
        if (err) {
            console.error("Error fetching job details:", err);
            res.status(500).json({ error: "Failed to fetch job details" });
        } else {
            if (result.length > 0) {
                res.status(200).json(result[0]);
            } else {
                res.status(404).json({ error: "Job not found" });
            }
        }
    });
};

module.exports = {
    getJobDetail,
};
const db = require("../../config/db");

const applyJob = (req, res) => {
    const { jobId } = req.params;
    console.log(req.body);
    const {user_id, username, name, email } = req.body;
    console.log(user_id,jobId, username, name, email);
    const query = `
        INSERT INTO applications (user_id, job_id, username, applicant_name, applicant_email)
        VALUES (?, ?, ?, ?, ?)
    `;
    db.query(query, [user_id, jobId, username, name, email], (err, result) => {
        if (err) {
            console.error("Error inserting application:", err);
            return res.status(500).json({ message: 'Error submitting application' });
        }

        return res.status(200).json({ message: 'Application submitted successfully!' });
    });
};


const getApplications = (req, res) => {
    const { user_id } = req.params;
    const query = `
        SELECT * FROM applications JOIN jobs ON jobs.id = job_id AND user_id = ?
    `;
    db.query(query, [user_id], (err, result) => {
        if (err) {
            console.error("Error fetching applications:", err);
            return res.status(500).json({ message: 'Error fetching applications' });
        }
         res.status(200).json(result);
    });
};

const deleteApplications = (req, res) => {
    const { application_id } = req.params;
    const query = `
        DELETE FROM applications WHERE application_id = ?
    `;
    db.query(query, [application_id], (err, result) => {
        if (err) {
            console.error("Error deleting application:", err);
            return res.status(500).json({ message: 'Error deleting application' });
        }
        return res.status(200).json({ message: 'Application deleted successfully!' });
    });
};

module.exports = {
    applyJob,
    getApplications,
    deleteApplications,
};
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

// const getApplications = (req, res) => {
//     const { user_id } = req.params;
//     console.log(req.params);
//     const query = `
//         SELECT applications.application_id, applications.applicant_name, applications.application_date,
//                jobs.title, jobs.companyName, jobs.location, jobs.salary, jobs.description 
//         FROM applications
//         JOIN jobs ON jobs.id = applications.job_id
//         WHERE applications.user_id = ?;
//     `;

//     db.query(query, [user_id], (err, result) => {
//         if (err) {
//             console.error("Error fetching applications:", err);
//             return res.status(500).json({ message: 'Error fetching applications' });
//         }

//         // Handle case when no applications are found
//         if (result.length === 0) {
//             return res.status(404).json({ message: 'No applications found for this user' });
//         }

//         // Return the applications with job details
//         console.log(result);
//         return res.status(200).json(result);
//     });
// };


module.exports = {
    applyJob,
    getApplications
};
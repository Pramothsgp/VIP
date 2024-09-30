const db = require('../../config/db');

const getJobs = (req, res) => {
    const query = 'SELECT * FROM jobs';
    db.query(query, (err, result) => {
        if (err) {
            console.error('Error fetching jobs:', err);
            res.status(500).json({ error: 'Failed to fetch jobs' });
        } else {
            // Convert BLOB data to Base64 string for each job
            // const jobsWithBase64Images = result.map(job => {
            //     if (job.imagedata) {
            //         job.imagedata = Buffer.from(job.imagedata).toString('base64');
            //     }
                
            //     return job;
            // });
            console.log(result);   
            res.status(200).json(result);
        }
    });
};

module.exports = {
    getJobs
};

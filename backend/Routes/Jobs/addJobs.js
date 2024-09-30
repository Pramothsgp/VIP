const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const db = require('../../config/db');
const addJob = (req, res) => {
    const {
        title,
        location,
        setup,
        salary,
        description,
        companyName,
        qualification,
        responsibilities,
        projects,
        jobType,
    } = req.body;
    const imagedata = req.file; // Image file comes from multer

    const query = 'INSERT INTO jobs (title, location, setup, salary, description, companyName, qualification, responsibilities, projects, jobType, imagedata) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [
        title,
        location,
        setup,
        salary,
        description,
        companyName,
        qualification,
        responsibilities,
        projects,
        jobType,
        imagedata.filename, // Use filename from multer
    ];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error('Error adding job:', err);
            res.status(500).json({ error: 'Failed to add job' });
        } else {
            console.log('Job added successfully');
            res.status(200).json({ message: 'Job added successfully' });
        }
    });
};

module.exports = {
    addJob: [upload.single('imagedata'), addJob]
};


const db = require('../../config/db');

const login = (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM userdata WHERE (username = ? OR email =?) AND password = ?';
    db.query(query,[username,username,password], (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            if (result.length > 0) {
                const user = result[0];
                const domain = result[0].email.split("@")[1].split(".")[0];
                if (domain === 'admin') {
                    res.status(200).json({ user , admin: true  , message: 'Admin Login Successful'})
                } else {
                    res.status(200).json({ user ,message: 'Login successful' });
                }
            } else {
                res.status(401).json({ message: 'Invalid username or password' });
            }
        }
    });
};

const checkUsername = (req, res) => {
    const { username } = req.params;
    console.log(req.params)
    const query = 'SELECT * FROM userdata WHERE username = ?';
    db.query(query, [username], (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            const exists = result.length > 0;
            res.status(200).json({ exists });
        }
    });
};

const checkEmail = (req, res) => {
    const { email } = req.params;
    console.log(req.params)
    const query = 'SELECT * FROM userdata WHERE email = ?';
    db.query(query, [email], (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            const exists = result.length > 0;
            res.status(200).json({ exists });
        }
    });
};

const signup = (req, res) => {
    const { username, email, password } = req.body;
    console.log(req.body);
    const query = 'INSERT INTO userdata (username, email, password) VALUES (?, ?, ?)';
    db.query(query, [username, email, password], (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            res.status(200).json({ message: 'Signup successful' });
        }
    });
};
module.exports = {
    login,
    checkUsername,
    checkEmail,
    signup,
};
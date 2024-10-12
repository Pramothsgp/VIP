import React from 'react';
import './AdminNavBar.css';  // Create this CSS file for AdminNavBar styles
import { Link, useNavigate } from 'react-router-dom';

const AdminNavBar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };
    return (
        <nav className="admin-navbar">
            <ul>
                <li><Link to={'total-jobs'}>Total Jobs</Link></li>
                <li><Link to={'total-applications'}>Total Applications</Link></li>
                <li><Link to={'pending-applications'}>Pending Applications</Link></li>
                <li><Link to={'accepted-applications'}>Accepted Applications</Link></li>
                <li><Link to={'rejected-applications'}>Rejected Applications</Link></li>
                <li><Link to={'cancelled-applications'}>Cancelled Applications</Link></li>
                <li><Link to={'total-users'}>Total Users</Link></li>
                <li><Link to={'add-job'}>Add Job</Link></li>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </ul>
        </nav>
    );
};

export default AdminNavBar;

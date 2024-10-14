import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './AdminSidebar.css'

const AdminSidebar = () => {
    const [totaljobs, setTotalJobs] = useState(0);
    const [totalApplications, setTotalApplications] = useState(0);
    const [pendingApplications, setPendingApplications] = useState(0);
    const [acceptedApplications, setAcceptedApplications] = useState(0);
    const [rejectedApplications, setRejectedApplications] = useState(0);
    const [totalUsers, setTotalUsers] = useState(0);
    const [cancledApplications, setCancelledApplications] = useState(0);
    useEffect(() => {
        axios.get('http://localhost:5000/api/jobs/totaljobs')
            .then((res) => {
                setTotalJobs(res.data.totalJobs);
            }).catch((err) => {
                console.log(err);
            })
    }, []);
    useEffect(() => {
        axios.get('http://localhost:5000/api/jobs/totalapplications')
            .then((res) => {
                setTotalApplications(res.data.length);
            }).catch((err) => {
                console.log(err);
            })
    }, []);

    useEffect(() => {
        axios.get('http://localhost:5000/api/jobs/pendingapplications')
            .then((res) => {
                setPendingApplications(res.data.length);
            }).catch((err) => {
                console.log(err);
            })
    }, []);
    useEffect(() => {
        axios.get('http://localhost:5000/api/jobs/acceptedapplications')
            .then((res) => {
                setAcceptedApplications(res.data.length);
            }).catch((err) => {
                console.log(err);
            })
    }, []);
    useEffect(() => {
        axios.get('http://localhost:5000/api/jobs/rejectedapplications')
            .then((res) => {
                setRejectedApplications(res.data.length);
            }).catch((err) => {
                console.log(err);
            })
    }, []);
    useEffect(() => {
        axios.get('http://localhost:5000/api/jobs/totalusers')
            .then((res) => {
                console.log(res);
                setTotalUsers(res.data.totalUsers);
            }).catch((err) => {
                console.log(err);
            })
    })
    useEffect(() => {
        axios.get('http://localhost:5000/api/jobs/cancelledapplications')
            .then((res) => {
                console.log(res);
                setCancelledApplications(res.data.cancelledApplications);
            }).catch((err) => {
                console.log(err);
            })
    }, []);
    return (
        <div className='admin side-bar'>
            <div className='job-application-data'>
                <div className='job-application-data-header'>Data</div>
                <div className='job-application-data-body'>
                    <p>Total jobs <span>{totaljobs}</span></p>
                    <p>Total applications <span>{totalApplications}</span></p>
                    <p>Pending applications <span>{pendingApplications}</span></p>
                    <p>Accepted applications <span>{acceptedApplications}</span></p>
                    <p>Rejected applications <span>{rejectedApplications}</span></p>
                    <p>Cancelled applications <span>{cancledApplications}</span></p>
                    <p>Total users <span>{totalUsers}</span></p>
                </div>
            </div>
        </div>
    )
};

export default AdminSidebar;
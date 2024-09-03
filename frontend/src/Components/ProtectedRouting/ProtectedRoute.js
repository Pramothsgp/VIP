import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = () => {
    const [logedin, setSetLogedin] = useState(false);
    const user = localStorage.getItem('userdata');
    const navigate = useNavigate();
    useEffect(() => {
        console.log(user);
        navigate('/');
    }, [user]);
    if (!user) {
        return (
            <h1> login to continue</h1>
        )
    }
  return (
    <div>ProtectedRoute</div>
  )
}

export default ProtectedRoute
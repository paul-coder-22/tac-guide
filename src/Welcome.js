import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { auth } from './firebase';

const Welcome = () => {
    const navigate = useNavigate();
    const logout = () => {
        auth.signOut();
        // window.location.href = '/';
        // navigate('/', { replace: true });
        // return <Navigate to="/" replace={true} push={true} />
        return <Navigate to="/" />
    }
    return (
        <div>
            <h1>Welcome</h1>
            {
                auth.currentUser.email
            }
            <button style={{ "marginLeft": "20px" }}
                onClick={logout}>
                Logout
            </button>
        </div>
    );
};

export default Welcome;
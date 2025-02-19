import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
    return (
        <header>
            <h1>MedEase: Made With Ease</h1>
            <nav>
                <ul className="nav-tabs">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/appointments">Appointments</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

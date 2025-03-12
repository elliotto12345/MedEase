import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <Link to="/">
          <span className="med">Med</span>
          <span className="ease">Ease</span>
        </Link>
      </div>
      
      <nav className="menu-items">
        <Link to="/" className="menu-item">
          <img src={process.env.PUBLIC_URL + "/assets/Home-page.png"} alt="" className="nav-icon" />
          <span>Home</span>
        </Link>
        <Link to="/appointments" className="menu-item">
          <img src={process.env.PUBLIC_URL + "/assets/Schedule.png"} alt="" className="nav-icon" />
          <span>Appointments</span>
        </Link>
        <Link to="/messages" className="menu-item">
          <img src={process.env.PUBLIC_URL + "/assets/Messaging.png"} alt="" className="nav-icon" />
          <span>Messages</span>
        </Link>
        <Link to="/payments" className="menu-item">
          <img src={process.env.PUBLIC_URL + "/assets/payments.png"} alt="" className="nav-icon" />
          <span>Payments</span>
        </Link>
        <Link to="/settings" className="menu-item">
          <img src={process.env.PUBLIC_URL + "/assets/Settings.png"} alt="" className="nav-icon" />
          <span>Settings</span>
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;

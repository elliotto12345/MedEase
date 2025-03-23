import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig"; // Ensure correct path to firebaseConfig
import "./Settings.css";

const SettingsPage = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (!confirmLogout) return;

    try {
      await signOut(auth);
      navigate("/login"); // Redirect to login page after logout
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="settings-container">
      {/* Profile Section */}
      <div className="profile-container">
        <h2 className="section-header">Profile</h2>
        <div className="profile-content">
          <img
            src="https://via.placeholder.com/100" // Replace with the actual profile image URL
            alt="Profile"
            className="profile-picture"
          />
          <div className="details-card">
            <div className="detail-item">
              <p className="label">NAME</p>
              <p>MedEase</p>
            </div>
            <div className="detail-item">
              <p className="label">PHONE</p>
              <p>233200515605</p>
            </div>
            <div className="detail-item">
              <p className="label">EMAIL</p>
              <p>samuelakpanglo03@gmail.com</p>
            </div>
            <div className="detail-item">
              <p className="label">HEARD ABOUT US</p>
              <p>-</p>
            </div>
            <div className="detail-item">
              <p className="label">COUNTRY</p>
              <p>-</p>
            </div>
            <button className="edit-button">Edit Details</button>
          </div>
        </div>
      </div>

      {/* Change Password Section */}
      <div className="password-container">
        <h2 className="section-header">Change Password</h2>
        <div className="input-group">
          <label>Old Password</label>
          <input type="password" className="input-field" placeholder="Old Password" />
        </div>
        <div className="input-group">
          <label>New Password</label>
          <input type="password" className="input-field" placeholder="New Password" />
        </div>
        <div className="input-group">
          <label>Confirm New Password</label>
          <input type="password" className="input-field" placeholder="Confirm New Password" />
        </div>
        <button className="change-password-button">Change Password</button>
      </div>

      {/* Logout Button */}
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default SettingsPage;

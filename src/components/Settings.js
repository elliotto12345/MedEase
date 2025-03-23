import { EmailAuthProvider, reauthenticateWithCredential, signOut, updatePassword } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebaseConfig";
import "./Settings.css";

const SettingsPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [updatedPhone, setUpdatedPhone] = useState("");
  const [updatedCountry, setUpdatedCountry] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const data = userDoc.data();
          setUserData(data);
          setUpdatedPhone(data.phone || "");
          setUpdatedCountry(data.country || "");
        }
      }
    };
    fetchUserData();
  }, []);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = async () => {
    setError("");
    setSuccess("");
    const user = auth.currentUser;
    if (user) {
      try {
        const userRef = doc(db, "users", user.uid);
        await updateDoc(userRef, {
          phone: updatedPhone,
          country: updatedCountry,
        });
        setUserData({ ...userData, phone: updatedPhone, country: updatedCountry });
        setEditMode(false);
        setSuccess("Profile updated successfully.");
      } catch (error) {
        setError("Failed to update profile.");
      }
    }
  };

  const handleChangePassword = async () => {
    setError("");
    setSuccess("");
    if (newPassword !== confirmNewPassword) {
      setError("New passwords do not match.");
      return;
    }

    const user = auth.currentUser;
    if (user) {
      const credential = EmailAuthProvider.credential(user.email, oldPassword);
      try {
        await reauthenticateWithCredential(user, credential);
        await updatePassword(user, newPassword);
        setSuccess("Password updated successfully.");
        setOldPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
      } catch (error) {
        setError("Failed to update password. Ensure your old password is correct.");
      }
    }
  };

  const handleLogout = async () => {
    if (window.confirm("Are you sure you want to log out?")) {
      try {
        await signOut(auth);
        navigate("/login");
      } catch (error) {
        console.error("Logout failed:", error);
      }
    }
  };

  return (
    <div className="settings-container">
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      
      <div className="profile-container">
        <h2 className="section-header">Profile</h2>
        <div className="profile-content">
          <img src="https://via.placeholder.com/100" alt="Profile" className="profile-picture" />
          <div className="details-card">
            <div className="detail-item"><p className="label">Name</p><p>{userData?.firstName} {userData?.lastName}</p></div>
            <div className="detail-item"><p className="label">Phone</p>
              {editMode ? (
                <input type="text" value={updatedPhone} onChange={(e) => setUpdatedPhone(e.target.value)} />
              ) : (
                <p>{userData?.phone || "-"}</p>
              )}
            </div>
            <div className="detail-item"><p className="label">Email</p><p>{userData?.email}</p></div>
            <div className="detail-item"><p className="label">Country</p>
              {editMode ? (
                <select value={updatedCountry} onChange={(e) => setUpdatedCountry(e.target.value)}>
                  <option value="Ghana">Ghana</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                </select>
              ) : (
                <p>{userData?.country || "-"}</p>
              )}
            </div>
            {editMode ? (
              <button className="save-button" onClick={handleSave}>Save</button>
            ) : (
              <button className="edit-button" onClick={handleEdit}>Edit Details</button>
            )}
          </div>
        </div>
      </div>

      <div className="password-container">
        <h2 className="section-header">Change Password</h2>
        <div className="input-group"><label>Old Password</label>
          <input type="password" className="input-field" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
        </div>
        <div className="input-group"><label>New Password</label>
          <input type="password" className="input-field" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        </div>
        <div className="input-group"><label>Confirm New Password</label>
          <input type="password" className="input-field" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} />
        </div>
        <button className="change-password-button" onClick={handleChangePassword}>Change Password</button>
      </div>
      
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default SettingsPage;

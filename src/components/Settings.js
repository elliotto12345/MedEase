import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig"; // ✅ Correct import path
import "./Settings.css";

const Settings = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (!confirmLogout) return;

    try {
      await signOut(auth);
      navigate("/login"); // ✅ Redirect to login page after logout
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="settings">
      {/* Go Back Button */}
      <div className="go-back">
        <Link to="/">
          <img src="/assets/go-back.png" alt="Go Back" />
        </Link>
        <p>Settings</p>
      </div>

      {/* User Profile */}
      <div className="profile">
        <img src="/assets/profile.png" alt="Profile" />
        <div className="text">
          <p>Group 16</p>
          <p>Group16@gmail.com</p>
        </div>
      </div>

      {/* Account Settings */}
      <div className="account-settings">
        <img src="/assets/User.png" alt="User" />
        <div className="text">
          <p>Account settings</p>
          <p>Change email, password</p>
        </div>
      </div>

      {/* Notifications */}
      <div className="notifications">
        <img src="/assets/notifications.png" alt="Notifications" />
        <div className="text">
          <p>Notifications</p>
          <p>Set Reminder</p>
        </div>
      </div>

      {/* Help Section */}
      <div className="help">
        <img src="/assets/Help.png" alt="Help" />
        <div className="text">
          <p>Help</p>
          <p>Help center, contact us, privacy policy</p>
        </div>
      </div>

      {/* Logout Button */}
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Settings;

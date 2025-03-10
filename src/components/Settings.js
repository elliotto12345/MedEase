import { Link } from "react-router-dom";
import "./Settings.css";

const Settings = () => {
  return (
    <div className="settings">
      <div className="go-back">
        <Link to="/">
          <img src="/assets/go-back.png" alt="go-back" />
        </Link>
        <p>Settings</p>
      </div>
      <div className="profile">
        <img src="/assets/profile.png" alt="profile" />
        <div className="text">
          <p>Group 16</p>
          <p>Group16@gmail.com</p>
        </div>
      </div>
      <div className="account-settings">
        <img src="/assets/User.png" alt="user" />
        <div className="text">
          <p>Account settings</p>
          <p>Change email, password</p>
        </div>
      </div>
      <div className="notifications">
        <img src="/assets/notifications.png" alt="notifications" />
        <div className="text">
          <p>Notifications</p>
          <p>Set Reminder</p>
        </div>
      </div>
      <div className="help">
        <img src="/assets/Help.png" alt="help" />
        <div className="text">
          <p>Help</p>
          <p>Help center, contact us, privacy policy</p>
        </div>
      </div>
      <button>Log Out</button>
    </div>
  );
};

export default Settings;

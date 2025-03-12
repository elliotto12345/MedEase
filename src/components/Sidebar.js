import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const location = useLocation();
  let routeName = location.pathname;
  return (
    <div className="sidebar">
      <div className="logo">
        {/* <p>
          <span style={{ color: "rgb(99, 99, 99)" }}>Med</span>Ease
        </p> */}
        <img src="/assets/MedEaseLogo.png" alt="logo" />
      </div>
      <div className="menus">
        <Link
          to="/"
          className={`m-home menu ${routeName === "/" ? "active-bg" : ""}`}
        >
          <img src="/assets/Home-page.png" alt="home" width={50} height={50} />
          <p className={routeName === "/" ? "active-text" : ""}>Home</p>
        </Link>
        <Link
          to="/appointments"
          className={`m-appointments menu ${
            routeName === "/appointments" ? "active-bg" : ""
          }`}
        >
          <img
            src="/assets/schedule.png"
            alt="appointments"
            width={50}
            height={50}
          />
          <p className={routeName === "/appointments" ? "active-text" : ""}>
            Appointments
          </p>
        </Link>
        <Link
          to="/messages"
          className={`m-messages menu ${
            routeName === "/messages" ? "active-bg" : ""
          }`}
        >
          <img
            src="/assets/Messaging.png"
            alt="messages"
            width={50}
            height={50}
          />
          <p className={routeName === "/messages" ? "active-text" : ""}>
            Messages
          </p>
        </Link>
        <Link
          to="/payments"
          className={`m-payments menu ${
            routeName === "/payments" ? "active-bg" : ""
          }`}
        >
          <img
            src="/assets/payments.png"
            alt="payments"
            width={50}
            height={50}
          />
          <p className={routeName === "/payments" ? "active-text" : ""}>
            Payments
          </p>
        </Link>
        <Link
          to="/settings"
          className={`m-settings menu ${
            routeName === "/settings" ? "active-bg" : ""
          }`}
        >
          <img
            src="/assets/Settings.png"
            alt="settings"
            width={50}
            height={50}
          />
          <p className={routeName === "/settings" ? "active-text" : ""}>
            Settings
          </p>
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

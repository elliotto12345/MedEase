import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const doctor = true;
  const location = useLocation();
  let routeName = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Icon */}
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="logo">
          <img src="/assets/sidebar-logo.png" alt="logo" />
        </div>
        <div className="menus">
          <Link
            to="/"
            className={`m-home menu ${routeName === "/" ? "active-bg" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            <img
              src="/assets/Home-page.png"
              alt="home"
              width={50}
              height={50}
            />
            <p className={routeName === "/" ? "active-text" : ""}>Home</p>
          </Link>
          <Link
            to="/appointments"
            className={`m-appointments menu ${
              routeName === "/appointments" ? "active-bg" : ""
            }`}
            onClick={() => setIsOpen(false)}
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
            onClick={() => setIsOpen(false)}
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
          {!doctor && (
            <Link
              to="/payments"
              className={`m-payments menu ${
                routeName === "/payments" ? "active-bg" : ""
              }`}
              onClick={() => setIsOpen(false)}
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
          )}

          <Link
            to="/settings"
            className={`m-settings menu ${
              routeName === "/settings" ? "active-bg" : ""
            }`}
            onClick={() => setIsOpen(false)}
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
      </div>
    </>
  );
};

export default Sidebar;

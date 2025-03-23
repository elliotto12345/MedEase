import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./DocHome.css";

function DocHome() {
  const navigate = useNavigate();

  const currentDate = new Date()
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, " - ");

  return (
    <div className="home">
      <div className="welcome-bar">
        <div className="welcome-text">
          <span>Welcome</span>
          {/* <img
            src={process.env.PUBLIC_URL + "/assets/So So (1).png"}
            alt="Welcome"
            className="hand-icon"
          /> */}
        </div>
        <div className="date-display">
          <img
            src={process.env.PUBLIC_URL + "/assets/Calendar.png"}
            alt="Calendar"
            className="calendar-icon"
          />
          <span>{currentDate}</span>
        </div>
      </div>

      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Hello Dr Agyemang</h1>
          <div className="stats">
            <div className="stat">
              <p>Total patients</p> <br />
              <p style={{ color: "black", fontWeight: "bold" }}>130</p>
            </div>
            <div className="stat">
              <p>Appointments Today</p>
              <br />
              <p style={{ color: "blue", fontWeight: "bold" }}>5</p>
            </div>
            <div className="stat">
              <p>Patients Treated</p>
              <br />
              <p style={{ color: "green", fontWeight: "bold" }}>11</p>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img
            src={process.env.PUBLIC_URL + "/assets/stet1.png"}
            alt="Stethoscope"
          />
        </div>
      </section>

      <div className="features">
        <div className="card">
          <p>Upcoming Appointment</p>
          <div className="info">
            <img src="/assets/User.png" width={70} height={70} alt="user" />
            <p>
              #M3444wwe <br />{" "}
              <span style={{ fontWeight: "bold" }}>Samuel Oduro</span>
            </p>
            <p>
              General Visit <br />{" "}
              <span style={{ fontWeight: "bold" }}>Samuel Oduro</span>
            </p>
          </div>
          <div className="btns">
            <button className="chat">Chat</button>
            <button className="video-call">Video Call</button>
          </div>
        </div>
        <div className="notifications">
          <p>Notifications</p>
          <div className="notification">
            <img src="/assets/Calendar.png" alt="bell" />
            <p>
              You have an appointmen with Dr Zhomi <br />
              Just now
            </p>
          </div>
          <div className="notification">
            <img src="/assets/notifications.png" alt="notification" />
            <p>
              Booking confirmed on 30 March, 2025 <br />
              Just now
            </p>
          </div>
          <div className="notification">
            <img src="/assets/Calendar.png" alt="bell" />
            <p>
              You have an appointmen with Dr Zhomi <br />
              Just now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocHome;

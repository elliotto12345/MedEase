import React from "react";
import { useNavigate } from "react-router-dom";
import "./Appointments.css";

const Appointments = () => {
  const navigate = useNavigate();

  const specialties = [
    {
      id: 1,
      name: "Dialysis",
      description: "For kidney patients",
      icon: process.env.PUBLIC_URL + "/assets/Dialysis.png",
      background: "gray",
    },
    {
      id: 2,
      name: "Throat and Nose",
      description:
        "Blocked nose, running nose, sore throat, difficulty in swallowing",
      icon: process.env.PUBLIC_URL + "/assets/Runny Nose.png",
      background: "white",
    },
    {
      id: 3,
      name: "Psychiatrist",
      description: "Mental illness, depression",
      icon: process.env.PUBLIC_URL + "/assets/Mental Health.png",
      background: "gray",
    },
    {
      id: 4,
      name: "Optometrist",
      description: "Eye irritation, eye check up",
      icon: process.env.PUBLIC_URL + "/assets/Glasses.png",
      background: "white",
    },
    {
      id: 5,
      name: "Dentist",
      description: "Toothache, dental checkup",
      icon: process.env.PUBLIC_URL + "/assets/Toothache.png",
      background: "gray",
    },
    {
      id: 6,
      name: "Radiology",
      description: "X-rays, CT scans, MRI and other medical imaging",
      icon: process.env.PUBLIC_URL + "/assets/X-ray.png",
      background: "white",
    },
    {
      id: 7,
      name: "Paediatrician",
      description: "Infant illness",
      icon: process.env.PUBLIC_URL + "/assets/Child with Pacifier.png",
      background: "gray",
    },
    {
      id: 8,
      name: "Dermatologist",
      description: "Skin infections",
      icon: process.env.PUBLIC_URL + "/assets/Dermatology.png",
      background: "white",
    },
  ];

  const handleBooking = (specialty) => {
    navigate("/appointments/booking", { state: { specialty } });
  };

  return (
    <div className="appointments-page">
      <header className="appointments-header">
        <div className="circle-back" onClick={() => navigate("/")}>
          <i className="fas fa-arrow-left"></i>
        </div>
        <div className="header-text">
          <h1>Book an Appointment</h1>
          <p>Select a category based on medical specialty</p>
        </div>
      </header>

      <div className="specialties-list">
        {specialties.map((specialty) => (
          <div
            key={specialty.id}
            className={`specialty-item ${specialty.background}`}
          >
            <div className="specialty-left">
              <img
                src={specialty.icon}
                alt={specialty.name}
                className="specialty-icon"
              />
              <div className="specialty-content">
                <h3>{specialty.name}</h3>
                <p>{specialty.description}</p>
              </div>
            </div>
            <button
              className="book-now-btn"
              onClick={() => handleBooking(specialty)}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointments;

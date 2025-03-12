import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Consultation.css';

const Consultation = () => {
  const navigate = useNavigate();
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const doctors = [
    {
      id: 1,
      name: "Dr. Abdul Basit",
      specialty: "Cardiologist",
      image: "/assets/dc_4.png",
      status: "Online"
    },
    {
      id: 2,
      name: "Dr. Darkwah Martha Kinih ",
      specialty: "Neurologist",
      image: "/assets/dc_2.png",
      status: "Online"
    },
    {
      id: 3,
      name: "Dr. Samuel Katey",
      specialty: "Pediatrician",
      image: "/assets/dc_3.png",
      status: "Away"
    },
    {
      id: 4,
      name: "Dr. Tabil ",
      specialty: "Dermatologist",
      image: "/assets/dc_1.png",
      status: "Online"
    }
  ];

  const startChat = (doctor) => {
    setSelectedDoctor(doctor);
    navigate('/messages/chat', { state: { doctor } });
  };

  return (
    <div className="consultation-page">
      <header className="consultation-header">
        <div className="back-button" onClick={() => navigate('/messages')}>
          <div className="circle-back">
            <i className="fas fa-arrow-left"></i>
          </div>
          <div className="header-text">
            <h1>Start Consultation</h1>
            <p>Select a doctor to start your consultation</p>
          </div>
        </div>
      </header>

      <div className="doctors-grid">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card" onClick={() => startChat(doctor)}>
            <div className="doctor-image-container">
              <img src={doctor.image} alt={doctor.name} className="doctor-image" />
              <span className={`status-indicator ${doctor.status.toLowerCase()}`}></span>
            </div>
            <div className="doctor-info">
              <h3>{doctor.name}</h3>
              <p>{doctor.specialty}</p>
              <span className={`status-text ${doctor.status.toLowerCase()}`}>
                {doctor.status}
              </span>
            </div>
            <button className="start-chat-btn">
              Start Chat
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Consultation; 
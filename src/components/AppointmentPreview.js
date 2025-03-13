import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './AppointmentPreview.css';

const AppointmentPreview = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { appointment } = location.state || {};

  if (!appointment) {
    navigate('/appointments');
    return null;
  }

  return (
    <div className="appointment-preview">
      <div className="preview-header">
        <h1>Appointment Preview</h1>
        <button className="close-btn" onClick={() => navigate('/appointments')}>
          ✕
        </button>
      </div>

      <div className="preview-content">
        <h2 className="success-heading">Congratulations!</h2>
        
        <p className="success-message">
          You have successfully booked an appointment to see a {appointment.specialty.toLowerCase()}.
        </p>

        <div className="appointment-details">
          <div className="detail-row">
            <h3>Date :</h3>
            <p>{appointment.date}</p>
          </div>

          <div className="detail-row">
            <h3>Time:</h3>
            <p>{appointment.time}</p>
          </div>

          <div className="detail-row">
            <h3>Hospital:</h3>
            <p>{appointment.hospital}</p>
          </div>

          <div className="detail-row">
            <h3>Doctor's Name :</h3>
            <p>{appointment.doctorName}</p>
          </div>

          <div className="detail-row">
            <h3>Office :</h3>
            <p>{appointment.office}</p>
          </div>
        </div>

        <p className="warning-message">
          Please ensure that you print out this receipt, arrive on due time and show this official receipt to the receiptsionist for directions
        </p>

        <button className="print-btn" onClick={() => window.print()}>
          Print receipt
        </button>
      </div>
    </div>
  );
};

export default AppointmentPreview; 
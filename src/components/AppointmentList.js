import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AppointmentList.css';

const AppointmentList = () => {
  const navigate = useNavigate();

  const appointments = [
    {
      status: 'Pending',
      date: '20th February',
      time: '09:30 AM',
      details: 'Dental appointment',
      id: 1
    },
    {
      status: 'Pending',
      date: '16th February',
      time: '05:30 AM',
      details: 'Dialysis appointment',
      id: 2
    },
    {
      status: 'Success',
      date: '14th February',
      time: '09:30 AM',
      details: 'Cardiology appointment',
      id: 3
    },
    {
      status: 'Success',
      date: '7th February',
      time: '05:30 AM',
      details: 'Dialysis appointment',
      id: 4
    },
    {
      status: 'Success',
      date: '5th February',
      time: '10:30 AM',
      details: 'Dental appointment',
      id: 5
    },
    {
      status: 'Success',
      date: '1st February',
      time: '10:30 AM',
      details: 'CheckUp appointment',
      id: 6
    }
  ];

  const handleDelete = (id) => {
    // Handle delete functionality
    console.log('Delete appointment:', id);
  };

  return (
    <div className="appointments-list-page">
      <header className="appointments-list-header">
        <div className="circle-back" onClick={() => navigate('/')}>
          <i className="fas fa-arrow-left"></i>
        </div>
        <h1>All Appointments</h1>
      </header>

      <div className="appointments-table">
        <div className="table-header">
          <div className="status-col">Status</div>
          <div className="date-col">Date</div>
          <div className="time-col">Time</div>
          <div className="details-col">Details</div>
          <div className="actions-col"></div>
        </div>

        {appointments.map((appointment) => (
          <div key={appointment.id} className="table-row">
            <div className={`status-col ${appointment.status.toLowerCase()}`}>
              {appointment.status}
            </div>
            <div className="date-col">{appointment.date}</div>
            <div className="time-col">{appointment.time}</div>
            <div className="details-col">{appointment.details}</div>
            <div className="actions-col">
              {appointment.status === 'Pending' ? (
                <button 
                  className="delete-btn"
                  onClick={() => handleDelete(appointment.id)}
                >
                  Delete
                </button>
              ) : (
                <button className="completed-btn">Completed</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentList; 
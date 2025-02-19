import React from 'react';

const Dashboard = ({ appointments }) => {
    return (
        <div>
            <h2>User Dashboard</h2>
            <h3>My Appointments</h3>
            <ul>
                {appointments.length > 0 ? appointments.map((appointment, index) => (
                    <li key={index}>{appointment.patientName} - {appointment.date}</li>
                )) : <li>No appointments found.</li>}
            </ul>
            <button>Edit Profile</button>
        </div>
    );
};

export default Dashboard;

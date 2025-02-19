import React from 'react';
import DoctorAppointments from './DoctorAppointments';

const DoctorDashboard = () => {
    return (
        <div>
            <h2>Doctor Dashboard</h2>
            <p>View your appointments and manage patient information here.</p>
            <DoctorAppointments />
        </div>
    );
};

export default DoctorDashboard;

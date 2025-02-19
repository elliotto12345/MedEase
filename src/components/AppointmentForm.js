import React, { useState } from 'react';

const AppointmentForm = ({ addAppointment }) => {
    const [patientName, setPatientName] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addAppointment({ patientName, date: appointmentDate });
        setPatientName('');
        setAppointmentDate('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Book an Appointment</h2>
            <input 
                type="text" 
                placeholder="Patient Name" 
                value={patientName} 
                onChange={(e) => setPatientName(e.target.value)} 
                required 
            />
            <input 
                type="date" 
                value={appointmentDate} 
                onChange={(e) => setAppointmentDate(e.target.value)} 
                required 
            />
            <button type="submit">Book Appointment</button>
        </form>
    );
};

export default AppointmentForm;

import React, { useEffect, useState } from 'react';

const DoctorAppointments = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await fetch('/api/doctor/appointments');
                if (!response.ok) throw new Error('Failed to fetch appointments');
                const data = await response.json();
                setAppointments(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchAppointments();
    }, []);

    return (
        <div>
            <h2>Your Appointments</h2>
            <ul>
                {appointments.map(appointment => (
                    <li key={appointment.id}>
                        <p>Patient: {appointment.patientName}</p>
                        <p>Date: {appointment.date}</p>
                        <p>Status: {appointment.status}</p>
                        {/* Add buttons for managing appointments here */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DoctorAppointments;

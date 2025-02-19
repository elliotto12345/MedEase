import React from 'react';

const AppointmentTable = ({ appointments }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Patient Name</th>
                    <th>Date</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {appointments.map((appointment, index) => (
                    <tr key={index}>
                        <td>{appointment.patientName}</td>
                        <td>{appointment.date}</td>
                        <td>{appointment.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AppointmentTable;

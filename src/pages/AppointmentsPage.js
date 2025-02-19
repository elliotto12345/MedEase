import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import AppointmentTable from '../components/AppointmentTable';
import Footer from '../components/Footer';
import { fetchAppointments } from '../utils/api';

const AppointmentsPage = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const loadAppointments = async () => {
            try {
                const appointmentsData = await fetchAppointments();
                setAppointments(appointmentsData);
            } catch (error) {
                console.error('Error fetching appointments:', error);
            }
        };
        loadAppointments();
    }, []);

    return (
        <div style={{ backgroundColor: '#ffffff', color: '#000000' }}>
            <Navbar />
            <h1 style={{ color: '#660066' }}>Your Appointments</h1>
            <AppointmentTable appointments={appointments} />
            <Footer />
        </div>
    );
};

export default AppointmentsPage;

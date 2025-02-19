import React from 'react';
import Navbar from '../components/Navbar';
import AppointmentForm from '../components/AppointmentForm';
import Footer from '../components/Footer';
import { addAppointment } from '../utils/api';

const BookAppointmentPage = () => {
    const handleAddAppointment = async (appointmentData) => {
        try {
            await addAppointment(appointmentData);
        } catch (error) {
            console.error('Error adding appointment:', error);
        }
    };

    return (
        <div style={{ backgroundColor: '#ffffff', color: '#000000' }}>
            <Navbar />
            <h1 style={{ color: '#660066' }}>Book an Appointment</h1>
            <AppointmentForm addAppointment={handleAddAppointment} />
            <Footer />
        </div>
    );
};

export default BookAppointmentPage;

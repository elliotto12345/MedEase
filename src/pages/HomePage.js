import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AppointmentTable from '../components/AppointmentTable';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <h1>Welcome to MedEase</h1>
            <AppointmentTable appointments={[]} /> {/* Replace with actual appointments data */}
            <Footer />
        </div>
    );
};

export default HomePage;

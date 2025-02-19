import React from 'react';
import Navbar from '../components/Navbar';
import AdminDoctorForm from '../components/AdminDoctorForm';
import Footer from '../components/Footer';

const AdminPanelPage = () => {
    return (
        <div style={{ backgroundColor: '#ffffff', color: '#000000' }}>
            <Navbar />
            <h1 style={{ color: '#660066' }}>Admin Panel</h1>
            <AdminDoctorForm /> {/* Add logic for adding/editing doctors */}
            <Footer />
        </div>
    );
};

export default AdminPanelPage;

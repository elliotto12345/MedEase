import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import DoctorCard from '../components/DoctorCard';
import Footer from '../components/Footer';
import { fetchDoctors } from '../utils/api';

const DoctorListPage = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const loadDoctors = async () => {
            try {
                const doctorsData = await fetchDoctors();
                setDoctors(doctorsData);
            } catch (error) {
                console.error('Error fetching doctors:', error);
            }
        };
        loadDoctors();
    }, []);

    return (
        <div style={{ backgroundColor: '#ffffff', color: '#000000' }}>
            <Navbar />
            <h1 style={{ color: '#660066' }}>Doctors List</h1>
            <div className="doctor-list">
                {doctors.map((doctor) => (
                    <DoctorCard key={doctor.id} doctor={doctor} />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default DoctorListPage;

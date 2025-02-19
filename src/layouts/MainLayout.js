import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
    return (
        <div style={{ backgroundColor: '#ffffff', color: '#000000' }}>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;

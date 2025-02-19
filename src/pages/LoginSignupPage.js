import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LoginSignupPage = () => {
    return (
        <div style={{ backgroundColor: '#ffffff', color: '#000000' }}>
            <Navbar />
            <h1 style={{ color: '#660066' }}>Login / Signup</h1>
            {/* Add login and signup forms here */}
            <Footer />
        </div>
    );
};

export default LoginSignupPage;

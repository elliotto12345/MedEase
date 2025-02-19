import React from 'react';
import './Home.css'; // Assuming you have a CSS file for styling

const Home = () => {
    return (
        <div>
            <h2>Welcome to MedEase</h2>
            <div className="image-gallery">
                <h3>Your Authentic EzyDoc</h3>
                <p>Providing you with the best healthcare services....</p>
                {/* You can add more content or links here */}
            </div>
        </div>
    );
};

export default Home;

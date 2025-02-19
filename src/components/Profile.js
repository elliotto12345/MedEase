import React, { useState, useEffect } from 'react';
import { fetchUserProfile, updateUserProfile } from '../utils/api'; 

const Profile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        const getUserProfile = async () => {
            const profileData = await fetchUserProfile();
            setName(profileData.name);
            setEmail(profileData.email);
            setPhone(profileData.phone);
        };
        getUserProfile();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedProfile = { name, email, phone };
        await updateUserProfile(updatedProfile);
        console.log('Profile updated:', updatedProfile);
    };

    return (
        <div>
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="tel" 
                    placeholder="Phone" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                    required 
                />
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default Profile;

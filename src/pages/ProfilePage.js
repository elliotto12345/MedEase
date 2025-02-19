import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ProfileForm from '../components/ProfileForm';
import Footer from '../components/Footer';
import { fetchUserProfile, updateUserProfile } from '../utils/api';

const ProfilePage = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const loadUserProfile = async () => {
            try {
                const profileData = await fetchUserProfile();
                setUser(profileData);
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };
        loadUserProfile();
    }, []);

    const handleUpdateUser = async (updatedUser) => {
        try {
            await updateUserProfile(updatedUser);
            setUser(updatedUser);
        } catch (error) {
            console.error('Error updating user profile:', error);
        }
    };

    return (
        <div>
            <Navbar />
            <h1>Your Profile</h1>
            <ProfileForm user={user} updateUser={handleUpdateUser} />
            <Footer />
        </div>
    );
};

export default ProfilePage;

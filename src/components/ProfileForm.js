import React from 'react';

const ProfileForm = ({ user, updateUser }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(user);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit Profile</h2>
            <input 
                type="text" 
                value={user.name} 
                onChange={(e) => updateUser({ ...user, name: e.target.value })} 
                required 
            />
            <input 
                type="email" 
                value={user.email} 
                onChange={(e) => updateUser({ ...user, email: e.target.value })} 
                required 
            />
            <button type="submit">Update Profile</button>
        </form>
    );
};

export default ProfileForm;

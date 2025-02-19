const API_URL = 'http://localhost:5000/api'; // Adjust based on your backend

// Fetch user profile
export const fetchUserProfile = async () => {
    const response = await fetch(`${API_URL}/profile`);
    if (!response.ok) throw new Error('Failed to fetch user profile');
    return response.json();
};

// Update user profile
export const updateUserProfile = async (profileData) => {
    const response = await fetch(`${API_URL}/profile`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profileData),
    });
    if (!response.ok) throw new Error('Failed to update user profile');
    return response.json();
};

// Fetch appointments
export const fetchAppointments = async () => {
    const response = await fetch(`${API_URL}/appointments`);
    if (!response.ok) throw new Error('Failed to fetch appointments');
    return response.json();
};

// Add appointment
export const addAppointment = async (appointmentData) => {
    const response = await fetch(`${API_URL}/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(appointmentData),
    });
    if (!response.ok) throw new Error('Failed to add appointment');
    return response.json();
};

// Fetch doctors
export const fetchDoctors = async () => {
    const response = await fetch(`${API_URL}/doctors`);
    if (!response.ok) throw new Error('Failed to fetch doctors');
    return response.json();
};

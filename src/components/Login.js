import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [role, setRole] = useState('patient'); // Default role
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, role }),
            });
            if (!response.ok) throw new Error('Login failed');
            const data = await response.json();
            localStorage.setItem('token', data.token);
            // Redirect based on role
            if (role === 'doctor') {
                navigate('/doctor-dashboard');
            } else if (role === 'admin') {
                navigate('/admin-dashboard');
            } else {
                navigate('/dashboard'); // Redirect for patient
            }
        } catch (error) {
            console.error(error);
            alert('Login failed. Please check your credentials.');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <p>Login with your details to continue (email and password).</p>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type={showPassword ? 'text' : 'password'} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <label>
                    <input type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)} /> Show Password
                </label>
                <div>
                    <label>Select Role:</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="patient">Patient</option>
                        <option value="doctor">Doctor</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account yet? <a href="/signup">Sign up</a></p>
        </div>
    );
};

export default Login;

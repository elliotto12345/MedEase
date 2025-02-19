import React from 'react';

const DoctorCard = ({ doctor }) => {
    return (
        <div className="doctor-card">
            <h3>{doctor.name}</h3>
            <p>Specialty: {doctor.specialty}</p>
            <p>Rating: {doctor.rating}</p>
            <button>View Profile</button>
        </div>
    );
};

export default DoctorCard;

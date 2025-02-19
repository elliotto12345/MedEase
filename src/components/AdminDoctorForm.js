import React from 'react';

const AdminDoctorForm = ({ doctor, addDoctor }) => {
    return (
        <form onSubmit={addDoctor}>
            <h2>{doctor ? 'Edit Doctor' : 'Add Doctor'}</h2>
            <input type="text" placeholder="Name" defaultValue={doctor ? doctor.name : ''} required />
            <input type="text" placeholder="Specialty" defaultValue={doctor ? doctor.specialty : ''} required />
            <button type="submit">{doctor ? 'Update Doctor' : 'Add Doctor'}</button>
        </form>
    );
};

export default AdminDoctorForm;

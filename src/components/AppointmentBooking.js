import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./AppointmentBooking.css";

const AppointmentBooking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { specialty } = location.state || {};

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    doctor: "",
    date: "",
    time: "",
    appointmentType: "",
    reason: "",
    phoneNumber: "",
  });

  // Mock available doctors with their schedules
  const doctors = [
    {
      id: 1,
      name: specialty?.doctorName || "Dr. Sarah Johnson",
      specialty: specialty?.name || "Dermatologist",
      availability: {
        "2024-02-07": ["09:00 AM", "10:00 AM", "02:00 PM"],
        "2024-02-08": ["09:30 AM", "11:00 AM", "03:30 PM"],
      },
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: specialty?.name || "Optometrist",
      availability: {
        "2024-02-09": ["10:00 AM", "02:30 PM", "04:00 PM"],
        "2024-02-10": ["09:00 AM", "11:00 AM", "02:00 PM"],
      },
    },
    {
      id: 3,
      name: "Dr. Emily Brown",
      specialty: specialty?.name || "Radiologist",
      availability: {
        "2024-02-07": ["09:30 AM", "02:00 PM", "03:30 PM"],
        "2024-02-11": ["10:00 AM", "11:00 AM", "04:00 PM"],
      },
    },
  ];

  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);

  // Update available time slots when doctor or date changes
  useEffect(() => {
    if (formData.doctor && formData.date) {
      const selectedDoctor = doctors.find((d) => d.name === formData.doctor);
      const slots = selectedDoctor?.availability[formData.date] || [];
      setAvailableTimeSlots(slots);

      if (!slots.includes(formData.time)) {
        setFormData((prev) => ({ ...prev, time: "" }));
      }
    }
  }, [formData.doctor, formData.date]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Get available dates for the selected doctor
  const getAvailableDates = () => {
    const selectedDoctor = doctors.find((d) => d.name === formData.doctor);
    return selectedDoctor ? Object.keys(selectedDoctor.availability) : [];
  };

  // Handle navigation steps
  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => (step === 1 ? navigate("/appointments") : setStep((prev) => prev - 1));

  // Handle form submission
  const handleSubmit = () => {
    const selectedDoctor = doctors.find((d) => d.name === formData.doctor);
    const appointment = {
      specialty: selectedDoctor.specialty,
      doctorName: formData.doctor,
      date: new Date(formData.date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      time: formData.time,
      hospital: specialty?.hospital || "KNUST hospital",
      office: specialty?.office || "Room 17, 1st floor",
      type: formData.appointmentType,
      reason: formData.reason,
      phoneNumber: formData.phoneNumber,
    };

    navigate("/appointments/preview", { state: { appointment } });
  };

  return (
    <div className="appointment-booking">
      <div className="booking-header">
        <button className="back-btn" onClick={handleBack}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <h1>Book Appointment</h1>
      </div>

      <div className="booking-progress">
        {["Select Doctor", "Date & Time", "Appointment Type", "Reason", "Phone Number"].map(
          (label, index) => (
            <div key={index} className={`progress-step ${step >= index + 1 ? "active" : ""}`}>
              <div className="step-number">{index + 1}</div>
              <span>{label}</span>
            </div>
          )
        )}
      </div>

      <div className="booking-form">
        {step === 1 && (
          <div className="form-step">
            <h2>Select Doctor</h2>
            <select name="doctor" value={formData.doctor} onChange={handleInputChange} required>
              <option value="">Choose a doctor</option>
              {doctors.map((doctor) => (
                <option key={doctor.id} value={doctor.name}>
                  {doctor.name} - {doctor.specialty}
                </option>
              ))}
            </select>
            <button className="next-btn" onClick={handleNext} disabled={!formData.doctor}>
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="form-step">
            <h2>Select Date & Time</h2>
            <select name="date" value={formData.date} onChange={handleInputChange} required>
              <option value="">Select date</option>
              {getAvailableDates().map((date) => (
                <option key={date} value={date}>
                  {new Date(date).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </option>
              ))}
            </select>

            <select name="time" value={formData.time} onChange={handleInputChange} required>
              <option value="">Select time</option>
              {availableTimeSlots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>

            <button className="next-btn" onClick={handleNext} disabled={!formData.date || !formData.time}>
              Next
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="form-step">
            <h2>Appointment Type</h2>
            {["In-person", "Virtual"].map((type) => (
              <label key={type}>
                <input type="radio" name="appointmentType" value={type} checked={formData.appointmentType === type} onChange={handleInputChange} />
                <span>{type}</span>
              </label>
            ))}
            <button className="next-btn" onClick={handleNext} disabled={!formData.appointmentType}>
              Next
            </button>
          </div>
        )}

        {step === 4 && (
          <div className="form-step">
            <h2>Reason for Appointment</h2>
            <textarea name="reason" value={formData.reason} onChange={handleInputChange} required />
            <button className="next-btn" onClick={handleNext} disabled={!formData.reason}>
              Next
            </button>
          </div>
        )}

        {step === 5 && (
          <div className="form-step">
            <h2>Enter Your Phone Number</h2>
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required />
            <button className="submit-btn" onClick={handleSubmit} disabled={!formData.phoneNumber}>
              Confirm & Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentBooking;

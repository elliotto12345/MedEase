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

  // State for available time slots
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);

  // Update available time slots when date or doctor changes
  useEffect(() => {
    if (formData.doctor && formData.date) {
      const selectedDoctor = doctors.find((d) => d.name === formData.doctor);
      const slots = selectedDoctor?.availability[formData.date] || [];
      setAvailableTimeSlots(slots);

      // Clear selected time if it's not available
      if (!slots.includes(formData.time)) {
        setFormData((prev) => ({ ...prev, time: "" }));
      }
    }
  }, [formData.doctor, formData.date]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (step === 1) {
      navigate("/appointments");
    } else {
      setStep((prev) => prev - 1);
    }
  };

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
    };

    navigate("/appointments/preview", { state: { appointment } });
  };

  // Get available dates for the selected doctor
  const getAvailableDates = () => {
    const selectedDoctor = doctors.find((d) => d.name === formData.doctor);
    return selectedDoctor ? Object.keys(selectedDoctor.availability) : [];
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
        <div className={`progress-step ${step >= 1 ? "active" : ""}`}>
          <div className="step-number">1</div>
          <span>Select Doctor</span>
        </div>
        <div className={`progress-step ${step >= 2 ? "active" : ""}`}>
          <div className="step-number">2</div>
          <span>Date & Time</span>
        </div>
        <div className={`progress-step ${step >= 3 ? "active" : ""}`}>
          <div className="step-number">3</div>
          <span>Appointment Type</span>
        </div>
        <div className={`progress-step ${step >= 4 ? "active" : ""}`}>
          <div className="step-number">4</div>
          <span>Reason</span>
        </div>
      </div>

      <div className="booking-form">
        {step === 1 && (
          <div className="form-step">
            <h2>Select Doctor</h2>
            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleInputChange}
              required
            >
              <option value="">Choose a doctor</option>
              {doctors.map((doctor) => (
                <option key={doctor.id} value={doctor.name}>
                  {doctor.name} - {doctor.specialty}
                </option>
              ))}
            </select>
            <button
              className="next-btn"
              onClick={handleNext}
              disabled={!formData.doctor}
            >
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="form-step">
            <h2>Select Date & Time</h2>
            <div className="date-time-info">
              <p>Please select from available dates for {formData.doctor}</p>
            </div>
            <select
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            >
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

            <select
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              required
              disabled={!formData.date}
            >
              <option value="">Select time</option>
              {availableTimeSlots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            {availableTimeSlots.length === 0 && formData.date && (
              <p className="no-slots-message">
                No available time slots for this date
              </p>
            )}
            <button
              className="next-btn"
              onClick={handleNext}
              disabled={!formData.date || !formData.time}
            >
              Next
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="form-step">
            <h2>Appointment Type</h2>
            <div className="appointment-types">
              <label>
                <input
                  type="radio"
                  name="appointmentType"
                  value="In-person"
                  checked={formData.appointmentType === "In-person"}
                  onChange={handleInputChange}
                />
                <span>In-person</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="appointmentType"
                  value="Virtual"
                  checked={formData.appointmentType === "Virtual"}
                  onChange={handleInputChange}
                />
                <span>Virtual</span>
              </label>
            </div>
            <button
              className="next-btn"
              onClick={handleNext}
              disabled={!formData.appointmentType}
            >
              Next
            </button>
          </div>
        )}

        {step === 4 && (
          <div className="form-step">
            <h2>Reason for Appointment</h2>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleInputChange}
              placeholder="Please describe your symptoms or reason for the appointment..."
              required
            />
            <button
              className="submit-btn"
              onClick={handleSubmit}
              disabled={!formData.reason}
            >
              Confirm & Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentBooking;

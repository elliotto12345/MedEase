import React from "react";
import { useNavigate } from "react-router-dom";
import "./Pharmacy.css";

const popularPharmacies = [
  { id: 1, name: "Zhoim Pharmacy", image: "/assets/p1.jpg" },
  { id: 2, name: "MediPlus Pharmacy", image: "/assets/p2.jpg" },
  { id: 3, name: "HealthFirst Pharmacy", image: "/assets/p3.jpg" },
  { id: 4, name: "PharmaCare", image: "/assets/p4.jpg" },
];

const recommendedPharmacies = [
  { id: 5, name: "Wellness Pharmacy", image: "/assets/p5.jpg" },
  { id: 6, name: "MedEase Pharmacy", image: "/assets/p6.jpg" },
  { id: 7, name: "Vitality Pharmacy", image: "/assets/p7.jpg" },
  { id: 8, name: "Lifeline Pharmacy", image: "/assets/p8.jpg" },
];

const PharmacyPage = () => {
  const navigate = useNavigate();

  const handleSelectPharmacy = (pharmacy) => {
    navigate(`/pharmacy-details/${pharmacy.name}`);
  };

  return (
    <div className="pharmacy-container">
      {/* Header */}
      <div className="pharmacy-header">
        <button className="back-button">⬅</button>
        <h1>Pharmacy</h1>
      </div>

      {/* Subtitle */}
      <p className="pharmacy-subtitle">
        Order and pay for drugs online from your comfort zone
      </p>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button className="filter-button">Popular</button>
        <button className="filter-button">Recommended</button>
        <button className="filter-button">Availability</button>
        <button className="filter-button">Ratings</button>
        <button className="filter-button active">All</button>
      </div>

      {/* Popular Pharmacy */}
      <h2 className="pharmacy-section-title">Popular Pharmacy</h2>
      <div className="pharmacy-grid">
        {popularPharmacies.map((pharmacy) => (
          <div
            key={pharmacy.id}
            className="pharmacy-card"
            onClick={() => handleSelectPharmacy(pharmacy)}
          >
            <img
              src={pharmacy.image}
              alt={pharmacy.name}
              className="pharmacy-image"
            />
            <p className="pharmacy-name">{pharmacy.name}</p>
          </div>
        ))}
      </div>

      {/* Recommended Pharmacy */}
      <h2 className="pharmacy-section-title">Recommended Pharmacy</h2>
      <div className="pharmacy-grid">
        {recommendedPharmacies.map((pharmacy) => (
          <div
            key={pharmacy.id}
            className="pharmacy-card"
            onClick={() => handleSelectPharmacy(pharmacy)}
          >
            <img
              src={pharmacy.image}
              alt={pharmacy.name}
              className="pharmacy-image"
            />
            <p className="pharmacy-name">{pharmacy.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PharmacyPage;

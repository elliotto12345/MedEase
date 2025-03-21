import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./PharmacyDetails.css";

const PharmacyDetails = () => {
  const { pharmacyName } = useParams();
  const [selectedCategory, setSelectedCategory] = useState("General");
  const [prescription, setPrescription] = useState(null);
  const navigate = useNavigate();

  const categories = [
    "General", "Eye Care", "Men’s Care", "Women’s Care", "Child Care", "Skin Care", "Hair Care"
  ];

  const handleFileUpload = (event) => {
    setPrescription(event.target.files[0]);
  };

  return (
    <div className="pharmacy-details-container">
      {/* Header */}
      <div className="header">
        <button className="back-button" onClick={() => navigate(-1)}>←</button>
        <h1>Welcome to {pharmacyName || "Pharmacy"}</h1>
      </div>
      
      <p className="subtitle">Order for drugs, pay online and it will be delivered</p>
      
      {/* Categories */}
      <h2>Select drug based on categories</h2>
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-button ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div style={{ marginTop: "30px" }}>
        <hr />
      </div>

      {/* Prescription Upload */}
      <div className="prescription-section">
        <label>Insert a prescription:</label>
        <div className="upload-box">
          {prescription ? (
            <div className="file-preview">
              <p>{prescription.name}</p>
              <button className="remove-file" onClick={() => setPrescription(null)}>✖</button>
            </div>
          ) : (
            <label className="upload-label">
              <input type="file" accept="image/*, .pdf" onChange={handleFileUpload} hidden />
              <span className="upload-icon">+</span>
            </label>
          )}
        </div>
      </div>
      
      {/* Redirect to Medicines Page */}
      <button className="done-button" onClick={() => navigate("/medicines")}>
        Done
      </button>
    </div>
  );
};

export default PharmacyDetails;

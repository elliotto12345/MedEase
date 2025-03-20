import React, { useEffect, useState } from 'react';
import './Medicines.css';

const MedicinePage = () => {
  const [selectedCategories, setSelectedCategories] = useState(['Hair Care', 'Skin Care']);
  const [searchTerm, setSearchTerm] = useState('');
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await fetch(`https://api.example.com/medicines?search=${searchTerm}`);
        const data = await response.json();
        setMedicines(data.map(med => ({ ...med, price: `${med.price} GHS` })));
      } catch (error) {
        console.error('Error fetching medicines:', error);
      }
    };

    if (searchTerm) {
      fetchMedicines();
    } else {
      setMedicines([
        { id: 1, name: 'Benadryl Allergy', image: 'benadryl.png', price: '50 GHS' },
        { id: 2, name: 'Aciclovir Cream', image: 'aciclovir.png', price: '30 GHS' },
        { id: 3, name: 'Fenistil Capsules', image: 'fenistil.png', price: '40 GHS' },
        { id: 4, name: 'Benadryl Allergy', image: 'benadryl.png', price: '50 GHS' },
      ]);
    }
  }, [searchTerm]);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  return (
    <div className="medicine-container">
      {/* Sidebar */}
      <div className="medicine-sidebar">
        <button className="category-header">⬅ Categories</button>
        <div className="category-list">
          {['Hair Care', 'Skin Care'].map((category) => (
            <div key={category} className="category-item">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => toggleCategory(category)}
              />
              <span>{category}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="medicine-content">
        <input
          type="text"
          placeholder="Enter drug name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        
        <div className="medicine-grid">
          {medicines.map((medicine) => (
            <div key={medicine.id} className="medicine-item">
              <img src={medicine.image} alt={medicine.name} />
              <p>{medicine.name}</p>
              <p className="medicine-price">{medicine.price}</p>
              <button className="buy-button">Buy</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicinePage;
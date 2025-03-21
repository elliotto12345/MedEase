import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaBars, FaSearch, FaShoppingCart, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Medicines.css";

const MedicinePage = () => {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [medicines, setMedicines] = useState([]);
  const [cart, setCart] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false); // For toggling sidebar

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await fetch(`https://api.example.com/medicines?search=${searchTerm}`);
        const data = await response.json();
        setMedicines(data.map((med) => ({ ...med, price: Number(med.price) })));
      } catch (error) {
        console.error("Error fetching medicines:", error);
      }
    };

    if (searchTerm) {
      fetchMedicines();
    } else {
      setMedicines([
        { id: 1, name: "Benadryl Allergy", image: "/assets/m1.jpg", price: 50, category: "Allergy" },
        { id: 2, name: "Aciclovir Cream", image: "/assets/m2.jpg", price: 30, category: "Skin Care" },
        { id: 3, name: "Fenistil Capsules", image: "/assets/m3.jpg", price: 40, category: "Allergy" },
        { id: 4, name: "Panadol Extra", image: "/assets/m4.jpg", price: 50, category: "Pain Relief" },
      ]);
    }
  }, [searchTerm]);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const addToCart = (medicine) => {
    if (!cart.some((item) => item.id === medicine.id)) {
      setCart([...cart, medicine]);
    }
  };

  const proceedToPayment = () => {
    if (cart.length === 0) {
      alert("Please select at least one item.");
      return;
    }
    localStorage.setItem("selectedMedicines", JSON.stringify(cart));
    navigate("/payment");
  };

  return (
    <div className="medicine-container">
      {/* Hamburger Button for Mobile */}
      <button className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div className={`medicine-sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="category-header" onClick={() => setSidebarOpen(false)}>
          <FaArrowLeft className="back-icon" />
          Categories
        </button>
        <div className="category-list">
          {["Hair Care", "Skin Care", "Pain Relief", "Allergy"].map((category) => (
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
        {/* Top Bar */}
        <div className="top-bar">
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Enter drug name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-bar"
            />
          </div>
          <div className="cart-icon-container" onClick={proceedToPayment}>
            <FaShoppingCart className="cart-icon" />
            {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
          </div>
        </div>

        {/* Medicines Grid */}
        <div className="medicine-grid">
          {medicines
            .filter((medicine) =>
              selectedCategories.length === 0 || selectedCategories.includes(medicine.category)
            )
            .map((medicine) => (
              <div key={medicine.id} className="medicine-item">
                <img src={medicine.image} alt={medicine.name} />
                <p>{medicine.name}</p>
                <p className="medicine-price">GHS {medicine.price}</p>
                <button className="buy-button" onClick={() => addToCart(medicine)}>
                  {cart.some((item) => item.id === medicine.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
        </div>

        {/* Proceed to Payment Button */}
        {cart.length > 0 && (
          <div className="cart-summary">
            <strong>Total Items: {cart.length}</strong>
            <button className="proceed-payment" onClick={proceedToPayment}>
              Proceed to Payment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicinePage;

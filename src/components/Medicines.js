import React, { useEffect, useState } from "react";
// import { FaChevronLeft, FaSearch, FaShoppingCart } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import "./Medicines.css";

const MedicinePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryFromParams = queryParams.get("search") || "";

  const [searchTerm, setSearchTerm] = useState(categoryFromParams);
  const [medicines, setMedicines] = useState([
    {
      id: 1,
      name: "Benadryl Allergy",
      image: "/assets/m1.jpg",
      price: 50,
      category: "Allergy",
    },
    {
      id: 2,
      name: "Aciclovir Cream",
      image: "/assets/m2.jpg",
      price: 30,
      category: "Skin Care",
    },
    {
      id: 3,
      name: "Fenistil Capsules",
      image: "/assets/m3.jpg",
      price: 40,
      category: "Allergy",
    },
    {
      id: 4,
      name: "Panadol Extra",
      image: "/assets/m4.jpg",
      price: 50,
      category: "Pain Relief",
    },
  ]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchMedicines = async () => {
      if (!searchTerm) return;
      try {
        const response = await fetch(
          `https://api.fda.gov/drug/label.json?search=openfda.brand_name:${searchTerm}&limit=10`
        );
        const data = await response.json();

        const medicinesData = data.results.map((item, index) => ({
          id: index + 5,
          name: item.openfda.brand_name
            ? item.openfda.brand_name[0]
            : "Unknown",
          image:
            item.openfda.image_url && item.openfda.image_url.length > 0
              ? item.openfda.image_url[0]
              : "/assets/default_medicine_image.jpg", // Default image if unavailable
          price: Math.floor(Math.random() * 100) + 1,
          category: searchTerm,
        }));

        setMedicines((prevMedicines) => [...prevMedicines, ...medicinesData]);
      } catch (error) {
        console.error("Error fetching medicines:", error);
      }
    };

    fetchMedicines();
  }, [searchTerm]);

  const toggleCartItem = (medicine) => {
    if (cart.some((item) => item.id === medicine.id)) {
      setCart(cart.filter((item) => item.id !== medicine.id));
    } else {
      setCart([...cart, medicine]);
    }
  };

  const proceedToPayment = () => {
    if (cart.length === 0) {
      alert("Please select at least one item.");
      return;
    }
    localStorage.setItem("selectedMedicines", JSON.stringify(cart));
    navigate("/paymentprocess");
  };

  return (
    <div className="medicine-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        {/* <FaChevronLeft className="back-icon" /> */}
      </button>

      <div className="medicine-content">
        <div className="top-bar">
          <div className="search-container">
            {/* <FaSearch className="search-icon" /> */}
            <input
              type="text"
              placeholder="Enter drug name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-bar"
            />
          </div>
          <div className="cart-icon-container" onClick={proceedToPayment}>
            {/* <FaShoppingCart className="cart-icon" /> */}
            {cart.length > 0 && (
              <span className="cart-badge">{cart.length}</span>
            )}
          </div>
        </div>

        <div className="medicine-grid">
          {medicines.length > 0 ? (
            medicines.map((medicine) => (
              <div key={medicine.id} className="medicine-item">
                <img src={medicine.image} alt={medicine.name} />
                <p>{medicine.name}</p>
                <p className="medicine-price">GHS {medicine.price}</p>
                <button
                  className="buy-button"
                  onClick={() => toggleCartItem(medicine)}
                >
                  {cart.some((item) => item.id === medicine.id)
                    ? "Remove from Cart"
                    : "Add to Cart"}
                </button>
              </div>
            ))
          ) : (
            <p>No medicines found. Please try a different search term.</p>
          )}
        </div>

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

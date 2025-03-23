import React, { useEffect, useState } from "react";
import { PaystackButton } from "react-paystack";
import { useNavigate } from "react-router-dom";
import "./PaymentProcess.css";

const PaymentProcess = () => {
  const publicKey = "pk_live_71d65eb541776517545a57459c6bd666bd630181";
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    address: "",
  });

  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const storedCart =
      JSON.parse(localStorage.getItem("selectedMedicines")) || [];
    setCart(storedCart);
    setTotalAmount(
      storedCart.reduce((sum, item) => sum + Number(item.price), 0)
    );
  }, []);

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handlePayment = () => {
    if (!customer.email || !customer.email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    if (totalAmount <= 0) {
      alert("Invalid payment amount.");
      return;
    }
  };

  const componentProps = {
    email: customer.email,
    amount: totalAmount * 100,
    currency: "GHS",
    publicKey,
    text: "Pay with Paystack",
    onSuccess: (reference) => {
      alert(`Payment successful! Reference: ${reference.transaction}`);
      localStorage.removeItem("selectedMedicines");
      navigate("/");
    },
    onClose: () => alert("Payment cancelled"),
  };

  return (
    <div className="receipt-container">
      {/* Header */}
      <div className="receipt-header">
        <h2>Pharmacy Receipt</h2>
        <span className="close-button" onClick={() => navigate(-1)}>
          X
        </span>
      </div>

      {/* Billing & Delivery */}
      <div className="receipt-content">
        <div className="billing-details">
          <h3>Billing Details:</h3>
          <label>Full Name:</label>
          <input type="text" name="fullName" onChange={handleChange} required />
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            onChange={handleChange}
            required
          />
          <label>Email:</label>
          <input type="email" name="email" onChange={handleChange} required />
          <h3>Delivery Details:</h3>
          <label>Enter delivery address:</label>
          <textarea name="address" rows="3" onChange={handleChange}></textarea>
        </div>

        {/* Order Details */}
        <div className="order-details">
          <h3>Order Details:</h3>
          <table>
            <thead>
              <tr>
                <th>Products</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>1</td>
                  <td>GHS {item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="total-section">
            <strong>Total: GHS {totalAmount}</strong>
          </div>
        </div>
      </div>

      {/* Footer (Payment Buttons) */}
      <div className="receipt-footer">
        <button
          className="pay-later"
          onClick={() => {
            alert("payment postponed");
            setTimeout(navigate("/payments"), 3000);
          }}
        >
          Pay Later
        </button>
        <div onClick={handlePayment}>
          <PaystackButton {...componentProps} className="confirm-pay" />
        </div>
      </div>
    </div>
  );
};

export default PaymentProcess;

import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import "./Payment.css";

const Payment = () => {
  const publicKey = "pk_test_533ccc4b2e836680f5b521c59c8ed65a68a3028b";
  const [customer, setCustomer] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    address: "",
  });

  const amount = 110 * 100;

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handlePayment = () => {
    if (!customer.email || !customer.email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    if (amount <= 0) {
      alert("Invalid payment amount.");
      return;
    }
  };

  const componentProps = {
    email: customer.email,
    amount,
    currency: "GHS",
    publicKey,
    text: "Pay with Paystack",
    onSuccess: (reference) => {
      alert(`Payment successful! Reference: ${reference.transaction}`);
    },
    onClose: () => alert("Payment cancelled"),
  };

  return (
    <div className="receipt-container">
      <div className="receipt-header">
        <h2>Pharmacy Receipt</h2>
        <span className="close-button">X</span>
      </div>
      <div className="receipt-content">
        <div className="billing-details">
          <h3>Billing Details:</h3>
          <label>Full Name:</label>
          <input type="text" name="fullName" onChange={handleChange} />
          <label>Phone Number:</label>
          <input type="text" name="phoneNumber" onChange={handleChange} />
          <label>Email:</label>
          <input type="email" name="email" onChange={handleChange} required />
          <h3>Delivery Details:</h3>
          <label>Enter delivery address:</label>
          <textarea name="address" rows="3" onChange={handleChange}></textarea>
        </div>
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
              <tr>
                <td>Easylife Vitamin C</td>
                <td>1</td>
                <td>70</td>
              </tr>
              <tr>
                <td>Panadol Extra</td>
                <td>7</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Flucooxallin</td>
                <td>3</td>
                <td>20</td>
              </tr>
              <tr>
                <td>Strobin</td>
                <td>3</td>
                <td>10</td>
              </tr>
            </tbody>
          </table>
          <div className="total-section">
            <strong>Total: GHS 110</strong>
          </div>
        </div>
      </div>
      <div className="receipt-footer">
        <button className="pay-later">Pay Later</button>
        <div onClick={handlePayment}>
          <PaystackButton {...componentProps} className="confirm-pay" />
        </div>
      </div>
    </div>
  );
};

export default Payment;

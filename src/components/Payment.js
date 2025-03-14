// PharmacyReceipt.js
import React from "react";
import "./Payment.css";

const Payment = () => {
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
          <input type="text" />
          <label>Phone Number:</label>
          <input type="text" />
          <label>Email:</label>
          <input type="text" />
          <h3>Delivery Details:</h3>
          <label>Enter delivery address:</label>
          <textarea rows="3"></textarea>
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
            <strong>Total: 110</strong>
          </div>
        </div>
      </div>
      <div className="receipt-footer">
        <button className="pay-later">Pay Later</button>
        <button className="confirm-pay">Confirm and Pay</button>
      </div>
    </div>
  );
};

export default Payment;

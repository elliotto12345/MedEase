import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebaseConfig";
import "./PasswordResetPage.css";

const PasswordResetPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePasswordReset = async () => {
    setMessage("");
    setError("");
    if (!email) {
      setError("Please enter your email.");
      return;
    }

    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent! Check your inbox.");
      setEmail("");
    } catch (err) {
      setError("Failed to send password reset email. Try again.");
    }
    setLoading(false);
  };

  return (
    <div className="password-reset-container">
      <div className="password-reset-box">
        {/* Padlock Icon */}
        <div className="icon-container">
        <img src="/assets/padlock_icon.png" alt="Padlock Icon" />
        </div>

        <h2>Forgot password?</h2>
        <p>No worries, we’ll send you reset instructions.</p>

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button onClick={handlePasswordReset} disabled={loading}>
          {loading ? "Sending..." : "Reset password"}
        </button>

        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}

        <Link to="/login" className="back-to-login">← Back to log in</Link>
      </div>
    </div>
  );
};

export default PasswordResetPage;

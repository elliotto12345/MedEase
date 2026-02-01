import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig"; // Firebase import
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (!user.emailVerified) {
        setError("Please verify your email before logging in.");
        await signOut(auth); // Prevent unverified users from staying logged in
        return;
      }

      alert("Login successful!");
      navigate("/appointments");
    } catch (error) {
      setError(error.message.replace("Firebase:", "").trim());
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <div className="login-header">
            <div className="logo">
              <h1>
                Med<span style={{ color: "#667eea", paddingRight: "5px" }}>Ease</span>
              </h1>
              <p>Welcome Back to Your Healthcare Journey</p>
            </div>
          </div>
          
          <div className="login-form">
            <h2>Sign In</h2>
            <p className="form-subtitle">Access your MedEase account</p>
            
            {error && <div className="error-message">{error}</div>}
            
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <div className="password-input">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "👁️" : "👁️‍🗨️"}
                  </button>
                </div>
              </div>

              <div className="form-options">
                <Link to="/password-reset" className="forgot-password">
                  Forgot Password?
                </Link>
              </div>

              <button type="submit" className="login-btn">
                Sign In
                <span>→</span>
              </button>

              <div className="divider">
                <span>OR</span>
              </div>

              <div className="social-login">
                <button type="button" className="social-btn google">
                  <span className="social-icon">G</span>
                  Continue with Google
                </button>
                <button type="button" className="social-btn apple">
                  <span className="social-icon">🍎</span>
                  Continue with Apple
                </button>
              </div>

              <div className="signup-prompt">
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </div>
            </form>
          </div>
        </div>

        <div className="login-right">
          <img src="/assets/login.png" alt="login illustration" className="login-image-full" />
        </div>
      </div>
    </div>
  );
};

export default Login;

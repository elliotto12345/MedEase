import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebaseConfig";
import "./Signup.css";

const Signup = () => {
  const [role, setRole] = useState("patient");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (!agree) {
      setError("You must agree to the terms and policy.");
      return;
    }

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        firstName,
        lastName,
        email,
        role,
        createdAt: serverTimestamp(),
      });

      await sendEmailVerification(user);
      window.alert("Signup successful! A verification email has been sent. Please verify your email before logging in.");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setError(error.message.replace("Firebase:", "").trim());
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-left">
          <div className="signup-header">
            <div className="logo">
              <h1>
                Med<span style={{ color: "#667eea", paddingRight: "5px" }}>Ease</span>
              </h1>
              <p>Your Healthcare Journey Starts Here</p>
            </div>
          </div>
          
          <div className="signup-form">
            <h2>Create Account</h2>
            <p className="form-subtitle">Join thousands of patients and doctors</p>
            
            {error && <div className="error-message">{error}</div>}
            
            <form onSubmit={handleSignup}>
              <div className="form-group">
                <label>I am a</label>
                <div className="role-selector">
                  <button 
                    type="button" 
                    className={`role-btn ${role === "patient" ? "active" : ""}`}
                    onClick={() => setRole("patient")}
                  >
                    <span>👤</span>
                    Patient
                  </button>
                  <button 
                    type="button" 
                    className={`role-btn ${role === "doctor" ? "active" : ""}`}
                    onClick={() => setRole("doctor")}
                  >
                    <span>👨‍⚕️</span>
                    Doctor
                  </button>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>

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
                    placeholder="Create a strong password"
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
                <p className="password-hint">
                  Min 8 chars: uppercase, lowercase, number & special char
                </p>
              </div>

              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={() => setAgree(!agree)}
                  />
                  <span className="checkmark"></span>
                  I agree to the Terms of Service and Privacy Policy
                </label>
              </div>

              <button type="submit" className="signup-btn" disabled={loading}>
                {loading ? (
                  <span className="loading-spinner">Creating Account...</span>
                ) : (
                  <>
                    Create Account
                    <span>→</span>
                  </>
                )}
              </button>

              <div className="login-link">
                Already have an account? <a href="/login">Sign In</a>
              </div>
            </form>
          </div>
        </div>

        <div className="signup-right">
          <img src="/assets/login.png" alt="signup illustration" className="signup-image-full" />
        </div>
      </div>
    </div>
  );
};

export default Signup;

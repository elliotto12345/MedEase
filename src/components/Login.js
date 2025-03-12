import { signInWithEmailAndPassword } from "firebase/auth";
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
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      navigate("/appointments");
    } catch (error) {
      setError(error.message); // Show detailed error message
    }
  };

  return (
    <div className="login">
      <div className="image">
        <img src="/assets/login.png" alt="login" />
      </div>
      <div className="form">
        <h1>
          Med<span style={{ color: "purple" }}>Ease</span> Login
        </h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleLogin}>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <img
              src={showPassword ? "/assets/show.png" : "/assets/hide.png"}
              onClick={() => setShowPassword(!showPassword)}
              alt={showPassword ? "show" : "hide"}
              width={30}
              height={30}
              style={{ cursor: "pointer" }}
            />
          </div>
          <Link to="/password-reset">Forgot Password?</Link>
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account yet?{" "}
          <Link to="/signup" style={{ color: "purple" }}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

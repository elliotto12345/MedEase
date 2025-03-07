import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(null);
  return (
    <div className="login">
      <div className="image">
        <img src="/assets/login.png" alt="login" />
      </div>
      <div className="form">
        <h1>
          Med<span style={{ color: "purple" }}>Ease</span> Login
        </h1>
        <form>
          <div>
            <label>Select Role:</label>
            <select>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div>
            <input type="text" placeholder="Username" required />
          </div>
          <div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
            />
            {showPassword ? (
              <img
                src="/assets/show.png"
                onClick={() => setShowPassword(false)}
                alt="show"
                width={30}
                height={30}
              />
            ) : (
              <img
                src="/assets/Hide.png"
                onClick={() => setShowPassword(true)}
                alt="hide"
                width={30}
                height={30}
              />
            )}
          </div>
          <Link to="/">Forgot password</Link>

          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account yet?{" "}
          <Link to="/login" style={{ color: "purple" }}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

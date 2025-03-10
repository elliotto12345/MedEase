import { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="sign-up">
      <div className="form">
        <h1>
          Med<span style={{ color: "purple" }}>Ease</span> SignUp
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
            <input type="text" placeholder="Last Name" required />
          </div>
          <div>
            <input type="text" placeholder="First Name" required />
          </div>
          <div>
            <input type="email" placeholder="Email" required />
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
          <div>
            <input type="checkbox" />
            <p>Yes, I agree to the terms and policy of MedEase</p>
          </div>

          <button type="submit">Sign Up</button>
        </form>
        {/* <p>
          Don't have an account yet?{" "}
          <Link to="/login" style={{ color: "purple" }}>
            Sign up
          </Link>
        </p> */}
      </div>
      <div className="image">
        <img src="/assets/login.png" alt="login" />
      </div>
    </div>
  );
};

export default Signup;

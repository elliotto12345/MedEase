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
    <div className="sign-up">
      <div className="form">
        <h1>
          Med<span style={{ color: "purple" }}>Ease</span> SignUp
        </h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSignup}>
          <div>
            <label>Select Role:</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password (min 8 chars, uppercase, lowercase, number, special char)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <img
              src={showPassword ? "/assets/show.png" : "/assets/hide.png"}
              onClick={() => setShowPassword(!showPassword)}
              alt="toggle visibility"
              width={30}
              height={30}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div>
            <input
              type="checkbox"
              checked={agree}
              onChange={() => setAgree(!agree)}
            />
            <p>Yes, I agree to the terms and policy of MedEase</p>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
      <div className="image">
        <img src="/assets/login.png" alt="login" />
      </div>
    </div>
  );
};

export default Signup;

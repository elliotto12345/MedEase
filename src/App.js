import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AppointmentBooking from "./components/AppointmentBooking";
import AppointmentList from "./components/AppointmentList";
import AppointmentPreview from "./components/AppointmentPreview";
import ChatSession from "./components/ChatSession";
import Consultation from "./components/Consultation";
import DocAppointments from "./components/DocAppointments";
import DocHome from "./components/DocHome";
import Medicines from "./components/Medicines";
import PaymentProcess from "./components/PaymentProcess";
import PharmacyDetails from "./components/PharmacyDetails";
import Receipts from "./components/Receipts";
import AppointmentsPage from "./pages/AppointmentsPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MessagesPage from "./pages/MessagesPage";
import PasswordResetPage from "./pages/PasswordResetPage";
import PaymentsPage from "./pages/PaymentsPage";
import PharmacyPage from "./pages/PharmacyPage";
import SettingsPage from "./pages/SettingsPage";
import SignupPage from "./pages/SignupPage";

function App() {
  const [doctor, setDoctor] = useState(false); // Start as false
  const [loading, setLoading] = useState(true); // Start as true

  useEffect(() => {
    const auth = getAuth();
    const db = getFirestore();

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const userData = userSnap.data();
          console.log("User Data:", userData); // Debugging
          setDoctor(userData.role === "doctor");
        } else {
          console.log("User document does not exist.");
        }
      } else {
        console.log("No authenticated user.");
        setDoctor(false);
      }
      setLoading(false); // Ensure loading is set to false after checking
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Prevents rendering before user role is fetched
  }

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/password-reset" element={<PasswordResetPage />} />
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="/receipts" element={<Receipts />} />
          <Route path="/paymentprocess" element={<PaymentProcess />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/messages/chat" element={<ChatSession />} />
          <Route path="/messages/consultation" element={<Consultation />} />
          <Route path="/appointments" element={doctor ? <DocAppointments /> : <AppointmentsPage />} />
          <Route path="/appointments/booking" element={<AppointmentBooking />} />
          <Route path="/appointments/preview" element={<AppointmentPreview />} />
          <Route path="/sessions" element={<AppointmentList />} />
          <Route path="/pharmacy" element={<PharmacyPage />} />
          <Route path="/pharmacy-details/:pharmacyName" element={<PharmacyDetails />} />
          <Route path="/medicines" element={<Medicines />} />
          <Route path="/doctor/home" element={<DocHome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

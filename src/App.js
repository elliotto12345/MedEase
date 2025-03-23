import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AppointmentBooking from "./components/AppointmentBooking";
import AppointmentList from "./components/AppointmentList";
import AppointmentPreview from "./components/AppointmentPreview";
import ChatSession from "./components/ChatSession";
import Consultation from "./components/Consultation";
import Medicines from "./components/Medicines"; // ✅ Import Medicines Page
import PharmacyDetails from "./components/PharmacyDetails";
import AppointmentsPage from "./pages/AppointmentsPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MessagesPage from "./pages/MessagesPage";
import PasswordResetPage from "./pages/PasswordResetPage";
import PaymentsPage from "./pages/PaymentsPage";
import PharmacyPage from "./pages/PharmacyPage";
import SettingsPage from "./pages/SettingsPage"; // ✅ Fixed typo in import
import SignupPage from "./pages/SignupPage";
import DocAppointments from "./components/DocAppointments";

function App() {
  const doctor = true;
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/password-reset" element={<PasswordResetPage />} />
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="/settings" element={<SettingsPage />} />{" "}
          {/* ✅ Fixed SettingsPage */}
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/messages/chat" element={<ChatSession />} />
          <Route path="/messages/consultation" element={<Consultation />} />
          <Route
            path="/appointments"
            element={doctor ? <DocAppointments /> : <AppointmentsPage />}
          />
          <Route
            path="/appointments/booking"
            element={<AppointmentBooking />}
          />
          <Route
            path="/appointments/preview"
            element={<AppointmentPreview />}
          />
          <Route path="/sessions" element={<AppointmentList />} />
          <Route path="/pharmacy" element={<PharmacyPage />} />
          <Route
            path="/pharmacy-details/:pharmacyName"
            element={<PharmacyDetails />}
          />
          <Route path="/medicines" element={<Medicines />} />{" "}
          {/* ✅ Added Medicines route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

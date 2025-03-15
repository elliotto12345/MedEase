import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AppointmentBooking from "./components/AppointmentBooking";
import AppointmentList from "./components/AppointmentList";
import AppointmentPreview from "./components/AppointmentPreview";
import ChatSession from "./components/ChatSession";
import Consultation from "./components/Consultation";
import AppointmentsPage from "./pages/AppointmentsPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MessagesPage from "./pages/MessagesPage";
import PasswordResetPage from "./pages/PasswordResetPage";
import PaymentsPage from "./pages/PaymentsPage";
import SettingsPage from "./pages/SetttingsPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/password-reset" element={<PasswordResetPage />} />
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/messages/chat" element={<ChatSession />} />
          <Route path="/messages/consultation" element={<Consultation />} />
          <Route path="/appointments" element={<AppointmentsPage />} />
          <Route
            path="/appointments/booking"
            element={<AppointmentBooking />}
          />
          <Route
            path="/appointments/preview"
            element={<AppointmentPreview />}
          />
          <Route path="/sessions" element={<AppointmentList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

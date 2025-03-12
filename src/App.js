import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import "./App.css";
import ChatSession from "./components/ChatSession";
import Consultation from "./components/Consultation";
import AppointmentBooking from "./components/AppointmentBooking";
import AppointmentPreview from "./components/AppointmentPreview";
import AppointmentList from "./components/AppointmentList";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AppointmentsPage from "./pages/AppointmentsPage";
import MessagesPage from "./pages/MessagesPage";
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
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
            <Route path="/messages/chat" element={<ChatSession />} />
            <Route path="/messages/consultation" element={<Consultation />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/appointments" element={<AppointmentsPage />} />
            <Route path="/appointment-booking" element={<AppointmentBooking />} />
            <Route path="/appointment-preview" element={<AppointmentPreview />} />
            <Route path="/sessions" element={<AppointmentList />} />
          </Routes>
        </div>
        
    </Router>
  );
}

export default App;

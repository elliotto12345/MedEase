<<<<<<< HEAD
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import AppointmentsPage from "./pages/AppointmentsPage";
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import "./App.css";
import ChatSession from "./components/ChatSession";
import Consultation from "./components/Consultation";
import AppointmentBooking from "./components/AppointmentBooking";
import AppointmentPreview from "./components/AppointmentPreview";
import AppointmentList from "./components/AppointmentList";
>>>>>>> 276c4f9670045b82215d4354e980f9024b5b1248
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MessagesPage from "./pages/MessagesPage";
import PasswordResetPage from "./pages/PasswordResetPage";
import PaymentsPage from "./pages/PaymentsPage";
import SettingsPage from "./pages/SettingsPage";
import SignupPage from "./pages/SignupPage";

function App() {

  return (
<<<<<<< HEAD
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/password-reset" element={<PasswordResetPage />} />
            
            {/* Protected Routes */}
            <Route
              path="/appointments"
              element={
                <ProtectedRoute>
                  <AppointmentsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/messages"
              element={
                <ProtectedRoute>
                  <MessagesPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/payments"
              element={
                <ProtectedRoute>
                  <PaymentsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <SettingsPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
=======
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
>>>>>>> 276c4f9670045b82215d4354e980f9024b5b1248
  );
}

export default App;

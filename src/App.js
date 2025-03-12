import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Messages from './components/Messages';
import ChatSession from './components/ChatSession';
import Appointments from './components/Appointments';
import AppointmentBooking from './components/AppointmentBooking';
import AppointmentPreview from './components/AppointmentPreview';
import AppointmentList from './components/AppointmentList';
import Consultation from './components/Consultation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import './App.css';
import AppointmentsPage from './pages/AppointmentsPage';
import MessagesPage from './pages/MessagesPage';

function App() {

  return (
    <Router>
      <div className="app">
          <Routes>
            <Route path="/messages/chat" element={<ChatSession />} />
            <Route path="/messages/consultation" element={<Consultation />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/appointments" element={<AppointmentsPage />} />
            <Route path="/appointment-booking" element={<AppointmentBooking />} />
            <Route path="/appointment-preview" element={<AppointmentPreview />} />
            <Route path="/sessions" element={<AppointmentList />} />
            <Route path="/" element={
                <HomePage />
            } />
          </Routes>
        </div>
      {/* </div> */}
    </Router>
  );
}

export default App;

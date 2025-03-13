import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ChatSession.css';

const ChatSession = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const doctor = location.state?.doctor;
  const [message, setMessage] = useState('');
  
  const [messages] = useState([
    {
      id: 1,
      sender: 'doctor',
      text: 'Hello! How can I help you today?',
      time: '11:55'
    }
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Add message handling logic here
      setMessage('');
    }
  };

  if (!doctor) {
    navigate('/messages/consultation');
    return null;
  }

  return (
    <div className="chat-session">
      <div className="chat-header">
        <div className="chat-header-content">
          <div className="back-button" onClick={() => navigate('/messages/consultation')}>
            <div className="circle-back">
              <i className="fas fa-arrow-left"></i>
            </div>
          </div>
          <div className="doctor-profile">
            <img src={doctor.image} alt={doctor.name} className="doctor-chat-image" />
            <div className="doctor-info">
              <h2>{doctor.name}</h2>
              <div className="doctor-status">
                <span className={`status-dot ${doctor.status.toLowerCase()}`}></span>
                <span className="status-text">{doctor.status}</span>
                <span className="specialty">• {doctor.specialty}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="chat-messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.sender}`}>
            {msg.sender === 'doctor' && (
              <img src={doctor.image} alt={doctor.name} className="message-avatar" />
            )}
            <div className="message-bubble">
              <div className="message-text">{msg.text}</div>
              <div className="message-time">{msg.time}</div>
            </div>
          </div>
        ))}
      </div>

      <form className="chat-input" onSubmit={handleSend}>
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">
          <i className="fas fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
};

export default ChatSession; 
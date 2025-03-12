import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Messages.css';

const Messages = () => {
  const navigate = useNavigate();
  
  const messages = [
    {
      id: 1,
      doctor: "Dr. Darkwah Martha Kinih",
      message: "Pls I'm almost done with the medication",
      time: "11:54",
      image: "/assets/dc_2.png"
    },
    {
      id: 2,
      doctor: "Dr. Samuel Katey",
      message: "Pls my stomach hurts what do you advice i do",
      time: "11:54",
      image: "/assets/dc_3.png"
    },
    {
      id: 3,
      doctor: "Dr. Abdul Basit",
      message: "Pls can you resend the prescription",
      time: "Yesterday",
      image: "/assets/dc_4.png"
    }
  ];

  return (
    <div className="messages-page">
      <header className="messages-header">
        <div className="back-button" onClick={() => navigate('/')}>
          <div className="circle-back">
            <i className="fas fa-arrow-left"></i>
          </div>
          <h1>Messages</h1>
        </div>
      </header>

      <div className="messages-list">
        {messages.map((msg) => (
          <div key={msg.id} className="message-item" onClick={() => navigate('/messages/consultation')}>
            <div className="message-left">
              <img src={msg.image} alt={msg.doctor} className="doctor-image" />
              <div className="message-content">
                <h3>{msg.doctor}</h3>
                <p>{msg.message}</p>
              </div>
            </div>
            <span className="message-time">{msg.time}</span>
          </div>
        ))}
      </div>

      <button className="new-chat-button" onClick={() => navigate('/messages/consultation')}>
        New Chat
      </button>
    </div>
  );
};

export default Messages; 
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Messages.css';

const Messages = () => {
  const navigate = useNavigate();
  
  const messages = [
    {
      id: 1,
      name: "Dr. Darkwah Martha Kinih",
      message: "Pls I'm almost done with the medication",
      time: "11:54",
      image: "/assets/dc_2.png",
      status: "Online",
      specialty: "General Physician"
    },
    {
      id: 2,
      name: "Dr. Samuel Katey",
      message: "Pls my stomach hurts what do you advice i do",
      time: "11:54",
      image: "/assets/dc_3.png",
      status: "Offline",
      specialty: "Gastroenterologist"
    },
    {
      id: 3,
      name: "Dr. Abdul Basit",
      message: "Pls can you resend the prescription",
      time: "Yesterday",
      image: "/assets/dc_4.png",
      status: "Busy",
      specialty: "Pharmacist"
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
          <div 
            key={msg.id} 
            className="message-item" 
            onClick={() => navigate('/messages/consultation', { state: { doctor: msg } })}
          >
            <div className="message-left">
              <img src={msg.image} alt={msg.name} className="doctor-image" />
              <div className="message-content">
                <h3>{msg.name}</h3>
                <p>{msg.message}</p>
              </div>
            </div>
            <span className="message-time">{msg.time}</span>
          </div>
        ))}
      </div>

      <button 
        className="new-chat-button" 
        onClick={() => navigate('/messages/consultation', { state: { doctor: null } })}
      >
        New Chat
      </button>
    </div>
  );
};

export default Messages;

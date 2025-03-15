import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../firebaseConfig"; // Ensure correct path
import "./ChatSession.css";

const ChatSession = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const doctor = location.state?.doctor;
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // Generate a unique chatId
  const chatId = doctor?.id
    ? `chat_${doctor.id}_${new Date().getFullYear()}`
    : null;

  useEffect(() => {
    if (!chatId) return; // Prevents Firebase errors

    // Correcting Firestore collection structure
    const q = query(
      collection(db, "messages", chatId, "chats"),
      orderBy("createdAt")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, [chatId]);

  if (!doctor) {
    navigate("/messages/consultation");
    return null;
  }

  const handleSend = async (e) => {
    e.preventDefault();
    if (message.trim()) {
      await addDoc(collection(db, "messages", chatId, "chats"), {
        sender: "patient",
        text: message,
        createdAt: serverTimestamp(),
      });
      setMessage("");
    }
  };

  return (
    <div className="chat-session">
      <div className="chat-header">
        <div className="chat-header-content">
          <div
            className="back-button"
            onClick={() => navigate("/messages/consultation")}
          >
            <div className="circle-back">
              <i className="fas fa-arrow-left"></i>
            </div>
          </div>
          <div className="doctor-profile">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="doctor-chat-image"
            />
            <div className="doctor-info">
              <h2>{doctor.name}</h2>
              <div className="doctor-status">
                <span
                  className={`status-dot ${doctor.status.toLowerCase()}`}
                ></span>
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
            {msg.sender === "doctor" && (
              <img
                src={doctor.image}
                alt={doctor.name}
                className="message-avatar"
              />
            )}
            <div className="message-bubble">
              <div className="message-text">{msg.text}</div>
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

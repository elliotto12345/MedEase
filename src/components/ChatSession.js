import { getAuth } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../firebaseConfig";
import "./ChatSession.css";

const ChatSession = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const doctor = location.state?.doctor;
  const auth = getAuth();
  const currentUser = auth.currentUser;

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [doctorTyping, setDoctorTyping] = useState(false);

  // Generate chatId (ensures both doctor and patient get the same chatId)
  const chatId =
    doctor?.id && currentUser?.uid
      ? doctor.id < currentUser.uid
        ? `chat_${doctor.id}_${currentUser.uid}`
        : `chat_${currentUser.uid}_${doctor.id}`
      : null;

  // Ensure user and doctor exist
  useEffect(() => {
    if (!doctor || !currentUser) {
      navigate("/messages/consultation");
    }
  }, [doctor, currentUser, navigate]);

  // Ensure chat document exists & listen for messages
  useEffect(() => {
    if (!chatId) return;

    const chatRef = doc(db, "messages", chatId);

    // ✅ Ensure chat document exists
    setDoc(chatRef, { createdAt: serverTimestamp() }, { merge: true })
      .then(() => console.log("Chat document created:", chatId))
      .catch((error) => console.error("Error creating chat document:", error));

    // ✅ Listen for messages in real-time
    const messagesRef = collection(db, "messages", chatId, "chats");
    const q = query(messagesRef, orderBy("createdAt"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (snapshot.empty) {
        console.log("No messages found in chat:", chatId);
        setMessages([]);
        return;
      }

      const fetchedMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log("Fetched Messages:", fetchedMessages);
      setMessages(fetchedMessages);
    });

    return () => unsubscribe();
  }, [chatId]);

  // Listen for doctor typing status
  useEffect(() => {
    if (!chatId) return;

    const typingRef = doc(db, "messages", chatId);
    const unsubscribe = onSnapshot(typingRef, (docSnap) => {
      if (docSnap.exists()) {
        setDoctorTyping(docSnap.data().doctorTyping || false);
      }
    });

    return () => unsubscribe();
  }, [chatId]);

  // Handle user typing
  const handleTyping = async (e) => {
    setMessage(e.target.value);

    if (!isTyping) {
      setIsTyping(true);

      if (chatId) {
        const typingRef = doc(db, "messages", chatId);
        await setDoc(typingRef, { patientTyping: true }, { merge: true });

        // Stop typing after 3 seconds
        setTimeout(async () => {
          await updateDoc(typingRef, { patientTyping: false });
          setIsTyping(false);
        }, 3000);
      }
    }
  };

  // Handle sending messages
  const handleSend = async (e) => {
    e.preventDefault();
    if (!message.trim() || !chatId) return;

    try {
      const chatRef = doc(db, "messages", chatId);

      // ✅ Ensure chat document exists before adding messages
      await setDoc(chatRef, { createdAt: serverTimestamp() }, { merge: true });

      await addDoc(collection(db, "messages", chatId, "chats"), {
        senderId: currentUser.uid,
        receiverId: doctor.id,
        text: message,
        status: "sent",
        createdAt: serverTimestamp(),
      });

      console.log("Message sent:", message);
      setMessage("");

      // Reset typing status
      await updateDoc(chatRef, { patientTyping: false });
      setIsTyping(false);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="chat-session">
      <div className="chat-header">
        <div className="back-button" onClick={() => navigate("/messages/consultation")}>
          <div className="circle-back">
            <i className="fas fa-arrow-left"></i>
          </div>
        </div>
        <div className="doctor-profile">
          {doctor?.image && <img src={doctor.image} alt={doctor.name} className="doctor-chat-image" />}
          <div className="doctor-info">
            <h2>{doctor?.name || "Doctor"}</h2>
            <span className="specialty">• {doctor?.specialty || "Specialty not available"}</span>
          </div>
        </div>
      </div>

      <div className="chat-messages">
        {messages.length > 0 ? (
          messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.senderId === currentUser.uid ? "sent" : "received"}`}>
              {msg.senderId !== currentUser.uid && <img src={doctor.image} alt="Doctor" className="message-avatar" />}
              <div className="message-bubble">
                <div className="message-text">{msg.text}</div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-messages">No messages yet. Start the conversation!</p>
        )}

        {/* Typing Indicator */}
        {doctorTyping && <div className="typing-indicator">Doctor is typing...</div>}
      </div>

      <form className="chat-input" onSubmit={handleSend}>
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={handleTyping}
        />
        <button type="submit">
          <i className="fas fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
};

export default ChatSession;

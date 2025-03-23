import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // ✅ Import Firebase Storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP-B5eyBMTtPRs07A3OAOaONZXeSDhG74",
  authDomain: "medease-4a55d.firebaseapp.com",
  projectId: "medease-4a55d",
  storageBucket: "medease-4a55d.appspot.com", // ✅ Ensure this is present
  messagingSenderId: "244242857985",
  appId: "1:244242857985:web:da5240b281f07802fcc000",
  measurementId: "G-D5J5KE2BVD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); // ✅ Initialize Firebase Storage

// Export modules
export { app, auth, db, storage }; // ✅ Export storage


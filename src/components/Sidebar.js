import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  let routeName = location.pathname;

  useEffect(() => {
    const auth = getAuth();
    const db = getFirestore();

    const fetchUserData = async (uid) => {
      try {
        const userRef = doc(db, "users", uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          setUser(userSnap.data());
        } else {
          console.log("User data not found");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        fetchUserData(currentUser.uid);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const isDoctor = user?.role === "doctor";

  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="logo">
          <img src="/assets/sidebar-logo.png" alt="logo" />
        </div>
        <div className="menus">
          <Link
            to={isDoctor ? "/doctor/home" : "/"}
            className={`m-home menu ${["/", "/doctor/home"].includes(routeName) ? "active-bg" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            <img src="/assets/Home-page.png" alt="home" width={50} height={50} />
            <p className={routeName === "/" || routeName === "/doctor/home" ? "active-text" : ""}>Home</p>
          </Link>

          <Link
            to="/appointments"
            className={`m-appointments menu ${routeName.startsWith("/appointments") ? "active-bg" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            <img src="/assets/schedule.png" alt="appointments" width={50} height={50} />
            <p className={routeName.startsWith("/appointments") ? "active-text" : ""}>Appointments</p>
          </Link>

          <Link
            to="/messages"
            className={`m-messages menu ${routeName.startsWith("/messages") ? "active-bg" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            <img src="/assets/Messaging.png" alt="messages" width={50} height={50} />
            <p className={routeName.startsWith("/messages") ? "active-text" : ""}>Messages</p>
          </Link>

          {!isDoctor && (
            <Link
              to="/payments"
              className={`m-payments menu ${routeName === "/payments" ? "active-bg" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              <img src="/assets/payments.png" alt="payments" width={50} height={50} />
              <p className={routeName === "/payments" ? "active-text" : ""}>Payments</p>
            </Link>
          )}

          <Link
            to="/settings"
            className={`m-settings menu ${routeName === "/settings" ? "active-bg" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            <img src="/assets/Settings.png" alt="settings" width={50} height={50} />
            <p className={routeName === "/settings" ? "active-text" : ""}>Settings</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

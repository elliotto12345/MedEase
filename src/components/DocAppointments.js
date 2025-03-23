import "./DocAppointments.css";
import Sidebar from "./Sidebar";
import { useNavigate, Link } from "react-router-dom";

const DocAppointments = () => {
  const currentDate = new Date()
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, " - ");
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="doc-appointments">
        <div className="top-bar">
          <Link to="/">
            <img src="/assets/go-back.png" alt="back" />
          </Link>
          <p>All Appointments</p>
        </div>
        <div className="filter-menus">
          <div className="menus">
            <div className="menu upcoming">
              <p>Upcoming</p>
              <span>8</span>
            </div>
            <div className="menu pending">
              <p>pending</p>
              <span>11</span>
            </div>
            <div className="menu completed">
              <p>Completed</p>
              <span>8</span>
            </div>
          </div>
          <div className="date-display">
            <img
              src={process.env.PUBLIC_URL + "/assets/Calendar.png"}
              alt="Calendar"
              className="calendar-icon"
            />
            <span>{currentDate}</span>
          </div>
        </div>
        <div className="persons">
          <div className="person">
            <div className="profile">
              <img src="/assets/person1.png" alt="person" />
              <p>
                #MDS0012 <br />
                Samuel Oduro
              </p>
            </div>
            <p>
              30th March 2025, 3:30pm <br />
              General Visit
            </p>
            <p>
              Sam@gmail.com <br />
              025345790
            </p>
            <button className="pending">Pending</button>
          </div>
          <div className="person">
            <div className="profile">
              <img src="/assets/person2.png" alt="person" />
              <p>
                #MDS0012 <br />
                Samuel Oduro
              </p>
            </div>
            <p>
              30th March 2025, 3:30pm <br />
              General Visit
            </p>
            <p>
              Sam@gmail.com <br />
              025345790
            </p>
            <button className="pending">Pending</button>
          </div>
          <div className="person">
            <div className="profile">
              <img src="/assets/person3.png" alt="person" />
              <p>
                #MDS0012 <br />
                Samuel Oduro
              </p>
            </div>
            <p>
              30th March 2025, 3:30pm <br />
              General Visit
            </p>
            <p>
              Sam@gmail.com <br />
              025345790
            </p>
            <button className="completed">Completed</button>
          </div>
          <div className="person">
            <div className="profile">
              <img src="/assets/person4.png" alt="person" />
              <p>
                #MDS0012 <br />
                Samuel Oduro
              </p>
            </div>
            <p>
              30th March 2025, 3:30pm <br />
              General Visit
            </p>
            <p>
              Sam@gmail.com <br />
              025345790
            </p>
            <button className="completed">Completed</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocAppointments;

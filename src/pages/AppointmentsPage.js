import Sidebar from "../components/Sidebar";
import Appointments from "../components/Appointments";
const AppointmentsPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Appointments />
    </div>
  );
};

export default AppointmentsPage;

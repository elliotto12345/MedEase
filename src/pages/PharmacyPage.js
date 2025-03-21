import Messages from "../components/Pharmacy";
import Sidebar from "../components/Sidebar";

const PharmacyPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Messages />
    </div>
  );
};

export default PharmacyPage;

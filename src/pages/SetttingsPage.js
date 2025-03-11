import Sidebar from "../components/Sidebar";
import Settings from "../components/Settings";
import Footer from "../components/Footer";

const SettingsPage = () => {
  return (
    <>
      <div style={{ display: "flex", alignItems: "stretch" }}>
        <Sidebar />
        <Settings />
      </div>
    </>
  );
};

export default SettingsPage;

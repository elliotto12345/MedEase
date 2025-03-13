import Sidebar from "../components/Sidebar";
import Messages from "../components/Messages";

const MessagesPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Messages />
    </div>
  );
};

export default MessagesPage;

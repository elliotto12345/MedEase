import Payment from "../components/Payment"; // Import Payment component
import "../components/Payment.css"; // Import Payment styles
import Sidebar from "../components/Sidebar";

const PaymentPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Payment />
    </div>
  );
};

export default PaymentPage;

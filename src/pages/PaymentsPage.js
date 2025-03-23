// import "../components/Payment.css"; // Import Payment styles
import Payments from "../components/Payments";
import Sidebar from "../components/Sidebar";

const PaymentPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Payments />
    </div>
  );
};

export default PaymentPage;

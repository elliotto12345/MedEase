import Payments from "../components/Payments";
import Sidebar from "../components/Sidebar";

const PaymentPage = () => {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <Sidebar />
      <Payments />
    </div>
  );
};

export default PaymentPage;

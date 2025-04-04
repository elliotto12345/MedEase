import "./Payments.css";
import { Link } from "react-router-dom";

const Payments = () => {
  return (
    <div className="payments">
      <div className="navigation">
        <Link to="/">
          <img src="/assets/go-back.png" alt="go-back" />
        </Link>
        <p>Payments</p>
      </div>
      <div className="receipts">
        <p
          style={{
            marginLeft: "80px",
            fontWeight: "bold",
            paddingBottom: "15px",
          }}
        >
          All your payments
        </p>
        <div className="receipt">
          <p>
            Date: 7th February
            <br />
            Drug Order from Trust Pharmacy
          </p>

          <button>Details</button>
        </div>
        <div className="receipt">
          <p>
            Date: 7th February
            <br />
            Drug Order from Trust Pharmacy
          </p>

          <button>Details</button>
        </div>
        <div className="receipt">
          <p>
            Date: 7th February
            <br />
            Drug Order from Trust Pharmacy
          </p>

          <button>Details</button>
        </div>
      </div>
    </div>
  );
};

export default Payments;

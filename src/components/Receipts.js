import { Link } from "react-router-dom";
import "./Receipts.css";

const Receipts = () => {
  return (
    <div className="receipts">
      <div className="nav">
        <Link to="/">
          <img src="/assets/go-back.png" alt="go-back" />
        </Link>
        <p style={{ color: "white" }}>All Receipts</p>
      </div>
      <div className="transactions">
        <p
          style={{
            marginLeft: "80px",
            fontWeight: "bold",
            padding: "25px 0px",
          }}
        >
          official receipts from pharmacies
        </p>
        <div className="transaction">
          <p>
            Date: 7th February
            <br />
            Drug Order from Trust Pharmacy
          </p>

          <button>View</button>
        </div>
        <div className="transaction">
          <p>
            Date: 7th February
            <br />
            Drug Order from Trust Pharmacy
          </p>

          <button>View</button>
        </div>
        <div className="transaction">
          <p>
            Date: 7th February
            <br />
            Drug Order from Trust Pharmacy
          </p>

          <button>View</button>
        </div>
      </div>
    </div>
  );
};

export default Receipts;

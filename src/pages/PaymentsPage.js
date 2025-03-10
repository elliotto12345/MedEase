import Sidebar from "../components/Sidebar";

const PaymentsPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="flex flex-col w-full p-6">
        <div className="bg-purple-800 text-white p-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Pharmacy Receipt</h2>
          <button className="text-white text-xl">X</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white shadow-md">
          <div className="border p-4">
            <h3 className="font-semibold mb-2">Billing Details:</h3>
            <label className="block mb-2">Full Name:</label>
            <input type="text" className="border w-full p-2 mb-4" />
            <label className="block mb-2">Phone Number:</label>
            <input type="text" className="border w-full p-2 mb-4" />
            <label className="block mb-2">Email:</label>
            <input type="text" className="border w-full p-2 mb-4" />
            <h3 className="font-semibold mb-2">Delivery Details:</h3>
            <label className="block mb-2">Enter delivery address:</label>
            <textarea className="border w-full p-2" rows="3"></textarea>
          </div>
          <div className="border p-4">
            <h3 className="font-semibold mb-2">Order Details:</h3>
            <table className="w-full border-collapse border">
              <thead>
                <tr className="border-b">
                  <th className="p-2">Products</th>
                  <th className="p-2">Qty</th>
                  <th className="p-2">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">Easylife Vitamin C</td>
                  <td className="p-2">1</td>
                  <td className="p-2">70</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Panadol Extra</td>
                  <td className="p-2">7</td>
                  <td className="p-2">10</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Flucooxallin</td>
                  <td className="p-2">3</td>
                  <td className="p-2">20</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Strobin</td>
                  <td className="p-2">3</td>
                  <td className="p-2">10</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-4 font-semibold">Total: 110</div>
          </div>
        </div>
        <div className="flex justify-end gap-4 p-6">
          <button className="bg-yellow-500 text-black px-6 py-2">Pay Later</button>
          <button className="bg-green-600 text-white px-6 py-2">Confirm and Pay</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentsPage;

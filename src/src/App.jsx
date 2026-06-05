import { useState } from "react";
import "./App.css";

function App() {
  const [showReceipt, setShowReceipt] = useState(false);

  const handlePayment = () => {
    setShowReceipt(true);
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>JamiPariseva Portal</h1>
        <p>Revenue Department, Government of Tripura</p>
      </header>

      {/* Payment Card */}
      <div className="container">
        <div className="card">
          <h2>Online Service Payment</h2>

          <div className="details">
            <p>
              <strong>Application ID:</strong> APP1023
            </p>

            <p>
              <strong>Applicant Name:</strong> Anwesha Banerjee
            </p>

            <p>
              <strong>Service:</strong> Certified Copy of Khatian
            </p>

            <p>
              <strong>Date:</strong> 01 June 2026
            </p>

            <p className="amount">
              Amount Payable: ₹120
            </p>
          </div>

          {!showReceipt && (
            <button className="pay-btn" onClick={handlePayment}>
              Proceed to Pay
            </button>
          )}

          {showReceipt && (
            <div className="receipt">
              <h3>PAYMENT RECEIPT</h3>

              <p>
                <strong>Receipt No:</strong> REC1023
              </p>

              <p>
                <strong>Transaction ID:</strong> TXN56789
              </p>

              <p>
                <strong>Application ID:</strong> APP1023
              </p>

              <p>
                <strong>Applicant Name:</strong> Anwesha Banerjee
              </p>

              <p>
                <strong>Service:</strong> Certified Copy of Khatian
              </p>

              <p>
                <strong>Amount Paid:</strong> ₹120
              </p>

              <p>
                <strong>Date:</strong> 01 June 2026
              </p>

              <p className="success">
                ✓ PAYMENT SUCCESSFUL
              </p>

              <button
                className="print-btn"
                onClick={() => window.print()}
              >
                Print Receipt
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        © 2026 Revenue Department, Government of Tripura
      </footer>
    </div>
  );
}

export default App;
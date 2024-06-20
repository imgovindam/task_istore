import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardholderName, setCardholderName] = useState("");

  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    // Here you would typically process the payment and handle the response.
    alert("Payment Successful!");
    navigate("/");
  };

  return (
    <div className="payment-container p-5">
      <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
      <form onSubmit={handlePayment}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="border rounded-lg p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Expiry Date</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            className="border rounded-lg p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">CVV</label>
          <input
            type="number"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="border rounded-lg p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Cardholder Name
          </label>
          <input
            type="text"
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
            className="border rounded-lg p-2 w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg w-full"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Payment;

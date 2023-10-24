import axios from "axios";
import React, { useState } from "react";

const baseUrl =
  "https://1da7-2401-4900-3b38-e59c-3cf2-2cdf-ca22-a775.ngrok-free.app";

const OTPVerification = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(false);

  const onCall = async () => {
    try {
      const response = await axios.post(baseUrl, { phoneNumber });
      if (response.status === 200) {
        setIsValid(true);
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      }
      setIsValid(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md bg-white p-8 rounded shadow-md">
        <div>
          <h2 className="text-2xl font-bold mb-4">Enter Your Phone Number</h2>
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full border rounded-md p-2 mb-4"
          />
          <button
            disabled={isValid}
            onClick={!isValid && onCall}
            className={`w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600${
              isValid ? " bg-red-600" : ""
            }`}
          >
            {isValid ? "Call Conected." : "Call Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;

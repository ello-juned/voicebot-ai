import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Loader from "./Loader";

const OTPVerification = () => {
  const baseUrl = import.meta.env.VITE_REACT_APP_SERVER_URL;

  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isCallConnected, setISCallConnected] = useState(false);

  const onCall = async () => {
    if (!phoneNumber.includes("+")) {
      toast.error(
        "please enter  phone number with country code, eg +61543456789 or +919209986878"
      );
    } else {
      setLoading(true);

      try {
        const response = await axios.post(baseUrl, { phoneNumber });
        if (response.status === 200) {
          toast.success(response.data.message);
          setIsValid(true);
          setISCallConnected(true);
        }
        console.log("response", response);
        setLoading(false);
      } catch (error) {
        console.log("error", error);
        if (error.response) {
          toast.error(error.response.data.message);
        }
        setIsValid(false);
        setLoading(false);
      }
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center text-white  ">
        <div className="max-w-md  p-10  shadow-xl  border-2 rounded-xl ">
          <div className="">
            <h2 className="text-2xl font-bold mb-4">Enter Your Phone Number</h2>
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full border rounded-md p-2 mb-4 text-black"
            />
            <button
              disabled={isValid}
              onClick={!isValid && onCall}
              className={`w-full bg-blue-500 text-white p-2 rounded-md ${
                isValid ? " bg-green-600" : ""
              }`}
            >
              {isValid ? "Call Connected." : "Call Now"}
            </button>
            {isCallConnected && (
              <button
                className="w-full bg-red-200 text-white p-2 rounded-md hover:bg-red-600 mt-5"
                onClick={() => {
                  setISCallConnected(false);
                  setIsValid(false);
                }}
              >
                End call. & Add new call
              </button>
            )}
          </div>
        </div>
        {loading && <Loader />}
      </div>
    </>
  );
};

export default OTPVerification;

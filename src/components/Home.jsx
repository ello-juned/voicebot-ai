import React from "react";
import OTPVerification from "./Otp";

const Home = () => {
  return (
    <div className="relative w-screen h-screen bg-black">
      <div className="relative z-0">
        <OTPVerification />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import OTPVerification from "./Otp";

const Home = () => {
  return (
    <div className="relative w-screen h-screen">
      {/* Blurred Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center filter blur-sm"
        style={{
          backgroundImage:
            'url("https://cdn.dribbble.com/users/982548/screenshots/4773913/vr.gif")',
        }}
      ></div>

      <div className="relative z-0">
        <OTPVerification />
      </div>
    </div>
  );
};

export default Home;

import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-70 bg-black z-50">
      <div className="w-16 h-16 border-t-2 border-blue-500 border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;

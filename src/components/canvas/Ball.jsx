import React from "react";

const BallCanvas = ({ icon }) => {
  return (
    <div className="flex justify-center items-start" style={{ width: '100%', height: '400px', paddingTop: '50px' }}> {/* Adjust padding as needed */}
      <img
        src={icon}
        alt="Ball Icon"
        className="w-20 h-20 object-contain"
      />
    </div>
  );
};

export default BallCanvas;

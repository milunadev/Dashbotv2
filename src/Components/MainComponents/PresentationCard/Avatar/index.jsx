import React from 'react';


const Avatar = ({ loading, rotationDegree }) => {
  
  return (
    <div
      className={`${
        loading ? "rotate-0" : " -translate-y-0 "
      } transition-transform duration-100 ease-in-out transform `}
    >
      <img
        className="w-64 h-64"
        src={require("./3dmichi.png")}
        alt=""
        style={{ transform: `rotate(${rotationDegree}deg)` }}
      />
    </div>
  );
}

export {Avatar}
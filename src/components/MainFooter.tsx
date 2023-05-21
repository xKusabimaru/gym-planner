import React from "react";

const MainFooter = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-around p-5 sticky bottom-0 border-t border-white">
      <div className="flex justify-center">
        <img
          className="object-contain h-12 w-16"
          src="images/logo.png"
          alt="logo"
        ></img>
        <p className="place-self-center text-xl text-white">
          This Website is created for practising purposes
        </p>
      </div>
    </div>
  );
};

export default MainFooter;

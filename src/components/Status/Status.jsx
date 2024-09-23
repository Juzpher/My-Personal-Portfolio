import React from "react";

const Status = ({ icon, message, background }) => {
  return (
    <div
      className={`flex flex-row items-center gap-2 p-2 rounded-8 ${background} text-secondary-default opacity-90 z-50`}
    >
      <div>{icon}</div>
      <div>
        <p className="">{message}</p>
      </div>
    </div>
  );
};

export default Status;

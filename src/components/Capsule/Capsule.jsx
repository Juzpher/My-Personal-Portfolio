import React from "react";

const Capsule = ({ name, description, icon }) => {
  return (
    <div className="border border-secondary-50 rounded-16 flex items-center p-2 w-full hover:bg-primary-100 transition-all duration-200 ease-in-out">
      <div className="bg-primary-25 rounded-8 mr-4 w-12 h-12 flex items-center justify-center flex-shrink-0">
        <img src={icon} alt={name} className="w-8 h-8 object-contain" />
      </div>
      <div className="flex flex-col overflow-hidden">
        <h1 className="capitalize tracking-wider truncate">{name}</h1>
        <p className="text-sm text-secondary-50 tracking-wider truncate">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Capsule;

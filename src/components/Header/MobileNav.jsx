import React from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { RiCloseCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const MobileNav = ({ Logo, onOpen, onClose, menuItems, hideRight }) => {
  return (
    <nav className="h-16 flex justify-between items-center px-6 lg:px-12 text-secondary-default">
      <Link to="/" className="w-10 h-10">
        <img src={Logo} alt="logo" className="w-full h-full object-contain" />
      </Link>
      <button onClick={onOpen} className="text-secondary">
        <HiBars3BottomRight className="w-7 h-7" />
      </button>
      <div
        className={`transition-all duration-500 ease-in-out w-[80%] h-full fixed bg-primary-100 z-50 top-0 ${hideRight} flex items-center justify-center`}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-6 text-secondary"
        >
          <RiCloseCircleLine className="w-7 h-7" />
        </button>

        <div className="flex flex-col items-center gap-8 p-6">
          <a href="/" className="mb-8">
            <img src={Logo} alt="logo" className="h-16 w-auto" />
          </a>

          <ul className="flex flex-col items-center gap-5">
            {menuItems?.map((menu, index) => (
              <li key={index}>
                <Link
                  to={menu}
                  className=" capitalize text-secondary-default text-xl"
                  onClick={onClose}
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;

import React, { useState, useRef, useEffect } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

import { Link } from "react-scroll";

const MobileNav = ({ Logo, menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const allMenuItems = [...menuItems, "Contact"];

  return (
    <nav className="h-16 flex justify-between items-center px-6 lg:px-12 text-secondary-default relative">
      <Link
        to="home"
        spy={true}
        smooth={true}
        duration={500}
        className="w-10 h-10 cursor-pointer"
      >
        <img src={Logo} alt="logo" className="w-full h-full object-contain" />
      </Link>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-secondary focus:outline-none"
        >
          <AnimatePresence initial={false} mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <IoClose className="w-7 h-7" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <HiBars3BottomRight className="w-7 h-7" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute right-0 mt-2 w-48 bg-primary-100 border border-primary-50 rounded-md p-2 shadow-lg z-10"
            >
              {allMenuItems.map((menu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    to={menu.toLowerCase()}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="block px-4 py-2 rounded-md text-sm text-secondary-default hover:bg-primary-50  transition-all duration-300 ease-in-out cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {menu}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default MobileNav;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DesktopNav = ({ Logo, menuItems }) => {
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    // Set 'Home' as the default active item
    setActiveItem("Home");
  }, []);

  return (
    <div className="flex items-center justify-between">
      <div>
        <img src={Logo} alt="" className="w-10 h-10" />
      </div>

      <nav className="bg-primary-50/30 backdrop-blur-md rounded-18 p-0.5 ">
        <ul className="flex items-center justify-evenly">
          {menuItems.map((item) => (
            <motion.li
              key={item}
              className={`default-button text-center cursor-pointer relative ${
                activeItem === item
                  ? "text-primary-default"
                  : "text-secondary-default"
              }`}
              onClick={() => setActiveItem(item)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
              <AnimatePresence>
                {activeItem === item && (
                  <motion.div
                    className="absolute inset-0 bg-white rounded-12 -z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>
      </nav>

      <div>
        <button className="button-outline capitalize px-4">Contact Me</button>
      </div>
    </div>
  );
};

export default DesktopNav;

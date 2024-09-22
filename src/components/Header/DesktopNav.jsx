import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { GrContactInfo } from "react-icons/gr";

const DesktopNav = ({ Logo, menuItems }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="flex items-center justify-between">
      <div>
        <img src={Logo} alt="" className="w-10 h-10" />
      </div>

      <nav className="bg-primary-50/30 backdrop-blur-md rounded-18">
        <ul className="flex items-center justify-evenly">
          {menuItems.map((item) => (
            <motion.li
              key={item}
              className="default-button text-center cursor-pointer relative "
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredItem(item)}
              onHoverEnd={() => setHoveredItem(null)}
            >
              <Link
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                duration={500}
                className="block w-full h-full "
              >
                {item}
              </Link>

              <AnimatePresence>
                {hoveredItem === item && (
                  <motion.div
                    className="absolute inset-0 bg-primary-75 rounded-12 -z-10"
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
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="lg:button-outline button-outline-icon capitalize lg:px-4 cursor-pointer"
        >
          <p className="md:hidden lg:flex">Contact Me</p>
          <GrContactInfo className="flex lg:hidden" />
        </Link>
      </div>
    </div>
  );
};

export default DesktopNav;

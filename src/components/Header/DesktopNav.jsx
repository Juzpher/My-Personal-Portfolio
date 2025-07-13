import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { GrContactInfo } from "react-icons/gr";

const DesktopNav = ({ Logo, menuItems }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      className="flex items-center justify-between py-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Logo */}
      <motion.div variants={itemVariants}>
        <motion.img
          src={Logo}
          alt="Logo"
          className="w-10 h-10"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Navigation Menu */}
      <motion.nav className="flex items-center" variants={itemVariants}>
        <ul className="flex items-center space-x-1">
          {menuItems.map((item) => (
            <motion.li
              key={item}
              className="relative px-4 py-2"
              whileHover={{ scale: 1.02 }}
              onHoverStart={() => setHoveredItem(item)}
              onHoverEnd={() => setHoveredItem(null)}
            >
              <Link
                to={item.toLowerCase()}
                spy={true}
                offset={-30}
                smooth={true}
                duration={1000}
                className="text-secondary-default hover:text-secondary-75 transition-colors duration-200 cursor-pointer"
              >
                {item}
              </Link>

              {/* Minimal hover indicator */}
              <AnimatePresence>
                {hoveredItem === item && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 w-1 h-1 rounded-full bg-secondary-default"
                    initial={{ opacity: 0, scale: 0, x: "-50%" }}
                    animate={{ opacity: 1, scale: 1, x: "-50%" }}
                    exit={{ opacity: 0, scale: 0, x: "-50%" }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>
      </motion.nav>

      {/* Contact Button */}
      <motion.div variants={itemVariants}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-12}
            duration={1000}
            className="button-outline flex justify-items-center cursor-pointer"
          >
            <span className="hidden md:block">Contact Me</span>
            <GrContactInfo className="md:hidden w-4 h-4" />
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default DesktopNav;

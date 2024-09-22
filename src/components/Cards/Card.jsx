import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Card = ({ img, type, name, role, tools, id }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-primary-100 to-primary-50 p-4 rounded-lg shadow-lg w-full h-full relative overflow-hidden cursor-default"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.3 },
      }}
    >
      <motion.div className="flex flex-col gap-4 h-full">
        {/* Img div */}
        <div className="flex-shrink-0 overflow-hidden rounded-lg">
          <img src={img} alt={name} className="w-full h-80 object-cover" />
        </div>
        {/* Text div */}
        <div className="flex justify-between items-center">
          <div>
            <motion.h1
              className="text-xl font-semibold text-secondary-default mb-1"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              {type}
            </motion.h1>
            <motion.p
              className="text-secondary-50 text-sm"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              {name} | {role}
            </motion.p>
          </div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 45 }}
            transition={{ duration: 0.2 }}
          >
            <NavLink
              to={`/project/${id}`}
              className="button-outline-icon bg-secondary-default text-primary-50 hover:bg-primary-50 hover:text-secondary-default p-2 border-none rounded-full"
            >
              <FiArrowUpRight className="h-6 w-6" />
            </NavLink>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;

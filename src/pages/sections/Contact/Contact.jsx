import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import Form from "../../../components/Form/Form";

const Contact = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, 50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="default-container"
      name="contact"
      style={{ opacity, y }}
    >
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text Section */}
        <motion.div
          className="flex flex-col justify-center items-start h-full"
          variants={itemVariants}
        >
          <motion.h1
            className="text-2xl sm:text-3xl font-bold font-work capitalize"
            variants={itemVariants}
          >
            Contact me to discuss how I can help bring your project to life.
            <br />
            <span className="gradient-text">Let's get started</span>
          </motion.h1>
          <motion.p className="text-secondary-50" variants={itemVariants}>
            Your vision, my expertise—together, we'll build something
            exceptional.
          </motion.p>
          {/* Button Section */}
          <motion.div
            className="flex justify-start mb-8 lg:mb-0"
            variants={itemVariants}
          >
            <motion.a
              className="button-outline-icon"
              href="https://github.com/EijiroNotME"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              className="button-outline-icon"
              href="https://www.linkedin.com/in/juspher-vergara/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              className="button-outline-icon"
              href="https://www.facebook.com/Juspher.VergaraRomano/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaFacebook />
            </motion.a>
          </motion.div>
        </motion.div>
        {/* Form Section */}
        <motion.div
          className="w-full mx-auto lg:max-w-none"
          variants={itemVariants}
        >
          <Form />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;

import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import logo from "../../assets/Img/Logo/Logo.png";

const quickLinks = ["Home", "About", "Experience", "Projects"];
const socialLinks = [
  { name: "Github", url: "https://github.com/Juzpher" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/juspher-vergara/" },
  { name: "Facebook", url: "https://www.facebook.com/Juspher.VergaraRomano/" },
];

const Footer = () => {
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
    <motion.footer
      className="bg-primary-default py-8 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          <motion.div
            className="lg:col-span-2 flex items-center"
            variants={itemVariants}
          >
            <div className="flex items-center space-x-4">
              <motion.img
                src={logo}
                alt="logo"
                className="w-12 h-12 flex-shrink-0"
                variants={itemVariants}
              />
              <motion.div variants={itemVariants}>
                <h2 className="font-work text-xl sm:text-2xl lg:text-3xl capitalize">
                  Looking for a web developer?
                </h2>
                <p className="font-default text-sm font-extralight mt-2">
                  Let's start building the future of your business.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-8 lg:col-span-2"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h3 className="font-work text-lg capitalize mb-4">Links</h3>
              <ul className="font-extralight text-sm space-y-2">
                {quickLinks.map((link) => (
                  <motion.li key={link} variants={itemVariants}>
                    <Link
                      to={link.toLowerCase()}
                      spy={true}
                      smooth={true}
                      duration={1000}
                      className="cursor-pointer"
                    >
                      {link}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="font-work text-lg capitalize mb-4">Social</h3>
              <ul className="font-extralight text-sm space-y-2">
                {socialLinks.map((link) => (
                  <motion.li key={link.name} variants={itemVariants}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import previewLaptop from "../../../assets/Img/Preview/companyLaptop.png";
import companyLogo from "../../../assets/Img/Preview/companyLogo.png";
import { FiArrowUpRight } from "react-icons/fi";

const Experience = () => {
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

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const arrowVariants = {
    initial: { rotate: 0 },
    hover: { rotate: 45 },
  };

  return (
    <motion.div
      ref={ref}
      className="default-container flex flex-col gap-12 items-center justify-center"
      name="experience"
      style={{ opacity, y }}
    >
      <motion.div
        className="flex flex-col gap-4 text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-2xl small-caps font-semibold gradient-text tracking-wider"
          variants={itemVariants}
        >
          My experience
        </motion.h1>
        <motion.p
          className="tracking-wider font-extralight"
          variants={itemVariants}
        >
          As an aspiring web developer, I am committed to gaining valuable
          experience in environments that enhance my skills and expertise.
          Here’s a look at my experience:
        </motion.p>
      </motion.div>

      <motion.div
        className="bg-primary-100 p-4 rounded-12 grid grid-cols-1 md:grid-cols-3 gap-4 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="col-span-1 md:col-span-2"
          variants={itemVariants}
        >
          <div className="p-4 gap-4">
            <motion.div
              className="flex justify-start items-center mb-2"
              variants={itemVariants}
            >
              <img src={companyLogo} alt="" className="h-24 w-auto" />
            </motion.div>
            <motion.div className="flex flex-col" variants={itemVariants}>
              <h1 className="text-lg small-caps tracking-widest font-work">
                <span className="gradient-text">Web Developer </span>Intern, AP
                Global IT Solutions Inc.
              </h1>
              <p className="tracking-widest text-secondary-50">
                June 2023 - July 2023
              </p>
              <p className="tracking-widest text-secondary-primary font-default text-sm font-extralight py-2">
                At AP Global, I developed and maintained web applications,
                collaborated with senior developers, and participated in
                debugging and testing. I also contributed to redesigning and
                updating old websites, which enhanced my skills in using the
                latest technologies such as React.js, Next.js, TypeScript, and
                Minimal UI.
              </p>
            </motion.div>
            <motion.div
              className="mt-auto flex justify-start"
              variants={itemVariants}
            >
              <motion.a
                className="mx-0 button-outline flex items-center justify-center bg-primary-default normal-case"
                href="https://www.apgitsolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <motion.div variants={arrowVariants}>
                  <FiArrowUpRight className="mr-2 h-5 w-5" />
                </motion.div>
                <span>Visit AP Global</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="col-span-1 flex justify-center items-center"
          variants={itemVariants}
        >
          <img
            src={previewLaptop}
            alt=""
            className="rounded-12 w-full h-auto"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;

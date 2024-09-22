import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import aboutData from "../../../assets/mock/about/_about";

const Description = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, 50]);

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
      className="bg-primary-100 p-10 rounded-12"
      style={{ opacity, y }}
    >
      <motion.div
        className="flex flex-col gap-4"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex flex-col gap-4" variants={itemVariants}>
          <motion.h1
            className="font-default tracking-wider font-bold text-lg uppercase"
            variants={itemVariants}
          >
            About Me
          </motion.h1>
          <motion.p
            className="text-secondary-default text-sm font-default font-extralight tracking-widest"
            variants={itemVariants}
          >
            {aboutData.paragraph}
          </motion.p>
        </motion.div>
        <motion.div
          className="flex flex-row justify-between"
          variants={itemVariants}
        >
          <motion.div className="flex flex-row gap-4" variants={itemVariants}>
            {aboutData.display.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <motion.h1
                  className="text-secondary-default text-3xl font-default font-bold tracking-wider"
                  variants={itemVariants}
                >
                  {item.number}
                </motion.h1>
                <motion.p
                  className="text-secondary-50 text-sm font-default tracking-wider"
                  variants={itemVariants}
                >
                  {item.text}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="flex justify-center items-center"
            variants={itemVariants}
          >
            <motion.img
              src={aboutData.logo}
              alt="logo"
              className="w-10 h-10"
              variants={itemVariants}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Description;

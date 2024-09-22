import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import toolsData from "../../../assets/mock/about/_tools";
import Capsule from "../../../components/Capsule/Capsule";

const Tools = () => {
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
      className="flex flex-col gap-8 w-full"
      style={{ opacity, y }}
    >
      <motion.div
        className="flex flex-col gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-2xl small-caps font-semibold gradient-text tracking-wider"
          variants={itemVariants}
        >
          Technologies I use
        </motion.h1>
        <motion.p
          className="tracking-wider font-extralight"
          variants={itemVariants}
        >
          As a web developer, I create responsive and engaging websites using a
          variety of technologies. Below, you'll find the tools and frameworks
          that power my work
        </motion.p>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {toolsData.map((tool) => (
          <motion.div key={tool.id || tool.name} variants={itemVariants}>
            <Capsule
              name={tool.name}
              description={tool.description}
              icon={tool.icon}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Tools;

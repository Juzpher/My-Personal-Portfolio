import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Timeline from "../../../components/Timeline/Timeline";
import experienceData from "../../../assets/mock/experience/_experience";

const Experience = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, 50]);

  console.log(experienceData);
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

      {/* Timeline component with dynamic data */}
      <Timeline items={experienceData} />
    </motion.div>
  );
};

export default Experience;

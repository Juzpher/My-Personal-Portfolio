import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Card from "../../../components/Cards/Card";
import projectsData from "../../../assets/mock/projects/_projects";

const Projects = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]),
    { stiffness: 300, damping: 30 }
  );
  const y = useSpring(
    useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, 50]),
    { stiffness: 300, damping: 30 }
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
      className="default-container flex flex-col gap-12"
      name="projects"
      style={{ opacity, y }}
    >
      <motion.h1
        className="text-2xl small-caps font-semibold gradient-text tracking-wider text-left w-full"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        My Projects
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projectsData.map((project, index) => (
          <motion.div key={project.id} variants={itemVariants} custom={index}>
            <Card {...project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;

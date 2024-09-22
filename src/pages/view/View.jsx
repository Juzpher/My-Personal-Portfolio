import React from "react";
import { useParams, Navigate, NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import projectData from "../../assets/mock/projects/_projects";
import { IoLinkSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

const View = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectData.find((project) => project.id === id);

  if (!project) {
    return <Navigate to="/NotFound" />;
  }

  const handleGithubClick = (e) => {
    if (project.github !== "/Not-available") {
      window.open(project.github, "_blank", "noopener,noreferrer");
      e.preventDefault();
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

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
      className="default-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg"
            variants={itemVariants}
          >
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="flex flex-col justify-between"
            variants={itemVariants}
          >
            <motion.div
              className="flex justify-end items-center"
              variants={itemVariants}
            >
              <motion.button
                onClick={handleGoBack}
                className="p-2 rounded-full bg-primary-100 text-secondary-default hover:bg-primary-200 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaArrowLeft className="w-6 h-6" />
              </motion.button>
            </motion.div>
            <motion.div variants={itemVariants}>
              <motion.div variants={itemVariants}>
                <motion.h1
                  className="text-2xl sm:text-3xl font-semibold gradient-text small-caps"
                  variants={itemVariants}
                >
                  {project.name}
                </motion.h1>
                <motion.p
                  className="text-xl text-secondary-50 mb-4"
                  variants={itemVariants}
                >
                  {project.role}
                </motion.p>
              </motion.div>
              <motion.div
                className="tracking-wide text-secondary-default mb-6"
                variants={itemVariants}
              >
                <motion.p variants={itemVariants}>
                  {project.description}
                </motion.p>
                <motion.p
                  className="mt-4 tracking-wide"
                  variants={itemVariants}
                >
                  {project.challenges}
                </motion.p>
              </motion.div>

              <motion.div className="mb-6" variants={itemVariants}>
                <motion.h2
                  className="text-xl font-semibold text-secondary-default mb-2"
                  variants={itemVariants}
                >
                  Built with:
                </motion.h2>
                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                >
                  {project.tools.map((icon, index) => (
                    <motion.span
                      key={index}
                      className="p-2 bg-primary-50 text-secondary-default rounded-md flex items-center justify-center"
                      variants={itemVariants}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <img
                        src={icon}
                        alt={`Tool ${index + 1}`}
                        className="w-6 h-6 object-contain"
                        onError={(e) => {
                          console.error(`Failed to load icon ${index + 1}`, e);
                          e.target.style.display = "none";
                        }}
                      />
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div className="flex" variants={itemVariants}>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-default button-outline-icon"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IoLinkSharp />
              </motion.a>
              {project.github === "/Not-available" ? (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <NavLink to="/Not-available" className="button-outline-icon">
                    <FaGithub />
                  </NavLink>
                </motion.div>
              ) : (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleGithubClick}
                  className="button-outline-icon"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default View;

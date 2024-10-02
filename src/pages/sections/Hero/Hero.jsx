import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import displayImg from "../../../assets/Img/profile.png";
import heroImg from "../../../assets/Img/Hero-Img.png";
import subject from "../../../assets/Img/subject.png";
import background from "../../../assets/Img/background.png";
import cvPdf from "../../../assets/document/pdf/Juspher R. Vergara.pdf";

//Icons
import { IoMdCloudDownload } from "react-icons/io";

const Hero = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [1, 1, 0.5, 0]
  );
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0, 50, 100]);

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
      className="default-container flex items-center"
      name="home"
      style={{ opacity, y }}
    >
      <div className="w-full flex flex-col lg:flex-row items-center justify-between">
        {/* Text */}
        <motion.div
          className="flex flex-col justify-center items-center lg:items-start"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          {/* First Section */}
          <motion.div
            className="flex items-center gap-2 mb-4"
            variants={itemVariants}
          >
            <img
              src={displayImg}
              alt="hero"
              className="w-auto h-14 rounded-md"
            />
            <div className="flex items-center gap-2">
              <div className="rounded-full w-3 h-3 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse-glow" />
              <p className="text-sm text-secondary-50 lowercase">
                Available to work
              </p>
            </div>
          </motion.div>
          {/* Second Section */}
          <motion.div
            className="flex flex-col text-center lg:text-left"
            variants={itemVariants}
          >
            <h1 className="font-bold text-4xl md:text-5xl font-work tracking-tight">
              Hi, I'm{" "}
              <span className="text-gradient [--tw-gradient-text:theme('colors.accent.default')]">
                Juspher
              </span>
              <br />
              Aspiring Web Developer
              <br />
              <span className="text-3xl">
                <span className="gradient-text  ">| </span>
                Building the Web, Pixel by Pixel
              </span>
            </h1>
            <p className="mt-2 text-xl text-secondary-50 ">
              Front-end Developer | Web Designer
            </p>
            {/* Download CV Button */}
            <motion.div
              className="mt-5 flex items-center justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.a
                href={cvPdf}
                download="Juspher Vergara CV.pdf"
                className="button-outline flex justify-items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IoMdCloudDownload className="mr-2 h-5 w-5" />
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* Image */}
        <motion.div
          className="justify-center items-center hidden lg:flex"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative">
            <motion.img
              src={background}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              animate={{ y: [0, 10, 0], x: [0, 5, 0] }} // Floating and horizontal animation
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src={subject}
              alt="hero"
              className="max-h-[40rem] w-auto rounded-md relative z-10" // Ensure subject is in front
              animate={{ y: [0, -10, 0], x: [0, -5, 0] }} // Floating and horizontal animation
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;

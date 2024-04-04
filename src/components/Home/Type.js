import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Type = () => {
  const fadeAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeAnimation}>
      <Typewriter
        options={{
          strings: [
            "Desenvolvedor Front-End",
            "Freelancer",
            "Desenvolvedor MERN Stack",
            "Colaborador Open Source",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 40,
        }}
      />
    </motion.div>
  );
};

export default Type;

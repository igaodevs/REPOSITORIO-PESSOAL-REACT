import React from "react";
import { motion } from "framer-motion";

const Pre = ({ load }) => {
  const fadeAnimation = {
    hidden: { opacity: 1 },
    visible: { opacity: 0, transition: { delay: 1, duration: 1 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate={load ? "visible" : "hidden"}
      variants={fadeAnimation}
    >
      <div id={load ? "preloader" : "preloader-none"}></div>
    </motion.div>
  );
};

export default Pre;

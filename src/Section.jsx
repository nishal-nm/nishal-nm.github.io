import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

const Section = ({ children }) => {
  const { scrollYProgress } = useScroll(); // Track scroll position

  // Apply transformations for vertical motion without affecting size
  const y = useTransform(scrollYProgress, [0, 1], [30, -40]); // Upward motion, no scaling

  return (
    <motion.div
      style={{
        y, // Apply the vertical motion (upward)
        transition: "all 0.3s ease-out", // Smooth transitions for all properties
      }}
    >
      {children}
    </motion.div>
  );
};

export default Section;

import React from "react";
import { motion } from "framer-motion";
import { SmallBirdIcon } from "@/assets/svgs";

interface AnimatedSmallBirdsProps {
  animationStage: number;
}

export const AnimatedSmallBirds = ({ animationStage }: AnimatedSmallBirdsProps) => {
  return (
    <div>
      <motion.div
        className="hidden md:block absolute top-70 left-36 z-10"
        initial={{ y: 600 }}
        animate={animationStage >= 1 ? { y: 0 } : { y: 600 }}
        transition={{
          duration: 1.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
      >
        <SmallBirdIcon />
      </motion.div>

      <div className="hidden md:block absolute top-75 left-75 z-10 transform">
        <SmallBirdIcon />
      </div>
      <motion.div
        className="hidden md:block absolute top-72 right-80 z-10"
        initial={{ y: 600 }}
        animate={animationStage >= 1 ? { y: 0 } : { y: 600 }}
        transition={{
          duration: 1.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
      >
        <SmallBirdIcon />
      </motion.div>
      <div className="hidden md:block absolute top-110 right-68 z-10 transform">
        <SmallBirdIcon />
      </div>
    </div>
  );
};

import React from 'react';
import { motion } from "framer-motion";
import { CloudFour, CloudOne, CloudThree, CloudTwo } from '@/assets/svgs';

interface AnimatedSmallBirdsProps {
  animationStage: number;
}

export const AnimatedClouds = ({ animationStage }: AnimatedSmallBirdsProps) => {
  return (
    <div>
        <motion.div
        className="absolute bottom-0 left-0 w-full h-88 z-0 opacity-10"
        initial={{ y: "100vh" }}
        animate={{
          y: animationStage >= 2 ? "0vh" : "100vh",
        }}
        transition={{
          duration: 4,
          ease: [0.4, 0.0, 0.2, 1],
        }}
      >
        <CloudOne />
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 w-full h-56 z-0 opacity-10"
        initial={{ y: "100vh" }}
        animate={{
          y: animationStage >= 2 ? "0vh" : "100vh",
        }}
        transition={{
          duration: 4.5,
          ease: [0.4, 0.0, 0.2, 1],
          delay: 0.2,
        }}
      >
        <CloudTwo />
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 w-full h-48 z-0 opacity-10"
        initial={{ y: "100vh" }}
        animate={{
          y: animationStage >= 2 ? "0vh" : "100vh",
        }}
        transition={{
          duration: 5,
          ease: [0.4, 0.0, 0.2, 1],
          delay: 0.4,
        }}
      >
        <CloudThree />
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 w-full h-24 z-0 opacity-40"
        initial={{ y: "100vh" }}
        animate={{
          y: animationStage >= 2 ? "0vh" : "100vh",
        }}
        transition={{
          duration: 5.5,
          ease: [0.4, 0.0, 0.2, 1],
          delay: 0.6,
        }}
      >
        <CloudFour />
      </motion.div>
    </div>
  )
}

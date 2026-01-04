import React from "react";
import { motion } from "framer-motion";
import { MessageBirdFourIcon } from "@/assets/svgs";

interface AnimatedSmallBirdsProps {
  animationStage: number;
}

export const AnimatedFlyingBirds = ({ animationStage }: AnimatedSmallBirdsProps) => {
  return (
    <div>
      <motion.div
        className="hidden md:block absolute left-0 z-40"
        initial={{ x: "-300px", bottom: "30vh" }}
        animate={{
          x: animationStage >= 4 ? `${window.innerWidth + 300}px` : "-300px",
          bottom: animationStage >= 4 ? "60vh" : "30vh",
        }}
        transition={{
          duration: 12,
          ease: [0.4, 0.0, 0.2, 1],
        }}
      >
        <MessageBirdFourIcon />
      </motion.div>

      <motion.div
        className="hidden md:block absolute right-0 z-40"
        initial={{ x: "300px", bottom: "60vh" }}
        animate={{
          x: animationStage >= 4 ? `-${window.innerWidth + 300}px` : "300px",
          bottom: animationStage >= 4 ? "30vh" : "60vh",
        }}
        transition={{
          duration: 12,
          ease: [0.4, 0.0, 0.2, 1],
        }}
      >
        <div style={{ transform: "scaleX(-1)" }}>
          <MessageBirdFourIcon />
        </div>
      </motion.div>
    </div>
  );
};

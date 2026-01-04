import React from "react";
import { motion } from "framer-motion";
import {
  MessageBirdOneIcon,
  MessageBirdTwoIcon,
  MessageBirdThreeIcon,
  MessageBirdFourIcon,
} from "@/assets/svgs";

interface AnimatedSmallBirdsProps {
  animationStage: number;
}

export const AnimatedMessageBirds = ({
  animationStage,
}: AnimatedSmallBirdsProps) => {
  return (
    <div>
      <motion.div
        className="hidden md:block absolute bottom-28 left-70 z-30"
        initial={{ y: "150vh" }}
        animate={{ y: animationStage >= 3 ? "0vh" : "150vh" }}
        transition={{
          duration: 5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
      >
        <MessageBirdOneIcon />
      </motion.div>

      <motion.div
        className="hidden md:block absolute bottom-48 left-1/3 transform translate-x-16 z-30"
        initial={{ y: "150vh" }}
        animate={{ y: animationStage >= 3 ? "0vh" : "150vh" }}
        transition={{
          duration: 5.5,
          ease: [0.4, 0.0, 0.2, 1],
          delay: 0.2,
        }}
      >
        <MessageBirdTwoIcon />
      </motion.div>

      <motion.div
        className="hidden md:block absolute bottom-28 right-80 transform -translate-x-12 z-30"
        initial={{ y: "150vh" }}
        animate={{ y: animationStage >= 3 ? "0vh" : "150vh" }}
        transition={{
          duration: 5.2,
          ease: [0.4, 0.0, 0.2, 1],
          delay: 0.1,
        }}
      >
        <MessageBirdThreeIcon />
      </motion.div>

      <motion.div
        className="hidden md:block absolute bottom-48 right-38 z-30"
        initial={{ y: "150vh" }}
        animate={{ y: animationStage >= 3 ? "0vh" : "150vh" }}
        transition={{
          duration: 5.8,
          ease: [0.4, 0.0, 0.2, 1],
          delay: 0.3,
        }}
      >
        <MessageBirdFourIcon />
      </motion.div>
    </div>
  );
};

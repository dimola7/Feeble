"use client";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AnimatedSmallBirds } from "@/components/AnimatedSmallBirds";
import { AnimatedMessageBirds } from "@/components/AnimatedMessageBirds";
import { AnimatedFlyingBirds } from "@/components/AnimatedFlyingBirds";
import { AnimatedClouds } from "@/components/AnimatedClouds";

export default function Home() {
  const [animationStage, setAnimationStage] = useState<number>(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationStage(1), 500);
    const timer2 = setTimeout(() => setAnimationStage(2), 1000);
    const timer3 = setTimeout(() => setAnimationStage(3), 2000);
    const timer4 = setTimeout(() => setAnimationStage(4), 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#e4f3fe] relative overflow-hidden">
      <Navbar />
      <AnimatedSmallBirds animationStage={animationStage} />
      <HeroSection />
      <AnimatedMessageBirds animationStage={animationStage} />
      <AnimatedFlyingBirds animationStage={animationStage} />
      <AnimatedClouds animationStage={animationStage} />
    </div>
  );
}

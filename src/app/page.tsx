"use client";
import { useEffect, useState } from "react";
import {
  SmallBirdIcon,
  MessageBirdOneIcon,
  MessageBirdTwoIcon,
  MessageBirdThreeIcon,
  MessageBirdFourIcon,
  CloudOne,
  CloudTwo,
  CloudThree,
  CloudFour,
  AppleIcon,
  ArrowDownIcon,
  ChatBubbleIcon,
} from "@/assets/svgs";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    // Stage 1: Start first and third birds animation
    const timer1 = setTimeout(() => setAnimationStage(1), 500);
    
    // Stage 2: Start clouds animation (as birds are about to reach position)
    const timer2 = setTimeout(() => setAnimationStage(2), 1000);
    
    // Stage 3: Start message birds animation
    const timer3 = setTimeout(() => setAnimationStage(3), 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);
  return (
    <div className="min-h-screen bg-[#e4f3fe] relative overflow-hidden">
      <Navbar />

      {/* Small Birds at Top */}
      <div className={`absolute top-70 left-36 z-10 transform transition-transform duration-2000 ease-in-out ${
        animationStage >= 1 ? 'translate-y-0' : 'translate-y-[150vh]'
      }`} style={{animationDuration: "8s", animationDelay: "3s"}}>
        <SmallBirdIcon />
      </div>
      <div className="absolute top-75 left-75 z-10 transform">
        <SmallBirdIcon />
      </div>
      <div className={`absolute top-72 right-80 z-10 transform transition-transform duration-2000 ease-in-out ${
        animationStage >= 1 ? 'translate-y-0' : 'translate-y-[150vh]'
      }`}>
        <SmallBirdIcon />
      </div>
      <div className="absolute top-110 right-68 z-10 transform">
        <SmallBirdIcon />
      </div>

      <main className="relative z-20 max-w-6xl mx-auto px-8 pt-14 text-center">
        <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 mb-8 border border-[#cbd6e2]/80">
          <div className="flex space-x-1.5 mr-3">
            <ChatBubbleIcon />
          </div>
          <span className="text-[#006fe8] font-medium text-base">
            #1 iMessage Automation Tool
          </span>
        </div>

        <h1 className="text-[64px] text-[#1d2026] mb-8 font-bold max-w-5xl mx-auto leading-[120%] tracking-[-2%]">
          <span className="text-[#007AFF]">iMessage</span> Automation
          <br />
          for Teams and AI
          <br />
          Workflows.
        </h1>

        <p className="text-lg text-black mb-14 max-w-3xl mx-auto leading-[130%] font-normal tracking-[-2%]">
          Coup lets you, your team, or AI workflows send iMessages directly from
          <br />
          your phone number, running securely on your Mac or Mac Mini.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex items-center justify-center space-x-4 mb-64">
          <button className="bg-[#007AFF] text-white px-6 py-3 rounded-[50px] font-medium text-lg leading-[120%] tracking-[-2%]">
            Get Started
          </button>
          <button className="flex items-center justify-between gap-2 px-6 py-3 border border-[#5c788f] rounded-[50px] font-medium text-lg leading-[120%] tracking-[-2%]">
            <AppleIcon />
            <p className="font-light text-[#6c788f]">|</p>
            <span>Download the Mac app</span>
          </button>
        </div>

        {/* Scroll to learn more */}
        <div className="flex flex-col items-center space-y-4 pb-8">
          <span className="text-lg font-medium text-[#1d2026] leading-[130%] tracking-[-2%]">Scroll to learn more</span>
          <div>
            <ArrowDownIcon />
          </div>
        </div>
      </main>

      {/* Message Birds */}
      <div className={`absolute bottom-28 left-70 z-30 transition-transform duration-2000 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
        animationStage >= 3 ? 'translate-y-0' : 'translate-y-[150vh]'
      }`}>
        <MessageBirdOneIcon />
      </div>
      <div className={`absolute bottom-48 left-1/3 transform translate-x-16 z-30 transition-transform duration-2000 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
        animationStage >= 3 ? 'translate-y-0' : 'translate-y-[150vh]'
      }`}>
        <MessageBirdTwoIcon />
      </div>
      <div className={`absolute bottom-28 right-80 transform -translate-x-12 z-30 transition-transform duration-2000 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
        animationStage >= 3 ? 'translate-y-0' : 'translate-y-[150vh]'
      }`}>
        <MessageBirdThreeIcon />
      </div>
      <div className={`absolute bottom-48 right-38 z-30 transition-transform duration-2000 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
        animationStage >= 3 ? 'translate-y-0' : 'translate-y-[150vh]'
      }`}>
        <MessageBirdFourIcon />
      </div>

      {/* clouds */}
      <div className={`absolute bottom-0 left-0 w-full h-88 z-0 opacity-10 transition-transform duration-[2500ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
        animationStage >= 2 ? 'translate-y-0' : 'translate-y-[100vh]'
      }`}>
        <CloudOne />
      </div>
      <div className={`absolute bottom-0 left-0 w-full h-56 z-0 opacity-10 transition-transform duration-[2500ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
        animationStage >= 2 ? 'translate-y-0' : 'translate-y-[100vh]'
      }`}>
        <CloudTwo />
      </div>
      <div className={`absolute bottom-0 left-0 w-full h-48 z-0 opacity-10 transition-transform duration-[2500ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
        animationStage >= 2 ? 'translate-y-0' : 'translate-y-[100vh]'
      }`}>
        <CloudThree />
      </div>
      <div className={`absolute bottom-0 left-0 w-full h-24 z-0 opacity-40 transition-transform duration-[2500ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
        animationStage >= 2 ? 'translate-y-0' : 'translate-y-[100vh]'
      }`}>
        <CloudFour />
      </div>
    </div>
  );
}

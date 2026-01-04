import { AppleIcon, ArrowDownIcon, ChatBubbleIcon } from "@/assets/svgs";
import React from "react";

export const HeroSection = () => {
  return (
    <main className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-8 md:pt-14 text-center">
      <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 mb-6 md:mb-8 border border-[#cbd6e2]/80">
        <div className="flex space-x-1.5 mr-3">
          <ChatBubbleIcon />
        </div>
        <span className="text-[#006fe8] font-medium text-sm md:text-base">
          #1 iMessage Automation Tool
        </span>
      </div>

      <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] text-[#1d2026] mb-6 md:mb-8 font-bold max-w-5xl mx-auto leading-[120%] tracking-[-2%]">
        <span className="text-[#007AFF]">iMessage</span> Automation
        <br />
        for Teams and AI
        <br />
        Workflows.
      </h1>

      <p className="text-base md:text-lg text-black mb-10 md:mb-14 max-w-3xl mx-auto leading-[130%] font-normal tracking-[-2%] px-4">
        Coup lets you, your team, or AI workflows send iMessages directly from
        <span className="hidden md:inline">
          <br />
        </span>
        <span className="md:hidden"> </span>
        your phone number, running securely on your Mac or Mac Mini.
      </p>

      {/* Call to Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 mb-40 md:mb-72">
        <button className="w-full sm:w-auto bg-[#007AFF] text-white px-6 py-3 rounded-[50px] font-medium text-base md:text-lg leading-[120%] tracking-[-2%]">
          Get Started
        </button>
        <button className="w-full sm:w-auto flex items-center justify-center sm:justify-between gap-2 px-6 py-3 border border-[#5c788f] rounded-[50px] font-medium text-base md:text-lg leading-[120%] tracking-[-2%]">
          <AppleIcon />
          <p className="font-light text-[#6c788f]">|</p>
          <span>Download the Mac app</span>
        </button>
      </div>

      {/* Scroll to learn more */}
      <div className="flex flex-col items-center space-y-3 md:space-y-4 pb-6 md:pb-8">
        <span className="text-base md:text-lg font-medium text-[#1d2026] leading-[130%] tracking-[-2%]">
          Scroll to learn more
        </span>
        <div>
          <ArrowDownIcon />
        </div>
      </div>
    </main>
  );
};

"use client";
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
  return (
    <div className="min-h-screen bg-[#e4f3fe] relative overflow-hidden">
      {/* Navigation Bar */}
      <Navbar />

      {/* Small Birds at Top */}
      <div className="absolute top-70 left-36 z-10 transform">
        <SmallBirdIcon />
      </div>
      <div className="absolute top-75 left-75 z-10 transform">
        <SmallBirdIcon />
      </div>
      <div className="absolute top-72 right-80 z-10 transform">
        <SmallBirdIcon />
      </div>
      <div className="absolute top-110 right-68 z-10 transform">
        <SmallBirdIcon />
      </div>

      {/* Hero Section */}
      <main className="relative z-20 max-w-6xl mx-auto px-8 pt-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 mb-10 border border-blue-200 shadow-sm">
          <div className="flex space-x-1.5 mr-3">
            <ChatBubbleIcon />
          </div>
          <span className="text-[#006fe8] font-medium text-base">
            #1 iMessage Automation Tool
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-[64px] text-[#1d2026] mb-8 font-bold max-w-5xl mx-auto leading-[120%] tracking-[-2%]">
          <span className="text-[#007AFF]">iMessage</span> Automation
          <br />
          for Teams and AI
          <br />
          Workflows.
        </h1>

        {/* Description */}
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

      {/* Message Birds at Bottom */}
      <div className="absolute bottom-28 left-70 z-30">
        <MessageBirdOneIcon />
      </div>
      <div className="absolute bottom-48 left-1/3 transform translate-x-16 z-30">
        <MessageBirdTwoIcon />
      </div>
      <div className="absolute bottom-28 right-80 transform -translate-x-12 z-30">
        <MessageBirdThreeIcon />
      </div>
      <div className="absolute bottom-48 right-38 z-30">
        <MessageBirdFourIcon />
      </div>

      {/* Layered Clouds Background - positioned to match the design */}
      <div className="absolute bottom-0 left-0 w-full h-88 z-0 opacity-10">
        <CloudOne />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-56 z-0 opacity-10">
        <CloudTwo />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-48 z-0 opacity-10">
        <CloudThree />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 z-0 opacity-40">
        <CloudFour />
      </div>
    </div>
  );
}

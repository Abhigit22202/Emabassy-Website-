import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection/DivWrapperSubsection";
import { FooterSubsection } from "./sections/FooterSubsection";
import { GroupSubsection } from "./sections/GroupSubsection";
import { GroupWrapperSubsection } from "./sections/GroupWrapperSubsection";
import { HeaderSubsection } from "./sections/HeaderSubsection";
import { OverlapWrapperSubsection } from "./sections/OverlapWrapperSubsection";

export const Box = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Top navigation bar */}
      <div className="w-full shadow-[0px_2px_4px_#0000001a] bg-[linear-gradient(90deg,rgba(30,58,138,1)_0%,rgba(30,64,175,1)_50%,rgba(55,48,163,1)_100%)]">
        <div className="w-[1186px] mx-auto flex justify-between items-center h-[57.59px] px-4">
          <div className="text-white text-xs tracking-[0.12px]">
            Sitemap | Contact Us | Feedback
          </div>

          <div className="flex items-center">
            <Select defaultValue="english">
              <SelectTrigger className="w-24 h-6 bg-white/30 border-gray-400 rounded text-xs">
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="hindi">Hindi</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center text-xs text-white">
            <span>Skip to main content | Screen Reader Access |</span>
            <div className="flex items-center ml-1">
              <div className="w-[17px] h-4 bg-white border border-solid border-black flex items-center justify-center">
                <span className="text-black font-black text-[10px] tracking-[0.10px]">
                  A
                </span>
              </div>
              <div className="w-[17px] h-4 bg-black border border-solid border-[#b05416] flex items-center justify-center ml-1">
                <span className="text-white font-black text-[10px] tracking-[0.10px]">
                  A
                </span>
              </div>
              <span className="ml-1 text-base tracking-[0.03px]">A+</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header image and section */}
      <div className="w-[1186px] mx-auto relative h-32">
        <img
          className="w-full h-32 object-cover"
          alt="Back ground image"
          src="/back_ground_image.jpg"
        />
        <HeaderSubsection />
      </div>

      {/* Main Slider Section - Exact dimensions 1186x471 */}
      <div className="w-full mb-8">
        <GroupSubsection />
      </div>

      {/* MEA Performance Dashboard - Full Width Below Slider */}
      <div className="w-[1186px] mx-auto mb-8">
        <OverlapWrapperSubsection />
      </div>

      {/* Main Content Layout - Two Columns */}
      <div className="w-[1186px] mx-auto">
        <div className="grid grid-cols-3 gap-6">
          {/* Left Column - 2/3 width */}
          <div className="col-span-2 space-y-6">
            <DivWrapperSubsection />
          </div>

          {/* Right Column - 1/3 width */}
          <div className="col-span-1">
            <GroupWrapperSubsection />
          </div>
        </div>
      </div>

      {/* Our Initiatives Section - Full Width */}
      <div className="w-[1186px] mx-auto py-16">
        <h2 className="font-bold text-blue-900 text-3xl text-center mb-12">
          Our Initiatives
        </h2>

        <div className="grid grid-cols-5 gap-8 items-center justify-items-center">
          <img
            className="w-32 h-20 object-contain hover:scale-105 transition-transform duration-300"
            alt="Indian Perspectives"
            src="/indianprespectiveslogoNov2020_10feb.jpg"
          />
          <img
            className="w-32 h-20 object-contain hover:scale-105 transition-transform duration-300"
            alt="E-Visa Logo"
            src="/logo1.png"
          />
          <img
            className="w-32 h-20 object-contain hover:scale-105 transition-transform duration-300"
            alt="Incredible India"
            src="/ft_link_incredible_india1.jpg"
          />
          <img
            className="w-32 h-20 object-contain hover:scale-105 transition-transform duration-300"
            alt="ITEC"
            src="/itec_right.jpeg"
          />
          <img
            className="w-32 h-20 object-contain hover:scale-105 transition-transform duration-300"
            alt="Embassy Newsletter"
            src="/PortadaDECEMBER_2018_NEWSLETTER.jpg"
          />
        </div>
      </div>

      {/* Footer section */}
      <FooterSubsection />
    </div>
  );
};
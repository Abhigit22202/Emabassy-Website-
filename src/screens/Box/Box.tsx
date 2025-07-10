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
    <div className="w-full min-h-screen bg-white">
      {/* Top navigation bar - Blue gradient */}
      <div className="w-full h-[35px] bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 shadow-sm">
        <div className="w-[1186px] mx-auto flex justify-between items-center h-full px-4">
          <div className="text-white text-xs">
            Sitemap | Contact Us | Feedback
          </div>

          <div className="flex items-center">
            <Select defaultValue="english">
              <SelectTrigger className="w-20 h-6 bg-white/20 border-white/30 rounded text-xs text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="hindi">Hindi</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center text-xs text-white">
            <span>Skip to main content | Screen Reader Access |</span>
            <div className="flex items-center ml-2">
              <div className="w-4 h-4 bg-white border border-black flex items-center justify-center">
                <span className="text-black font-bold text-[8px]">A</span>
              </div>
              <div className="w-4 h-4 bg-black border border-orange-500 flex items-center justify-center ml-1">
                <span className="text-white font-bold text-[8px]">A</span>
              </div>
              <span className="ml-1 text-sm">A+</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header with logo and search */}
      <HeaderSubsection />

      {/* Main Navigation and Hero Slider */}
      <GroupSubsection />

      {/* MEA Performance Dashboard */}
      <div className="w-[1186px] mx-auto mt-4">
        <OverlapWrapperSubsection />
      </div>

      {/* Main Content Layout */}
      <div className="w-[1186px] mx-auto mt-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column - What's New, Albums, Digital India, Press Release */}
          <div className="col-span-8">
            <DivWrapperSubsection />
          </div>

          {/* Right Column - Ambassador, Quick Services, Video Gallery, etc. */}
          <div className="col-span-4">
            <GroupWrapperSubsection />
          </div>
        </div>
      </div>

      {/* Our Initiatives Section */}
      <div className="w-[1186px] mx-auto py-12">
        <h2 className="font-bold text-blue-900 text-2xl text-center mb-8">
          Our Initiatives
        </h2>
        <div className="grid grid-cols-6 gap-4 items-center justify-items-center">
          <img
            className="w-28 h-16 object-contain hover:scale-105 transition-transform duration-300"
            alt="Indian Perspectives"
            src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=112&h=64&fit=crop"
          />
          <img
            className="w-28 h-16 object-contain hover:scale-105 transition-transform duration-300"
            alt="E-Visa"
            src="https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=112&h=64&fit=crop"
          />
          <img
            className="w-28 h-16 object-contain hover:scale-105 transition-transform duration-300"
            alt="Incredible India"
            src="https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=112&h=64&fit=crop"
          />
          <img
            className="w-28 h-16 object-contain hover:scale-105 transition-transform duration-300"
            alt="ITEC"
            src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=112&h=64&fit=crop"
          />
          <img
            className="w-28 h-16 object-contain hover:scale-105 transition-transform duration-300"
            alt="Newsletter"
            src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=112&h=64&fit=crop"
          />
          <img
            className="w-28 h-16 object-contain hover:scale-105 transition-transform duration-300"
            alt="Map India"
            src="https://images.pexels.com/photos/1098515/pexels-photo-1098515.jpeg?auto=compress&cs=tinysrgb&w=112&h=64&fit=crop"
          />
        </div>
      </div>

      {/* Footer */}
      <FooterSubsection />
    </div>
  );
};
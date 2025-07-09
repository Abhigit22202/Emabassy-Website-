import React from "react";
import { Card } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const HeaderSubsection = (): JSX.Element => {
  // Time zone data for mapping
  const timeZones = [
    {
      country: "Indian",
      time: "11:42:13 am",
      flagSrc: "/download (2).png",
      position: "top-0",
    },
    {
      country: "Mexican",
      time: "12:03:13 am",
      flagSrc: "/download.png",
      position: "top-[35px]",
    },
    {
      country: "Spanish",
      time: "12:12:13 am",
      flagSrc: "/download (1).png",
      position: "top-[70px]",
    },
  ];

  // Social media icons data
  const socialIcons = [
    {
      alt: "Letter f",
      src: "/letter-f_9182827.png",
      left: "left-0",
    },
    {
      alt: "Twitter X",
      src: "/circle-twitter-x-logo-social-media-app-button_197792-9716.png",
      left: "left-11",
    },
    {
      alt: "Threads",
      src: "/threads-social-media-round-app-logo-icon-hd-png-735811696672514l42mg6ysna.png",
      left: "left-[91px]",
    },
    {
      alt: "Social",
      src: "/social_15707814.png",
      left: "left-[135px]",
    },
    {
      alt: "Instagram",
      src: "/instagram_3670125.png",
      left: "left-[183px]",
    },
  ];

  return (
    <header className="absolute top-4 left-0 right-0 z-10 w-full h-[101px] flex justify-between items-start px-8">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img
          className="w-[300px] h-[70px] object-contain"
          alt="Belize newlogo"
          src="/belize_newlogo_10jul.png"
        />
      </div>

      {/* Search Bar */}
      <div className="relative w-[250px] h-9 mt-2">
        <Input
          className="h-9 pl-4 pr-10 bg-white border border-gray-300 rounded text-sm"
          placeholder="Search"
        />
        <img
          className="absolute w-4 h-4 top-2.5 right-3 object-cover cursor-pointer"
          alt="Search icon btn"
          src="/serach-icon-btn.png"
        />
      </div>

      {/* Right side content */}
      <div className="flex flex-col items-end space-y-1">
        {/* Social Media Icons */}
        <div className="flex space-x-1 mb-2">
          {socialIcons.map((icon, index) => (
            <img
              key={index}
              className="w-6 h-6 object-cover cursor-pointer rounded-full"
              alt={icon.alt}
              src={icon.src}
            />
          ))}
        </div>

        {/* Time Zones */}
        <div className="flex flex-col space-y-0">
          {timeZones.map((zone, index) => (
            <div
              key={index}
              className="flex items-center bg-white/90 rounded px-2 py-1 text-xs"
            >
              <img
                className="w-4 h-3 mr-2 object-cover"
                alt="Flag"
                src={zone.flagSrc}
              />
              <span className="font-semibold text-gray-800">
                {zone.country} Time: {zone.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};
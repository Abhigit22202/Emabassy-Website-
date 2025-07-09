import { ChevronLeftIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const GroupSubsection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "Home", hasBorder: true },
    { label: "About Embassy", hasBorder: true },
    { label: "Bilateral Relations", hasBorder: true },
    { label: "Commercial", hasBorder: true },
    { label: "Culture", hasBorder: true },
    { label: "Visa Passport Consular", hasBorder: true },
    { label: "ITEC/Education", hasBorder: false },
  ];

  // Initiative logos data
  const initiativeLogos = [
    {
      src: "/indianprespectiveslogonov2020-10feb.png",
      alt: "Img",
      className: "w-[189px] h-[107px] object-cover",
    },
    {
      src: "/logo1.png",
      alt: "Logo",
      className: "w-[189px] h-[107px] object-cover",
    },
    {
      src: "/ft-link-incredible-india1.png",
      alt: "Ft link incredible",
      className: "w-[191px] h-[108px]",
    },
    {
      src: "/itec-right.png",
      alt: "Itec right",
      className: "w-[241px] h-[108px]",
    },
    {
      src: "/portadadecember-2018-newsletter.png",
      alt: "Portadadecember",
      className: "w-[216px] h-28",
    },
    {
      src: "/map-india.png",
      alt: "Map india",
      className: "w-[139px] h-28 object-cover",
    },
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4">
      {/* Hero Section with Navigation */}
      <div className="w-full mb-8">
        <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
          {/* Navigation Menu */}
          <NavigationMenu className="w-full bg-[linear-gradient(90deg,rgba(30,58,138,1)_0%,rgba(30,64,175,1)_50%,rgba(67,56,202,1)_100%)]">
            <NavigationMenuList className="flex w-full">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className={`inline-flex items-center gap-2 px-4 py-3 ${
                    item.hasBorder ? "border-r border-blue-500" : ""
                  }`}
                >
                  <div className="font-medium text-white text-sm whitespace-nowrap hover:text-blue-200 cursor-pointer">
                    {item.label}
                  </div>
                </div>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Hero Banner */}
          <div className="w-full h-[450px] bg-[url(/lGCKtwgvsrU3WcxwUJCY9vtYHjTPdLo19BUdm6fm.jpeg)] bg-cover bg-center relative">
            {/* Gradient Overlay */}
            <div className="absolute w-full h-full top-0 left-0 shadow-[0px_4px_4px_#00000040] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(30,30,30,0.64)_74%)]" />

            {/* Banner Content */}
            <div className="absolute bottom-20 left-8 right-8">
              <h1 className="font-bold text-white text-2xl md:text-3xl mb-4">
              Embassy Officials in a Meeting
              </h1>
              <p className="text-white text-base md:text-lg leading-relaxed max-w-4xl">
                Embassy Officials in a Meeting with Ms. Sadia Salam and Ms. Joli
                Divon Saraf, contributors to "The Courage to Begin
                Again"—a Compelling Anthology of Stories on the Strength of
                Women who Rebuilt their Lives in Mexico
              </p>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute w-10 h-10 top-1/2 left-4 -translate-y-1/2 rounded-full border border-white/50 bg-black/20 hover:bg-black/40"
            >
              <ChevronLeftIcon className="h-7 w-7 text-white" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute w-10 h-10 top-1/2 right-4 -translate-y-1/2 rounded-full border border-white/50 bg-black/20 hover:bg-black/40"
            >
              <ChevronLeftIcon className="h-7 w-7 text-white rotate-180" />
            </Button>
          </div>
        </div>
      </div>

    </div>
  );
};

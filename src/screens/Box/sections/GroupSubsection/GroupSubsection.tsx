import { ChevronLeftIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
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

  return (
    <div className="w-full">
      {/* Main Slider Container - Full Width */}
      <div className="w-full h-[471px] overflow-hidden shadow-lg">
        {/* Navigation Menu - Full Width with centered content */}
        <NavigationMenu className="w-full h-[57.59px] bg-[linear-gradient(90deg,rgba(30,58,138,1)_0%,rgba(30,64,175,1)_50%,rgba(67,56,202,1)_100%)]">
          <div className="w-[1186px] mx-auto">
            <NavigationMenuList className="flex w-full h-[57.59px]">
            {navItems.map((item, index) => (
              <div
                key={index}
                className={`inline-flex items-center gap-2 px-4 h-[57.59px] ${
                  item.hasBorder ? "border-r border-blue-500" : ""
                }`}
              >
                <div className="font-medium text-white text-sm whitespace-nowrap hover:text-blue-200 cursor-pointer">
                  {item.label}
                </div>
              </div>
            ))}
          </NavigationMenuList>
          </div>
        </NavigationMenu>

        {/* Hero Banner - Full Width with centered content */}
        <div className="w-full h-[413.41px] bg-[url(/lGCKtwgvsrU3WcxwUJCY9vtYHjTPdLo19BUdm6fm.jpeg)] bg-cover bg-center relative">
          {/* Gradient Overlay */}
          <div className="absolute w-full h-full top-0 left-0 shadow-[0px_4px_4px_#00000040] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(30,30,30,0.64)_74%)]" />

          {/* Banner Content */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[1186px] px-8">
            <h1 className="font-bold text-white text-2xl mb-4">
              Embassy Officials in a Meeting
            </h1>
            <p className="text-white text-base leading-relaxed max-w-4xl">
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
  );
};
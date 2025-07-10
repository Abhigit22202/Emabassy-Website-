import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const GroupSubsection = (): JSX.Element => {
  const navItems = [
    "Home",
    "About Embassy", 
    "Bilateral Relations",
    "Commercial",
    "Culture",
    "Visa Passport Consular",
    "ITEC/Education"
  ];

  return (
    <div className="w-full">
      {/* Navigation Menu */}
      <div className="w-full h-[70px] bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900">
        <div className="w-[1186px] mx-auto">
          <div className="flex h-[70px]">
            {navItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-center px-6 h-full ${
                  index < navItems.length - 1 ? "border-r border-blue-600" : ""
                } hover:bg-blue-600/30 cursor-pointer transition-colors`}
              >
                <span className="text-white text-sm font-medium whitespace-nowrap">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Slider */}
      <div className="w-full h-[401px] relative bg-gradient-to-br from-blue-900 to-blue-800">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1186&h=401&fit=crop')`
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[1186px] px-8">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4 leading-tight">
              Embassy Officials in a Meeting
            </h1>
            <p className="text-lg leading-relaxed max-w-4xl opacity-95">
              Embassy Officials in a Meeting with Ms. Sadia Salam and Ms. Joli 
              Divon Saraf, contributors to "The Courage to Begin Again"—a 
              Compelling Anthology of Stories on the Strength of Women who 
              Rebuilt their Lives in Mexico
            </p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-white/50 bg-black/30 hover:bg-black/50 text-white"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-white/50 bg-black/30 hover:bg-black/50 text-white"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};
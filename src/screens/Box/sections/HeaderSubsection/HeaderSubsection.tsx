import React from "react";
import { Search } from "lucide-react";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";

export const HeaderSubsection = (): JSX.Element => {
  return (
    <div className="w-full h-[120px] bg-white border-b border-gray-200">
      <div className="w-[1186px] mx-auto flex items-center justify-between h-full px-4">
        {/* Left - Government Logo and Text */}
        <div className="flex items-center">
          <img
            className="w-16 h-16 mr-4"
            alt="Government of India Logo"
            src="https://images.pexels.com/photos/8828687/pexels-photo-8828687.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop"
          />
          <div className="flex flex-col">
            <div className="text-orange-600 text-sm font-semibold">
              भारत सरकार
            </div>
            <div className="text-blue-900 text-lg font-bold">
              Embassy of India, Mexico City
            </div>
            <div className="text-blue-700 text-sm">
              Embajada de la India en México
            </div>
          </div>
        </div>

        {/* Right - Search Box */}
        <div className="flex items-center">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search"
              className="w-64 h-10 pr-10 border-gray-300 rounded-md"
            />
            <Button
              size="sm"
              className="absolute right-0 top-0 h-10 px-3 bg-blue-600 hover:bg-blue-700 rounded-l-none"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex items-center ml-4 space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">f</span>
            </div>
            <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">t</span>
            </div>
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">@</span>
            </div>
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">▶</span>
            </div>
            <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">📷</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
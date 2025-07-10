import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";

export const OverlapWrapperSubsection = (): JSX.Element => {
  return (
    <Card className="w-full rounded-lg overflow-hidden shadow-lg border-0">
      <CardContent className="p-0">
        <div className="relative w-full h-[80px] bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="flex items-center h-full px-6">
            {/* Dashboard Icon */}
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-orange-600 font-bold text-sm">📊</span>
              </div>
            </div>

            {/* Title and Description */}
            <div className="flex-1">
              <h2 className="text-white text-xl font-bold">
                MEA Performance Dashboard
              </h2>
              <p className="text-orange-100 text-sm">
                Real-time embassy service statistics
              </p>
            </div>

            {/* View Details Button */}
            <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-6">
              View Details
            </Button>

            {/* Dashboard Graphics */}
            <div className="ml-4 h-full flex items-center">
              <img
                className="h-16 object-contain"
                alt="Dashboard graphics"
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=100&h=64&fit=crop"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
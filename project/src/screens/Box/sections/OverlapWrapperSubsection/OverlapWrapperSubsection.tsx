import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const OverlapWrapperSubsection = (): JSX.Element => {
  return (
    <section className="w-full">
      <Card className="relative w-full border border-orange-200 rounded-xl shadow-lg overflow-hidden">
        <CardContent className="p-0">
          <div className="relative w-full h-24 bg-gradient-to-r from-orange-500 to-orange-600">
            <div className="flex items-center h-full px-6">
              <div className="relative w-16 h-16 bg-[url(/popupnov06-2019-3.png)] bg-cover bg-center rounded" />

              <div className="flex flex-col ml-6">
                <h2 className="font-bold text-white text-xl">
                  MEA Performance Dashboard
                </h2>
                <p className="text-orange-100 text-sm">
                  Real-time embassy service statistics
                </p>
              </div>

              <img
                className="ml-auto h-24 object-cover"
                alt="Dashboard graphics"
                src="/boost-your-1.png"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

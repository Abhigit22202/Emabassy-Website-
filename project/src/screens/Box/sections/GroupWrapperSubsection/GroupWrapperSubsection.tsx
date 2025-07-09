import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../../../components/ui/card";

export const GroupWrapperSubsection = (): JSX.Element => {
  // Ambassador section data
  const ambassadorData = {
    name: "Dr. Pankaj Sharma",
    title: "High Commissioner of India to Belize",
    image: "/ambass19022022.jpg",
  };

  // Quick services data
  const quickServices = [
    {
      title: "Online Appointment System for Consular services",
      bgClass:
        "bg-[linear-gradient(143deg,rgba(239,246,255,1)_0%,rgba(219,234,254,1)_100%)]",
      textClass: "text-blue-800",
      borderClass: "border-blue-100",
      hasButton: false,
    },
    {
      title: "Complaints/Suggestions about our services",
      bgClass:
        "bg-[linear-gradient(143deg,rgba(238,242,255,1)_0%,rgba(224,231,255,1)_100%)]",
      textClass: "text-indigo-700",
      borderClass: "border-indigo-100",
      buttonText: "Click Here",
      buttonBgClass: "bg-indigo-700",
      hasButton: true,
    },
    {
      title: "Commercial Representative",
      subtitle: "Mr. Prasad Shinde",
      email: "com.mexico@mea.gov.in",
      bgClass:
        "bg-[linear-gradient(143deg,rgba(250,245,255,1)_0%,rgba(243,232,255,1)_100%)]",
      textClass: "text-violet-600",
      borderClass: "border-purple-100",
      hasButton: false,
    },
    {
      title: "Registration for Indian Nations in Belize",
      bgClass:
        "bg-[linear-gradient(143deg,rgba(236,254,255,1)_0%,rgba(207,250,254,1)_100%)]",
      textClass: "text-cyan-600",
      borderClass: "border-cyan-100",
      buttonText: "Register Yourself Now",
      buttonBgClass: "bg-cyan-600",
      hasButton: true,
    },
    {
      title: "Registration for Indian Businesses in Mexico & Belize",
      bgClass:
        "bg-[linear-gradient(143deg,rgba(240,253,244,1)_0%,rgba(220,252,231,1)_100%)]",
      textClass: "text-green-600",
      borderClass: "border-green-100",
      buttonText: "Register Yourself Now",
      buttonBgClass: "bg-green-600",
      hasButton: true,
    },
    {
      title: "Emergency Contact Number",
      subtitle: "Only for Indian Nationals in Distress",
      contactNumber: "554-847-7539",
      note: "(Not for general consular queries)",
      bgClass:
        "bg-[linear-gradient(143deg,rgba(254,242,242,1)_0%,rgba(254,202,202,1)_100%)]",
      textClass: "text-red-600",
      borderClass: "border-red-200",
      hasButton: false,
    },
  ];

  // Important updates data
  const importantUpdates = [
    "Registration of NRIs/PIOs/OCIs2025",
    "Feedback",
    "Right to Information",
    "Press Releases",
    "List of Holidays",
    "Tenders",
    "Events & Photo Gallery",
    "Publications",
  ];

  // Video gallery data
  const videoGalleryItems = [
    "India Day Celebrations at Teatro Angela Peralta, Mexico City on 9th Feb, 2025",
    "Vibrant Buildcon Roadshow Organised by the Indian Embassy, Mexico City on 12th Feb, 2025",
    "Governor's palace in Queretaro lit up in Indian Tricolors on 76th Republic day",
    "76th Republic Day celebrations organized by Embassy of India in Mexico",
  ];

  return (
    <div className="w-full flex flex-col gap-8">
      {/* Ambassador Card */}
      <Card className="w-full border border-blue-200 shadow-lg overflow-hidden rounded-lg">
        <CardHeader className="p-0">
          <div className="h-12 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
            <h2 className="font-bold text-white text-lg text-center">
              Ambassader of India to Mexico
            </h2>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex flex-col items-center">
            <Avatar className="w-20 h-20 shadow-md mb-4">
              <AvatarImage src={ambassadorData.image} alt="Ambassador" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            <h3 className="font-bold text-blue-900 text-base text-center mb-1">
              {ambassadorData.name}
            </h3>
            <p className="font-medium text-blue-700 text-xs text-center mb-4">
              {ambassadorData.title}
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs h-8 px-4 rounded-lg">
              Profile.
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Services Card */}
      <Card className="w-full border border-green-200 shadow-lg overflow-hidden rounded-lg">
        <CardHeader className="p-0">
          <div className="h-12 bg-gradient-to-r from-green-600 to-teal-600 flex items-center justify-center">
            <h2 className="font-bold text-white text-lg text-center">
              Quick Services
            </h2>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 gap-3">
            {quickServices.map((service, index) => (
              <div
                key={`service-${index}`}
                className={`h-20 rounded-lg border ${service.borderClass} ${service.bgClass} p-3 flex flex-col items-center justify-center relative`}
              >
                <div
                  className={`font-semibold ${service.textClass} text-xs text-center leading-tight`}
                >
                  {service.title}
                </div>

                {service.subtitle && (
                  <div
                    className={`font-medium ${service.textClass} text-xs text-center opacity-80 mt-1`}
                  >
                    {service.subtitle}
                  </div>
                )}

                {service.email && (
                  <div
                    className={`${service.textClass} text-xs text-center mt-1`}
                  >
                    <span className="font-bold">Email: </span>
                    <span>{service.email}</span>
                  </div>
                )}

                {service.contactNumber && (
                  <div
                    className={`font-bold ${service.textClass} text-sm text-center mt-1`}
                  >
                    {service.contactNumber}
                  </div>
                )}

                {service.note && (
                  <div
                    className={`${service.textClass} text-xs text-center opacity-80 mt-1`}
                  >
                    {service.note}
                  </div>
                )}

                {service.hasButton && (
                  <div
                    className={`${service.buttonBgClass} rounded px-2 py-1 text-white text-xs font-semibold text-center mt-2`}
                  >
                    {service.buttonText}
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Video Gallery Card */}
      <Card className="w-full border border-amber-200 shadow-lg overflow-hidden rounded-lg">
        <CardHeader className="p-0">
          <div className="h-12 bg-amber-500 flex items-center justify-center">
            <h2 className="font-bold text-white text-lg text-center">
              Video Gallery
            </h2>
          </div>
        </CardHeader>
        <CardContent className="p-3 flex flex-col gap-2">
          {videoGalleryItems.map((item, index) => (
            <div
              key={`video-${index}`}
              className="rounded-lg border border-amber-300 bg-gradient-to-br from-amber-50 to-amber-100 p-2"
            >
              <p className="font-medium text-gray-700 text-xs leading-tight">{item}</p>
            </div>
          ))}
          <div className="flex justify-center mt-3">
            <Button className="bg-amber-500 text-white font-semibold rounded-lg h-8 px-4 text-sm">
              View All
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Important Updates Card */}
      <Card className="w-full border border-orange-200 shadow-lg overflow-hidden rounded-lg">
        <CardHeader className="p-0">
          <div className="h-12 bg-orange-500 flex items-center justify-center">
            <h2 className="font-bold text-white text-lg text-center">
              Important Updates
            </h2>
          </div>
        </CardHeader>
        <CardContent className="p-3 flex flex-col gap-2">
          {importantUpdates.map((update, index) => (
            <div
              key={`update-${index}`}
              className="rounded-lg border border-orange-300 bg-gradient-to-br from-orange-50 to-orange-100 p-2"
            >
              <p className="font-medium text-gray-700 text-xs">{update}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Facebook Card */}
      <Card className="w-full border border-blue-200 shadow-lg overflow-hidden rounded-lg">
        <CardHeader className="p-0">
          <div className="h-12 bg-blue-600 flex items-center justify-center">
            <h2 className="font-bold text-white text-lg text-center">
              Facebook
            </h2>
          </div>
        </CardHeader>
        <CardContent className="p-1 bg-gray-100">
          <img
            className="w-full h-80 object-cover"
            alt="Facebook content"
            src="/image 1.png"
          />
        </CardContent>
      </Card>
    </div>
  );
};

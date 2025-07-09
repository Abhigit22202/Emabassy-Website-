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
      bgClass: "bg-blue-50",
      textClass: "text-blue-800",
      borderClass: "border-blue-200",
      hasButton: false,
    },
    {
      title: "Complaints/Suggestions about our services",
      bgClass: "bg-indigo-50",
      textClass: "text-indigo-700",
      borderClass: "border-indigo-200",
      buttonText: "Click Here",
      buttonBgClass: "bg-indigo-600",
      hasButton: true,
    },
    {
      title: "Commercial Representative",
      subtitle: "Mr. Prasad Shinde",
      email: "com.mexico@mea.gov.in",
      bgClass: "bg-purple-50",
      textClass: "text-purple-700",
      borderClass: "border-purple-200",
      hasButton: false,
    },
    {
      title: "Registration for Indian Nations in Belize",
      bgClass: "bg-teal-50",
      textClass: "text-teal-700",
      borderClass: "border-teal-200",
      buttonText: "Register Yourself Now",
      buttonBgClass: "bg-teal-600",
      hasButton: true,
    },
    {
      title: "Registration for Indian Businesses in Mexico & Belize",
      bgClass: "bg-green-50",
      textClass: "text-green-700",
      borderClass: "border-green-200",
      buttonText: "Register Yourself Now",
      buttonBgClass: "bg-green-600",
      hasButton: true,
    },
    {
      title: "Emergency Contact Number",
      subtitle: "Only for Indian Nationals in Distress",
      contactNumber: "554-847-7539",
      note: "(Not for general consular queries)",
      bgClass: "bg-red-50",
      textClass: "text-red-700",
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
    <div className="w-full flex flex-col gap-6">
      {/* Ambassador Card */}
      <Card className="w-full border border-blue-200 shadow-sm overflow-hidden rounded-lg">
        <CardHeader className="p-0">
          <div className="h-12 bg-blue-600 flex items-center justify-center">
            <h2 className="font-bold text-white text-base text-center">
              Ambassador of India to Mexico
            </h2>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex flex-col items-center">
            <Avatar className="w-16 h-16 shadow-md mb-3">
              <AvatarImage src={ambassadorData.image} alt="Ambassador" />
              <AvatarFallback>PS</AvatarFallback>
            </Avatar>
            <h3 className="font-bold text-blue-900 text-sm text-center mb-1">
              {ambassadorData.name}
            </h3>
            <p className="font-medium text-blue-700 text-xs text-center mb-3">
              {ambassadorData.title}
            </p>
            <Button className="bg-blue-600 text-white text-xs h-7 px-3 rounded">
              Profile
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Services Card */}
      <Card className="w-full border border-green-200 shadow-sm overflow-hidden rounded-lg">
        <CardHeader className="p-0">
          <div className="h-12 bg-green-600 flex items-center justify-center">
            <h2 className="font-bold text-white text-base text-center">
              Quick Services
            </h2>
          </div>
        </CardHeader>
        <CardContent className="p-3">
          <div className="grid grid-cols-1 gap-2">
            {quickServices.map((service, index) => (
              <div
                key={`service-${index}`}
                className={`min-h-[60px] rounded border ${service.borderClass} ${service.bgClass} p-2 flex flex-col justify-center relative`}
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
                    className={`${service.buttonBgClass} rounded px-2 py-1 text-white text-xs font-semibold text-center mt-2 mx-auto`}
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
      <Card className="w-full border border-orange-200 shadow-sm overflow-hidden rounded-lg">
        <CardHeader className="p-0">
          <div className="h-12 bg-orange-500 flex items-center justify-center">
            <h2 className="font-bold text-white text-base text-center">
              Video Gallery
            </h2>
          </div>
        </CardHeader>
        <CardContent className="p-3 flex flex-col gap-2">
          {videoGalleryItems.map((item, index) => (
            <div
              key={`video-${index}`}
              className="rounded border border-orange-200 bg-orange-50 p-2"
            >
              <p className="font-medium text-gray-700 text-xs leading-tight">{item}</p>
            </div>
          ))}
          <div className="flex justify-center mt-2">
            <Button className="bg-orange-500 text-white font-semibold rounded h-7 px-3 text-xs">
              View All
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Important Updates Card */}
      <Card className="w-full border border-orange-200 shadow-sm overflow-hidden rounded-lg">
        <CardHeader className="p-0">
          <div className="h-12 bg-orange-500 flex items-center justify-center">
            <h2 className="font-bold text-white text-base text-center">
              Important Updates
            </h2>
          </div>
        </CardHeader>
        <CardContent className="p-3 flex flex-col gap-2">
          {importantUpdates.map((update, index) => (
            <div
              key={`update-${index}`}
              className="rounded border border-orange-200 bg-orange-50 p-2"
            >
              <p className="font-medium text-gray-700 text-xs">{update}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Facebook Card */}
      <Card className="w-full border border-blue-200 shadow-sm overflow-hidden rounded-lg">
        <CardHeader className="p-0">
          <div className="h-12 bg-blue-600 flex items-center justify-center">
            <h2 className="font-bold text-white text-base text-center">
              Facebook
            </h2>
          </div>
        </CardHeader>
        <CardContent className="p-1 bg-gray-100">
          <img
            className="w-full h-64 object-cover"
            alt="Facebook content"
            src="/image 1.png"
          />
        </CardContent>
      </Card>
    </div>
  );
};
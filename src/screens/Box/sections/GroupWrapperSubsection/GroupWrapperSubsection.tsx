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
    <div className="w-full flex flex-col gap-4">
      {/* Ambassador Card */}
      <Card className="w-full border-0 shadow-md overflow-hidden rounded-lg">
        <CardHeader className="p-0">
          <div className="h-14 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
            <h2 className="font-bold text-white text-lg text-center">
              Ambassador of India to Mexico
            </h2>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex flex-col items-center">
            <Avatar className="w-20 h-20 shadow-lg mb-4">
              <AvatarImage src={ambassadorData.image} alt="Ambassador" />
              <AvatarFallback>PS</AvatarFallback>
            </Avatar>
            <h3 className="font-bold text-blue-900 text-base text-center mb-2">
              {ambassadorData.name}
            </h3>
            <p className="font-medium text-blue-700 text-sm text-center mb-4">
              {ambassadorData.title}
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm h-9 px-6 rounded-lg shadow-md hover:shadow-lg">
              Profile
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Services Card */}
      <Card className="w-full border-0 shadow-md overflow-hidden rounded-lg">
        <CardHeader className="p-0">
          <div className="h-14 bg-gradient-to-r from-green-600 to-teal-600 flex items-center justify-center">
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
                className={`min-h-[70px] rounded-lg border ${service.borderClass} ${service.bgClass} p-3 flex flex-col justify-center relative shadow-sm`}
              >
                <div
                  className={`font-bold ${service.textClass} text-sm text-center leading-tight`}
                >
                  {service.title}
                </div>

                {service.subtitle && (
                  <div
                    className={`font-semibold ${service.textClass} text-xs text-center opacity-90 mt-1`}
                  >
                    {service.subtitle}
                  </div>
                )}

                {service.email && (
                  <div
                    className={`${service.textClass} text-sm text-center mt-1`}
                  >
                    <span className="font-bold">Email: </span>
                    <span>{service.email}</span>
                  </div>
                )}

                {service.contactNumber && (
                  <div
                    className={`font-bold ${service.textClass} text-base text-center mt-1`}
                  >
                    {service.contactNumber}
                  </div>
                )}

                {service.note && (
                  <div
                    className={`${service.textClass} text-xs text-center opacity-85 mt-1`}
                  >
                    {service.note}
                  </div>
                )}

                {service.hasButton && (
                  <div
                    className={`${service.buttonBgClass} rounded-lg px-3 py-2 text-white text-xs font-bold text-center mt-2 mx-auto shadow-md hover:shadow-lg cursor-pointer`}
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
      <Card className="w-full border-0 shadow-md overflow-hidden rounded-lg">
        <CardHeader className="p-0">
          <div className="h-14 bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
            <h2 className="font-bold text-white text-lg text-center">
              Video Gallery
            </h2>
          </div>
        </CardHeader>
        <CardContent className="p-4 flex flex-col gap-3">
          {videoGalleryItems.map((item, index) => (
            <div
              key={`video-${index}`}
              className="rounded-lg border border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100 p-3 shadow-sm hover:shadow-md cursor-pointer"
            >
              <p className="font-medium text-gray-800 text-sm leading-tight">{item}</p>
            </div>
          ))}
          <div className="flex justify-center mt-3">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg h-9 px-6 text-sm shadow-md hover:shadow-lg">
              View All
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Important Updates Card */}
      <Card className="w-full border-0 shadow-md overflow-hidden rounded-lg">
        <CardHeader className="p-0">
          <div className="h-14 bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
            <h2 className="font-bold text-white text-lg text-center">
              Important Updates
            </h2>
          </div>
        </CardHeader>
        <CardContent className="p-4 flex flex-col gap-3">
          {importantUpdates.map((update, index) => (
            <div
              key={`update-${index}`}
              className="rounded-lg border border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100 p-3 shadow-sm hover:shadow-md cursor-pointer"
            >
              <p className="font-medium text-gray-800 text-sm">{update}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Facebook Card */}
      <Card className="w-full border-0 shadow-md overflow-hidden rounded-lg">
        <CardHeader className="p-0">
          <div className="h-14 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
            <h2 className="font-bold text-white text-lg text-center">
              Facebook
            </h2>
          </div>
        </CardHeader>
        <CardContent className="p-2 bg-gray-50">
          <img
            className="w-full h-72 object-cover rounded"
            alt="Facebook content"
            src="/image 1.png"
          />
        </CardContent>
      </Card>
    </div>
  );
};
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const GroupWrapperSubsection = (): JSX.Element => {
  const quickServices = [
    {
      title: "Online Appointment System for Consular services",
      bgColor: "bg-blue-100",
      textColor: "text-blue-800",
      borderColor: "border-blue-200",
    },
    {
      title: "Complaints/Suggestions about our services", 
      bgColor: "bg-purple-100",
      textColor: "text-purple-800",
      borderColor: "border-purple-200",
      hasButton: true,
      buttonText: "Click Here",
      buttonColor: "bg-purple-600",
    },
    {
      title: "Commercial Representative",
      subtitle: "Mr. Prasad Shinde",
      email: "com.mexico@mea.gov.in",
      bgColor: "bg-indigo-100", 
      textColor: "text-indigo-800",
      borderColor: "border-indigo-200",
    },
    {
      title: "Registration for Indian Nations in Belize",
      bgColor: "bg-teal-100",
      textColor: "text-teal-800", 
      borderColor: "border-teal-200",
      hasButton: true,
      buttonText: "Register Yourself Now",
      buttonColor: "bg-teal-600",
    },
    {
      title: "Registration for Indian Businesses in Mexico & Belize",
      bgColor: "bg-green-100",
      textColor: "text-green-800",
      borderColor: "border-green-200", 
      hasButton: true,
      buttonText: "Register Yourself Now",
      buttonColor: "bg-green-600",
    },
    {
      title: "Emergency Contact Number",
      subtitle: "Only for Indian Nationals in Distress",
      phone: "554-847-7539",
      note: "(Not for general consular queries)",
      bgColor: "bg-red-100",
      textColor: "text-red-800",
      borderColor: "border-red-200",
    },
  ];

  const videoGalleryItems = [
    "India Day Celebrations at Teatro Angela Peralta, Mexico City on 9th Feb, 2025",
    "Vibrant Buildcon Roadshow Organised by the Indian Embassy, Mexico City on 12th Feb, 2025", 
    "Governor's palace in Queretaro lit up in Indian Tricolors on 76th Republic day",
    "76th Republic Day celebrations organized by Embassy of India in Mexico",
  ];

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

  return (
    <div className="space-y-6">
      {/* Ambassador Section */}
      <Card className="border-0 shadow-md">
        <div className="h-14 bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center">
          <h2 className="text-white text-lg font-bold">Ambassador of India to Mexico</h2>
        </div>
        <CardContent className="p-6 text-center">
          <Avatar className="w-20 h-20 mx-auto mb-4">
            <AvatarImage src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop" />
            <AvatarFallback>PS</AvatarFallback>
          </Avatar>
          <h3 className="text-blue-900 font-bold text-base mb-2">Dr. Pankaj Sharma</h3>
          <p className="text-blue-700 text-sm mb-4">High Commissioner of India to Belize</p>
          <Button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6">
            Profile
          </Button>
        </CardContent>
      </Card>

      {/* Quick Services */}
      <Card className="border-0 shadow-md">
        <div className="h-14 bg-gradient-to-r from-green-600 to-green-700 flex items-center justify-center">
          <h2 className="text-white text-lg font-bold">Quick Services</h2>
        </div>
        <CardContent className="p-4 space-y-3">
          {quickServices.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} ${service.borderColor} border rounded-lg p-3 min-h-[70px] flex flex-col justify-center`}
            >
              <div className={`${service.textColor} font-bold text-sm text-center leading-tight`}>
                {service.title}
              </div>
              {service.subtitle && (
                <div className={`${service.textColor} font-semibold text-xs text-center mt-1`}>
                  {service.subtitle}
                </div>
              )}
              {service.email && (
                <div className={`${service.textColor} text-sm text-center mt-1`}>
                  <span className="font-bold">Email: </span>{service.email}
                </div>
              )}
              {service.phone && (
                <div className={`${service.textColor} font-bold text-base text-center mt-1`}>
                  {service.phone}
                </div>
              )}
              {service.note && (
                <div className={`${service.textColor} text-xs text-center mt-1 opacity-85`}>
                  {service.note}
                </div>
              )}
              {service.hasButton && (
                <div className={`${service.buttonColor} text-white text-xs font-bold text-center py-2 px-3 rounded-lg mt-2 mx-auto cursor-pointer hover:opacity-90`}>
                  {service.buttonText}
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Video Gallery */}
      <Card className="border-0 shadow-md">
        <div className="h-14 bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
          <h2 className="text-white text-lg font-bold">Video Gallery</h2>
        </div>
        <CardContent className="p-4 space-y-3">
          {videoGalleryItems.map((item, index) => (
            <div key={index} className="bg-orange-50 border border-orange-200 rounded-lg p-3 hover:shadow-md cursor-pointer">
              <p className="text-gray-800 text-sm leading-tight">{item}</p>
            </div>
          ))}
          <div className="text-center pt-3">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6">
              View All
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Important Updates */}
      <Card className="border-0 shadow-md">
        <div className="h-14 bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
          <h2 className="text-white text-lg font-bold">Important Updates</h2>
        </div>
        <CardContent className="p-4 space-y-3">
          {importantUpdates.map((update, index) => (
            <div key={index} className="bg-orange-50 border border-orange-200 rounded-lg p-3 hover:shadow-md cursor-pointer">
              <p className="text-gray-800 text-sm">{update}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Facebook */}
      <Card className="border-0 shadow-md">
        <div className="h-14 bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center">
          <h2 className="text-white text-lg font-bold">Facebook</h2>
        </div>
        <CardContent className="p-2 bg-gray-50">
          <img
            className="w-full h-72 object-cover rounded"
            alt="Facebook content"
            src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400&h=288&fit=crop"
          />
        </CardContent>
      </Card>
    </div>
  );
};
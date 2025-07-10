import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const DivWrapperSubsection = (): JSX.Element => {
  const whatsNewItems = [
    {
      badge: "NEW",
      badgeColor: "bg-blue-500",
      content: "Advisory for Indian students studying or seeking admissions in foreign Universities especially in Belize",
    },
    {
      badge: "NEW", 
      badgeColor: "bg-orange-500",
      content: "Important Advisory for Indian citizens traveling to Mexico without proper documentation - 25 May 2025",
    },
    {
      badge: "NEW",
      badgeColor: "bg-green-500", 
      content: "Caution: Fake/fraudulent Indian e-Visa websites",
    },
    {
      badge: "NEW",
      badgeColor: "bg-purple-500",
      content: "Advisory to Indian Nationals in Mexico and Belize",
    },
  ];

  const albumItems = [
    {
      date: "19 June 2025",
      badge: "Photo",
      badgeColor: "bg-blue-500",
      title: "Business Networking Meet Hosted by the Embassy and IndMex Council",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=160&h=112&fit=crop",
    },
    {
      date: "15 January 2025", 
      badge: "Photo",
      badgeColor: "bg-blue-500",
      title: "Inauguration of Indian Food Festival (14-20th June 2025) at Hotel Marquis Reforma, Mexico City",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=160&h=112&fit=crop",
    },
  ];

  const pressReleaseItems = [
    {
      date: "23 March 2025",
      badge: "NEW",
      content: "Indian Film Festival in Queretaro, Mexico 23 March 2025",
    },
    {
      date: "10 March 2025",
      badge: "NEW", 
      content: "Buyers Sellers meet (BSM) for plastic industries from India and Mexico",
    },
    {
      date: "27th January 2025",
      badge: "NEW",
      content: "76th Republic Day celebrations by Embassy of India in Mexico",
    },
    {
      date: "11 January 2025",
      badge: "NEW",
      content: "Unveiling of Mahatma Gandhi statue at University of Belize by Hon'ble Prime Minister H.E. Mr. John Briceno-11 January 2025",
    },
    {
      date: "17 June, 2025",
      badge: "NEW",
      content: "Prime Minister meets President of Mexico on the sidelines of G7 Summit",
    },
    {
      date: "8 June 2025",
      badge: "NEW", 
      content: "State day celebrations of Odisha and Gujarat",
    },
  ];

  return (
    <div className="space-y-6">
      {/* What's New Section */}
      <Card className="border-0 shadow-md">
        <div className="h-14 bg-gradient-to-r from-green-600 to-green-700 flex items-center px-6">
          <h2 className="text-white text-xl font-bold">What's New</h2>
        </div>
        <CardContent className="p-6 space-y-4">
          {whatsNewItems.map((item, index) => (
            <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Badge className={`${item.badgeColor} text-white text-xs px-2 py-1 rounded-full`}>
                  {item.badge}
                </Badge>
                <div className="flex-1">
                  <p className="text-blue-800 text-sm leading-relaxed">{item.content}</p>
                  <button className="text-blue-600 text-sm font-medium mt-2 hover:text-blue-800">
                    Read more →
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="text-center pt-4">
            <Button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8">
              View All
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Albums Section */}
      <Card className="border-0 shadow-md">
        <div className="h-14 bg-gradient-to-r from-blue-600 to-blue-700 flex items-center px-6">
          <h2 className="text-white text-xl font-bold">Albums</h2>
        </div>
        <CardContent className="p-6 space-y-4">
          {albumItems.map((item, index) => (
            <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex gap-4">
                <img
                  className="w-40 h-28 object-cover rounded-lg"
                  alt={item.title}
                  src={item.image}
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-blue-700 text-sm font-medium">{item.date}</span>
                    <Badge className={`${item.badgeColor} text-white text-xs px-2 py-1 rounded-full`}>
                      {item.badge}
                    </Badge>
                  </div>
                  <h3 className="text-blue-900 font-bold text-base leading-tight mb-3">
                    {item.title}
                  </h3>
                  <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
                    View More
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="text-center pt-4">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8">
              View All News →
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Digital India Banner */}
      <Card className="border-0 shadow-md overflow-hidden">
        <div className="h-36 bg-gradient-to-r from-blue-900 to-purple-900 flex items-center justify-center text-center text-white p-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">10 YEARS OF DIGITAL INDIA</h3>
            <p className="text-base mb-1">Every Idea, Every Dream, Every Village</p>
            <p className="text-base font-semibold">What began as a VISION is now a WAY OF LIFE</p>
          </div>
        </div>
      </Card>

      {/* Press Release Section */}
      <Card className="border-0 shadow-md">
        <div className="h-16 bg-gradient-to-r from-blue-600 to-blue-700 flex items-center px-6 relative">
          <div className="bg-white rounded-lg px-4 py-2 mr-6">
            <span className="text-blue-700 font-bold text-sm">Press Release</span>
          </div>
          <span className="text-white font-semibold">
            Upcoming trade and commercial events in india
          </span>
        </div>
        <CardContent className="p-6 space-y-4">
          {pressReleaseItems.map((item, index) => (
            <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-blue-700 font-bold text-sm">{item.date}</span>
                  <Badge className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                    {item.badge}
                  </Badge>
                </div>
              </div>
              <p className="text-blue-800 text-sm leading-relaxed mt-2">{item.content}</p>
              <button className="text-blue-600 text-sm font-medium mt-2 hover:text-blue-800">
                Read more →
              </button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
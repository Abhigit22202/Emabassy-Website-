import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const DivWrapperSubsection = (): JSX.Element => {
  // Data for What's New section
  const whatsNewItems = [
    {
      badgeColor: "bg-blue-500",
      content:
        "Advisory for Indian students studying or seeking admissions in foreign Universities espacially in Belize",
    },
    {
      badgeColor: "bg-orange-500",
      content:
        "Important Advisory for Indian citizens traveling to Mexico without proper documentation - 25 May 2025",
    },
    {
      badgeColor: "bg-emerald-500",
      content: "Caution: Fake/fraudulent Indian e-Visa websites",
    },
    {
      badgeColor: "bg-violet-600",
      content: "Advisory to Indian Nationals in Mexico and Belize",
    },
  ];

  // Data for Press Release section
  const pressReleaseItems = [
    {
      date: "23 March 2025",
      content: "Indian Film Festival in Queretaro, Mexico 23 March 2025",
    },
    {
      date: "10 March 2025",
      content:
        "Buyers Sellers meet (BSM) for plastic industries from India and Mexico",
    },
    {
      date: "27th January 2025",
      content: "76th Republic Day celebrations by Embassy of India in Mexico",
    },
    {
      date: "11 January 2025",
      content:
        "Unveiling of Mahatma Gandhi statue at University of Belize by Hon'ble Prime Minister H.E. Mr. John Briceno-11 January 2025",
    },
    {
      date: "17 June, 2025",
      content:
        "Prime Minister meets President of Mexico on the sidelines of G7 Summit",
    },
    {
      date: "8 June 2025",
      content: "State day celebrations of Odisha and Gujarat",
    },
  ];

  // Data for Albums section
  const albumItems = [
    {
      date: "19 June 2025",
      title:
        "Business Networking Meet Hosted by the Embassy and IndMex Council",
      image: "/bVAo904d6QcN2bw7n8EMP0hkaxB3SjYE24UmeDVF.jpeg",
    },
    {
      date: "15 January 2025",
      title:
        "Inauguration of Indian Food Festival (14-20th June 2025) at Hotel Marquis Reforma, Mexico City",
      image: "/5MhCwr9him7P9YtiRiyxEYoLYtDB12CzORfH8RcG.jpeg",
    },
  ];

  return (
    <section className="w-full flex flex-col gap-6">
      {/* What's New Section */}
      <Card className="w-full border border-green-200 rounded-lg overflow-hidden shadow-sm">
        <div className="w-full h-12 bg-green-600">
          <div className="flex items-center h-full px-4">
            <h2 className="font-bold text-white text-lg">
              What's New
            </h2>
          </div>
        </div>

        <CardContent className="p-4">
          <div className="flex flex-col gap-4">
            {whatsNewItems.map((item, index) => (
              <Card
                key={`whats-new-${index}`}
                className="w-full border border-blue-100 rounded-lg bg-blue-50"
              >
                <CardContent className="p-4">
                  <div className="flex flex-col items-start gap-2">
                    <div className="flex flex-wrap items-center gap-2 w-full">
                      <Badge
                        className={`${item.badgeColor} rounded-full font-normal text-white text-xs`}
                      >
                        NEW
                      </Badge>
                    </div>
                    <p className="font-normal text-blue-700 text-sm leading-relaxed">
                      {item.content}
                    </p>
                    <div className="flex items-center gap-1 pt-1">
                      <span className="font-normal text-blue-600 text-sm">
                        Read more
                      </span>
                      <span className="font-normal text-blue-600 text-sm">
                        →
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="flex justify-center mt-2">
              <Button className="bg-green-600 text-white font-bold text-sm h-9 px-6 rounded">
                View All
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Albums Section */}
      <Card className="w-full rounded-lg overflow-hidden shadow-sm">
        <div className="w-full h-12 bg-blue-600 flex items-center justify-between px-4">
          <h2 className="font-bold text-white text-lg">
            Albums
          </h2>
        </div>

        <CardContent className="p-4">
          <div className="flex flex-col gap-4">
            {albumItems.map((album, index) => (
              <Card
                key={`album-${index}`}
                className="w-full rounded-lg border border-blue-100 bg-blue-50"
              >
                <CardContent className="p-3 flex gap-3">
                  <div className="w-32 h-24 rounded overflow-hidden flex-shrink-0">
                    <img
                      className="w-full h-full object-cover"
                      alt={album.title}
                      src={album.image}
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <Badge className="w-fit bg-blue-600 rounded-full font-medium text-white text-xs mb-2">
                      {album.date}
                    </Badge>
                    <h3 className="font-bold text-blue-900 text-sm leading-tight mb-auto">
                      {album.title}
                    </h3>
                    <p className="font-normal text-blue-600 text-sm mt-2">
                      View More
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="flex justify-center mt-2">
              <Button className="h-9 rounded bg-blue-600 text-white font-bold">
                View All News →
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Digital India Banner */}
      <div className="w-full h-32 bg-[url(/juGajmc1gOVBUtt5\ \(1\).jpg)] bg-cover bg-center relative rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 flex items-center justify-center">
          <div className="text-center text-white">
            <h3 className="text-xl font-bold mb-2">10 YEARS OF DIGITAL INDIA</h3>
            <p className="text-sm">Every Idea, Every Dream, Every Village</p>
            <p className="text-sm font-semibold">What began as a VISION is now a WAY OF LIFE</p>
          </div>
        </div>
      </div>

      {/* Press Release Section */}
      <Card className="w-full border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <div className="w-full h-12 bg-blue-600 relative flex items-center">
          <div className="absolute left-4 bg-white rounded px-3 py-1">
            <span className="font-medium text-blue-600 text-sm">
              Press Release
            </span>
          </div>
          <div className="ml-40 font-medium text-white text-sm">
            Upcoming trade and commercial events in india
          </div>
        </div>

        <CardContent className="flex flex-col gap-3 pt-4 pb-6 px-4">
          {pressReleaseItems.map((item, index) => (
            <Card
              key={`press-release-${index}`}
              className="w-full rounded-lg border border-blue-100 bg-blue-50"
            >
              <CardContent className="p-4">
                <div className="flex flex-col items-start gap-2">
                  <div className="flex flex-wrap items-center gap-2 w-full">
                    <div className="font-medium text-blue-600 text-sm">
                      {item.date}
                    </div>
                    <Badge className="bg-blue-500 rounded-full font-normal text-white text-xs">
                      NEW
                    </Badge>
                  </div>
                  <div className="w-full">
                    <p className="font-normal text-blue-700 text-sm leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 pt-1">
                    <span className="font-normal text-blue-600 text-sm">
                      Read more
                    </span>
                    <ArrowRightIcon className="h-4 w-4 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};
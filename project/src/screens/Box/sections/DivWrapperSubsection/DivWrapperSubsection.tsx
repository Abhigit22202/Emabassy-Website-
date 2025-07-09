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
    <section className="w-full flex flex-col gap-10">
      {/* What's New Section */}
      <Card className="w-full border border-solid border-blue-100 rounded-2xl overflow-hidden shadow-[0px_20px_40px_#0000001a]">
        <div className="w-full h-[61px] bg-[linear-gradient(90deg,rgba(5,150,105,1)_0%,rgba(13,148,136,1)_100%)]">
          <div className="relative h-[73px] -top-1.5 left-6">
            <div className="flex items-center gap-3 top-5 left-[5px] relative">
              <div className="inline-flex flex-col items-start">
                <h2 className="[font-family:'Inter',Helvetica] font-bold text-white text-xl tracking-[0] leading-[38.4px] whitespace-nowrap">
                  What&#39;s New
                </h2>
              </div>
            </div>
          </div>
        </div>

        <CardContent className="p-6">
          <div className="flex flex-col gap-6">
            {whatsNewItems.map((item, index) => (
              <Card
                key={`whats-new-${index}`}
                className="w-full border border-solid border-blue-100 rounded-xl bg-[linear-gradient(171deg,rgba(239,246,255,1)_0%,rgba(238,242,255,1)_100%)]"
              >
                <CardContent className="p-[25px]">
                  <div className="flex flex-col items-start gap-[7px]">
                    <div className="flex flex-wrap items-center gap-[0px_12px] w-full">
                      <Badge
                        className={`${item.badgeColor} rounded-full font-normal text-white text-xs tracking-[0.60px] leading-[19.2px]`}
                      >
                        NEW
                      </Badge>
                    </div>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-blue-600 text-sm tracking-[0] leading-[22.4px]">
                      {item.content}
                    </p>
                    <div className="flex items-center gap-1 pt-[5px]">
                      <span className="[font-family:'Arial-Narrow',Helvetica] font-normal text-blue-600 text-sm text-center tracking-[0] leading-[normal] whitespace-nowrap">
                        Read more
                      </span>
                      <span className="[font-family:'Arial-Narrow',Helvetica] font-normal text-blue-600 text-sm text-center tracking-[0] leading-[normal] whitespace-nowrap">
                        →
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="flex justify-center">
              <Button className="w-[104px] h-[38px] bg-[#099579] rounded-[9px] text-white font-bold text-sm">
                View All
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Albums Section */}
      <Card className="w-full rounded-2xl overflow-hidden shadow-[0px_20px_40px_#0000001a]">
        <div className="w-full h-[62px] bg-[linear-gradient(90deg,rgba(52,78,219,1)_0%)] flex items-center justify-between px-6 pt-[23px] pb-6">
          <div className="flex items-center gap-3">
            <h2 className="[font-family:'Inter',Helvetica] font-bold text-white text-xl tracking-[0] leading-[38.4px] whitespace-nowrap">
              Albums
            </h2>
          </div>
        </div>

        <CardContent className="p-6">
          <div className="flex flex-col gap-6">
            {albumItems.map((album, index) => (
              <Card
                key={`album-${index}`}
                className="w-full rounded-xl border border-solid border-blue-100 bg-[linear-gradient(166deg,rgba(239,246,255,1)_0%,rgba(238,242,255,1)_100%)]"
              >
                <CardContent className="p-4 flex">
                  <div className="w-[289px] h-[196px] rounded-xl overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      alt={album.title}
                      src={album.image}
                    />
                  </div>
                  <div className="flex-1 pl-4 flex flex-col">
                    <Badge className="w-fit bg-blue-600 rounded-full font-medium text-white text-sm tracking-[0] leading-[22.4px] mb-4">
                      {album.date}
                    </Badge>
                    <h3 className="[font-family:'Inter',Helvetica] font-bold text-blue-900 text-lg tracking-[0] leading-[28.8px] mb-auto">
                      {album.title}
                    </h3>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-blue-600 text-sm tracking-[0] leading-[22.4px] mt-4">
                      View More
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="flex justify-center">
              <Button className="h-[39px] rounded-xl shadow-[0px_4px_12px_#2563eb4c] bg-[linear-gradient(90deg,rgba(37,99,235,1)_0%,rgba(67,56,202,1)_100%)] text-white font-bold">
                View All News →
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Image Carousel Section */}
      <div className="w-full h-52 bg-[url(/juGajmc1gOVBUtt5\ \(1\).jpg)] bg-cover bg-[50%_50%] relative rounded-xl">
        <div className="absolute w-[39px] h-10 top-[107px] left-[22px] rounded-[19.5px/20.17px] border-[1.5px] border-solid border-[#0000003d] bg-white/50 flex items-center justify-center">
          <img
            className="w-7 h-7"
            alt="Previous"
            src="/keyboard-arrow-up.svg"
          />
        </div>
        <div className="absolute w-[39px] h-10 top-[107px] right-[22px] rounded-[19.5px/20.17px] border-[1.5px] border-solid border-[#0000003d] rotate-180 bg-white/50 flex items-center justify-center">
          <img
            className="-rotate-180 w-7 h-7"
            alt="Next"
            src="/keyboard-arrow-up.svg"
          />
        </div>
      </div>

      {/* Press Release Section */}
      <Card className="w-full border border-solid border-blue-100 rounded-2xl overflow-hidden shadow-[0px_20px_40px_#0000001a]">
        <div className="w-full h-[71px] bg-[linear-gradient(90deg,rgba(37,99,235,1)_100%)] relative">
          <div className="w-[164px] absolute top-[25px] left-8 [font-family:'Inter',Helvetica] font-normal text-blue-600 text-[17px] text-center tracking-[1.87px] leading-[normal]">
            Press Release
          </div>
          <div className="absolute w-[555px] top-[25px] left-[223px] [font-family:'Inter',Helvetica] font-medium text-white text-[17px] tracking-[1.87px] leading-[normal]">
            Upcoming trade and commercial events in india
          </div>
          <img
            className="absolute w-[157px] h-[34px] top-[19px] left-[33px]"
            alt="Rectangle"
            src="/rectangle-4624.svg"
          />
          <img
            className="absolute w-[487px] h-[34px] top-[19px] left-[211px]"
            alt="Rectangle"
            src="/rectangle-4624.svg"
          />
        </div>

        <CardContent className="flex flex-col gap-4 pt-6 pb-10 px-6">
          {pressReleaseItems.map((item, index) => (
            <Card
              key={`press-release-${index}`}
              className="w-full rounded-xl border border-solid border-blue-100 bg-[linear-gradient(171deg,rgba(239,246,255,1)_0%,rgba(238,242,255,1)_100%)]"
            >
              <CardContent className="p-[25px]">
                <div className="flex flex-col items-start gap-[7px]">
                  <div className="flex flex-wrap items-center gap-[0px_12px] w-full">
                    <div className="[font-family:'Inter',Helvetica] font-medium text-blue-600 text-sm tracking-[1.54px] leading-[normal]">
                      {item.date}
                    </div>
                    <Badge className="bg-blue-500 rounded-full font-normal text-white text-xs tracking-[0.60px] leading-[19.2px]">
                      NEW
                    </Badge>
                  </div>
                  <div className="w-full">
                    <p className="[font-family:'Inter',Helvetica] font-normal text-blue-600 text-sm tracking-[1.54px] leading-[normal]">
                      {item.content}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 pt-[5px]">
                    <span className="[font-family:'Arial-Narrow',Helvetica] font-normal text-blue-600 text-sm text-center tracking-[0] leading-[normal] whitespace-nowrap">
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

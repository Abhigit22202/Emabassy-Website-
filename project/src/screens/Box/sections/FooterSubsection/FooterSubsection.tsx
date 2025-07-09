import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const FooterSubsection = (): JSX.Element => {
  // Contact information data
  const contactInfo = {
    title: "Embassy of India",
    address: [
      "Musset 325, Colonia Polanco,",
      "Delegacion Miguel Hidalgo,",
      "C.P.11550, Mexico D.F.",
    ],
    workingHours: "Working Hours : 09:00 - 17:30 hours (Monday to Friday)",
    phone: "+52-55-5531-1050",
    email: "info@indiainmexico.gov.in",
  };

  // Quick links data
  const quickLinks = [
    "About Embassy",
    "Consular Services",
    "Trade Relations",
    "Cultural Events",
  ];

  // Services data
  const services = [
    "Visa Services",
    "Passport Services",
    "Culture",
    "Emergency Services",
  ];

  // Social media icons data
  const socialIcons = [
    { src: "/letter-f_9182827.png", alt: "Letter f" },
    {
      src: "/circle-twitter-x-logo-social-media-app-button_197792-9716.png",
      alt: "Circle twitter x",
    },
    {
      src: "/threads-social-media-round-app-logo-icon-hd-png-735811696672514l42mg6ysna.png",
      alt: "Threads social media",
    },
    { src: "/social_15707814.png", alt: "Social" },
    { src: "/instagram_3670125.png", alt: "Instagram" },
  ];

  return (
    <footer className="w-full py-10 bg-transparent bg-[linear-gradient(90deg,rgba(30,58,138,1)_0%,rgba(30,64,175,1)_50%,rgba(67,56,202,1)_100%)]">
      <div className="container mx-auto px-4 max-w-[1250px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Embassy Contact Information */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-blue-100 text-lg">
              {contactInfo.title}
            </h3>
            <div className="text-blue-300 text-sm space-y-1">
              {contactInfo.address.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
              <p className="mt-4">{contactInfo.workingHours}</p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="text-blue-300 text-sm">{contactInfo.phone}</div>
              <div className="text-blue-300 text-sm">{contactInfo.email}</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-blue-100 text-lg">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-blue-300 text-sm hover:text-blue-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-blue-100 text-lg">Services</h3>
            <div className="flex flex-col space-y-2">
              {services.map((service, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-blue-300 text-sm hover:text-blue-200"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-blue-100 text-lg">Connect</h3>
            <div className="flex space-x-3">
              {socialIcons.map((icon, index) => (
                <a key={index} href="#" className="block">
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className="w-[34px] h-[34px] object-cover rounded-full"
                  />
                </a>
              ))}
            </div>
            <p className="text-blue-300 text-sm">
              Follow us for latest updates
            </p>
          </div>
        </div>

        <Separator className="bg-blue-500 my-4" />

        <div className="text-center">
          <p className="text-blue-300 text-sm">
            © 2025 Embassy of India, Mexico City. All rights reserved. | Last
            Updated: January 15, 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

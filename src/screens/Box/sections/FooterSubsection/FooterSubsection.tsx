import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const FooterSubsection = (): JSX.Element => {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 py-10">
      <div className="w-[1186px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Embassy Contact Information */}
          <div className="text-white">
            <h3 className="font-bold text-lg mb-4">Embassy of India</h3>
            <div className="space-y-2 text-sm">
              <p>Musset No. 325</p>
              <p>Colonia Polanco</p>
              <p>Delegación Miguel Hidalgo</p>
              <p>11550 Mexico City, Mexico</p>
              <p className="mt-3">
                <span className="font-semibold">Phone:</span> +52-55-5531-1050
              </p>
              <p>
                <span className="font-semibold">Fax:</span> +52-55-5254-2349
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-white">
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-300">About Embassy</a></li>
              <li><a href="#" className="hover:text-blue-300">Consular Services</a></li>
              <li><a href="#" className="hover:text-blue-300">Commercial Wing</a></li>
              <li><a href="#" className="hover:text-blue-300">Cultural Events</a></li>
              <li><a href="#" className="hover:text-blue-300">Press Releases</a></li>
              <li><a href="#" className="hover:text-blue-300">Photo Gallery</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-white">
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-300">Visa Services</a></li>
              <li><a href="#" className="hover:text-blue-300">Passport Services</a></li>
              <li><a href="#" className="hover:text-blue-300">OCI Services</a></li>
              <li><a href="#" className="hover:text-blue-300">Emergency Services</a></li>
              <li><a href="#" className="hover:text-blue-300">Attestation</a></li>
              <li><a href="#" className="hover:text-blue-300">Registration</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="text-white">
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <div className="space-y-3">
              <p className="text-sm">Follow us on social media for updates</p>
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500">
                  <span className="text-white text-xs font-bold">f</span>
                </div>
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-300">
                  <span className="text-white text-xs font-bold">t</span>
                </div>
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-500">
                  <span className="text-white text-xs font-bold">@</span>
                </div>
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-400">
                  <span className="text-white text-xs font-bold">▶</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm font-semibold">Emergency Contact:</p>
                <p className="text-sm">554-847-7539</p>
                <p className="text-xs text-blue-300">(For Indian Nationals in Distress)</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-blue-500 my-6" />

        <div className="text-center text-blue-300 text-sm">
          <p>© 2025 Embassy of India, Mexico City. All rights reserved. | Last Updated: January 15, 2025</p>
        </div>
      </div>
    </footer>
  );
};
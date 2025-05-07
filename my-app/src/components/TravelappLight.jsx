import { Clock, Users, CalendarCheck } from "lucide-react";
import { useState, useEffect } from "react";
import FlightDetailsCard from "./FlightDetailsCard";
import AccommodationCards from "../components/AccomdationCards";
import ActivitiesComponent from "./ActivitiesComponent";
import TourCard from "./TourCard";
import React from "react";
import AccommodationCardsLight from "./AccommodationCardsLight";
import TourCardLight from "./TourCardLight";

export default function TravelAppLight() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-white text-black min-h-screen w-full flex flex-col p-4 sm:p-6 md:p-8 max-w-md mx-auto">
      {/* Status Bar */}
      <div className="flex justify-between items-center mb-6 text-gray-800">
        <div className="font-bold">9:41</div>
        <div className="flex space-x-1">
          <div>•••</div>
          <div>Wi-Fi</div>
          <div>•</div>
        </div>
      </div>

      {/* Header with Avatar */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Hello Chhavi!</h1>
          <p className="text-gray-600">Ready for the trip?</p>
        </div>
        <div className="bg-orange-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-semibold">
          C
        </div>
      </div>

      {/* Upcoming Trip Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Your Upcoming Trip</h2>
      </div>

      {/* Trip Card */}
      <div className="rounded-xl overflow-hidden bg-gray-100 relative mb-6 shadow">
        {/* Card Image with Gradient Overlay */}
        <div className="relative h-64 w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80 z-10"></div>
          <div className="absolute top-0 left-0 w-full h-full z-20 p-6">
            <h1 className="text-5xl font-bold tracking-wider text-gray-800">TOKYO</h1>
            <p className="text-gray-700 mt-1">27.01.2025 - 02.02.2025</p>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center z-30">
            <div className="flex items-center space-x-3">
              <div className="flex items-center bg-white/70 backdrop-blur-sm rounded-full px-3 py-1 shadow">
                <Clock size={16} className="text-yellow-500 mr-1" />
                <div>
                  <p className="text-sm font-bold text-gray-800">8 Days</p>
                  <p className="text-xs text-gray-500">Duration</p>
                </div>
              </div>

              <div className="flex items-center bg-white/70 backdrop-blur-sm rounded-full px-3 py-1 shadow">
                <Users size={16} className="text-gray-600 mr-1" />
                <div>
                  <p className="text-sm font-bold text-gray-800">4 (2M,2F)</p>
                  <p className="text-xs text-gray-500">Group Size</p>
                </div>
              </div>

              <div className="flex items-center bg-white/70 backdrop-blur-sm rounded-full px-3 py-1 shadow">
                <CalendarCheck size={16} className="text-green-600 mr-1" />
                <div>
                  <p className="text-sm font-bold text-gray-800">14</p>
                  <p className="text-xs text-gray-500">Activities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: "url('/api/placeholder/600/400')",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>

      {/* Flight Details Card */}
      <div className="mb-6">
        <FlightDetailsCard />
      </div>

      {/* Accommodation Cards */}
      <div className="mb-6">
        <AccommodationCardsLight />
      </div>

      {/* Activities */}
      <div className="mb-6">
        <ActivitiesComponentLight />
      </div>

      {/* Tour */}
      <div className="mb-6">
        <TourCardLight />
      </div>
    </div>
  );
}

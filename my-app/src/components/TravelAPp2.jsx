import { Clock, Users, CalendarCheck, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import FlightDetailsCard from "./FlightDetailsCard";
import AccommodationCards from "../components/AccomdationCards";
import { Home, Search, Plus, Heart, User } from "lucide-react";
import React from "react";
import ActivitiesComponent from "./ActivitiesComponent";
import TourCard from "./TourCard";
export default function TravelApp2() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Adjust sizes based on screen width
  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

  return (
    <div className="bg-black text-white min-h-screen w-full flex flex-col p-4 sm:p-6 md:p-8 max-w-md mx-auto">
      {/* Status Bar */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-white font-bold">9:41</div>
        <div className="flex space-x-1">
          <div className="text-white">•••</div>
          <div className="text-white">Wi-Fi</div>
          <div className="text-white">•</div>
        </div>
      </div>
      
      {/* Header with Avatar */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Hello Chhavi!</h1>
          <p className="text-gray-300">Ready for the trip?</p>
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
      <div className="rounded-xl overflow-hidden bg-transparent relative mb-6">
        {/* Card Image with Gradient Overlay */}
        <div className="relative h-64 w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/20 z-10"></div>
          <div className="absolute top-0 left-0 w-full h-full z-10">
            <div className="p-6">
              <h1 className="text-5xl font-bold tracking-wider text-white">TOKYO</h1>
              <p className="text-white mt-1">27.01.2025 - 02.02.2025</p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center z-20">
            <div className="flex items-center space-x-3">
              <div className="flex items-center bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                <Clock size={16} className="text-yellow-400 mr-1" />
                <div>
                  <p className="text-sm font-bold">8 Days</p>
                  <p className="text-xs text-gray-300">Duration</p>
                </div>
              </div>
              
              <div className="flex items-center bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                <Users size={16} className="text-gray-300 mr-1" />
                <div>
                  <p className="text-sm font-bold">4 (2M,2F)</p>
                  <p className="text-xs text-gray-300">Group Size</p>
                </div>
              </div>
              
              <div className="flex items-center bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                <CalendarCheck size={16} className="text-white mr-1" />
                <div>
                  <p className="text-sm font-bold">14</p>
                  <p className="text-xs text-gray-300">Activities</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background Image */}
          <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: "url('../src/assets/homeimaage.png')",
            backgroundPosition: "center",
          }}></div>
        </div>
      </div>
      
      {/* Flight Details Card */}
      <div className="mb-6">
        <FlightDetailsCard />
      </div>
      
      {/* Accommodation Cards */}
      <div className="bottom-0 w-full bg-gray-900 border-t border-gray-700 px-6 py-3 flex justify-between items-center z-50 max-w-md mx-auto">
  {/* Home - Active */}
  <div className="flex flex-col items-center text-blue-400">
    <div className="bg-blue-950 p-2 rounded-full">
      <Home size={20} strokeWidth={2} />
    </div>
  </div>

  {/* Search */}
  <div className="flex flex-col items-center text-gray-400">
    <Search size={20} strokeWidth={2} />
  </div>

  {/* Add */}
  <div className="flex flex-col items-center text-blue-400">
    <Plus size={24} strokeWidth={2} />
  </div>

  {/* Favorites */}
  <div className="flex flex-col items-center text-gray-400">
    <Heart size={20} strokeWidth={2} />
  </div>

  {/* Profile */}
  <div className="flex flex-col items-center text-gray-400">
    <User size={20} strokeWidth={2} />
  </div>
</div>

    </div>

  );
}
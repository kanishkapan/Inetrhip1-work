import { CheckCircle, Clock } from "lucide-react";
import React from "react";
export default function AccommodationCards() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white">Accommodation</h2>
        <span className="text-sm font-medium text-yellow-400">See all</span>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {/* Shinagawa Prince Hotel Card */}
        <div className="bg-gray-900 rounded-xl overflow-hidden">
          <div className="relative">
            <img 
              src="/api/placeholder/400/200" 
              alt="Shinagawa Prince Hotel" 
              className="w-full h-32 object-cover"
            />
            <div className="absolute bottom-2 left-2 bg-blue-600 text-white text-xs py-1 px-2 rounded-md flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              4.0 Very Good
            </div>
          </div>
          
          <div className="p-3">
            <h3 className="font-bold text-white text-base mb-1">Shinagawa Prince Hotel</h3>
            <div className="text-gray-400 text-xs mb-1">
              <span>Check in: 26.01.2025, 11:15 pm</span>
            </div>
            <div className="text-gray-400 text-xs mb-3">
              <span>Check out: 28.01.2025, 11:15 am</span>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="text-white text-sm font-medium">2 Nights</div>
              <div className="flex items-center text-green-500 text-xs">
                <CheckCircle size={14} className="mr-1" />
                Confirmed
              </div>
            </div>
          </div>
        </div>
        
        {/* Mercure Tokyo Hotel Card */}
        <div className="bg-gray-900 rounded-xl overflow-hidden">
          <div className="relative">
            <img 
              src="/api/placeholder/400/200" 
              alt="Mercure Tokyo Hotel" 
              className="w-full h-32 object-cover"
            />
            <div className="absolute bottom-2 left-2 bg-blue-600 text-white text-xs py-1 px-2 rounded-md flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              4.1 Very Good
            </div>
          </div>
          
          <div className="p-3">
            <h3 className="font-bold text-white text-base mb-1">Mercure Tokyo Hotel</h3>
            <div className="text-gray-400 text-xs mb-1">
              <span>Check in: 28.01.2025, 6:00 pm</span>
            </div>
            <div className="text-gray-400 text-xs mb-3">
              <span>Check out: 30.01.2025, 11:15 am</span>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="text-white text-sm font-medium">2 Nights</div>
              <div className="flex items-center text-orange-500 text-xs">
                <Clock size={14} className="mr-1" />
                Pending
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
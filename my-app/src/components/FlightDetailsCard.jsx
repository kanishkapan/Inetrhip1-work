import { ArrowRight } from "lucide-react";
import React from "react";
export default function FlightDetailsCard() {
  return (
    <div className="w-full">
      <div className="bg-blue-600 rounded-2xl p-5 text-white relative overflow-hidden">
        {/* Flight Details Content */}
        <div className="flex justify-between items-center mb-1">
          <h2 className="text-xl font-bold">Flight Details</h2>
          <span className="text-sm text-blue-200 font-medium">See all</span>
        </div>
        
        <div className="text-sm text-blue-100 mb-4">
          26.01.2025, 10:50 am
        </div>
        
        {/* Flight Route */}
        <div className="flex items-center justify-between relative z-10">
          <div>
            <div className="text-xl font-bold">DEL</div>
            <div className="text-sm text-blue-100">Delhi, India</div>
          </div>
          
          <div className="flex items-center mx-2">
            <ArrowRight size={20} />
          </div>
          
          <div>
            <div className="text-xl font-bold">NRT</div>
            <div className="text-sm text-blue-100">Narita, Tokyo</div>
          </div>
        </div>
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-contain bg-no-repeat bg-right opacity-70 z-0" 
          style={{ backgroundImage: "url('/api/placeholder/400/200')" }}
        ></div>
      </div>
    </div>
  );
}
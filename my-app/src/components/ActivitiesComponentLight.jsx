import { Calendar } from "lucide-react";
import React from "react";

export default function ActivitiesComponentLight() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-black">Activities</h2>
        <span className="text-sm font-medium text-blue-600 cursor-pointer">See all</span>
      </div>

      {/* Tab Buttons */}
      <div className="bg-[#f9f9fb] rounded-xl p-4 mb-4 shadow-sm border border-gray-200">
        <div className="flex mb-6 gap-2">
          <button className="bg-blue-600 text-white font-medium py-2 px-4 rounded-full text-sm shadow">
            Day Plan
          </button>
          <button className="bg-white border border-blue-600 text-blue-600 font-medium py-2 px-4 rounded-full text-sm">
            14 Activities
          </button>
        </div>

        {/* Calendar Days */}
        <div className="flex justify-between">
          {/* Active Day - 27 Jan */}
          <div className="flex flex-col items-center">
            <div className="bg-blue-600 text-white font-bold px-4 py-1.5 rounded-t-lg text-xs">
              JAN
            </div>
            <div className="bg-blue-600 text-white font-bold px-4 py-1.5 rounded-b-lg text-xs w-full text-center">
              27
            </div>
            <div className="mt-1 text-gray-800 text-xs font-medium">
              MON
            </div>
          </div>

          {/* Other Days */}
          {[28, 29, 30, 31].map((day, i) => (
            <div key={day} className="flex flex-col items-center">
              <div className="text-gray-400 font-medium text-xs">{day}</div>
              <div className="mt-1 text-gray-400 text-xs font-medium">
                {["TUE", "WED", "THU", "FRI"][i]}
              </div>
            </div>
          ))}

          {/* Feb 1 */}
          <div className="flex flex-col items-center">
            <div className="text-gray-400 font-bold text-xs">FEB</div>
            <div className="text-gray-400 font-medium text-xs">1</div>
            <div className="mt-1 text-gray-400 text-xs font-medium">SAT</div>
          </div>
        </div>
      </div>

      {/* Day Activities Indicator */}
      <div className="flex justify-between items-center">
        <div className="bg-blue-600 text-white font-medium py-2 px-4 rounded-full text-xs shadow-sm">
          Day 1&nbsp;&nbsp;27.01.2025
        </div>
        <div className="flex items-center text-blue-600">
          <Calendar size={16} className="mr-1" />
          <span className="font-medium text-sm">3 Activities</span>
        </div>
      </div>
    </div>
  );
}

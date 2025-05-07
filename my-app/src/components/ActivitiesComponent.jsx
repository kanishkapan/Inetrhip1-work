import { Calendar } from "lucide-react";
import React from "react";
export default function ActivitiesComponent() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white">Activities</h2>
        <span className="text-sm font-medium text-yellow-400">See all</span>
      </div>
      
      {/* Tab Buttons */}
      <div className="bg-gray-800 rounded-xl p-4 mb-4">
        <div className="flex mb-6 gap-2">
          <button className="bg-lime-400 text-black font-medium py-2 px-4 rounded-full text-sm">
            Day Plan
          </button>
          <button className="bg-transparent border border-lime-400 text-lime-400 font-medium py-2 px-4 rounded-full text-sm">
            14 Activities
          </button>
        </div>
        
        {/* Calendar Days */}
        <div className="flex justify-between">
          {/* JAN 27 - Active */}
          <div className="flex flex-col items-center">
            <div className="bg-lime-400 text-black font-bold px-4 py-2 rounded-t-lg text-xs">
              JAN
            </div>
            <div className="bg-lime-400 text-black font-bold px-4 py-2 rounded-b-lg text-center w-full">
              27
            </div>
            <div className="mt-1 text-white text-xs font-medium">
              MON
            </div>
          </div>
          
          {/* Day 28 */}
          <div className="flex flex-col items-center">
            <div className="text-gray-500 font-medium text-xs">
              28
            </div>
            <div className="mt-1 text-gray-500 text-xs font-medium">
              TUE
            </div>
          </div>
          
          {/* Day 29 */}
          <div className="flex flex-col items-center">
            <div className="text-gray-500 font-medium text-xs">
              29
            </div>
            <div className="mt-1 text-gray-500 text-xs font-medium">
              WED
            </div>
          </div>
          
          {/* Day 30 */}
          <div className="flex flex-col items-center">
            <div className="text-gray-500 font-medium text-xs">
              30
            </div>
            <div className="mt-1 text-gray-500 text-xs font-medium">
              THU
            </div>
          </div>
          
          {/* Day 31 */}
          <div className="flex flex-col items-center">
            <div className="text-gray-500 font-medium text-xs">
              31
            </div>
            <div className="mt-1 text-gray-500 text-xs font-medium">
              FRI
            </div>
          </div>
          
          {/* FEB 1 */}
          <div className="flex flex-col items-center">
            <div className="text-gray-500 font-bold text-xs">
              FEB
            </div>
            <div className="text-gray-500 font-medium text-xs">
              1
            </div>
            <div className="mt-1 text-gray-500 text-xs font-medium">
              SAT
            </div>
          </div>
        </div>
      </div>
      
      {/* Day Activities Indicator */}
      <div className="flex justify-between items-center">
        <div className="bg-lime-400 text-black font-medium py-2 px-4 rounded-full text-xs">
          Day 1   27.01.2025
        </div>
        <div className="flex items-center text-lime-400">
          <Calendar size={16} className="mr-1" />
          <span className="font-medium text-sm">3 Activities</span>
        </div>
      </div>
    </div>
  );
}
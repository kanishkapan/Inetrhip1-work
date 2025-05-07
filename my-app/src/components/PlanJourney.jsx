import React from 'react';
import { FaLocationArrow, FaCalendarAlt, FaUserFriends, FaUser, FaUsers, FaHeart } from 'react-icons/fa';

const PlanJourney = () => {
  return (
    <div className="bg-white w-[375px] min-h-screen mx-auto p-4 text-black">
      <div className="text-left space-y-6">
        <div>
          <h1 className="text-xl font-bold">Plan Your Journey, Your Way!</h1>
          <p className="text-sm text-gray-500">Let’s create your personalised travel experience</p>
        </div>

        {/* Destination Input */}
        <div>
          <p className="text-sm font-semibold mb-2">Where would you like to go?</p>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
            <FaLocationArrow className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Enter Destination"
              className="outline-none w-full text-sm"
            />
          </div>
        </div>

        {/* Duration Selector */}
        <div>
          <p className="text-sm font-semibold mb-2">How long will you stay?</p>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
            <FaCalendarAlt className="text-gray-500 mr-2" />
            <select className="w-full text-sm bg-transparent outline-none">
              <option>Select Duration</option>
              <option>1-3 Days</option>
              <option>4-7 Days</option>
              <option>More than a week</option>
            </select>
          </div>
        </div>

        {/* Travel Group Buttons */}
        <div>
          <p className="text-sm font-semibold mb-3">Who are you traveling with?</p>
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md text-sm font-medium">
              <FaUser /> Solo
            </button>
            <button className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md text-sm font-medium">
              <FaHeart /> Couple
            </button>
            <button className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md text-sm font-medium">
              <FaUsers /> Family
            </button>
            <button className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md text-sm font-medium">
              <FaUserFriends /> Friends
            </button>
          </div>
        </div>

        {/* Continue Button */}
        <div className="pt-56">
          <button className="w-full bg-blue-600 text-white py-3 text-sm font-semibold">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanJourney;

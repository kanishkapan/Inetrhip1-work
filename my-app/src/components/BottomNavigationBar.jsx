import { Home, Search, Plus, Heart, User } from "lucide-react";
import React from "react";

export default function BottomNavigationBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 px-6 py-2 flex justify-between items-center z-50">
      {/* Home - Active */}
      <div className="flex flex-col items-center text-blue-600">
        <div className="bg-blue-100 p-2 rounded-full">
          <Home size={20} strokeWidth={2} />
        </div>
      </div>

      {/* Search */}
      <div className="flex flex-col items-center text-gray-500">
        <Search size={20} strokeWidth={2} />
      </div>

      {/* Add */}
      <div className="flex flex-col items-center text-blue-600">
        <Plus size={24} strokeWidth={2} />
      </div>

      {/* Favorites */}
      <div className="flex flex-col items-center text-gray-500">
        <Heart size={20} strokeWidth={2} />
      </div>

      {/* Profile */}
      <div className="flex flex-col items-center text-gray-500">
        <User size={20} strokeWidth={2} />
      </div>
    </div>
  );
}

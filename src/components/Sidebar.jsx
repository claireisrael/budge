import React from 'react';

function Sidebar() {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white fixed">
      <div className="p-4 text-center font-bold text-lg">Budget Manager</div>
      <ul className="mt-6">
        <li className="p-4 hover:bg-gray-700 cursor-pointer">Dashboard</li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer">Expenses</li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer">Reports</li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer">Settings</li>
      </ul>
      <div className="absolute bottom-4 left-4">
        <button className="bg-red-500 px-4 py-2 rounded">Log Out</button>
      </div>
    </div>
  );
}

export default Sidebar;

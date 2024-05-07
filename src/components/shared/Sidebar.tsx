import React from "react";

const Sidebar = ({ showSidebar = false }) => {
  return (
    <div
      className={`bg-gray-800 w-64 h-full text-white fixed top-16 left-0 z-50 ${
        showSidebar ? "sm:flex" : "sm:flex hidden"
      } flex-col items-start pt-5`}
    >
      <a
        href="/contact"
        className="text-white text-lg mb-4 hover:text-gray-300 w-full pl-5 pb-5 border-b border-gray-400 block"
      >
        Contact
      </a>
      <a
        href="/charts-and-maps"
        className="text-white text-lg hover:text-gray-300 w-full pl-5 pb-5 border-b border-gray-400 block"
      >
        Charts and Maps
      </a>
    </div>
  );
};

export default Sidebar;

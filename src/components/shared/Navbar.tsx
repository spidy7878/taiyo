import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar.tsx";

const Navbar = () => {
  const location = useLocation();
  let currentRoute = location.pathname.substring(1).toUpperCase();
  currentRoute === "" && (currentRoute = "HOME");

  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <div className="bg-gray-800 h-16 flex items-center justify-center text-white text-lg border-b border-gray-300">
        <div className="sm:hidden absolute left-5" onClick={toggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                sidebarVisible
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 8h16M4 12h16M4 16h16"
              }
            />
          </svg>
        </div>
        <p>{`${currentRoute} PAGE`}</p>
      </div>
      <Sidebar showSidebar={sidebarVisible} />
    </>
  );
};

export default Navbar;

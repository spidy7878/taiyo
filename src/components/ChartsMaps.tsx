import React from "react";
import Sidebar from "./shared/Sidebar.tsx";
import Navbar from "./shared/Navbar.tsx";

const ChartsMaps = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-screen bg-gray-200">
        <Sidebar />
        <div className="flex-1 p-10">Charts Page</div>
      </div>
    </>
  );
};

export default ChartsMaps;

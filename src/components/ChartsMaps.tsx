import React from "react";
import Sidebar from "./shared/Sidebar.tsx";
import Navbar from "./shared/Navbar.tsx";
import LineChart from "./dashboard/LineChart.tsx";

const ChartsMaps = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-screen bg-gray-200">
        <Sidebar />
        <div className="flex-1 p-10">
          <LineChart />
        </div>
      </div>
    </>
  );
};

export default ChartsMaps;

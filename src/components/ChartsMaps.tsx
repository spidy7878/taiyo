import React from "react";
import Sidebar from "./shared/Sidebar.tsx";
import Navbar from "./shared/Navbar.tsx";
import LineChart from "./dashboard/LineChart.tsx";
import Leaflet from "./dashboard/Leaflet.tsx";

const ChartsMaps = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-screen bg-gray-200 overflow-hidden">
        <Sidebar />
        <div className="flex-1 p-10 overflow-y-hidden hover:overflow-y-scroll">
          <LineChart />
          <Leaflet />
        </div>
      </div>
    </>
  );
};

export default ChartsMaps;

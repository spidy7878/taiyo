import React from "react";
import Sidebar from "../shared/Sidebar.tsx";
import Navbar from "../shared/Navbar.tsx";
import LineChart from "./LineChart.tsx";
import Leaflet from "./Leaflet.tsx";

const ChartsMaps = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-screen bg-gray-200 overflow-hidden">
        <Sidebar />
        <div className="flex-1 sm:pl-[17.5rem] sm:pr-10 px-10 pb-32 overflow-y-scroll">
          <LineChart />
          <Leaflet />
        </div>
      </div>
    </>
  );
};

export default ChartsMaps;

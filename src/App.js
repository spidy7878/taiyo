// App.js
import "./index.css";
import React from "react";
import Sidebar from "./components/shared/Sidebar.tsx";
import Navbar from "./components/shared/Navbar.tsx";

function App() {
  return (
    <>
      <Navbar />
      <div class="flex h-screen bg-gray-200">
        <Sidebar />
        <div class="flex-1 sm:pl-[17.5rem] sm:pr-10 px-10 py-6 font-semibol text-lg ">
          Please navigate accross the app from the Sidebar.
        </div>
      </div>
    </>
  );
}

export default App;

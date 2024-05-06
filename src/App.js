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
        <div class="flex-1 p-10 font-semibol text-lg ">
          Please navigate to the contact route from the Sidebar.
        </div>
      </div>
    </>
  );
}

export default App;

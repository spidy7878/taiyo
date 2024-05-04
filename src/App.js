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
        <div class="flex-1 p-10">Home Page</div>
      </div>
    </>
  );
}

export default App;

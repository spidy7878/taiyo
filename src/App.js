// App.js
import "./index.css";
import Sidebar from "./components/shared/Sidebar.tsx";

import React from "react";

function App() {
  return (
    <div class="flex h-screen bg-gray-200">
      <Sidebar />
      <div class="flex-1 p-10">Home Page</div>
    </div>
  );
}

export default App;

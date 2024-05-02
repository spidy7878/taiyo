import React from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const currentRoute = location.pathname.substring(1).toUpperCase();

  return (
    <div className="bg-gray-800 h-16 flex items-center justify-center text-white text-lg border-b border-gray-300">
      {`${currentRoute} PAGE`}
    </div>
  );
};

export default Navbar;

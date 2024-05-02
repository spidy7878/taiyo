import React from "react";

const About = () => {
  return (
    <div className="bg-gray-800 w-64 h-screen flex flex-col justify-start items-start pt-5">
      <a
        href="/contact"
        className="text-white text-lg mb-4 hover:text-gray-300 w-full pl-5 pb-5 border-b border-gray-400"
      >
        Contact
      </a>
      <a
        href="/charts-and-maps"
        className="text-white text-lg hover:text-gray-300 w-full pl-5 pb-5 border-b border-gray-400"
      >
        Charts and Maps
      </a>
    </div>
  );
};

export default About;

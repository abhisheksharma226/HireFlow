import React from 'react';

const ExpertComponent = () => {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-between p-8 bg-white">
      <div className="text-center md:text-left mb-8 md:mb-0">
        <h2 className="text-2xl font-bold">Experts from every <span className="text-blue-500">domain</span> to every <span className="text-blue-500">company size</span></h2>
        <p className="mt-2 text-gray-600">1000+ active interviewers</p>
        <div className="flex mt-4 space-x-4">
          <div className="w-12 h-12 rounded-full bg-blue-500"></div>
          <div className="w-12 h-12 rounded-full bg-red-500"></div>
          <div className="w-12 h-12 rounded-full bg-pink-500"></div>
          <div className="w-12 h-12 rounded-full bg-purple-500"></div>
          <div className="w-12 h-12 rounded-full bg-green-500"></div>
        </div>
      </div>
      <div className="mt-8 md:mt-0">
        <img src="/homepage/src/assets/map.png" alt="World Map" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default ExpertComponent;

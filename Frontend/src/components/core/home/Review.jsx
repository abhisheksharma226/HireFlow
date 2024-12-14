import React from 'react';


const Testimonial = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 bg-white">
      <div className="w-full md:w-1/2 p-4">
        <div className="relative">
          <img
            src="../assets/pic.jpg"
            alt="Niket Gupta"
            className="w-full h-auto"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-75 text-white p-2">
            <p>Niket Gupta</p>
            <p>Head of Acquisition, Yubi</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-4 text-center md:text-left">
        <h2 className="text-2xl font-bold mb-4">
          Intervue is <span className="text-blue-500">Reliable</span>, <span className="text-green-500">Fast</span> and <span className="text-yellow-500">Helpful</span>
        </h2>
        <p className="mb-4">We didn't say it. Our customers did.</p>
        <div className="flex justify-center md:justify-start space-x-4">
          <div className="w-12 h-12 rounded-full bg-gray-300"></div>
          <div className="w-12 h-12 rounded-full bg-gray-300"></div>
          <div className="w-12 h-12 rounded-full bg-gray-300"></div>
          <div className="w-12 h-12 rounded-full bg-gray-300"></div>
        </div>
        <p className="mt-4 font-bold">Niket Gupta</p>
        <p>Group head of talent acquisition, Yubi</p>
      </div>
    </div>
  );
};

export default Testimonial;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const OutsourceInterviews = () => {
  const navigate = useNavigate();

  const handleRequestNow = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="flex items-center space-x-4 mb-8">
        <button className="px-4 py-2 bg-black text-white rounded-full">For Organisations</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full">For Candidates</button>
      </div>
      <h1 className="text-3xl font-bold mb-2">
        Save your engineering <span className="font-black">bandwidth</span>
      </h1>
      <p className="text-gray-600 mb-8">Outsource your interviews in just 2 simple steps</p>
      <div className="relative mb-8">
        <input 
          type="text" 
          placeholder="Search profile" 
          className="px-4 py-2 w-80 bg-gray-100 rounded-full focus:outline-none"
        />
      </div>
      <div className="flex space-x-8 mb-8">
        {/* Icons for Frontend, Backend, etc. */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2">
            <span className="text-xl">{/* Icon for Frontend */}</span>
          </div>
          <span>Frontend</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2">
            <span className="text-xl">{/* Icon for Backend */}</span>
          </div>
          <span>Backend</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2">
            <span className="text-xl">{/* Icon for Full Stack */}</span>
          </div>
          <span>Full Stack</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2">
            <span className="text-xl">{/* Icon for Android */}</span>
          </div>
          <span>Android</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2">
            <span className="text-xl">{/* Icon for view all */}</span>
          </div>
          <span>view all</span>
        </div>
      </div>
      <button 
        className="px-6 py-3 bg-black text-white rounded-full" 
        onClick={handleRequestNow}
      >
        Request now
      </button>
    </div>
  );
};

export default OutsourceInterviews;

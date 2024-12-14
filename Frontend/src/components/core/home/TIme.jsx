import React from 'react';

const CandidateReport = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2 mb-6 md:mb-0">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
          <div>
            <h2 className="text-xl font-bold">Radhikha Sharma</h2>
            <p className="text-gray-600">Frontend Developer - 8 yrs</p>
          </div>
          <div className="ml-auto bg-green-500 text-white px-3 py-1 rounded-full">Strong yes</div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Communication or Articulation</h3>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '100%' }}></div>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Approach to the solution</h3>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Code Structure</h3>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '30%' }}></div>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Functionally correct solution</h3>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 ml-7 rounded-lg shadow-lg w-full md:w-1/3">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-purple-500 rounded-full mr-4"></div>
          <h2 className="text-xl font-bold">Get report in minutes</h2>
        </div>
        <p className="text-gray-600 mb-4">Reduce the time taken from candidate evaluation to job offer.</p>
        <button className="bg-black text-white px-4 py-2 rounded-full">Download sample report</button>
      </div>
    </div>
  );
};

export default CandidateReport;

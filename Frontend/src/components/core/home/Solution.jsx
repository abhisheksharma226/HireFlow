import React, { useState } from 'react';

const CandidateSolution = () => {
  const [activeTab, setActiveTab] = useState('Assessments');

  const tabs = [
    { name: 'Assessments', icon: '📝' },
    { name: 'Projects', icon: '📂' },
    { name: 'Outsource interviews', icon: '🤝' },
    { name: 'Pair programming', icon: '💻' },
  ];

  return (
    <div className="flex flex-col p-6 items-center justify-center">
      <div className="bg-white  rounded-lg shadow-lg w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-2">Your own 360° solution</h2>
        <p className="text-gray-600 mb-4">Screen, interview, and shortlist the best candidates all in one place.</p>
        <div className="flex mb-4">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`flex items-center px-4 py-2 rounded-lg mr-2 ${activeTab === tab.name ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}
              onClick={() => setActiveTab(tab.name)}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-700">
            Content for <strong>{activeTab}</strong> will appear here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CandidateSolution;

import React, { useState } from 'react';

const InterviewRequest = () => {
  const [selectedProfile, setSelectedProfile] = useState('');
  const [role, setRole] = useState('');

  const profiles = [
    { name: 'Full stack', icon: '📦' },
    { name: 'Android', icon: '🤖' },
    { name: 'Backend', icon: '🔙' },
    { name: 'Flutter', icon: '🦋' },
    { name: 'Database', icon: '💾' },
    { name: 'Electronics', icon: '🔌' },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Here's how it works</h2>
        <a href="#" className="text-blue-400">Get started now →</a>
      </div>
      <div className="flex space-x-8">
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">1</h3>
            <p>Select profile & template to request interviewer</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">2</h3>
            <p>Wait for the interview to happen</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">3</h3>
            <p>Make informed decision with report</p>
          </div>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Select profile</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {profiles.map((profile) => (
              <button
                key={profile.name}
                className={`p-4 rounded-lg border ${selectedProfile === profile.name ? 'border-blue-400' : 'border-gray-600'}`}
                onClick={() => setSelectedProfile(profile.name)}
              >
                <span className="text-2xl">{profile.icon}</span>
                <p>{profile.name}</p>
              </button>
            ))}
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h4 className="text-lg font-semibold mb-2">Request interviewer</h4>
            <div className="mb-2">
              <label className="block text-sm">Profile</label>
              <input
                type="text"
                value={selectedProfile}
                readOnly
                className="w-full p-2 rounded bg-gray-600 text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm">Role</label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full p-2 rounded bg-gray-600 text-white"
              />
            </div>
            <button className="w-full bg-blue-500 p-2 rounded text-white">Request now →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewRequest;

import React, { useState } from 'react';
import { SearchIcon, XIcon } from '@heroicons/react/solid';

const InterviewPractice = () => {
  const [search, setSearch] = useState('');
  const [selectedRole, setSelectedRole] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  const techRoles = [
    'Frontend', 'Backend', 'Full Stack', 'Android', 'Data Science', 'ML/AI', 
    'Flutter', 'React Native', 'AEM', 'Business Intelligence', 'Data Engineering', 
    'Database Administrator', 'Drupal Developer', 'Microsoft Business Apps', 
    'Project Manager', 'SAP', 'Salesforce Developer', 'Scrum Master', 
    'ServiceNow Developer', 'SharePoint', 'iOS'
  ];

  // Filter roles based on search input
  const filteredRoles = techRoles.filter((role) =>
    role.toLowerCase().includes(search.toLowerCase())
  );

  const handleRoleSelect = (role) => {
    setSelectedRole(role); // Set the selected role
  };

  const handleConfirmDetails = (e) => {
    e.preventDefault();
    setShowPayment(true); // Show payment details
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 relative">
      <h1 className="text-3xl font-bold text-center mb-2">Practice 1:1 interviews with top tech experts</h1>
      <p className="text-lg text-center text-gray-600 mb-4">Crack your next tech-interview with us.</p>
      
      <div className="relative w-full max-w-md mb-8">
        <input 
          type="text" 
          placeholder="Search profile"
          className="w-full p-3 pl-10 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {filteredRoles.map((role, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full border ${role === selectedRole ? 'border-blue-500 bg-blue-100 text-blue-700' : 'border-gray-300 bg-white text-gray-700'}`}
            onClick={() => handleRoleSelect(role)} // Select role
          >
            {role}
          </button>
        ))}
      </div>

      <button 
        className="px-6 py-3 bg-black text-white rounded-full flex items-center"
        onClick={() => setShowPopup(true)}
        disabled={!selectedRole}
      >
        Request now
        <span className="ml-2">→</span>
      </button>

      {selectedRole && (
        <p className="mt-4 text-lg text-gray-700">Selected Role: {selectedRole}</p>
      )}

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
          <div className="bg-white w-full max-w-md h-full shadow-lg overflow-auto">
            <div className="p-6 flex justify-between items-center border-b border-gray-200">
              <h2 className="text-xl font-bold">Schedule your mock interview</h2>
              <button 
                className="text-gray-600 hover:text-gray-900"
                onClick={() => {
                  setShowPopup(false);
                  setShowPayment(false);
                }}
              >
                <XIcon className="h-6 w-6" />
              </button>
            </div>
            <form className="p-6" onSubmit={handleConfirmDetails}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="profile" className="block text-sm font-medium text-gray-700">Profile</label>
                <input 
                  type="text" 
                  id="profile" 
                  name="profile" 
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
                  value={selectedRole}
                  readOnly
                />
              </div>
              <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-full">
                Confirm details
              </button>
            </form>

            {showPayment && (
              <div className="p-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold mb-4">Select Interviewer Type</h3>
                <div className="mb-4">
                  <label className="block mb-2">
                    <input type="radio" name="interviewer" value="FAANG" className="mr-2" />
                    <span className="font-medium">FAANG</span> <span className="text-gray-600">- Companies that build the best tech products in the world (₹2300)</span>
                  </label>
                  <label className="block mb-2">
                    <input type="radio" name="interviewer" value="Hypergrowth" className="mr-2" />
                    <span className="font-medium">Hypergrowth</span> <span className="text-gray-600">- Startups that are growing at a rapid pace (₹2100)</span>
                  </label>
                  <label className="block mb-2">
                    <input type="radio" name="interviewer" value="IT services" className="mr-2" />
                    <span className="font-medium">IT services</span> <span className="text-gray-600">- Companies that build systems to help other companies grow (₹1500)</span>
                  </label>
                </div>
                <p className="text-gray-600 mb-4">Please review your order carefully before confirming. Once your purchase is processed, refunds will not be available.</p>
                <button className="w-full px-4 py-2 bg-green-500 text-white rounded-full">
                  Proceed to Payment
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default InterviewPractice;

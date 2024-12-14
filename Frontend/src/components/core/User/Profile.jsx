import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import Navbar from "./Nav";

const Dashboard = () => {
        const navigate = useNavigate(); // Initialize navigate function
      
        // Function to handle redirection to login page
        const handleLoginClick = () => {
          navigate('/TechRoles'); // Adjust the URL to your login page route
        };


  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Hi, Abhi</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h2 className="text-2xl font-semibold mb-2">Upcoming Interviews</h2>
                <p className="text-gray-600 mb-4">You currently have no upcoming interviews scheduled.</p>
                <button onClick={handleLoginClick} className="bg-blue-500 text-white px-4 py-2 rounded-full">Request Interview</button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-2">Resources</h2>
                <div className="mt-4">
                  <a href="#" className="block bg-gray-100 p-4 rounded-lg mb-4">
                    <h3 className="text-lg font-semibold">C++ Vs. Java: Which Is Better Programming Language?</h3>
                    <p className="text-gray-600">Explore the pros and cons of C++ and Java to decide which is better for your next project.</p>
                  </a>
                  <a href="#" className="block bg-gray-100 p-4 rounded-lg mb-4">
                    <h3 className="text-lg font-semibold">Advanced Swift Interview Questions</h3>
                    <p className="text-gray-600">Prepare for your next interview with these advanced Swift questions.</p>
                  </a>
                </div>
              </div>
            </div>

            <div className="hidden md:block bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">Badges</h2>
              <p className="text-gray-600 mb-4">View and manage your badges here.</p>
              <p className="text-gray-600">No badges earned yet.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Dashboard;

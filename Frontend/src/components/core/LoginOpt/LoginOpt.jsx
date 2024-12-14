import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Navbar from '../home/Nav';
import Footer from '../home/Footer';
import Market from './Market';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function LoginOpt() {
  const navigate = useNavigate(); // Initialize navigate function

  // Function to handle redirection to login page
  const handleLoginClick = () => {
    navigate('/login'); // Adjust the URL to your login page route
  };

  return (
    <div className="bg-white">
      <div className="mx-auto">

         {/* Render Navbar Component */}
            <Navbar />

        {/* <div className="flex justify-between items-center">
          <div className="text-3xl font-bold text-gray-900">Intervue</div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-900">Solutions</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">Products</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">Integrations</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">Pricing</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">Become an interview engineer</a>
            <button onClick={handleLoginClick}  className="bg-black text-white px-4 py-2 rounded">Request Demo</button>
          </div>
        </div> */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-yellow-200 text-yellow-800 px-4 py-2 rounded-full inline-block mb-4">Earn & Grow 10x</div>
            <h2 className="text-xl font-bold">Become an Interviewer</h2>
            <p className="mt-2 text-gray-600">Join our community of freelance interviewers at Intervue. Gain exposure beyond your workspace and exercise the power of your knowledge and freedom</p>
            <button onClick={handleLoginClick} className="mt-4 bg-black text-white px-4 py-2 rounded">Login</button>
          </div>
          <div className="text-center">
            <div className="bg-green-200 text-green-800 px-4 py-2 rounded-full inline-block mb-4">Save 90% of hiring bandwidth</div>
            <h2 className="text-xl font-bold">For Companies</h2>
            <p className="mt-2 text-gray-600">Conduct interviews asynchronously on Intervue's platform by vetted interviewers. A detailed report of the candidate's performance is available within 5 minutes</p>
            <button onClick={handleLoginClick} className="mt-4 bg-green-600 text-white px-4 py-2 rounded">Login</button>
            <p className="mt-2 text-gray-600">Need help? <a href="#" className="text-blue-600">Contact Sales</a></p>
          </div>
          <div className="text-center">
            <div className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full inline-block mb-4">Mock interviews</div>
            <h2 className="text-xl font-bold">For Candidates</h2>
            <p className="mt-2 text-gray-600">Get actionable feedback of your interview from industry experts and share it with 400+ actively hiring brands</p>
            <button onClick={handleLoginClick} className="mt-4 bg-black text-white px-4 py-2 rounded">Login</button>
          </div>
        </div>

            <Market />

      </div>

      <Footer />

    </div>
  );
}

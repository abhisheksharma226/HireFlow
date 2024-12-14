import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom'; 
import LoginOpt from '../LoginOpt/LoginOpt';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {

  const navigate = useNavigate(); // Initialize navigate function

  // Function to handle redirection to login page
  const handleLoginClick = () => {
    navigate('/LoginOpt'); // Adjust the URL to your login page route
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 text-3xl font-bold text-gray-900">Hireflow</div>
          <div className="hidden md:flex space-x-8">
            <Menu as="div" className="relative">
              <Menu.Button className="text-gray-500 hover:text-gray-900 inline-flex items-center">
                Solutions
                <ChevronDownIcon className="ml-1 h-5 w-5" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-left absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700'
                          )}
                        >
                          Submenu 1
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700'
                          )}
                        >
                          Submenu 2
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <Menu as="div" className="relative">
              <Menu.Button className="text-gray-500 hover:text-gray-900 inline-flex items-center">
                Products
                <ChevronDownIcon className="ml-1 h-5 w-5" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-left absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700'
                          )}
                        >
                          Submenu 1
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700'
                          )}
                        >
                          Submenu 2
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <Menu as="div" className="relative">
              <Menu.Button className="text-gray-500 hover:text-gray-900 inline-flex items-center">
                Integrations
                <ChevronDownIcon className="ml-1 h-5 w-5" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-left absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700'
                          )}
                        >
                          Submenu 1
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700'
                          )}
                        >
                          Submenu 2
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <a href="#" className="text-gray-500 hover:text-gray-900">Pricing</a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-900 flex items-center">
              <ChevronDownIcon className="mr-1 h-5 w-5" />
              Become an interview engineer
            </a>
            <button onClick={handleLoginClick} className="bg-black text-white px-4 py-2 rounded">Request Demo</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

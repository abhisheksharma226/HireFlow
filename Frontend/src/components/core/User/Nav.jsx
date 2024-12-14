import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

// Helper function for class names
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      {/* Left Logo */}
      <div className="text-3xl font-bold tracking-wide">
        <span className="text-white lowercase">interv</span>
        <span className="text-gray-300 lowercase">ue</span>
      </div>

      {/* Contact Us & Profile Section */}
      <div className="flex items-center gap-6">
        <a href="#" className="text-gray-300 hover:text-white">
          Contact us
        </a>

        {/* Profile Dropdown */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="flex items-center gap-2 text-white focus:outline-none">
              <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center text-black font-semibold">
                AK
              </div>
              <span className="font-medium">Abhi Kumar</span>
              <ChevronDownIcon className="ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={React.Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/profile"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Profile
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/settings"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Settings
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;

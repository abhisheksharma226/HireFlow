import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Market() {
      return (
        <div className="flex justify-around items-center bg-gray-100 p-4">
          <img src="src\assets\razo.png" alt="Razorpay" className="h-8" />
          <img src="src\assets\razo.png" alt="Siemens" className="h-8" />
          <img src="src\assets\razo.png" alt="General Mills" className="h-8" />
          <img src="src\assets\razo.png" alt="Rakuten" className="h-8" />
          <img src="src\assets\razo.png" alt="M2P" className="h-8" />
        </div>
      );
    };
    

    
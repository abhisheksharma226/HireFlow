import React from 'react';

const CallToAction = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <p className="mt-1 text-lg font-semibold">Visionaries Grow with Intervue</p>
      <div className="flex  space-x-8">
        <img src="path/to/razorpay-logo.png" alt="Razorpay" className="h-10" />
        <img src="path/to/siemens-logo.png" alt="Siemens" className="h-10" />
        <img src="path/to/general-mills-logo.png" alt="General Mills" className="h-10" />
        <img src="path/to/rakuten-logo.png" alt="Rakuten" className="h-10" />
        <img src="path/to/m2p-logo.png" alt="M2P" className="h-10" />
      </div>
    </div>
  );
};

export default CallToAction;

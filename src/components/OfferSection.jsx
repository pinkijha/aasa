import React from "react";
import { NavLink } from "react-router-dom";

const OfferSection = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-gradient-to-b from-white to-blue-100 px-4 text-center">
      {/* Gradient Button */}
      <NavLink to={'/business-identity'}>
      <button className="cursor-pointer bg-gradient-to-r from-blue-600 to-pink-500 text-white font-bold md:py-3 py-3 md:px-6 px-3 rounded-full shadow-lg text-sm md:text-xl">
        Secure Your Spot for Just ₹79
      </button>
      </NavLink>

      {/* Subtext */}
      <p className="mt-3 text-gray-700 text-sm md:text-base">
        Use a coupon code within 15 minutes to unlock a special bonus pack!
      </p>

      {/* Section Title */}
      <h2 className="mt-6 text-xl md:text-2xl font-semibold text-gray-900">
        <span className="font-bold">Without Proper Training,</span> You Might:
      </h2>

      {/* Features Section */}
      <div className="mt-6 mb-4 md:mb-6 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-4 md:w-[150px] md:p-4 flex flex-col items-center">
          <p className="text-gray-700 text-base">Struggle with complex software tools</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg  md:w-[150px] shadow-md p-4 md:p-4 flex flex-col items-center">
          <p className="text-gray-700 text-base">Feel stuck without structured learning</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg  md:w-[150px] shadow-md p-4 md:p-4  flex flex-col items-center">
          <span className="text-red-500 text-2xl">❌</span>
          <p className="text-gray-700 text-base">Miss out on monetizing your skills</p>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;

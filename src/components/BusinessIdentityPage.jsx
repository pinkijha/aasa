import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const BusinessIdentityPage = () => {
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes countdown

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white min-h-screen text-center">
      {/* Back Button */}
      <div className="w-full text-left md:text-xl text-lg mb-4">
        <NavLink to={'/'}>
        <button className="text-gray-600 cursor-pointer">← Back</button>
        </NavLink>
      </div>

      {/* Header */}
      <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-pink-500 text-transparent bg-clip-text">
        Pehchaan – Your Online Business Identity Starts Here!
      </h1>
      <p className="text-gray-700 mt-2 text-sm font-semibold">
        Get your business online for just <span className="line-through">₹15,000</span> ₹6,666.<br />
        Book your service now for just ₹49!
      </p>

      {/* Countdown Timer */}
      <h2 className="md:text-lg bg-gradient-to-r from-blue-600 to-pink-500 text-transparent bg-clip-text font-semibold mt-6">Avail the offer now!</h2>
      <p className=" font-semibold mt-6 text-sm md:text-sm">Pay within 15 minutes to get the services in ₹6,666.</p>
      <div className="mt-6 border-2 border-purple-500 rounded-full px-6 py-2 text-lg font-bold text-purple-500">
        {formatTime(timeLeft)}
      </div>

      {/* Form Section */}
      <h3 className="mt-6 text-lg font-semibold text-gray-800">Tell Us About You</h3>
      <form className="w-full max-w-sm mt-4">
        <label className="block text-left font-semibold text-gray-700">Full Name*</label>
        <input
          type="text"
          placeholder="Enter your full name"
          className="w-full p-3 mt-1 border border-gray-300 rounded-md bg-purple-50"
        />
        
        <label className="block text-left font-semibold text-gray-700 mt-4">Phone Number*</label>
        <input
          type="text"
          placeholder="Enter your phone number"
          className="w-full p-3 mt-1 border border-gray-300 rounded-md bg-purple-50"
        />
        
        <label className="block text-left font-semibold text-gray-700 mt-4">Email ID</label>
        <input
          type="email"
          placeholder="Enter your email ID"
          className="w-full p-3 mt-1 border border-gray-300 rounded-md bg-purple-50"
        />
        
        <div className="flex items-center mt-4">
          <input type="checkbox" className="" />
          <p className="text-sm  text-gray-700">
            By proceeding, you agree to our <span className="text-blue-500 underline cursor-pointer">Terms & Conditions</span> and 
            <span className="text-blue-500  underline cursor-pointer">Privacy Policy</span>.
          </p>
        </div>
      </form>

      {/* Button */}
      <button className="mt-6 px-6 py-3 text-white text-lg font-bold rounded-full bg-gradient-to-r from-blue-500 to-pink-500">
        Book Now for ₹49
      </button>
    </div>
  );
};

export default BusinessIdentityPage;

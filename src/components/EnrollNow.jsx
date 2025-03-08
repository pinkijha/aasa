import React from 'react'

const EnrollNow = () => {
    return (
        <div className="text-center  flex flex-col justify-center items-center p-6">
          {/* Heading */}
          <h2 className="text-2xl font-semibold text-gray-900">Enroll Now for ₹7,999</h2>
    
          {/* Offer Buttons */}
          <div className="mt-4 space-y-3 ">
            {[
              "Secure Your Spot for Just ₹79",
              "Bonus Offer: Apply a coupon code within 15 minutes to unlock:",
              "Exclusive Brush & Texture Pack",
              "Extra Live Q&A Session with Mentors"
            ].map((text, index) => (
              <button
                key={index}
                className="md:w-[500px] flex items-center justify-center  w-full px-6 py-3 text-gray-900 font-medium border border-gray-300 rounded-full"
              >
                {text}
              </button>
            ))}
          </div>
    
          {/* Special Offer Text */}
          <p className="text-gray-700 mt-4">
            WE Offer everything you need at ₹7,999—but wait... 👀
          </p>
    
          {/* Discount Box */}
          <div className="bg-gradient-to-r md:w-[500px]  flex items-center justify-center  from-pink-200 to-blue-200 text-gray-900 text-sm px-6 py-3 rounded-lg mt-3">
            Use a Special Code & Unlock a Game-Changing Discount to avail the same course at a discounted price!
          </div>
    
          {/* CTA Button */}
          <button className="mt-5 px-6 py-3 text-white font-semibold rounded-lg shadow-lg bg-gradient-to-r from-blue-600 to-pink-600">
            Book Now for ₹79
          </button>
        </div>
      );
}

export default EnrollNow

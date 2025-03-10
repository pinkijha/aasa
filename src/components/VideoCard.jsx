import { NavLink } from "react-router-dom";

const VideoCard = () => {
    return (
      <div className="flex flex-col items-center justify-center p-4">
        {/* Gradient Button */}
        <NavLink to={'/business-identity'}>
        <button className="cursor-pointer px-6 py-3 text-white text-lg font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-pink-600 shadow-md">
          Book Now at ₹49
        </button>
        </NavLink>
  
        {/* Video Container */}
        <div className="mt-6 w-60 h-60 md:w-96 md:h-96 flex items-center justify-center rounded-2xl bg-white shadow-lg border border-gray-200 relative overflow-hidden">
          {/* Play Button */}
          <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center cursor-pointer">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z"></path>
            </svg>
          </div>
        </div>
  
        {/* Testimonial Section */}
        <div className="mt-8 flex w-[200px] md:mx-auto mx-2 text-center justify-center md:flex-row gap-3">
          {/* Testimonial Card 1 */}
          <div className="relative p-[2px] bg-gradient-to-r from-pink-500 to-blue-500 rounded-2xl">
            <div className="w-50 md:w-80 bg-white rounded-2xl  p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-center">Aditi Verma</h3>
              <p className="text-center text-gray-500">22</p>
              <p className="text-center text-sm mt-3 text-gray-700">
                I always wanted to learn digital art, but tutorials were confusing.
                This course made everything so simple! Now, I’m taking commissions online!
              </p>
            </div>
          </div>
  
          {/* Testimonial Card 2 */}
          <div className="relative p-[2px] bg-gradient-to-r from-pink-500 to-blue-500 rounded-2xl">
            <div className="w-50 md:w-80 bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-center">Rajesh Khanna</h3>
              <p className="text-center text-gray-500">30</p>
              <p className=" text-sm text-center mt-3 text-gray-700">
                Switching from traditional art to digital felt overwhelming, but
                this course changed everything! The structured lessons helped me master Procreate in weeks!
              </p>
            </div>
          </div>

        </div>
        
      </div>
    );
  };
  
  export default VideoCard;
  
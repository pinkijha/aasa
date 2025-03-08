import { Pencil, Paintbrush, Wrench, Image, Briefcase, DollarSign, Award, Folder, Mic } from "lucide-react";

const ExtraFeatures = () => {
  const features = [
    { icon: <Pencil className="w-5 h-5 text-gray-700" />, title: "Sketching Basics", description: "Shape, form, and proportion fundamentals" },
    { icon: <Paintbrush className="w-5 h-5 text-gray-700" />, title: "Digital Painting", description: "Master shading, blending & coloring techniques" },
    { icon: <Wrench className="w-5 h-5 text-gray-700" />, title: "Tool Mastery", description: "Hands-on with Procreate, Photoshop & Illustrator" },
    { icon: <Image className="w-5 h-5 text-gray-700" />, title: "Character & Concept Art", description: "Create professional-grade designs" },
    { icon: <Briefcase className="w-5 h-5 text-gray-700" />, title: "Portfolio Building", description: "Craft stunning pieces to showcase your skills" },
    { icon: <DollarSign className="w-5 h-5 text-gray-700" />, title: "Bonus: Monetization Guide", description: "How to sell your art & get freelance gigs" },
    { icon: <Award className="w-5 h-5 text-gray-700" />, title: "Certificate of Completion", description: "Boost your creative career" },
    { icon: <Folder className="w-5 h-5 text-gray-700" />, title: "Project-Based Learning", description: "Build a stunning portfolio" },
    { icon: <Mic className="w-5 h-5 text-gray-700" />, title: "Live Mentorship", description: "Weekly Q&A sessions with industry pros" },
  ];

  return (
    <div className="flex flex-col items-center text-center p-6 bg-white max-w-md mx-auto ">
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800">
        <span className="font-bold">Not Satisfied</span> Yet?
      </h2>
      <p className="text-gray-600 mt-1">We got you! Here are a few extra features</p>

      {/* Feature List */}
      <div className="mt-4 w-full">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-4 p-3 rounded-xl shadow-lg shadow-blue-200 border border-blue-200 my-2 md:my-4">
            {feature.icon}
            <div className="text-left">
              <h3 className="text-sm font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-xs text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Book Now Button */}
      <button className="cursor-pointer mt-5 px-6 py-3 text-white text-lg font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-pink-600 shadow-md">
        Book Now for ₹79
      </button>
    </div>
  );
};

export default ExtraFeatures;

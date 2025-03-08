import React from "react";
import { Globe, Clock, DollarSign, BookOpen, Briefcase, AtSign } from "lucide-react";

const CourseBenefits = () => {
  // List of benefits with icons
  const benefits = [
    { icon: <Globe className="text-gray-700" />, text: "Hands-on Lessons – Learn digital painting, shading & composition." },
    { icon: <Clock className="text-gray-700" />, text: "Tool Mastery – Master Procreate, Photoshop, & Illustrator." },
    { icon: <DollarSign className="text-gray-700" />, text: "Exclusive Resource Pack – Brushes, templates & textures." },
    { icon: <BookOpen className="text-gray-700" />, text: "Live Mentorship – Weekly Q&A sessions with industry pros." },
    { icon: <Briefcase className="text-gray-700" />, text: "Project-Based Learning – Build a stunning portfolio." },
    { icon: <AtSign className="text-gray-700" />, text: "Certificate of Completion – Boost your creative career." }
  ];

  return (
    <div className="flex flex-col items-center justify-center px-4 py-10 min-h-screen">
      {/* Gradient Heading */}
      <h2 className="text-xl md:text-3xl font-semibold text-center">
        <span className="bg-gradient-to-r from-blue-600 to-pink-600 text-transparent bg-clip-text ">With This Course, You Get:</span>{" "}      
      </h2>

      {/* Benefit Cards */}
      <div className="mt-6 w-full max-w-2xl space-y-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center bg-white p-4 rounded-xl shadow-lg shadow-blue-200 border border-blue-200">
            <div className="w-10 h-10 flex items-center justify-center mr-3">{benefit.icon}</div>
            <p className="text-gray-700 text-sm md:text-base">{benefit.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseBenefits;

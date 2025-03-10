import React from "react";
import Header from "./Header";
import banner from "../assets/banner.jpg";
import OfferSection from "./OfferSection";
import CourseBenefits from "./CourseBenefits";
import VideoCard from "./VideoCard";
import WordCloud from "./WordCloud";
import ExtraFeatures from "./ExtraFeatures";
import FAQSection from "./Faq";
import EnrollSection from "./EnrollSection";
import EnrollNow from "./EnrollNow";

const Main = () => {
  return (
    <div className="">
      {/* Header */}
      <Header />

      {/* Banner */}
      <div className="flex flex-col items-center mt-4 mb-4">
        <h1 className="md:text-[2.25rem] text-center text-[1.5rem] font-bold bg-gradient-to-r from-blue-600 to-pink-500 text-transparent bg-clip-text">Master the Art of Digital Illustration</h1>
        <h2 className="font-bold md:text-[2rem] text-center text-[1rem] md:mb-5 mb-4">A 4-Week Course Designed for Beginners & Enthusiasts!</h2>
        <img src={banner} className="mr-3" />
        <p className="font-bold text-center md:w-[300px] m-2">
          Learn to create stunning digital artwork with step-by-step guidance
          from industry experts. No prior experience required. Just your
          creativity! Enroll now for ₹7,999
        </p>
      </div>

      {/* Offer Section */}
      <OfferSection/>

      {/* Course Benefits */}
      <CourseBenefits/>

      {/* Video Card */}
      <VideoCard/>

      {/* World Clod */}
      <WordCloud/>

      {/* Course Benefits */}
      <ExtraFeatures/>

      {/* Enroll Now */}
      <EnrollNow/>

      {/* FAQ */}
      <FAQSection/>

      {/* Enroll section */}
      <EnrollSection/>
    </div>
  );
};

export default Main;
 
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Who is this course for?",
    answer: "This course is perfect for beginners, hobbyists, and aspiring digital artists who want to learn digital illustration from scratch. No prior experience required!"
  },
  {
    question: "What tools do I need to take this course?",
    answer: "You'll need: \n• A digital tablet (Wacom, or any drawing tablet) \n• A digital art software (Procreate, Photoshop, or Krita) \n• A passion for creativity"
  },
  {
    question: "How long is the course?",
    answer: "The course lasts 4+ weeks, with step-by-step lessons covering everything from sketching to advanced digital painting techniques."
  },
  {
    question: "Is this a live or recorded course?",
    answer: "The course includes both pre-recorded lessons and live Q&A sessions with industry experts for better interaction."
  },
  {
    question: "Will I receive a certificate?",
    answer: "Yes! After completing the course, you'll receive a Certificate of Completion, which can boost your portfolio and credibility."
  },
  {
    question: "Can I monetize my digital art after this course?",
    answer: "Absolutely! The course includes a bonus session on freelancing, selling your art so you can start earning right away."
  },
  {
    question: "What happens if I miss a live session?",
    answer: "No worries! All live sessions will be recorded and uploaded to your student dashboard for later viewing."
  },
  {
    question: "How do I apply the coupon code?",
    answer: "Once you sign up, you'll get 15 minutes to enter a valid coupon code to unlock exclusive bonuses."
  },
  {
    question: "What if I don’t have a tablet?",
    answer: "You can still take the course using a mouse & free digital software like Krita. However, a tablet is recommended for better results."
  },
  {
    question: "Is there a refund policy?",
    answer: "The ₹79 booking fee is non-refundable, but we're confident you'll love the course!"
  },
  {
    question: "How do I enroll?",
    answer: "Click the 'Enroll Now' button, make the payment, and get instant access to the course materials."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-lg text-center mx-auto p-6 bg-white rounded-lg">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">FAQs</h2>
      <div className="divide-y divide-gray-300">
        {faqs.map((faq, index) => (
          <div key={index} className="py-3">
            <button
              className="cursor-pointer w-full flex justify-between items-center text-left font-medium text-gray-900"
              onClick={() => toggleFAQ(index)}
            >
              <span>Q: {faq.question}</span>
              {openIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            {openIndex === index && <p className="text-gray-600 mt-2 text-sm">{faq.answer}</p>}
          </div>
        ))}
      </div>
      <button className="cursor-pointer mt-6 w-full md:w-60 bg-gradient-to-r from-blue-600 to-pink-600 text-white font-semibold py-3 rounded-lg shadow-md">
        Let's get started
      </button>
    </div>
  );
};

export default FAQSection;

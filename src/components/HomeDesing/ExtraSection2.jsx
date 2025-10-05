import React, { useState } from "react";

const ExtraSection2 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-11/12 mx-auto mb-30 mt-20">
      <h1 className="text-4xl font-bold text-center mb-10">🌿 Plant FAQs</h1>

      <div className="space-y-4">

        {/* Question 1 */}
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <button
            className="w-full text-left px-4 py-3 bg-green-50 hover:bg-green-100 transition-colors font-medium"
            onClick={() => toggleFAQ(0)}
          >
            How often should I water my plants?
          </button>
          {openIndex === 0 && (
            <div className="px-4 py-3 bg-white text-gray-700">
              It depends on the plant type. Generally, water when the top 1-2 inches of soil is dry.
            </div>
          )}
        </div>

        {/* Question 2 */}
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <button
            className="w-full text-left px-4 py-3 bg-green-50 hover:bg-green-1000 transition-colors font-medium"
            onClick={() => toggleFAQ(1)}
          >
            What is the best lighting for indoor plants?
          </button>
          {openIndex === 1 && (
            <div className="px-4 py-3 bg-white text-gray-700">
              Most indoor plants thrive in bright, indirect sunlight. Avoid direct harsh sunlight for sensitive plants.
            </div>
          )}
        </div>

        {/* Question 3 */}
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <button
            className="w-full text-left px-4 py-3 bg-green-50 hover:bg-green-100 transition-colors font-medium"
            onClick={() => toggleFAQ(2)}
          >
            Can I use tap water for my plants?
          </button>
          {openIndex === 2 && (
            <div className="px-4 py-3 bg-white text-gray-700">
              Yes, but let the water sit for a few hours to remove chlorine. Some plants prefer filtered or rainwater.
            </div>
          )}
        </div>

        {/* Question 4 */}
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <button
            className="w-full text-left px-4 py-3 bg-green-50 hover:bg-green-100 transition-colors font-medium"
            onClick={() => toggleFAQ(3)}
          >
            How do I prevent pests on my plants?
          </button>
          {openIndex === 3 && (
            <div className="px-4 py-3 bg-white text-gray-700">
              Regularly inspect your plants, clean leaves, and use natural remedies like neem oil or insecticidal soap.
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default ExtraSection2;

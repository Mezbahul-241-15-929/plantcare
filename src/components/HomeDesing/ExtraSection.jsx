import React from "react";

const ExtraSection = () => {
  return (
    <div className="w-11/12 mx-auto my-10 space-y-16 ">
    <h1 className="text-4xl font-bold text-center mb-6">🌿 Tips for Plants</h1>
      {/* Section 1: Seasonal Plant Highlights */}
      <section className="bg-green-50 p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-green-700">
          🌤️ Seasonal Plant Highlights
        </h2>
        <p className="text-gray-700 mb-4">
          Discover plants that flourish during this season! These varieties are
          easy to maintain and bring fresh life to your garden while adapting
          perfectly to the current weather conditions.
        </p>

        <ul className="list-disc list-inside text-gray-600">
          <li>🌸 <strong>Peace Lily</strong> – Perfect for humid months and low light.</li>
          <li>🌿 <strong>Snake Plant</strong> – Thrives in both warm and cool environments.</li>
          <li>🌼 <strong>Aloe Vera</strong> – Loves sunlight and dry soil.</li>
        </ul>
      </section>

      {/* Section 2: Eco-Friendly Gardening Tips */}
      <section className="bg-emerald-50 p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-emerald-700">
          💧 Eco-Friendly Gardening Tips
        </h2>
        <p className="text-gray-700 mb-4">
          Gardening sustainably helps both your plants and the planet. Try these
          eco-friendly habits to reduce waste and create a greener garden.
        </p>

        <ul className="list-disc list-inside text-gray-600">
          <li>♻️ Use compost instead of chemical fertilizers.</li>
          <li>🌱 Collect rainwater for watering your plants.</li>
          <li>🐝 Grow native flowers to attract pollinators.</li>
        </ul>
      </section>


      
    </div>
  );
};

export default ExtraSection;

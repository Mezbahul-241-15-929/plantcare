import React from "react";
import { Link } from "react-router";
import Footer from "./Footer";

const NewsDetailsCard = ({ news }) => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
        {/* Thumbnail */}
        <img
          className="w-full h-[350px] object-cover rounded-xl shadow"
          src={news.thumbnail}
          alt={news.name}
        />

        <div className="flex flex-col justify-between shadow p-4 rounded-xl">
          {/* Title */}
          <h2 className="text-2xl font-semibold text-gray-800">{news.name}</h2>

          {/* Tech Category */}
          <p className="text-xl text-indigo-500 font-medium">{news.tech_category}</p>

          {/* Price & Frequency */}
          <p className="text-lg font-bold text-green-600 mt-2">
            ${news.price}{" "}
            <span className="text-sm text-gray-500">/{news.frequency}</span>
          </p>



          {/* Features */}
          {news.features && (
            <div className="mt-3">
              <h3 className="font-semibold text-gray-700">Features:</h3>
              <ul className="list-disc list-inside text-sm text-gray-600">
                {news.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}



          {/* Ratings */}
          {news.ratings && (
            <p className="mt-3 text-yellow-500 font-medium">
              ⭐ {news.ratings} / 5
            </p>
          )}

          {/* Back Button */}
          <Link className="btn text-white bg-indigo-600 mt-4" to={`/category/${news.category_id}`}>
            Back to Category
          </Link>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
  
        
        <p className=" shadow p-4 rounded-2xl"><h2 className="text-xl mb-2 font-bold text-center">Description</h2>{news.description}</p>
        {/* Subscription Benefits */}
        {news.subscription_benefits && (
          <div className="shadow p-4 rounded-2xl">
            <h3 className="text-xl mb-2 font-bold ">Subscription Benefits:</h3>
            <ul className="list-disc list-inside  text-gray-600">
              {news.subscription_benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsDetailsCard;

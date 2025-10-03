import React from "react";
import { FaEye, FaStar, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { id, name, thumbnail, tech_category, price, frequency } = news;

  return (

      <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Thumbnail */}
        <img
          src={thumbnail}
          alt={name}
          className="w-full h-48 object-cover"
        />

        {/* Card Content */}
        <div className="p-4">
          {/* Title */}
          <h2 className="text-lg font-semibold text-gray-800">{name}</h2>

          {/* Tech Category */}
          <p className="text-sm text-indigo-500 font-medium">{tech_category}</p>

          {/* Price & Frequency */}
          <p className="text-lg font-bold text-green-600 mt-2">
            ${price}{" "}
            <span className="text-sm text-gray-500">/{frequency}</span>
          </p>

          {/* View More Button */}
          <div className="mt-4">
            <Link
              to={`/news-details/${id}`}
              className="text-indigo-600 font-semibold cursor-pointer hover:underline"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
  );
};

export default NewsCard;
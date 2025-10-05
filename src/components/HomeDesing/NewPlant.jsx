import React from "react";
import { useLoaderData, Link } from "react-router";

const NewPlant = () => {
    const plants = useLoaderData();
    console.log(plants);

    
    const topPlants = Array.isArray(plants)
        ? plants
              .slice()
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .slice(0, 6)
        : [];

    return (
        <div className="w-11/12 mx-auto my-30">
            <h1 className="text-4xl font-bold text-center mb-10">🌿 New Plants</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
                {topPlants.map((plant) => (
                    <div
                        key={plant._id}
                        className="bg-green-50 border border-green-500 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform duration-300"
                    >
                        <img
                            src={plant.photo}
                            alt={plant.plantName}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4 flex flex-col justify-between h-full">
                            <div>
                                <h2 className="text-xl font-semibold mb-1">{plant.plantName}</h2>
                                <p className="text-sm text-gray-500 mb-2">
                                    Category: {plant.category}
                                </p>
                                <p className="text-sm text-green-600 font-medium">
                                    Care: {plant.careLevel}
                                </p>
                                <p className="text-sm text-blue-600">
                                    Health: {plant.healthStatus}
                                </p>
                                <div className="mt-4">
                                    <Link
                                        to={`/plant/${plant._id}`}
                                        className="block text-center text-white bg-green-600 py-2 rounded-lg hover:bg-green-700 transition-colors"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewPlant;

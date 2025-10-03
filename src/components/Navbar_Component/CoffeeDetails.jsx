import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useLoaderData } from "react-router";

const PlantDetailsPage = () => {
    // Load plant data from server
    const plant = useLoaderData();

    // Destructure all fields
    const {
        plantName,
        category,
        description,
        careLevel,
        wateringFrequency,
        lastWateredDate,
        nextWateredDate,
        healthStatus,
        userEmail,
        userName,
        photo,
    } = plant;

    return (
        <div>
            {/* Navbar */}
            <nav className="w-11/12 mx-auto my-5">
                <Navbar />
            </nav>

            {/* Main Plant Details */}
            <main className="w-11/12 mx-auto">
                <div className="flex justify-center">
                    <div className="w-full bg-white shadow-lg rounded-2xl overflow-hidden md:flex border-1 border-green-500">
                        {/* Plant Image */}
                        <div className="md:w-1/2 w-full flex justify-center items-center bg-gray-100">
                            <img
                                src={photo}
                                alt={plantName}
                                className="object-contain w-full max-h-64 md:max-h-80 p-2"
                            />
                        </div>


                        {/* Plant Details */}
                        <div className="md:w-1/2 w-full p-6 flex flex-col justify-between">
                            <div>
                                <h2 className="text-3xl font-bold mb-3">{plantName}</h2>
                                <p className="mb-2">
                                    <span className="font-semibold">Category:</span> {category}
                                </p>
                                <p className="mb-2">
                                    <span className="font-semibold">Description:</span> {description}
                                </p>
                                <p className="mb-2">
                                    <span className="font-semibold">Care Level:</span> {careLevel}
                                </p>
                                <p className="mb-2">
                                    <span className="font-semibold">Watering Frequency:</span> {wateringFrequency}
                                </p>
                                <p className="mb-2">
                                    <span className="font-semibold">Last Watered:</span> {lastWateredDate}
                                </p>
                                <p className="mb-2">
                                    <span className="font-semibold">Next Watering:</span> {nextWateredDate}
                                </p>
                                <p className="mb-2">
                                    <span className="font-semibold">Health Status:</span> {healthStatus}
                                </p>
                            </div>

                            {/* User Info */}
                            <div className="mt-4 border-t pt-3">
                                <p className="text-sm text-gray-600">
                                    Added by <span className="font-semibold">{userName}</span> ({userEmail})
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

            {/* Footer */}
            <footer className="w-11/12 mx-auto mt-10">
                <Footer />
            </footer>
        </div>
    );
};

export default PlantDetailsPage;

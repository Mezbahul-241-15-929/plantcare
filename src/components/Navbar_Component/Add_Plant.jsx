import React, { useContext, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router";
//import Swal from "sweetalert2";

const Add_Plant = () => {
    const { user } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        plantName: "",
        category: "",
        description: "",
        careLevel: "",
        wateringFrequency: "",
        lastWateredDate: "",
        nextWateredDate: "",
        healthStatus: "",
        userEmail: user?.email || "",
        userName: user?.displayName || "",
    });

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Plant Data Submitted:", formData);

        fetch("http://localhost:3000/plants", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    //   Swal.fire({
                    //     title: "Plant added successfully!",
                    //     icon: "success",
                    //     timer: 1500,
                    //     showConfirmButton: false,
                    //   });
                    alert("aaaa")
                    // Reset form
                    setFormData({
                        plantName: "",
                        category: "",
                        description: "",
                        careLevel: "",
                        wateringFrequency: "",
                        lastWateredDate: "",
                        nextWateredDate: "",
                        healthStatus: "",
                        photo: "", // <-- added
                        userEmail: user?.email || "",
                        userName: user?.displayName || "",
                    });
                }
            })
            .catch((err) => {
                console.error("Error adding plant:", err);
                // Swal.fire("Error", "Something went wrong!", "error");
            });
    };

    return (
        <div>
            {/* Navbar */}
            <nav className="w-11/12 mx-auto my-5">
                <Navbar />
            </nav>

            {/* Main Form */}
            {!user ? (
          // User not logged in
          <div className="text-center mt-20">
            <h2 className="text-2xl font-bold mb-4">You are not logged in!</h2>
            <p className="mb-6 text-gray-600">
              Please log in to view your plants.
            </p>
            <Link to="/auth/login">
              <button className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition">
                Go to Login
              </button>
            </Link>
          </div>
        ) :(
            <main className="w-11/12 mx-auto">
                <div className="flex justify-center items-center min-h-screen  p-6">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-lg border-1 border-green-500"
                    >
                        <h2 className="text-2xl font-bold mb-4 text-center">Add New Plant</h2>

                        {/* Plant Name */}
                        <div className="mb-3">
                            <label className="block mb-1 font-medium">Plant Name</label>
                            <input
                                type="text"
                                name="plantName"
                                value={formData.plantName}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg"
                                required
                            />
                        </div>

                        {/* Category */}
                        <div className="mb-3">
                            <label className="block mb-1 font-medium">Category</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg"
                                required
                            >
                                <option value="">Select Category</option>
                                <option value="succulent">Succulent</option>
                                <option value="fern">Fern</option>
                                <option value="flowering">Flowering</option>
                                <option value="herb">Herb</option>
                            </select>
                        </div>

                        {/* Description */}
                        <div className="mb-3">
                            <label className="block mb-1 font-medium">Description</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg"
                                rows="3"
                                required
                            ></textarea>
                        </div>

                        {/* Care Level */}
                        <div className="mb-3">
                            <label className="block mb-1 font-medium">Care Level</label>
                            <select
                                name="careLevel"
                                value={formData.careLevel}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg"
                                required
                            >
                                <option value="">Select Care Level</option>
                                <option value="easy">Easy</option>
                                <option value="moderate">Moderate</option>
                                <option value="difficult">Difficult</option>
                            </select>
                        </div>

                        {/* Watering Frequency */}
                        <div className="mb-3">
                            <label className="block mb-1 font-medium">
                                Watering Frequency (e.g., every 3 days)
                            </label>
                            <input
                                type="text"
                                name="wateringFrequency"
                                value={formData.wateringFrequency}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg"
                                required
                            />
                        </div>

                        {/* Last Watered Date */}
                        <div className="mb-3">
                            <label className="block mb-1 font-medium">Last Watered Date</label>
                            <input
                                type="date"
                                name="lastWateredDate"
                                value={formData.lastWateredDate}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg"
                            />
                        </div>

                        {/* Next Watering Date */}
                        <div className="mb-3">
                            <label className="block mb-1 font-medium">Next Watering Date</label>
                            <input
                                type="date"
                                name="nextWateredDate"
                                value={formData.nextWateredDate}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg"
                            />
                        </div>

                        {/* Health Status */}
                        <div className="mb-3">
                            <label className="block mb-1 font-medium">Health Status</label>
                            <input
                                type="text"
                                name="healthStatus"
                                value={formData.healthStatus}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg"
                            />
                        </div>

                        {/* Photo URL */}
                        <div className="mb-3">
                            <label className="block mb-1 font-medium">Photo URL</label>
                            <input
                                type="text"
                                name="photo"
                                value={formData.photo}
                                onChange={handleChange}
                                placeholder="Enter image URL"
                                className="w-full p-2 border rounded-lg"
                            />
                        </div>


                        {/* User Email */}
                        <div className="mb-3">
                            <label className="block mb-1 font-medium">User Email</label>
                            <input
                                type="email"
                                name="userEmail"
                                value={formData.userEmail}
                                readOnly
                                className="w-full p-2 border rounded-lg bg-gray-100"
                            />
                        </div>

                        {/* User Name */}
                        <div className="mb-3">
                            <label className="block mb-1 font-medium">User Name</label>
                            <input
                                type="text"
                                name="userName"
                                value={formData.userName}
                                readOnly
                                className="w-full p-2 border rounded-lg bg-gray-100"
                            />
                        </div>


                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                        >
                            Add Plant
                        </button>
                    </form>
                </div>
            </main>)}

            {/* Footer */}
            <footer className="w-11/12 mx-auto mt-20">
                <Footer />
            </footer>
        </div>
    );
};

export default Add_Plant;

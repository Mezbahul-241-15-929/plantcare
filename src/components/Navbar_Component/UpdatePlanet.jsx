import React from "react";
import { useLoaderData } from "react-router";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Swal from "sweetalert2"; // ✅ Import SweetAlert2

const UpdatePlant = () => {
  const {
    _id,
    plantName,
    category,
    description,
    careLevel,
    wateringFrequency,
    lastWateredDate,
    nextWateredDate,
    healthStatus,
    photo,
    userEmail,
    userName,
  } = useLoaderData();

  // ✅ handle update with SweetAlert2
  const handleUpdatePlant = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedPlant = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/plants/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedPlant),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          // ✅ SweetAlert success popup
          Swal.fire({
            title: "Updated!",
            text: "Plant updated successfully!",
            icon: "success",
            confirmButtonColor: "#3085d6",
            timer: 1500,
            showConfirmButton: false,
          });
        } else {
          Swal.fire({
            title: "No Changes!",
            text: "No updates were made.",
            icon: "info",
            confirmButtonColor: "#3085d6",
          });
        }
      })
      .catch(() =>
        Swal.fire({
          title: "Error!",
          text: "Something went wrong while updating the plant.",
          icon: "error",
          confirmButtonColor: "#d33",
        })
      );
  };

  return (
    <div className="w-11/12 mx-auto">
      {/* Navbar */}
      <nav className="my-5">
        <Navbar />
      </nav>

      {/* Main Form */}
      <main className="flex justify-center items-center min-h-screen p-6">
        <form
          onSubmit={handleUpdatePlant}
          className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-lg border border-green-500"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Update Plant</h2>

          {/* Plant Name */}
          <div className="mb-3">
            <label className="block mb-1 font-medium">Plant Name</label>
            <input
              type="text"
              name="plantName"
              defaultValue={plantName}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          {/* Category */}
          <div className="mb-3">
            <label className="block mb-1 font-medium">Category</label>
            <select
              name="category"
              defaultValue={category}
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
              defaultValue={description}
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
              defaultValue={careLevel}
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
              defaultValue={wateringFrequency}
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
              defaultValue={lastWateredDate}
              className="w-full p-2 border rounded-lg"
            />
          </div>

          {/* Next Watering Date */}
          <div className="mb-3">
            <label className="block mb-1 font-medium">Next Watered Date</label>
            <input
              type="date"
              name="nextWateredDate"
              defaultValue={nextWateredDate}
              className="w-full p-2 border rounded-lg"
            />
          </div>

          {/* Health Status */}
          <div className="mb-3">
            <label className="block mb-1 font-medium">Health Status</label>
            <input
              type="text"
              name="healthStatus"
              defaultValue={healthStatus}
              className="w-full p-2 border rounded-lg"
            />
          </div>

          {/* Photo URL */}
          <div className="mb-3">
            <label className="block mb-1 font-medium">Photo URL</label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              className="w-full p-2 border rounded-lg"
              placeholder="Enter image URL"
            />
          </div>

          {/* User Email */}
          <div className="mb-3">
            <label className="block mb-1 font-medium">User Email</label>
            <input
              type="email"
              name="userEmail"
              defaultValue={userEmail}
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
              defaultValue={userName}
              readOnly
              className="w-full p-2 border rounded-lg bg-gray-100"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Update Plant
          </button>
        </form>
      </main>

      {/* Footer */}
      <footer className="mt-20">
        <Footer />
      </footer>
    </div>
  );
};

export default UpdatePlant;

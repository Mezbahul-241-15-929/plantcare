import React, { useContext, useState, useEffect } from "react";
import { useLoaderData, Link } from "react-router";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { AuthContext } from "../../provider/AuthProvider";
import { GrFormView } from "react-icons/gr";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";

const MyPlants = () => {
  const initialPlants = useLoaderData();
  const [plants, setPlants] = useState([]);
  const { user } = useContext(AuthContext);

  // filter only the logged-in user's plants
  useEffect(() => {
    if (user) {
      const myPlants = initialPlants.filter(
        (plant) =>
          plant.userEmail === user?.email || plant.userName === user?.displayName
      );
      setPlants(myPlants);
    }
  }, [initialPlants, user]);

  // handle delete
  const handleDelete = (_id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this plant?"
    );
    if (!confirmDelete) return;

    fetch(`http://localhost:3000/plants/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Plant deleted successfully!");
          const remainingPlants = plants.filter((p) => p._id !== _id);
          setPlants(remainingPlants);
        } else {
          alert("Failed to delete the plant.");
        }
      })
      .catch(() => alert("Something went wrong while deleting!"));
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="w-11/12 mx-auto my-5">
        <Navbar />
      </nav>

      <main className="w-11/12 mx-auto">
        {!user ? (
          // User not logged in
          <div className="text-center mt-10">
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
        ) : (
          // User logged in
          <div className="border border-green-500 rounded-xl p-5">
            <h2 className="text-2xl font-bold text-center mb-5">
              My Total Plants: {plants.length}
            </h2>

            {plants.length === 0 ? (
              <p className="text-center text-gray-600 mt-10">
                You have not added any plants yet.
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Plant Info</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {plants.map((plant, index) => (
                      <tr key={plant._id}>
                        <th>{index + 1}</th>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              <div className="mask mask-squircle h-12 w-12">
                                <img src={plant.photo} alt={plant.plantName} />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">{plant.plantName}</div>
                              <div className="text-sm opacity-50">
                                Category: {plant.category}
                              </div>
                              <div className="text-sm opacity-70">
                                Health: {plant.healthStatus}
                              </div>
                              <div className="text-sm opacity-70">
                                Last watered: {plant.lastWateredDate}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="flex gap-2">
                          <Link to={`/plant/${plant._id}`}>
                            <button className="btn bg-green-600 p-1 rounded text-white">
                              <GrFormView size={25} />
                            </button>
                          </Link>

                          <Link to={`/updateplant/${plant._id}`}>
                            <button className="btn bg-black p-1 rounded text-white">
                              <CiEdit size={25} />
                            </button>
                          </Link>

                          <button
                            onClick={() => handleDelete(plant._id)}
                            className="btn bg-red-600 p-1 rounded text-white"
                          >
                            <MdDeleteForever size={25} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="w-11/12 mx-auto mt-25">
        <Footer />
      </footer>
    </div>
  );
};

export default MyPlants;

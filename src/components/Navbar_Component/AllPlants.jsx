import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Link, useLoaderData } from 'react-router';
import { GrFormView } from "react-icons/gr";

const AllPlants = () => {
    const initialPlants = useLoaderData();
    const [plants] = useState(initialPlants);
    // const [plants, setPlants] = useState(initialPlants);
    return (
        <div>
            {/* Navbar */}
            <nav className="w-11/12 mx-auto my-5">
                <Navbar />
            </nav>

            {/* Main Form */}
            <main className="w-11/12 mx-auto border-1 rounded-xl border-green-500 shadow px-5">
                <div className='mt-5'>
                    <h2 className="text-2xl font-bold text-center">Total Plants : {plants.length}</h2>

                    <div className="overflow-x-auto ">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Plant Info</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    plants.map((plant, index) => (
                                        <tr key={plant._id}>
                                            <th>{index + 1}</th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src={plant.photo}
                                                                alt="Plant" />
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
                                            <td>
                                                <Link >
                                                    <button className='btn bg-green-600 p-1 rounded text-white
                        '>< GrFormView size={25} /></button>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="w-11/12 mx-auto mt-25">
                <Footer />
            </footer>
        </div>
    );
};

export default AllPlants;
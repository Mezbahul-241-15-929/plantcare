import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router';

const PageNotfound = () => {
  return (
    <div>
      <nav className="w-11/12 mx-auto  my-5">
        <Navbar></Navbar>

        <div className='mt-5 rounded'>
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6">
          <h1 className="text-9xl font-extrabold text-indigo-600">404</h1>
          <h2 className="mt-4 text-3xl font-semibold text-gray-800">Page Not Found</h2>
          <p className="mt-2 text-gray-500 text-lg">
            Sorry, the page you are looking for doesn’t exist or has been moved.
          </p>

          <Link
            to="/"
            className="mt-6 px-6 py-3 text-white bg-indigo-600 rounded-2xl shadow-md hover:bg-indigo-700 transition duration-300"
          >
            Back to Home
          </Link>
        </div>
        </div>
      </nav>


    </div>
  );
};

export default PageNotfound;
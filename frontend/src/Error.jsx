// NotFound.js
import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed

const Error = () => {
  return (
    <div className="bg-gradient-to-r from-[#f0f7fc] via-[#e6e9f9] to-[#f0f7fc] min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <h1 className="text-6xl font-extrabold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Oops! Page Not Found</h2>
        <p className="text-gray-600 mb-6">The page you are looking for does not exist or has been moved.</p>
        <Link to="/" className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
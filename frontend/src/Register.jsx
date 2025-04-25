// Register.js
import React from 'react';
import { Link } from 'react-router-dom';


const Register = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
      <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 font-medium"><i className="fas fa-arrow-left mr-2"></i> Back to Home </Link>
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-gray-900">Create an Account</h1>
          <p className="mt-2 text-gray-600">Fill in the details below to register</p>
        </div>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-medium mb-1">Username</label>
            <input type="text" id="username" placeholder="Your username" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
            <input type="email" id="email" placeholder="your@email.com" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
            <input type="password" id="password" className="w-full border border-gray-300 rounded-md px-3 py-2 pr-16 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button type="button" className="absolute right-2 top-8 text-sm text-blue-600 hover:text-blue-800 font-semibold">Show</button>
          </div>
          <div className="mb-4 relative">
            <label htmlFor="confirm-password" className="block text-gray-700 font-medium mb-1">Confirm Password</label>
            <input type="password" id="confirm-password" className="w-full border border-gray-300 rounded-md px-3 py-2 pr-16 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button type="button" className="absolute right-2 top-8 text-sm text-blue-600 hover:text-blue-800 font-semibold">Show</button>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition">Register</button>
        </form>
        <p className="mt-6 text-center text-gray-600 text-sm">
          By continuing, you agree to our
          <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and
          <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default Register;
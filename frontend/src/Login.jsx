// Login.js
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <a href="index.html" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 font-medium">
          <i className="fas fa-arrow-left mr-2"></i> Back to Home
        </a>
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-gray-900">Welcome back</h1>
          <p className="mt-2 text-gray-600">Enter your credentials to access your account</p>
        </div>
        <div className="flex border border-gray-300 rounded-md overflow-hidden mb-6">
          <button className="flex-1 py-2 bg-blue-600 text-white font-semibold">Login</button>
          <Link to="/register" className="flex-1 py-2 text-gray-700 font-semibold hover:bg-gray-100 text-center">Register</Link>
        </div>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
            <input type="email" id="email" placeholder="your@email.com" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
            <input type="password" id="password" className="w-full border border-gray-300 rounded-md px-3 py-2 pr-16 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button type="button" className="absolute right-2 top-8 text-sm text-blue-600 hover:text-blue-800 font-semibold">Show</button>
          </div>
          <div className="mb-6 flex items-center">
            <input type="checkbox" id="remember" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
            <label htmlFor="remember" className="ml-2 block text-gray-700">Remember me</label>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition">Login</button>
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

export default Login;
import React from 'react';

const Admin = () => {
    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
            <div className="grid grid-cols-1 gap-4">
                <button className="bg-blue-500 text-white py-2 px-4 rounded">Manage Users</button>
                <button className="bg-green-500 text-white py-2 px-4 rounded">View Analytics</button>
                <button className="bg-red-500 text-white py-2 px-4 rounded">Settings</button>
            </div>
        </div>
    );
};

export default Admin;
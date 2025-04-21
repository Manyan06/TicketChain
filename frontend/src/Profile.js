import React from 'react';

const Profile = () => {
    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-4">User Profile</h1>
            <form className="space-y-4">
                <input type="text" placeholder="Username" className="border p-2 w-full rounded" />
                <input type="email" placeholder="Email" className="border p-2 w-full rounded" />
                <textarea placeholder="Bio" className="border p-2 w-full rounded"></textarea>
                <button className="bg-blue-500 text-white py-2 px-4 rounded">Update Profile</button>
            </form>
        </div>
    );
};

export default Profile;
import React from 'react';

const Contact = () => {
    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="border p-2 w-full rounded" />
                <input type="email" placeholder="Your Email" className="border p-2 w-full rounded" />
                <textarea placeholder="Your Message" className="border p-2 w-full rounded"></textarea>
                <button className="bg-blue-500 text-white py-2 px-4 rounded">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
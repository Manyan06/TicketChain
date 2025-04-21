// src/EventList.js
import React from 'react';

const EventList = ({ events }) => {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Event List</h2>
            {events.length > 0 ? (
                <ul className="space-y-4">
                    {events.map((event, index) => (
                        <li key={index} className="bg-white p-4 rounded shadow-md">
                            <h3 className="text-xl font-semibold">{event.eventName}</h3>
                            <p className="text-gray-600">Date: {event.eventDate}</p>
                            <p>{event.eventDescription}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No events found.</p>
            )}
        </div>
    );
}

export default EventList;
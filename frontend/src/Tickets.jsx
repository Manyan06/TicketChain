import React from 'react';
import 'tailwindcss/tailwind.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faMapMarkerAlt, faTicketAlt } from '@fortawesome/free-solid-svg-icons';

const EventCard = ({ event }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <img
        alt={event.imageAlt}
        className="w-full h-48 object-cover rounded-t-lg"
        src={event.imageSrc}
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full font-medium">
            {event.category}
          </span>
          <span className="text-blue-600 font-semibold text-sm">
            From ${event.price}
          </span>
        </div>
        <h3 className="font-bold text-gray-900 text-lg mb-2">
          {event.title}
        </h3>
        <ul className="text-gray-600 text-sm space-y-1 mb-4">
          <li className="flex items-center">
            <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-blue-600" />
            {event.date}
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faClock} className="mr-2 text-blue-600" />
            {event.time}
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-blue-600" />
            {event.location}
          </li>
        </ul>
        <div className="flex space-x-3">
          <button className="text-blue-600 border border-blue-600 rounded px-3 py-1.5 text-sm font-medium hover:bg-blue-50">
            View Details
          </button>
          <button className="bg-blue-600 text-white rounded px-4 py-1.5 text-sm font-medium hover:bg-blue-700 flex items-center justify-center">
            <FontAwesomeIcon icon={faTicketAlt} className="mr-2" />
            Buy Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const events = [
    {
      imageSrc: 'https://storage.googleapis.com/a1aa/image/182be060-f805-4df9-4319-2986b9c0719e.jpg',
      imageAlt: 'Modern building with white facade and orange window accents under a clear sky',
      category: 'Technology',
      price: 199,
      title: 'Tech Innovation Summit 2023',
      date: 'June 15, 2023',
      time: '9:00 AM - 6:00 PM',
      location: 'San Francisco, CA',
    },
    {
      imageSrc: 'https://storage.googleapis.com/a1aa/image/b5e38d3a-32dd-4819-46bd-e6bfc558e9ea.jpg',
      imageAlt: 'Starry night sky visible through curved rock formations with dark shadows',
      category: 'Music',
      price: 299,
      title: 'Summer Music Festival',
      date: 'July 21-23, 2023',
      time: '12:00 PM - 11:00 PM',
      location: 'Coastal Park, Miami',
    },
  ];

  return (
    <div className="bg-white p-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default App;













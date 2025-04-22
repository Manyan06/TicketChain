import React from 'react';
import Chat from './components/Chat';

export default function App() {
  // Function to share an event on Twitter
  const shareEvent = (eventId) => {
    const url = `https://yourapp.com/events/${eventId}`;
    const text = 'Check out this event!';
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };

  // Example event ID for demonstration purposes
  const eventId = '12345'; // Replace with actual event ID as needed

  return (
    <div>
      <header className="hero-section">
        <nav className="navbar">
          <div className="nav-links">
            {/* Navigation links can be added here */}
          </div>
        </nav>
        <div className="hero-text">
          <h1>Event Ticketing Assistant</h1>
          <div className="hero-buttons">
            {/* Hero buttons can be added here */}
            <button className="share-button" onClick={() => shareEvent(eventId)}>
              Share on Twitter
            </button>
          </div>
        </div>
      </header>

      <div className="pay-button">
        {/* Payment button can be added here */}
      </div>

      {/* Include the Chat component here */}
      <Chat />

      <footer>
        <div className="footer-links">
          {/* Footer links can be added here */}
        </div>
      </footer>
    </div>
  );
}
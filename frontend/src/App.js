import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


import Admin from './Admin';
import Profile from './Profile';
import FAQ from './FAQ';
import Contact from './Contact';
import CreateEvent from './CreateEvent';
import EventList from './EventList';


export default function App() {
  return (
    <Router>
      <div>
        <header className="hero-section">
          <nav className="navbar">
            <div className="nav-links">
              {/* Navigation links can be added here */}
            </div>
          </nav>
          <div className="hero-text">
            <div className="hero-buttons">
              {/* Hero buttons can be added here */}
            </div>
          </div>
        </header>

        <div className="pay-button">
          {/* Payment button can be added here */}
        </div>

        <Routes>
          <Route path="/" element={<index />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/create-event" element={<CreateEvent />} /> 
          <Route path="/event-list" element={<EventList />} /> 
        </Routes>        
        

        <footer>
          <div className="footer-links">
            {/* Footer links can be added here */}
          </div>
        </footer>
      </div>
    </Router>
  );
}

// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-[#f0f7fc] via-[#e6e9f9] to-[#f0f7fc] min-h-screen">
      <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div id="root"></div>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-lg">T</div>
          <span className="font-semibold text-lg text-gray-900 select-none">TicketChain</span>
        </div>
        <div className="relative max-w-md">
          <input type="text" placeholder="Search..." className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <button className="absolute right-0 top-0 mt-2 mr-2 text-gray-500 hover:text-indigo-600">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-900">
        <Link className="hover:underline" to="/contact">Features</Link>
        <Link className="hover:underline" to="/contact">How It Works</Link>
        <Link className="hover:underline" to="/contact">Pricing</Link>
        <Link className="hover:underline" to="/contact">Support</Link>
        <Link className="hover:underline" to="/contact">Contact</Link>
        </nav>
        <Link className="text-sm text-gray-900 hover:underline" to="/login">Log in</Link>
        <Link className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-indigo-400 text-white text-sm font-semibold hover:from-indigo-600 hover:to-indigo-500 transition" to="/register">Sign up</Link>
      </header>
      
      <main className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20">
        <section className="flex flex-col max-w-xl w-full space-y-6">
          <span className="inline-flex items-center gap-1 text-indigo-600 text-xs font-semibold bg-indigo-100 rounded-full px-3 py-1 w-max select-none">
            <i className="fas fa-bolt"></i>
            Powered by Groq AI
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Get <span className="text-indigo-600">Real-Time</span> Event <br/> Tickets with AI
          </h1>
          <p className="text-gray-600 text-base max-w-md">
            Our AI-powered ticketing assistant helps you discover, purchase, and store event tickets and collectible NFTs in real-time.
          </p>
          <div className="flex space-x-4">
          <Link 
  to="/tickets" 
  className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold rounded-md flex items-center gap-2 hover:from-indigo-700 hover:to-indigo-600 transition"
>
  Get Started <i className="fas fa-arrow-right"></i>
</Link>
            <button className="px-5 py-3 bg-gray-100 text-gray-900 font-semibold rounded-md hover:bg-gray-200 transition">Learn More</button>
          </div>
          <div className="flex space-x-6 text-gray-700 text-sm select-none">
            <div className="flex items-center gap-2">
              <i className="far fa-clock text-indigo-600"></i>
              <span>Real-time updates</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-lock text-indigo-600"></i>
              <span>Secure blockchain transactions</span>
            </div>
          </div>
        </section>
        <section className="relative w-full max-w-lg min-h-[400px] md:min-h-[480px]">
          <img alt="Illustr ation of TicketVerse app interface with a browser window and ticketing UI" className="absolute inset-0 w-full h-full object-contain rounded-xl opacity-80" height="480" src="https://storage.googleapis.com/a1aa/image/9e798443-abee-4e06-e5c1-be6633c75ad5.jpg" width="480"/>
          <img alt="Background blur layer with soft green and blue hues behind the app interface" className="absolute -inset-6 rounded-xl opacity-40" height="560" src="https://storage.googleapis.com/a1aa/image/99796190-e4fb-4c44-5f44-c149c83d8c56.jpg" width="560"/>
        </section>
      </main>
      <Link
  to="/chatbot"
  className="w-16 h-16 rounded-full bg-indigo-500 border border-black flex items-center justify-center text-white font-bold text-xl fixed bottom-0 right-0 mb-8 mr-8 z-50">
  bot
</Link>


      <div className="">
        <footer className="bg-[#0B1229] text-[#A0AEC0]">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-10 sm:gap-0 border-b border-[#1A233A] pb-8">
            <div className="flex flex-col gap-4 sm:w-72">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-[#5A6FFF] flex items-center justify-center text-white font-semibold text-lg">T</div>
                <span className="text-white font-semibold text-base leading-5">TicketChain</span>
              </div>
              <p className="text-sm leading-5 max-w-[280px]">The future of event ticketing powered by AI and blockchain technology.</p>
              <div className="flex gap-4 text-[#718096] text-lg">
                <a href="#" aria-label="Twitter" className="hover:text-[#5A6FFF] transition-colors duration-200"><i className="fab fa-twitter"></i></a>
                <a href="#" aria-label="GitHub" className="hover:text-[#5A6FFF] transition-colors duration-200"><i className="fab fa-github"></i></a>
                <a href="#" aria-label="Instagram" className="hover:text-[#5A6FFF] transition-colors duration-200"><i className="fab fa-instagram"></i></a>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-10 sm:gap-20">
              <div>
                <h3 className="text-white font-semibold mb-4 text-sm leading-5">Product</h3>
                <ul className="space-y-2 text-sm leading-5">
                  <li><a href="#" className="text-[#718096] hover:text-[#5A6FFF] font-semibold">Features</a></li>
                  <li><a href="#" className="text-[#718096] hover:text-[#5A6FFF] font-semibold">How It Works</a></li>
                  <li><a href="/Contact" className="text-[#718096] hover:text-[#5A6FFF]">Pricing</a></li>
                  <li><a href="/FAQ" className="text-[#718096] hover:text-[#5A6FFF]">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4 text-sm leading-5">Resources</h3>
                <ul className="space-y-2 text-sm leading-5">
                  <li><a href="#" className="text-[#718096] hover:text-[#5A6FFF]">Documentation</a></li>
                  <li><a href="#" className="text-[#718096] hover:text-[#5A6FFF]">API Reference</a></li>
                  <li><a href="#" className="text-[#718096] hover:text-[#5A6FFF]">Blog</a></li>
                  <li><a href="#" className="text-[#718096] hover:text-[#5A6FFF]">Community</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4 text-sm leading-5">Company</h3>
                <ul className="space-y-2 text-sm leading-5">
                  <li><a href="#" className="text-[#718096] hover:text-[#5A6FFF]">About Us</a></li>
                  <li><a href="#" className="text-[#718096] hover:text-[#5A6FFF]">Careers</a></li>
                  <li><a href="#" className="text-[#718096] hover:text-[#5A 6FFF]">Privacy Policy</a></li>
                  <li><a href="#" className="text-[#718096] hover:text-[#5A6FFF]">Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-center text-xs text-[#718096] mt-8 select-none">© 2025 TicketChain. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
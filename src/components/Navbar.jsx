// src/components/Navbar.jsx

import React, { useState } from 'react';
// Import the Link component for routing
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to close the menu on link click
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-gray-800/60 backdrop-blur sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <Link to="/" className="flex items-center gap-3">
            <img
              src="\src\assets\logos.png"
              alt="UKESPORTS HUB"
              className="h-12 w-12 rounded-md object-cover"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/80' }}
            />
            <div>
              <div className="text-lg font-bold text-white">UK ESPORTS HUB</div>
              <div className="text-xs text-gray-300 -mt-1">Uttarakhand Esports Community</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-200 ">
            <a href="#home" className="hover:text-[#7c3aed] transition duration-200">Home</a>
            <a href="#hero" className="hover:text-[#7c3aed] transition duration-200">About Us</a>
            <a href="#tournaments" className="hover:text-[#7c3aed] transition duration-200">Upcmoing Events</a>
            <a href="#contact" className="hover:text-[#7c3aed] transition duration-200">Contact</a>

            <Link to="/new-page" className="hover:text-[#7c3aed] transition duration-200">
              More..
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/Forms"
              className="hidden md:inline-block bg-[#7c3aed] hover:bg-[#6b21c6] text-white px-4 py-2 rounded-lg text-sm font-semibold"
            >
              Register Now
            </Link>
            <button
              id="mobileBtn"
              className="md:hidden p-2 rounded-md hover:bg-gray-700/30"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>


      <div id="mobileMenu" className={`md:hidden ${!isMobileMenuOpen ? 'hidden' : ''}`}>
        <div className="px-4 pb-4 space-y-2">
          <a href="#hero" className="block py-2 hover:text-[#7c3aed] transition duration-200" onClick={handleLinkClick}>About us</a>
          <a href="#tournaments" className="block py-2 hover:text-[#7c3aed] transition duration-200" onClick={handleLinkClick}>Upcomming Events</a>
          <a href="#contact" className="block py-2 hover:text-[#7c3aed] transition duration-200" onClick={handleLinkClick}>Contact</a>
          <Link
            to="/new-page"
            className="block py-2 hover:text-[#7c3aed] transition duration-200"
            onClick={handleLinkClick} 
          >
            More..
          </Link>
          <Link
            to="/Forms"
            className="block py-2 hover:text-[#7c3aed] transition duration-200"
            onClick={handleLinkClick} 
          >
            Register Now
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
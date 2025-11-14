import React, { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const placeholderImageUrl = "/logos/whitelogo.png";

  return (
    <header className="bg-gray-800/60 backdrop-blur sticky top-0 z-40 text-gray-200 font-inter">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-3" onClick={handleLinkClick}>
            <img
              src={placeholderImageUrl}
              alt="UK ESPORTS HUB Logo"
              className="h-12 w-12 rounded-lg object-cover"
              onError={(e) => { e.target.src = placeholderImageUrl }}
            />
            <div>
              <div className="text-lg font-bold text-white">UK ESPORTS HUB</div>
              <div className="text-xs text-gray-300 -mt-1">Uttarakhand Esports Community</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" className="hover:text-[#7c3aed] transition duration-200" onClick={handleLinkClick}>Home</a>
            <div className="relative">
              <button
                type="button"
                className={`flex items-center hover:text-[#7c3aed] transition duration-200 font-semibold ${isDropdownOpen ? 'text-[#7c3aed]' : ''}`}
                onClick={toggleDropdown}
                aria-expanded={isDropdownOpen}
              >
                About Us
                <svg className={`ml-1 w-4 h-4 transform transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-3 w-48 rounded-lg shadow-2xl bg-gray-700/95 backdrop-blur ring-1 ring-white/10 focus:outline-none z-50 origin-top-right animate-fade-in-down">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <a
                      href="#tournaments"
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#7c3aed] hover:text-white rounded-md mx-1 transition-colors"
                      onClick={handleLinkClick}
                    >
                      Upcoming Events
                    </a>
                     <a
                      href="#team"
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#7c3aed] hover:text-white rounded-md mx-1 transition-colors"
                      onClick={handleLinkClick}
                    >
                      Our Team
                    </a>
                    <a
                      href="#contact"
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#7c3aed] hover:text-white rounded-md mx-1 transition-colors"
                      onClick={handleLinkClick}
                    >
                      Contact
                    </a>
                  </div>
                </div>
              )}
            </div>
            <a
                  href="/new-page"
                  className="block py-2 hover:text-[#7c3aed] transition duration-200"
                  onClick={handleLinkClick}
                >
                  Blog
                </a>
                  <a
                  href=""
                  className="block py-2 hover:text-[#7c3aed] transition duration-200"
                  onClick={handleLinkClick}
                >
                  Gallery
                </a>
                  <a
                  href=""
                  className="block py-2 hover:text-[#7c3aed] transition duration-200"
                  onClick={handleLinkClick}
                >
                  Sponsers
                </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/Forms"
              className="hidden md:inline-block bg-[#7c3aed] hover:bg-[#6b21c6] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-lg shadow-[#7c3aed]/50"
              onClick={handleLinkClick}
            >
              Register Now
            </a>
            <button
              id="mobileBtn"
              className="md:hidden p-2 rounded-md hover:bg-gray-700/30 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div id="mobileMenu" className={`md:hidden ${!isMobileMenuOpen ? 'hidden' : ''} text-gray-200 bg-gray-800/80`}>
        <div className="px-4 pb-4 space-y-2">
          <a href="#home" className="block py-2 hover:text-[#7c3aed] transition duration-200" onClick={handleLinkClick}>Home</a>

          <div className="border-t border-gray-700 pt-2">
            <button
              type="button"
              className="flex items-center justify-between w-full py-2 hover:text-[#7c3aed] transition duration-200 font-semibold"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-expanded={isDropdownOpen}
            >
              About Us
              <svg className={`ml-1 w-4 h-4 transform transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>

            {isDropdownOpen && (
              <div className="pl-4 border-l border-[#7c3aed] ml-2 space-y-1 py-1">
                <a
                  href="#tournaments"
                  className="block py-1 text-sm hover:text-[#7c3aed] transition duration-200"
                  onClick={handleLinkClick}
                >
                  Upcoming Events
                </a>
                <a
                  href="#team"
                  className="block py-1 text-sm hover:text-[#7c3aed] transition duration-200"
                  onClick={handleLinkClick}
                >
                  Our Team
                </a>
                 <a
                  href="#contact"
                  className="block py-1 text-sm hover:text-[#7c3aed] transition duration-200"
                  onClick={handleLinkClick}
                >
                  Contact
                </a>
                 <a
                  href="/new-page"
                  className="block py-1 text-sm hover:text-[#7c3aed] transition duration-200"
                  onClick={handleLinkClick}
                >
                  All Pages
                </a>
              </div>
            )}
             <div className="border-t border-gray-700 pt-2"></div>
             <a
                  href="/new-page"
                  className="block py-2 hover:text-[#7c3aed] transition duration-200"
                  onClick={handleLinkClick}
                >
                  Blog
                </a>
                  <div className="border-t border-gray-700 pt-2"></div>
            <a
                  href=""
                  className="block py-2 hover:text-[#7c3aed] transition duration-200"
                  onClick={handleLinkClick}
                >
                  Gallery
                </a>
          </div>

          <a
            href="/Forms"
            className="block w-full text-center bg-[#7c3aed] hover:bg-[#6b21c6] text-white px-4 py-2 rounded-lg text-sm font-semibold mt-4 transition-colors shadow-lg shadow-[#7c3aed]/50"
            onClick={handleLinkClick}
          >
            Register Now
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

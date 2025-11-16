import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const animationStyles = `
@keyframes fadeInDown {
from { opacity: 0; transform: translateY(-10px); }
 to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-down {
 animation: fadeInDown 0.2s ease-out forwards;
}
`;

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEventOpen, setIsEventOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  const headerRef = useRef(null);

  const closeDesktopDropdowns = () => {
    setIsEventOpen(false);
    setIsAboutOpen(false);
    setIsBlogOpen(false);
  };

  const closeAllDropdowns = () => {
    setIsEventOpen(false);
    setIsAboutOpen(false);
    setIsBlogOpen(false);
  };

  const getNavbarHeight = useCallback(() => {
    return headerRef.current ? headerRef.current.offsetHeight : 64;
  }, []);

  const scrollWithOffset = useCallback((el) => {
    const navbarHeight = getNavbarHeight();
    const yOffset = -navbarHeight;

    // Using 350ms delay for scroll to happen *after* the mobile menu's 200ms close animation + buffer.
    const scrollDelay = isMobileMenuOpen ? 350 : 50;

    const scroll = () => {
      const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: yCoordinate + yOffset,
        behavior: 'smooth'
      });
    };

    setTimeout(scroll, scrollDelay);
  }, [getNavbarHeight, isMobileMenuOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    closeDesktopDropdowns();
  };

  // Apply micro-delay (setTimeout(fn, 0)) to dropdown toggles for immediate mobile responsiveness
  const toggleEventDropdown = () => {
    setTimeout(() => {
      setIsAboutOpen(false);
      setIsBlogOpen(false);
      setIsEventOpen(prev => !prev);
    }, 0);
  };

  const toggleAboutDropdown = () => {
    setTimeout(() => {
      setIsEventOpen(false);
      setIsBlogOpen(false);
      setIsAboutOpen(prev => !prev);
    }, 0);
  };

  const toggleBlogDropdown = () => {
    setTimeout(() => {
      setIsEventOpen(false);
      setIsAboutOpen(false);
      setIsBlogOpen(prev => !prev);
    }, 0);
  };

  useEffect(() => {
    function handleOutsideClick(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        closeAllDropdowns();
        setIsMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [headerRef]);

  const placeholderImageUrl = "/logos/whitelogo.png";

  return (
    <>
      <style>{animationStyles}</style>
      <header
        className="bg-gray-800/80 backdrop-blur sticky top-0 z-40 text-gray-200 font-inter border-b border-gray-700/50 shadow-xl"
        ref={headerRef}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <HashLink to="/#home" className="flex items-center gap-3"
              scroll={scrollWithOffset}
              onClick={handleLinkClick}>
              <img
                src={placeholderImageUrl}
                alt="UK ESPORTS HUB Logo"
                className="h-12 w-12 rounded-full "
                onError={(e) => { e.target.src = placeholderImageUrl }}
              />
              <div>
                <div className="text-lg font-extrabold text-white tracking-wider">UK ESPORTS HUB</div>
                <div className="text-xs text-gray-400 -mt-1 font-light hidden sm:block">Uttarakhand Esports Community</div>
              </div>
            </HashLink>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              <HashLink to="/#home" className="hover:text-[#7c3aed] transition duration-200 font-semibold"
                scroll={scrollWithOffset}
                onClick={handleLinkClick}>Home</HashLink>

              <div className="relative">
                <button
                  type="button"
                  className={` flex items-center hover:text-[#7c3aed] transition duration-200 font-semibold ${isEventOpen ? 'text-[#7c3aed]' : ''}`}
                  onClick={toggleEventDropdown}
                  aria-expanded={isEventOpen}
                >
                  Event
                  <svg className={`ml-1 w-4 h-4 transform transition-transform ${isEventOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>

                {isEventOpen && (
                  <div className="absolute right-0 mt-3 w-48 rounded-lg shadow-2xl bg-gray-700/95 backdrop-blur ring-1 ring-white/10 focus:outline-none z-50 origin-top-right animate-fade-in-down">
                    <HashLink
                      to="/#tournaments"
                      scroll={scrollWithOffset}
                      className="block px-4 py-2 text-sm text-gray-200  hover:text-[#7c3aed] rounded-md mx-1 transition-colors"
                      onClick={handleLinkClick}
                    >
                      Upcoming / Latest Events
                    </HashLink>
                    <HashLink
                      to="/#tournaments"
                      scroll={scrollWithOffset}
                      className="block px-4 py-2 text-sm text-gray-200 hover:text-[#7c3aed] rounded-md mx-1 transition-colors"
                      onClick={handleLinkClick}
                    >
                      Past Events
                    </HashLink>
                    <HashLink
                      to=""
                      scroll={scrollWithOffset}
                      className="block px-4 py-2 text-sm text-gray-200 hover:text-[#7c3aed] rounded-md mx-1 transition-colors"
                      onClick={handleLinkClick}
                    >
                      Events Gallery
                    </HashLink>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  type="button"
                  className={`flex items-center hover:text-[#7c3aed] transition duration-200 font-semibold ${isAboutOpen ? 'text-[#7c3aed]' : ''}`}
                  onClick={toggleAboutDropdown}
                  aria-expanded={isAboutOpen}
                >
                  About Us
                  <svg className={`ml-1 w-4 h-4 transform transition-transform ${isAboutOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>

                {isAboutOpen && (
                  <div className="absolute right-0 mt-3 w-48 rounded-lg shadow-2xl bg-gray-700/95 backdrop-blur ring-1 ring-white/10 focus:outline-none z-50 origin-top-right animate-fade-in-down">
                    <div className=" ml-2 space-y-1 py-1 animate-fade-in-down">
                      <HashLink
                        to="/#hero"
                        scroll={scrollWithOffset}
                        className="block px-4 py-2 text-sm text-gray-200 hover:text-[#7c3aed] rounded-md mx-1 transition-colors"
                        onClick={handleLinkClick}
                      >
                        Who We Are
                      </HashLink>
                      <HashLink
                        to="/#team"
                        scroll={scrollWithOffset}
                        className="block px-4 py-2 text-sm text-gray-200 hover:text-[#7c3aed] rounded-md mx-1 transition-colors"
                        onClick={handleLinkClick}
                      >
                        Our Team
                      </HashLink>
                      <HashLink
                        to="/#ambassador"
                        scroll={scrollWithOffset}
                        className="block px-4 py-2 text-sm text-gray-200 hover:text-[#7c3aed] rounded-md mx-1 transition-colors"
                        onClick={handleLinkClick}
                      >
                        Our Ambasadors
                      </HashLink>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  type="button"
                  className={`flex items-center hover:text-[#7c3aed] transition duration-200 font-semibold ${isBlogOpen ? 'text-[#7c3aed]' : ''}`}
                  onClick={toggleBlogDropdown}
                  aria-expanded={isBlogOpen}
                >
                  Blog
                  <svg className={`ml-1 w-4 h-4 transform transition-transform ${isBlogOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>

                {isBlogOpen && (
                  <div className="absolute right-0 mt-3 w-48 rounded-lg shadow-2xl bg-gray-700/95 backdrop-blur ring-1 ring-white/10 focus:outline-none z-50 origin-top-right animate-fade-in-down">
                    <HashLink
                      to="/blog#news"
                      scroll={scrollWithOffset}
                      className="block px-4 py-2 text-sm text-gray-200 hover:text-[#7c3aed] rounded-md mx-1 transition-colors"
                      onClick={handleLinkClick}
                    >
                      Latest News
                    </HashLink>
                    <HashLink
                      to="/blog#update"
                      scroll={scrollWithOffset}
                      className="block px-4 py-2 text-sm text-gray-200 hover:text-[#7c3aed] rounded-md mx-1 transition-colors"
                      onClick={handleLinkClick}
                    >
                      Updates
                    </HashLink>
                  </div>
                )}
              </div>
              <HashLink
                to="/sponsers"
                scroll={scrollWithOffset}
                className="block text-sm text-gray-200 hover:text-[#7c3aed] rounded-md mx-1 transition-colors"
                onClick={handleLinkClick}
              >
                Our Sponsers
              </HashLink>
              <HashLink
                to="/#contact"
                scroll={scrollWithOffset}
                className="block text-sm text-gray-200 hover:text-[#7c3aed] rounded-md mx-1 transition-colors"
                onClick={handleLinkClick}
              >
                Contact
              </HashLink>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="/Forms"
                className="hidden md:inline-block bg-[#7c3aed] hover:bg-[#6b21c6] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-lg shadow-[#7c3aed]/50 transform hover:scale-[1.03] duration-150"
                onClick={handleLinkClick}
              >
                Register Now
              </a>
              <button
                id="mobileBtn"
                className="md:hidden p-2 rounded-md hover:bg-gray-700/30 text-white transition-colors"
                // Crucial fix: micro-delay ensures immediate click response on mobile
                onClick={() => setTimeout(() => setIsMobileMenuOpen(prev => !prev), 0)}
                aria-label="Toggle mobile menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          id="mobileMenu"
          // FIX: Changed duration-300 to duration-200 for faster/smoother feel
          className={`md:hidden overflow-hidden transition-max-height duration-200 ease-in-out ${isMobileMenuOpen ? 'max-h-screen border-t border-gray-700/50' : 'max-h-0'}`}
          style={{ maxHeight: isMobileMenuOpen ? '500px' : '0' }}
        >
          <div className="px-4 pb-4 pt-2 space-y-2 bg-gray-800/90 text-gray-200">
            <HashLink to="/#home" className="block py-2 hover:text-[#7c3aed] transition duration-200" scroll={scrollWithOffset} onClick={handleLinkClick}>Home</HashLink>

            {/* Mobile Event Dropdown */}
            <div className="border-t border-gray-700 pt-2">
              <button
                type="button"
                className="flex items-center justify-between w-full py-2 hover:text-[#7c3aed] transition duration-200 font-semibold"
                onClick={toggleEventDropdown}
                aria-expanded={isEventOpen}
              >
                Event
                <svg className={`ml-1 w-4 h-4 transform transition-transform ${isEventOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>

              {isEventOpen && (
                <div className="pl-4 border-l border-[#7c3aed] ml-2 space-y-1 py-1 animate-fade-in-down">
                  <HashLink
                    to="/#tournaments"
                    scroll={scrollWithOffset}
                    className="block py-1 text-sm hover:text-[#7c3aed] transition duration-200"
                    onClick={handleLinkClick}
                  >
                    Upcoming / Latest Events
                  </HashLink>
                  <HashLink
                    href="/#tournaments"
                    scroll={scrollWithOffset}
                    className="block py-1 text-sm hover:text-[#7c3aed] transition duration-200"
                    onClick={handleLinkClick}
                  >
                    Past Events
                  </HashLink>
                  <HashLink
                    to=""
                    scroll={scrollWithOffset}
                    className="block py-1 text-sm hover:text-[#7c3aed] transition duration-200"
                    onClick={handleLinkClick}
                  >
                    Events Gallery
                  </HashLink>
                </div>
              )}
            </div>

            {/* Mobile About Us Dropdown */}
            <div className="border-t border-gray-700 pt-2">
              <button
                type="button"
                className="flex items-center justify-between w-full py-2 hover:text-[#7c3aed] transition duration-200 font-semibold"
                onClick={toggleAboutDropdown}
                aria-expanded={isAboutOpen}
              >
                About Us
                <svg className={`ml-1 w-4 h-4 transform transition-transform ${isAboutOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>

              {isAboutOpen && (
                <div className="pl-4 border-l border-[#7c3aed] ml-2 space-y-1 py-1 animate-fade-in-down">
                  <HashLink
                    to="/#hero"
                    scroll={scrollWithOffset}
                    className="block py-1 text-sm hover:text-[#7c3aed] transition duration-200"
                    onClick={handleLinkClick}
                  >
                    Who We Are
                  </HashLink>
                  <HashLink
                    to="/#team"
                    scroll={scrollWithOffset}
                    className="block py-1 text-sm hover:text-[#7c3aed] transition duration-200"
                    onClick={handleLinkClick}
                  >
                    Our Team
                  </HashLink>
                  <HashLink
                    to="/#ambassador"
                    scroll={scrollWithOffset}
                    className="block py-1 text-sm hover:text-[#7c3aed] transition duration-200"
                    onClick={handleLinkClick}
                  >
                    Our Ambasadors
                  </HashLink>
                </div>
              )}
            </div>

            {/* Mobile Blog Dropdown */}
            <div className="border-t border-gray-700 pt-2">
              <button
                type="button"
                className="flex items-center justify-between w-full py-2 hover:text-[#7c3aed] transition duration-200 font-semibold"
                onClick={toggleBlogDropdown}
                aria-expanded={isBlogOpen}
              >
                Blog
                <svg className={`ml-1 w-4 h-4 transform transition-transform ${isBlogOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>

              {isBlogOpen && (
                <div className="pl-4 border-l border-[#7c3aed] ml-2 space-y-1 py-1 animate-fade-in-down">
                  <HashLink
                    to="/blog#news"
                    scroll={scrollWithOffset}
                    className="block py-1 text-sm hover:text-[#7c3aed] transition duration-200"
                    onClick={handleLinkClick}
                  >
                    Latest News
                  </HashLink>
                  <HashLink
                    to="/blog#update"
                    scroll={scrollWithOffset}
                    className="block py-1 text-sm hover:text-[#7c3aed] transition duration-200"
                    onClick={handleLinkClick}
                  >
                    Updates
                  </HashLink>
                </div>
              )}
            </div>

            <a href="/Sponsers" className="block py-2 hover:text-[#7c3aed] transition duration-200" onClick={handleLinkClick}>Our Sponsers</a>

            <HashLink to="/#contact" className="block py-2 hover:text-[#7c3aed] transition duration-200" scroll={scrollWithOffset} onClick={handleLinkClick}>Contact</HashLink>
            <a
              href="/Forms"
              className="block w-full text-center bg-[#7c3aed] hover:bg-[#6b21c6] text-white px-4 py-2 rounded-lg text-sm font-semibold mt-4 transition-colors shadow-lg shadow-[#7c3aed]/50 border-t border-gray-700/50 pt-4"
              onClick={handleLinkClick}
            >
              Register Now
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;

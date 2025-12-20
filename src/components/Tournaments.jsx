import React, { useState, useEffect, useRef, useCallback } from 'react';

const tournamentData = [
  {
    id: 1,
    title: "Campus Connect Uttrakhand",
    details: "Jan Mid 2026 • LAN Qualifiers • Prizepool Upto: ₹1,00,000+ • 12 Universities • Diamonds: 250,000+",
    src: "/Banner/UEF.webp",
    status: "Upcoming Event",
    statusColor: "border-green-600",
    themeColor: "purple",
    isHighlighted: true,
  },
  {
    id: 2,
    title: "Battel Era 2.0",
    details: "13 Nov - 14 Nov 2025 • Offline Qualifiers • Offline Finals • Prizepool Upto: ₹2,00,000/-",
    src: "/Banner/Battle.webp",
    status: "Event Recap",
    statusColor: "border-purple-600",
    themeColor: "cyan",
    isHighlighted: false,
  },
  {
    id: 3,
    title: "Endgame 2025 E-Sports Event",
    details: "06 Nov - 07 Nov • Offline Qualifiers • Offline Finals • Prizepool Upto: ₹1,00,000/-",
    src: "/Banner/endgame.webp",
    status: "Event Recap",
    statusColor: "border-purple-600",
    themeColor: "cyan",
    isHighlighted: false,
  },
  {
    id: 4,
    title: "Free Fire Max Nova Clash",
    details: "27 Sep 2025 • Offline • Uttarakhand",
    src: "/Banner/Free Fire Max Nova Clash.webp",
    status: "Event Recap",
    statusColor: "border-purple-600",
    themeColor: "pink",
    isHighlighted: false,
  },
  {
    id: 5,
    title: "Domination 2025",
    details: "25 - 27 Aug 2025 • Offline • Prizepool Upto: ₹1,00,000/- • Uttarakhand",
    src: "/Banner/Domination.webp",
    status: "Event Recap",
    statusColor: "border-purple-600",
    themeColor: "pink",
    isHighlighted: false,
  },
  {
    id: 6,
    title: "Summer Carnival 2025",
    details: "14 - 15 May • LAN • Prizepool Upto: ₹25,000/-",
    src: "Banner/summer_carnival.webp",
    status: "Event Recap",
    statusColor: "border-purple-600",
    themeColor: "purple",
    isHighlighted: false,
  },
];

export default function App() {
  const upcomingEvents = tournamentData.filter(t => t.status.toLowerCase().includes('upcoming'));
  const pastEvents = tournamentData.filter(t => t.status.toLowerCase().includes('recap'));

  const [highlightActive, setHighlightActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const highlightTimer = useRef(null);
  const autoSwipeTimer = useRef(null);
  const dragState = useRef({ startX: 0, currentX: 0, offset: 0 });

  const slidesToShow = windowWidth < 640 ? 1 : windowWidth < 1024 ? 2 : 3;
  const maxIndex = Math.max(0, pastEvents.length - slidesToShow);

  const updateLayout = useCallback(() => {
    if (containerRef.current) {
      setSlideWidth(containerRef.current.offsetWidth / slidesToShow);
    }
  }, [slidesToShow]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      updateLayout();
    };
    window.addEventListener('resize', handleResize);
    updateLayout();
    return () => window.removeEventListener('resize', handleResize);
  }, [updateLayout]);

  
  useEffect(() => {
    if (!isHovered && !isDragging && maxIndex > 0) {
      autoSwipeTimer.current = setInterval(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }, 4000);
    }
    return () => {
      if (autoSwipeTimer.current) clearInterval(autoSwipeTimer.current);
    };
  }, [isHovered, isDragging, maxIndex]);

  const runHighlightCheck = useCallback(() => {
    setHighlightActive(false);
    setTimeout(() => {
      setHighlightActive(true);
      if (highlightTimer.current) clearTimeout(highlightTimer.current);
      highlightTimer.current = setTimeout(() => setHighlightActive(false), 3000);
    }, 50);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runHighlightCheck();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [runHighlightCheck]);

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#tournaments') runHighlightCheck();
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, [runHighlightCheck]);

  const goToPrev = () => setCurrentIndex(prev => Math.max(0, prev - 1));
  const goToNext = () => setCurrentIndex(prev => Math.min(maxIndex, prev + 1));

  const handleDragStart = (clientX) => {
    setIsDragging(true);
    dragState.current.startX = clientX;
  };

  const handleDragMove = (clientX) => {
    if (!isDragging) return;
    dragState.current.offset = clientX - dragState.current.startX;
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = slideWidth * 0.25;
    if (dragState.current.offset > threshold) setCurrentIndex(prev => Math.max(0, prev - 1));
    else if (dragState.current.offset < -threshold) setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
    dragState.current.offset = 0;
  };

  const carouselTransform = `translate3d(${-currentIndex * slideWidth + (isDragging ? dragState.current.offset : 0)}px, 0, 0)`;

  return (
    <section ref={sectionRef} id="tournaments" className="bg-gray-900 min-h-screen py-20 overflow-hidden font-sans select-none text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Ongoing & Upcoming Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Ongoing & Upcoming</h2>
            <div className="h-[2px] flex-grow bg-gradient-to-r from-purple-500/50 to-transparent" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="p-3 flex-shrink-0">
                <article
                  className={`group h-full p-4 bg-gray-800 rounded-lg border transition-all duration-300 ease-out 
                    ${highlightActive && event.isHighlighted ? 
                      `scale-[1.02] -translate-y-1 ${
                        event.themeColor === 'cyan' ? 'border-cyan-500 shadow-lg shadow-cyan-500/20' : 
                        event.themeColor === 'pink' ? 'border-pink-500 shadow-lg shadow-pink-500/20' : 
                        'border-purple-500 shadow-lg shadow-purple-500/20'
                      }` : 
                      `border-gray-700 hover:scale-[1.01] ${
                        event.themeColor === 'cyan' ? 'hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]' : 
                        event.themeColor === 'pink' ? 'hover:border-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.2)]' : 
                        'hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]'
                      }`
                    }`}
                >
                  <div className="overflow-hidden rounded-md mb-3 aspect-video bg-gray-900">
                    <img
                      src={event.src}
                      alt={event.title}
                      className={`w-full h-full object-cover transition-all duration-700 ease-in-out 
                        ${highlightActive && event.isHighlighted ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'}`}
                      onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/1F2937/FFFFFF?text=Tournament'; }}
                    />
                  </div>
                  <h3 className="font-bold text-white text-lg line-clamp-1">{event.title}</h3>
                  <p className="text-xs text-gray-400 mt-2 h-10 line-clamp-2">{event.details}</p>

                  <div className="mt-4 flex flex-wrap gap-2 items-center">
                    <a
                      href="#forms"
                      className={`px-4 py-2 rounded text-sm font-bold text-white transition-all ${
                        event.themeColor === 'cyan' ? 'bg-cyan-600' : 
                        event.themeColor === 'pink' ? 'bg-pink-600' : 
                        'bg-purple-600'
                      }`}
                    >
                      Register Now
                    </a>
                    <a
                      href="#rulebook"
                      className="px-4 py-2 border border-gray-600 rounded text-sm font-bold text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
                    >
                      Brouche
                    </a>
                    <div className="flex items-center gap-2 px-2 py-1 bg-green-500/10 border border-green-500/30 rounded">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] font-black text-green-500 uppercase tracking-wider">Live</span>
                    </div>
                  </div>
                </article>
              </div>
            ))}
            

            <div className="hidden md:flex lg:col-start-3 p-2 items-center justify-center">
              <div className="w-full h-full rounded-2xl flex flex-col items-center justify-center p-8 text-center">
                <span className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">Campus Connect Dehradun</span>
                <h2 className="text-4xl lg:text-5xl font-black italic tracking-tighter leading-none">
                  <span className="block text-white">YOUR GAME.</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">OUR</span>
                  <span className="block text-white">STAGE.</span>
                </h2>
                <div className="mt-6 w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Past Events Recap Section */}
        <div 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Past Events Recap</h2>
            <div className="h-[2px] flex-grow bg-gradient-to-r from-purple-500/50 to-transparent" />
          </div>

          <div
            className="relative group/carousel"
            onMouseDown={(e) => handleDragStart(e.clientX)}
            onMouseMove={(e) => handleDragMove(e.clientX)}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
            onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
            onTouchEnd={handleDragEnd}
          >
       
            {maxIndex > 0 && (
              <>
                <button
                  onClick={goToPrev}
                  disabled={currentIndex === 0}
                  className="absolute left-0 top-[40%] -translate-y-1/2 z-20 p-3 m-2 bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-full text-white transition-all hover:bg-gray-700 disabled:opacity-30 disabled:pointer-events-none hidden sm:block"
                  aria-label="Previous Events"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button
                  onClick={goToNext}
                  disabled={currentIndex >= maxIndex}
                  className="absolute right-0 top-[40%] -translate-y-1/2 z-20 p-3 m-2 bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-full text-white transition-all hover:bg-gray-700 disabled:opacity-30 disabled:pointer-events-none hidden sm:block"
                  aria-label="Next Events"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </>
            )}

            <div ref={containerRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
              <div
                className="flex will-change-transform"
                style={{
                  transform: carouselTransform,
                  width: `${pastEvents.length * slideWidth}px`,
                  transition: isDragging ? 'none' : 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {pastEvents.map((event) => (
                  <div key={event.id} style={{ width: `${slideWidth}px` }} className="p-3 flex-shrink-0">
                    <article
                      className={`group h-full p-4 bg-gray-800 rounded-lg border transition-all duration-300 ease-out border-gray-700 hover:scale-[1.01] ${
                        event.themeColor === 'cyan' ? 'hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]' : 
                        event.themeColor === 'pink' ? 'hover:border-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.2)]' : 
                        'hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]'
                      }`}
                    >
                      <div className="overflow-hidden rounded-md mb-3 aspect-video bg-gray-900">
                        <img
                          src={event.src}
                          alt={event.title}
                          className="w-full h-full object-cover transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0"
                          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/1F2937/FFFFFF?text=Tournament'; }}
                        />
                      </div>
                      <h3 className="font-bold text-white text-lg line-clamp-1">{event.title}</h3>
                      <p className="text-xs text-gray-400 mt-2 h-10 line-clamp-2">{event.details}</p>

                      <div className="mt-4 flex flex-wrap gap-2 items-center">
                        <a
                          href="#news"
                          className="px-3 py-2 border border-gray-600 rounded text-sm text-gray-300 transition-colors hover:text-white"
                        >
                          View Details
                        </a>
                        <span className={`px-3 py-2 border ${event.statusColor} rounded text-xs font-bold text-gray-300 uppercase tracking-tighter`}>
                          {event.status}
                        </span>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            {maxIndex > 0 && (
              <div className="flex justify-center items-center gap-2 mt-10">
                {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 transition-all duration-500 rounded-full ${
                      currentIndex === idx 
                        ? 'w-10 bg-purple-600 shadow-[0_0_10px_rgba(147,51,234,0.5)]' 
                        : 'w-2 bg-gray-700 hover:bg-gray-500'
                    }`}
                    aria-label={`Slide to step ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

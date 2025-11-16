import React, { useState, useEffect, useRef, useCallback } from 'react';

const tournamentData = [
  {
    id: 1,
    title: "Uttarakhand Esports Festival 2026 (UEF-2026)",
    details: "Jan Mid 2026 • LAN Qualifiers • Prizepool Upto: ₹1,00,000 • 12 Universities • Diamonds: 100,000 • Prizepool: ₹100,000/- INR",
    src: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto:format&fit=crop",
    status: "Upcoming Event",
    statusColor: "border-green-600 hover:bg-green-600",
    themeColor: "purple",
    isHighlighted: false,
  },
  {
    id: 2,
    title: "Battel Era 2.0",
    details: "13 Nov - 14 Nov 2025 • Offline Qualifiers • Offline Finals • Prizepool Upto: ₹200,000",
    src: "images/Battle.webp",
    status: "Past Event",
    statusColor: "border-red-600 hover:bg-red-600",
    themeColor: "cyan",
    isHighlighted: true,
  },
  {
    id: 3,
    title: "Endgame 2025 E-Sports Event",
    details: "06 Nov - 07 Nov • Offline Qualifiers • Offline Finals • Prizepool Upto: ₹1,00,000",
    src: "/Banner/endgame.webp",
    status: "Past Event",
    statusColor: "border-red-600 hover:bg-red-600",
    themeColor: "cyan",
    isHighlighted: true,
  },
  {
    id: 4,
    title: "Domination 2025",
    details: "25 - 27 Aug 2025 • Offline • Prizepool Upto: ₹1,00,000 • Uttarakhand",
    src: "/Banner/Domination.webp",
    status: "Past Event",
    statusColor: "border-red-600 hover:bg-red-600",
    themeColor: "pink",
    isHighlighted: false,
  },
  {
    id: 5,
    title: "Summer Carnival 2025",
    details: "14 - 15 May • LAN • Prizepool Upto: ₹25,000",
    src: "Banner/summer_carnival.webp",
    status: "Past Event",
    statusColor: "border-red-600 hover:bg-red-600",
    themeColor: "purple",
    isHighlighted: false,
  },
];



function Tournaments() {
  const [isVisible, setIsVisible] = useState(false);
  const [highlightActive, setHighlightActive] = useState(false); 
  const [, setCurrentHash] = useState(window.location.hash);
  const sectionRef = useRef(null);
  const highlightTimer = useRef(null);
  const retriggerTimer = useRef(null);

  const runHighlightCheck = useCallback(() => {
    if (highlightTimer.current) clearTimeout(highlightTimer.current);
    if (retriggerTimer.current) clearTimeout(retriggerTimer.current);

    setHighlightActive(false);

    retriggerTimer.current = setTimeout(() => {
      setHighlightActive(true);

      highlightTimer.current = setTimeout(() => {
        setHighlightActive(false);
      }, 3000);
    }, 50);
  }, []);

  // Intersection Observer logic
  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(currentRef);
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Hash change and Click detection logic
  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash;
      setCurrentHash(newHash);

      if (newHash === '#tournaments') {
        runHighlightCheck();
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    const handleGlobalClick = (event) => {
      const target = event.target.closest('a[href*="#tournaments"]');
      if (target) {
        setTimeout(() => {
          if (window.location.hash === '#tournaments') {
            runHighlightCheck();
          }
        }, 100);
      }
    };

    document.addEventListener('click', handleGlobalClick);

    if (window.location.hash === '#tournaments') {
      runHighlightCheck();
    }


    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('click', handleGlobalClick);

      if (highlightTimer.current) clearTimeout(highlightTimer.current);
      if (retriggerTimer.current) clearTimeout(retriggerTimer.current);
    };
  }, [runHighlightCheck]);


  return (
    <section ref={sectionRef} id="tournaments" className="bg-gray-900/60 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Ongoing / Upcoming & Past Tournaments</h2>
          <a href="#register" className="text-sm text-purple-400 hover:text-purple-300 underline">Register your team</a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {tournamentData.map((tournament, index) => {

           
            const themeClasses = {
              purple: {
                bg: 'bg-purple-600 hover:bg-purple-500',
                hoverBorder: 'hover:border-purple-500',
                hoverShadow: 'hover:shadow-purple-500/20',
                shineBorder: 'border-purple-500 shadow-lg shadow-purple-500/20',
              },
              cyan: {
                bg: 'bg-cyan-600 hover:bg-cyan-500',
                hoverBorder: 'hover:border-cyan-500',
                hoverShadow: 'hover:shadow-cyan-500/20',
                shineBorder: 'border-cyan-500 shadow-lg shadow-cyan-500/20',
              },
              pink: {
                bg: 'bg-pink-600 hover:bg-pink-500',
                hoverBorder: 'hover:border-pink-500',
                hoverShadow: 'hover:shadow-pink-500/20',
                shineBorder: 'border-pink-500 shadow-lg shadow-pink-500/20',
              },
            };

            const currentTheme = themeClasses[tournament.themeColor] || themeClasses.purple;

            const isCardHighlighted = tournament.isHighlighted && highlightActive;

            const baseClasses = `p-4 bg-gray-800 rounded-lg border transition-all ease-out duration-1000 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`;

            const dynamicClasses = isCardHighlighted
              ? `scale-105 -translate-y-1 ${currentTheme.shineBorder} cursor-default` 
              : `border-gray-700 ${currentTheme.hoverBorder} ${currentTheme.hoverShadow} hover:scale-105 hover:-translate-y-1 cursor-pointer group`; // Normal/Hover state


            return (
              <article
                key={tournament.id}
                className={`${baseClasses} ${dynamicClasses}`}
              >
                <img
                  src={tournament.src}
                  alt={`${tournament.title} banner`}
                  className="rounded-md w-full h-40 object-cover mb-3 grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/1F2937/FFFFFF?text=Tournament'; }}
                />
                <h3 className="font-semibold text-white text-lg">{tournament.title}</h3>
                <p className="text-xs text-gray-400 mt-2">{tournament.details}</p>
                <div className="mt-4 flex gap-2">
                  <a href="#register" className={`px-3 py-2 ${currentTheme.bg} rounded text-sm font-medium text-white transition-colors`}>Register</a>
                  <a href="#" className="px-3 py-2 border border-gray-600 rounded text-sm text-gray-300 transition-colors hover:bg-gray-600 hover:text-white">Details</a>
                  <a href="#" className={`px-3 py-2 border ${tournament.statusColor} rounded text-sm text-gray-300 transition-colors ${tournament.statusColor === 'border-red-600 hover:bg-red-600' ? 'hover:text-white' : ''} ${tournament.statusColor}`}>
                    {tournament.status}
                  </a>
                </div>
              </article>
            );
          })}
         
        </div>
      </div>
    </section>
  );
}

export default Tournaments;



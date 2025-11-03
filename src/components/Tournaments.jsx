import React, { useState, useEffect, useRef, useCallback } from 'react';

function Tournaments() {
  const [isVisible, setIsVisible] = useState(false);
  const [highlightFirst, setHighlightFirst] = useState(false);
  const sectionRef = useRef(null); 
  const highlightTimer = useRef(null);
  const retriggerTimer = useRef(null);

  const runHighlightCheck = useCallback(() => {
    if (highlightTimer.current) clearTimeout(highlightTimer.current);
    if (retriggerTimer.current) clearTimeout(retriggerTimer.current);

    setHighlightFirst(false); 

    retriggerTimer.current = setTimeout(() => {
      setHighlightFirst(true); 
    
      highlightTimer.current = setTimeout(() => {
        setHighlightFirst(false);
      }, 2000);
    }, 10);
  }, []);

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

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#tournaments') {
        runHighlightCheck();
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    const allTournamentLinks = document.querySelectorAll('a[href="#tournaments"]');

    const handleLinkClick = () => {
      if (window.location.hash === '#tournaments') {
        runHighlightCheck();
      }
    };

    allTournamentLinks.forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      
      allTournamentLinks.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
      
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

                   <article 
            className={`p-4 bg-gray-800 rounded-lg border border-gray-700 transition-all ease-out duration-1000 delay-200 ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-12'
            } ${
              isVisible ? 'translate-y-0' : ''
            } hover:scale-105 hover:-translate-y-1 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer group`}
          >
            <img 
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto:format&fit=crop" 
              alt="CS:GO tournament" 
              className="rounded-md w-full h-40 object-cover mb-3 grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out" 
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/1F2937/FFFFFF?text=Campus Clash Esports'; }}
            />
            <h3 className="font-semibold text-white text-lg"> Campus Clash Esports </h3>
            <p className="text-xs text-gray-400 mt-2">Jan Mid 2026 • LAN Qualifiers • Prizepool Upto: ₹1,00,000 • 12 Universities • Diamonds: 100,000 • Prizepool: ₹100,000/- INR </p>
            <div className="mt-4 flex gap-2">
              <a href="#register" className="px-3 py-2 bg-purple-600 hover:bg-purple-500 rounded text-sm font-medium text-white transition-colors">Register</a>
              <a href="#" className="px-3 py-2 border border-gray-600 rounded text-sm text-gray-300 transition-colors hover:bg-gray-600 hover:text-white">Details</a>
              <a href="#" className="px-3 py-2 border border-green-600 rounded text-sm text-gray-300 transition-colors hover:bg-green-600 hover:text-white">Upcoming Event</a>
            </div>
          </article>
          
          <article 
            className={`p-4 bg-gray-800 rounded-lg border transition-all ease-out duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-12'
            } ${
              highlightFirst
                ? 'scale-105 -translate-y-1 border-cyan-500 shadow-lg shadow-cyan-500/20'
                : (isVisible ? 'translate-y-0 border-gray-700' : 'border-gray-700')
            } hover:scale-105 hover:-translate-y-1 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 cursor-pointer group`}
          >
            <img 
              src="/images/banner.png" 
              alt="Valorant tournament" 
              className="rounded-md w-full h-40 object-cover mb-3 grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out" 
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/1F2937/FFFFFF?text=Endgame 2025 E Sports Event'; }}
            />
            <h3 className="font-semibold text-white text-lg">Endgame 2025 E Sports Event</h3>
            <p className="text-xs text-gray-400 mt-2"> 06 Nov - 07 Nov • Offline Qualifiers • Offline Finals • Prizepool Upto: ₹1,00,000</p>
            <div className="mt-4 flex gap-2">
              <a href="#register" className="px-3 py-2 bg-cyan-600 hover:bg-cyan-500 rounded text-sm font-medium text-white transition-colors">Register</a>
              <a href="#" className="px-3 py-2 border border-gray-600 rounded text-sm text-gray-300 transition-colors hover:bg-gray-600 hover:text-white">Details</a>
               <a href="#" className="px-3 py-2 border border-blue-600 rounded text-sm text-gray-300 transition-colors hover:bg-blue-600 hover:text-white">Ongoing Event</a>
            </div>
          </article>

          <article 
            className={`p-4 bg-gray-800 rounded-lg border border-gray-700 transition-all ease-out duration-1000 delay-400 ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-12'
            } ${
              isVisible ? 'translate-y-0' : ''
            } hover:scale-105 hover:-translate-y-1 hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/20 cursor-pointer group`}
          >
            <img 
              src="https://images.unsplash.com/photo-1599058917212-d7e614681149?q=80&w=1200&auto:format&fit=crop" 
              alt="Mobile gaming tournament" 
              className="rounded-md w-full h-40 object-cover mb-3 grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out" 
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/1F2937/FFFFFF?text=Domination 2025'; }}
            />
            <h3 className="font-semibold text-white text-lg">Domination 2025</h3>
            <p className="text-xs text-gray-400 mt-2">25 - 27 Aug 2025 • Offline • Prizepool Upto: ₹1,00,000 • Uttarakhand </p>
            <div className="mt-4 flex gap-2">
              <a href="#register" className="px-3 py-2 bg-pink-600 hover:bg-pink-500 rounded text-sm font-medium text-white transition-colors">Register</a>
              <a href="#" className="px-3 py-2 border border-gray-600 rounded text-sm text-gray-300 transition-colors hover:bg-gray-600 hover:text-white">Details</a>
               <a href="#" className="px-3 py-2 border border-red-600 rounded text-sm text-gray-300 transition-colors hover:bg-red-600 hover:text-white">Past Event</a>
            </div>
          </article>
          
          <article 
            className={`p-4 bg-gray-800 rounded-lg border border-gray-700 transition-all ease-out duration-1000 delay-200 ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-12'
            } ${
              isVisible ? 'translate-y-0' : ''
            } hover:scale-105 hover:-translate-y-1 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer group`}
          >
            <img 
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto:format&fit=crop" 
              alt="CS:GO tournament" 
              className="rounded-md w-full h-40 object-cover mb-3 grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out" 
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/1F2937/FFFFFF?text=Summer Carnival 2025'; }}
            />
            <h3 className="font-semibold text-white text-lg"> Summer Carnival 2025 </h3>
            <p className="text-xs text-gray-400 mt-2">14 - 15 May • LAN • Prizepool Upto: ₹25,000 </p>
            <div className="mt-4 flex gap-2">
              <a href="#register" className="px-3 py-2 bg-purple-600 hover:bg-purple-500 rounded text-sm font-medium text-white transition-colors">Register</a>
              <a href="#" className="px-3 py-2 border border-gray-600 rounded text-sm text-gray-300 transition-colors hover:bg-gray-600 hover:text-white">Details</a>
              <a href="#" className="px-3 py-2 border border-red-600 rounded text-sm text-gray-300 transition-colors hover:bg-red-600 hover:text-white">Past Event</a>
            </div>
          </article>
          
        </div>
      </div>
    </section>
  );
}


export default Tournaments;








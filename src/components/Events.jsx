import React, { useState, useEffect, useRef } from 'react';

function Events() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="events" className="max-w-6xl mx-auto px-6 py-16 overflow-hidden">
      <h2 className="text-2xl font-bold">LAN & Community Events</h2>
      <p className="text-gray-400 mt-2">Our LAN events bring players together — PCs, comfy seats, casters, and prize fights.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div 
          className={`p-6 bg-gray-800 rounded-lg transition-all ease-out duration-[3000ms] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          } hover:scale-105 hover:bg-gray-700 hover:shadow-lg hover:shadow-purple-500/30 cursor-pointer`}
        >
          <h4 className="font-semibold text-lg text-white">Dehradun Arena — Nov 6-7</h4>
          <p className="text-sm text-gray-300 mt-2">Hosted at Graphic Era Hill University — open to all colleges. Food and hostel facility available for winners.</p>
          <ul className="mt-3 text-xs text-gray-400 space-y-1">
            <li>• Walk-in scrims & coaching</li>
            <li>• Live caster desk</li>
            <li>• Hardware partners and free trials</li>
          </ul>
        </div>

        <div 
          className={`p-6 bg-gray-800 rounded-lg transition-all ease-out duration-[3000ms] delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          } hover:scale-105 hover:bg-gray-700 hover:shadow-lg hover:shadow-purple-500/30 cursor-pointer`}
        >
          <h4 className="font-semibold text-lg text-white">Monthly Community Night</h4>
          <p className="text-sm text-gray-300 mt-2">Casual nights every 3rd Saturday for scrims, open ladders, and giveaways. A great place to find new teammates.</p>
        </div>

        <div 
          className={`p-6 bg-gray-800 rounded-lg transition-all ease-out duration-[3000ms] delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          } hover:scale-105 hover:bg-gray-700 hover:shadow-lg hover:shadow-purple-500/30 cursor-pointer`}
        >
          <h4 className="font-semibold text-lg text-white">Valorant Bootcamp (Online)</h4>
          <p className="text-sm text-gray-300 mt-2">A week-long online bootcamp for aspiring pros. VOD reviews, aim training sessions, and strategy breakdowns with top-tier coaches.</p>
          <ul className="mt-3 text-xs text-gray-400 space-y-1">
            <li>• Radiant-level coaches</li>
            <li>• Daily scrims</li>
            <li>• 1-on-1 VOD review</li>
          </ul>
        </div>

        <div 
          className={`p-6 bg-gray-800 rounded-lg transition-all ease-out duration-[3000ms] delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          } hover:scale-105 hover:bg-gray-700 hover:shadow-lg hover:shadow-purple-500/30 cursor-pointer`}
        >
          <h4 className="font-semibold text-lg text-white">UK ESPORTS Charity Stream</h4>
          <p className="text-sm text-gray-300 mt-2">Join us for a 24-hour charity livestream event featuring your favorite local streamers, pro players, and community leaders to raise funds for local causes.</p>
        </div>

      </div>
    </section>
  );
}


export default Events;

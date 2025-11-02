import React, { useState, useEffect, useRef } from 'react';

function Team() {
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
    <section ref={sectionRef} id="team" className="max-w-6xl mx-auto px-6 py-16 overflow-hidden">
      <h2 className="text-2xl font-bold">Meet the Team</h2>
      <p className="text-gray-400 mt-2">Organizers, admins and volunteers who run UKESPORTS HUB.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        
        <div 
          className={`p-4 bg-gray-800 rounded-lg text-center transition-all ease-out duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          } hover:scale-105 hover:bg-gray-700 hover:shadow-lg hover:shadow-purple-500/30 cursor-pointer`}
        >
          <img src="\src\assets\paras.jpg" alt="Paras Bisht" className="mx-auto rounded-full h-28 w-28 object-cover border-2 border-purple-500/50" />
          <h4 className="mt-3 font-semibold text-white">Paras Bisht</h4>
          <p className="text-xs text-gray-400">Founder & Tournament Lead</p>
        </div>
        
        <div 
          className={`p-4 bg-gray-800 rounded-lg text-center transition-all ease-out duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          } hover:scale-105 hover:bg-gray-700 hover:shadow-lg hover:shadow-purple-500/30 cursor-pointer`}
        >
          <img src="https://placehold.co/140x140/2D3748/7C3AED?text=KPN" alt="K.P. Nautiyal" className="mx-auto rounded-full h-28 w-28 object-cover border-2 border-purple-500/50" />
          <h4 className="mt-3 font-semibold text-white">K.P. Nautiyal</h4>
          <p className="text-xs text-gray-400">Events Coordinator</p>
        </div>
        
        <div 
          className={`p-4 bg-gray-800 rounded-lg text-center transition-all ease-out duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          } hover:scale-105 hover:bg-gray-700 hover:shadow-lg hover:shadow-purple-500/30 cursor-pointer`}
        >
          <img src="https://placehold.co/140x140/2D3748/7C3AED?text=SP" alt="Sponsorship" className="mx-auto rounded-full h-28 w-28 object-cover border-2 border-purple-500/50" />
          <h4 className="mt-3 font-semibold text-white">Sponsorship</h4>
          <p className="text-xs text-gray-400">Partnerships & Sponsors</p>
        </div>
        
        <div 
          className={`p-4 bg-gray-800 rounded-lg text-center transition-all ease-out duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          } hover:scale-105 hover:bg-gray-700 hover:shadow-lg hover:shadow-purple-500/30 cursor-pointer`}
        >
          <img src="https://placehold.co/140x140/2D3748/7C3AED?text=V" alt="Volunteers" className="mx-auto rounded-full h-28 w-28 object-cover border-2 border-purple-500/50" />
          <h4 className="mt-3 font-semibold text-white">Volunteers</h4>
          <p className="text-xs text-gray-400">Community Managers</p>
        </div>
        
      </div>
    </section>
  );
}

export default Team;
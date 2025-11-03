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
      <p className="text-gray-400 mt-2">Organizers, Admins and members who run UKE SPORTS HUB.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

 <div 
          className={`p-4 bg-gray-800 rounded-lg text-center transition-all ease-out duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          } hover:scale-105 hover:bg-gray-700 hover:shadow-lg hover:shadow-purple-500/30 cursor-pointer`}
        >
          <img src="https://placehold.co/140x140/2D3748/7C3AED?text=RSD" alt="RSD" className="mx-auto rounded-full h-28 w-28 object-cover border-2 border-purple-500/50" />
          <h4 className="mt-3 font-semibold text-white">Rahul Singh Dhami</h4>
          <p className="text-xs text-gray-400">Founder / Co-Founder </p>
        </div>
        
        <div 
          className={`p-4 bg-gray-800 rounded-lg text-center transition-all ease-out duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          } hover:scale-105 hover:bg-gray-700 hover:shadow-lg hover:shadow-purple-500/30 cursor-pointer`}
        >
          <img src="\src\assets\paras.jpg" alt="Paras Bisht" className="mx-auto rounded-full h-28 w-28 object-cover border-2 border-purple-500/50" />
          <h4 className="mt-3 font-semibold text-white">Paras Bisht</h4>
          <p className="text-xs text-gray-400"> Chief Executive Officer</p>
        </div>
        
        <div 
          className={`p-4 bg-gray-800 rounded-lg text-center transition-all ease-out duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          } hover:scale-105 hover:bg-gray-700 hover:shadow-lg hover:shadow-purple-500/30 cursor-pointer`}
        >
          <img src="https://placehold.co/140x140/2D3748/7C3AED?text=USS" alt="US" className="mx-auto rounded-full h-28 w-28 object-cover border-2 border-purple-500/50" />
          <h4 className="mt-3 font-semibold text-white">Udit Singh</h4>
          <p className="text-xs text-gray-400">Technical Lead</p>
        </div>
        
        <div 
          className={`p-4 bg-gray-800 rounded-lg text-center transition-all ease-out duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          } hover:scale-105 hover:bg-gray-700 hover:shadow-lg hover:shadow-purple-500/30 cursor-pointer`}
        >
          <img src="https://placehold.co/140x140/2D3748/7C3AED?text=S" alt="S" className="mx-auto rounded-full h-28 w-28 object-cover border-2 border-purple-500/50" />
          <h4 className="mt-3 font-semibold text-white">Shantanu</h4>
          <p className="text-xs text-gray-400"> General Manager</p>
        </div>
        
        <div 
          className={`p-4 bg-gray-800 rounded-lg text-center transition-all ease-out duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          } hover:scale-105 hover:bg-gray-700 hover:shadow-lg hover:shadow-purple-500/30 cursor-pointer`}
        >
          <img src="https://placehold.co/140x140/2D3748/7C3AED?text=TJ" alt="TJ" className="mx-auto rounded-full h-28 w-28 object-cover border-2 border-purple-500/50" />
          <h4 className="mt-3 font-semibold text-white"> Tushar </h4>
          <p className="text-xs text-gray-400"> Event Manager   </p>
        </div>

         <div 
          className={`p-4 bg-gray-800 rounded-lg text-center transition-all ease-out duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          } hover:scale-105 hover:bg-gray-700 hover:shadow-lg hover:shadow-purple-500/30 cursor-pointer`}
        >
          <img src="https://placehold.co/140x140/2D3748/7C3AED?text=SDK" alt="SDK" className="mx-auto rounded-full h-28 w-28 object-cover border-2 border-purple-500/50" />
          <h4 className="mt-3 font-semibold text-white">Shadan Dabir Khan</h4>
          <p className="text-xs text-gray-400">Operations Manager</p>
        </div>
        
      </div>
    </section>
  );
}


export default Team;



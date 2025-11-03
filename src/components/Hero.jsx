import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function AnimatedStatCard({ targetNumber, suffix, label, isText, triggerAnimation }) {
  const [count, setCount] = useState(0);

  const duration = 1500;

  useEffect(() => {
    if (!triggerAnimation) {
      setCount(0);
      return;
    }

    if (isText) {
      return;
    }

    let start = null;
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      
      const currentCount = Math.floor(easedProgress * targetNumber);
      setCount(currentCount);

      if (progress < 1) {
        window.requestAnimationFrame(animate);
      }
    };

    window.requestAnimationFrame(animate);

    return () => {
      start = null;
    };
  }, [triggerAnimation, targetNumber, isText, duration]);

  return (
    <div
      className={`p-3 bg-gray-800 rounded-lg text-center transition-opacity duration-700 ${
        triggerAnimation ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="text-2xl font-bold">
        {isText ? targetNumber : `${count}${suffix || ''}`}
      </div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
}


function Hero() {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const [startAnimation, setStartAnimation] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const cardTimer = setTimeout(() => {
      setIsCardVisible(true);
    }, 100);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setStartAnimation(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    const currentStatsRef = statsRef.current;
    if (currentStatsRef) {
      observer.observe(currentStatsRef);
    }

    return () => {
      clearTimeout(cardTimer);
      if (currentStatsRef) {
        observer.unobserve(currentStatsRef);
      }
    };
  }, []);

  return (
    <main className="min-h-screen gradient-hero flex items-center">
      <div id="hero" className="max-w-6xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <section>
          <p className="text-sm text-indigo-300 font-semibold">Uttarakhand • Esports • Community</p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-white">UK ESPORTS HUB</h1>
          <p className="mt-4 text-gray-300 max-w-xl">We run tournaments, LAN parties, community nights and help players & teams from Uttarakhand level up. Join events, find teammates, and keep up with local esports news.</p>

          <div className="mt-6 flex gap-3">
            <a href="#tournaments" className="inline-block bg-white text-gray-900 px-5 py-3 rounded-lg font-semibold shadow">See Tournaments</a>
             <Link
              to="/Forms"
              className="inline-block border border-gray-600 px-5 py-3 rounded-lg text-sm">
              Register Team
            </Link>
          </div>

          <div ref={statsRef} className="mt-8 grid grid-cols-3 gap-3 text-xs text-gray-200">
            <AnimatedStatCard
              targetNumber={05}
              suffix="+"
              label="Tournaments"
              triggerAnimation={startAnimation}
            />
            <AnimatedStatCard
              targetNumber={550}
              suffix="+"
              label="Community Members"
              triggerAnimation={startAnimation}
            />
            <AnimatedStatCard
              targetNumber="LANs"
              label="Regular Events"
              isText={true}
              triggerAnimation={startAnimation}
            />
          </div>

        </section>

        <aside
          className={`relative transition-all duration-700 ease-out ${
            isCardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <div className="bg-gradient-to-b from-[#7c3aed]/30 to-transparent p-1 rounded-xl transition-transform duration-300 ease-in-out hover:scale-[1.02]">
            <div className="bg-gray-800 rounded-xl p-6">
              <img src="/images/banner.png" />
              <h3 className="text-lg font-bold">Next LAN: ENDGAME 2025 </h3>
              <p className="text-gray-400 mt-2 text-sm">06 - 07 Nov 2025 • Graphic Era Hill University — Competitive Free Fire / BGMI Tournaments.</p>
              <div className="mt-4 flex gap-2">
                 <Link
              to="/Forms"
              className="px-3 py-2 bg-[#7c3aed] rounded-md text-sm font-semibold">
              Register Team
            </Link>
                <a href="#tournaments" className="px-3 py-2 border border-gray-700 rounded-md text-sm">Event Info</a>
              </div>
            </div>
          </div>

          <div className="mt-4 text-xs text-gray-400">
            <div>Want to host with us? <a href="#contact" className="underline">Contact the team</a>.</div>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default Hero;




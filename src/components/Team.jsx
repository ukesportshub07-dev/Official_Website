import React, { useState, useEffect, useRef, useCallback } from 'react';

const coreTeam = [
  { name: "Rahul Singh Dhami", role: "Founder / Co-Founder", img: "/images/Ambasadors/replace.png", alt: "Rahul Singh Dhami" },
  { name: "Paras Bisht", role: "Chief Executive Officer", img: "/images/paras.jpg", alt: "Paras Bisht" },
  { name: "Udit Samant", role: "Technical Lead", img: "/images/udit.jpg", alt: "Udit Samant" },
  { name: "Shantanu", role: "General Manager", img: "/images/shantanu.jpg", alt: "Shantanu" },
  { name: "Tushar", role: "Event Manager", img: "/images/tushar.jpg", alt: "Tushar" },
  { name: "Shadan Dabir Khan", role: "Operations Manager", img: "/images/shadan.jpg", alt: "Shadan Dabir Khan" },
  { name: "Aman Panwar", role: "Public Relations & Outreach Head", img: "/images/aman.jpg", alt: "Aman Panwar" },
];

const ambassadors = [
  { name: "Dikshita Maindola", role: "D.A.V. Post Graduate College Dehradun", img: "/images/Ambasadors/Dikshita.webp", alt: "Dikshita Maindola" },
  { name: "Coming Soon", role: "Wanna be next? Contact us!", img: "/images/Ambasadors/replace.png", alt: "b" },
  { name: "Coming Soon", role: "Wanna be next? Contact us!", img: "/images/Ambasadors/replace.png", alt: "c" },
  { name: "Coming Soon", role: "Wanna be next? Contact us!", img: "/images/Ambasadors/replace.png", alt: "d" },
  { name: "Coming Soon", role: "Wanna be next? Contact us!", img: "/images/Ambasadors/replace.png", alt: "e" },
  { name: "Coming Soon", role: "Wanna be next? Contact us!", img: "/images/Ambasadors/replace.png", alt: "e" },
];

const getSlidesToShow = (width) => {
  if (width < 480) return 1;
  if (width < 768) return 2;
  if (width < 1200) return 3;
  return 4;
};

function Carousel({ teamData, title, subtitle }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({ startX: 0, currentX: 0, offset: 0 });

  const containerRef = useRef(null);
  const slidesToShow = getSlidesToShow(windowWidth);
  const totalSlides = teamData.length;
  const maxIndex = Math.max(0, totalSlides - slidesToShow); 

  const updateLayout = useCallback(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const calculatedWidth = containerWidth / slidesToShow;
      setSlideWidth(calculatedWidth);
      setCurrentIndex(prev => Math.min(prev, Math.max(0, totalSlides - getSlidesToShow(window.innerWidth))));
    }
  }, [slidesToShow, totalSlides]);

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
    const timer = setInterval(() => {
      if (!isDragging && !isHovering) {
        if (maxIndex > 0) {
            setCurrentIndex(prevIndex => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
        }
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [maxIndex, isDragging, isHovering]);


  const goToNext = () => setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  const goToPrev = () => setCurrentIndex(prev => Math.max(0, prev - 1));

  const handleDragStart = (clientX) => {
    setIsDragging(true);
    dragState.current.startX = clientX;
    dragState.current.currentX = clientX;
  };

  const handleDragMove = (clientX) => {
    if (!isDragging) return;
    dragState.current.offset = clientX - dragState.current.startX;
    dragState.current.currentX = clientX;
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const dragDistance = dragState.current.offset;
    const threshold = slideWidth * 0.3;
    let newIndex = currentIndex;

    if (dragDistance > threshold) {
      newIndex = currentIndex - 1;
    } else if (dragDistance < -threshold) {
      newIndex = currentIndex + 1;
    }

    newIndex = Math.max(0, Math.min(maxIndex, newIndex));
    setCurrentIndex(newIndex);

    dragState.current.offset = 0;
  };

  const baseOffset = -currentIndex * slideWidth;
  const transform = `translateX(${baseOffset + (isDragging ? dragState.current.offset : 0)}px)`;
  const transition = isDragging ? 'none' : 'transform 0.5s ease-in-out';


  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold text-grey-500 text-center mb-4 tracking-tight sm:text-5xl">
        {title}
      </h2>
      <p className="text-gray-400 mt-2 px-2 pb-4 text-center">{subtitle}</p>

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div
          ref={containerRef}
          className="w-full relative"
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
        >
          <div
            className="flex"
            style={{
              transform: transform,
              transition: transition,
              width: `${totalSlides * slideWidth}px`,
              cursor: isDragging ? 'grabbing' : 'grab'
            }}
          >
            {teamData.map((member, index) => (
              <div
                key={index}
                className="p-2 flex-shrink-0"
                style={{ width: `${slideWidth}px` }}
              >
                <div className="bg-gray-800 rounded-xl shadow-xl transition-transform duration-300 ease-in-out hover:scale-[1.03] overflow-hidden p-6 mx-auto flex flex-col items-center text-center h-full">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-5 shadow-inner border-4 border-purple-500/50 flex items-center justify-center">
                    <img
                      className="w-full h-full object-cover"
                      src={member.img}
                      alt={member.alt} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1 leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-base text-white font-medium">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {maxIndex > 0 && (
            <>
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 md:pl-0 md:flex hidden">
                    <button
                      onClick={goToPrev}
                      disabled={currentIndex === 0}
                      className={`text-grey-900 p-2 rounded-full shadow-lg transition duration-200 disabled:opacity-30 disabled:cursor-not-allowed`}
                      aria-label="Previous slide"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12 15.75 4.5" />
                      </svg>
                    </button>
                  </div>

                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 md:pl-0 md:flex hidden">
                    <button
                      onClick={goToNext}
                      disabled={currentIndex >= maxIndex}
                      className={`text-grey-900 p-2 rounded-full shadow-lg transition duration-200 disabled:opacity-30 disabled:cursor-not-allowed`}
                      aria-label="Next slide"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5 15.75 12 8.25 19.5" />
                      </svg>
                    </button>
                  </div>
            </>
        )}
      </div>
    </div>
  );
}


function Team() {
    return (
        <div className="bg-gray-900 font-inter"> 
            
            <div className="py-8">
                <Carousel 
                    teamData={coreTeam}
                    title="Meet Our Core Team"
                    subtitle="Organizers, Admins and Members who run the Hub."
                />
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <hr className="border-gray-700" />
            </div>

            <div className="py-8">
                 <Carousel 
                    teamData={ambassadors}
                    title="Meet Our Campus Ambassadors"
                    subtitle="Our dedicated student representatives across various campuses."
                />
            </div>
        </div>
    );
}

export default Team;






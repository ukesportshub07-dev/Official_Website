import React, { useState, useEffect } from 'react';

const images = [
  '/slideshow/1.JPG',
  '/slideshow/2.JPG',
  '/slideshow/3.JPG',
  '/slideshow/4.JPG',
  '/slideshow/5.JPG',
  '/slideshow/6.JPG',
  '/slideshow/7.jpg',
  '/slideshow/8.jpg',
  '/slideshow/9.jpg',
  '/slideshow/10.jpg',
  '/slideshow/11.JPG',
  '/slideshow/12.JPG',
  '/slideshow/13.JPG',
  '/slideshow/14.JPG',
  '/slideshow/15.JPG',
  '/slideshow/16.JPG',
  '/slideshow/17.jpg',
  '/slideshow/18.jpg',
  '/slideshow/19.jpg',
  '/slideshow/20.jpg',
  '/slideshow/21.jpg',
  '/slideshow/22.jpg',
  '/slideshow/23.jpg',
];

function SlideShow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div id="home"className="relative flex items-center justify-start w-full h-[90vh] min-h-[600px] overflow-hidden text-white mt-4">
        
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-500 md:duration-2000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            backgroundImage: `url(${image})`,
            zIndex: index === currentImageIndex ? 1 : 0
          }}
          ></div>
        ))}

        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-5"></div>

        <div className="absolute inset-0 z-[15] bg-gradient-to-b from-gray-900 via-transparent to-transparent"></div>
        <div className="absolute inset-0 z-[15] bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>

        <div className="relative z-20 px-6 sm:px-12 lg:px-24 text-left max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Welcome to UKESPORTS HUB
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-xl drop-shadow-md">
            Uttarakhand's home for competitive gaming. Join tournaments, find teammates, and level up.
          </p>
          
          <a 
            href="#tournaments" 
            className="py-3 px-7 bg-[#7c3aed] text-white text-lg font-semibold rounded-md shadow-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#6b21c6] hover:scale-105"
          >
            See Tournaments
          </a>
        </div>
      </div>

     
    </>
  );
};


export default SlideShow;


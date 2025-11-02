import React, { useState, useEffect } from 'react';

const images = [
  'src/assets/slideshow/IMG_0099.JPG',
  'src/assets/slideshow/IMG_0102.JPG',
  'src/assets/slideshow/IMG_0135.JPG',
  '/src/assets/slideshow/IMG_0139.JPG',
  '/src/assets/slideshow/IMG_0164.JPG',
  '/src/assets/slideshow/IMG_0252.JPG',
  '/src/assets/slideshow/IMG_4224.jpg',
  '/src/assets/slideshow/IMG_4228.jpg',
  '/src/assets/slideshow/IMG_4253.jpg',
  '/src/assets/slideshow/IMG_4310.jpg',
  '/src/assets/slideshow/IMG_4313.jpg',
  '/src/assets/slideshow/IMG_8928.JPG',
  '/src/assets/slideshow/IMG_8931.JPG',
  '/src/assets/slideshow/IMG_8936.JPG',
];

function SlideShow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div id="home"className="relative flex items-center justify-start w-full h-[90vh] min-h-[600px] overflow-hidden text-white mt-4">
        
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-500 ease-in-out ${
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







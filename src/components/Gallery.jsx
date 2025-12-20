import React, { useState, useEffect } from 'react';
import { ChevronLeft, X } from 'lucide-react';

const ALBUMS_DATA = [
   {
    id: 'Other Events',
    title: 'Campus Connect',
    date: 'Coming Soon',
    coverImage: '/slideshow/5.jpg',
    hoverClass: 'hover:border-cyan-500',
    textClass: 'text-cyan-500',
    gradientClass: 'from-cyan-500 to-blue-600',
    description: 'Additional event albums will appear here.',
    images: [
      { id: 101, src: '/slideshow/5.jpg', alt: 'Domination' },
      { id: 102, src: '/slideshow/6.jpg', alt: 'Domination' },
    ]
  },
  {
    id: 'domination-event',
    title: 'Domination',
    date: 'Event Recap',
    coverImage: '/slideshow/1.jpg',
    hoverClass: 'hover:border-fuchsia-500',
    textClass: 'text-fuchsia-500',
    gradientClass: 'from-fuchsia-500 to-purple-600',
    description: 'Full gallery from the Domination event series.',
    images: [
      { id: 1, src: '/slideshow/1.jpg', alt: 'Domination' },
      { id: 2, src: '/slideshow/2.jpg', alt: 'Domination' },
      { id: 3, src: '/slideshow/3.jpg', alt: 'Domination' },
      { id: 4, src: '/slideshow/4.jpg', alt: 'Domination' },
      { id: 5, src: '/slideshow/5.jpg', alt: 'Domination' },
      { id: 6, src: '/slideshow/6.jpg', alt: 'Domination' },
      { id: 7, src: '/slideshow/7.jpg', alt: 'Domination' },
      { id: 8, src: '/slideshow/8.jpg', alt: 'Domination' },
      { id: 9, src: '/slideshow/9.jpg', alt: 'Domination' },
      { id: 10, src: '/slideshow/10.jpg', alt: 'Domination' },
      { id: 11, src: '/slideshow/11.jpg', alt: 'Domination' },
      { id: 12, src: '/slideshow/12.jpg', alt: 'Domination' },
      { id: 13, src: '/slideshow/13.jpg', alt: 'Domination' },
    ]
  }
 
];

function ImageModal({ src, alt, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-95 transition-opacity duration-300 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 p-2 text-white bg-white/10 rounded-full hover:bg-white/20 transition-colors backdrop-blur-md"
        aria-label="Close"
      >
        <X size={24} />
      </button>

      <div 
        className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain"
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
        />
      </div>
    </div>
  );
}

function AlbumGallery({ album, onBack }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="relative flex flex-col items-center mb-8 border-b border-gray-100 pb-8 text-center">
        <div className="md:absolute md:left-0 md:top-2 mb-6 md:mb-0">
          <button 
            onClick={onBack}
            className="flex items-center text-black hover:text-green transition-all font-semibold text-xs uppercase tracking-[0.2em] group bg-gray-50 p-3 pr-5 rounded-full border border-gray-100 hover:border-gray-200 hover:shadow-sm"
          >
            <ChevronLeft size={20} className="mr-1 transform group-hover:-translate-x-1 transition-transform" />
            <span>Back</span>
          </button>
        </div>

        <div className="space-y-4 w-full px-4">
          <div className="inline-block max-w-full">
            <h2 className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter bg-gradient-to-r ${album.gradientClass} bg-clip-text text-transparent leading-[0.9] break-words pb-2`}>
              {album.title}
            </h2>
            <div className={`h-2 w-full bg-gradient-to-r ${album.gradientClass} mt-2 rounded-full`}></div>
          </div>
          
          <div className="flex justify-center items-center gap-4">
            <p className="text-2xl font-bold text-green-400">{album.date}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {album.images.map((image) => (
          <div
            key={image.id}
            className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-md aspect-[4/5] bg-gray-100 border-4 border-white"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              loading="lazy"
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <p className="text-white text-lg font-black uppercase tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {image.alt}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <ImageModal
          src={selectedImage.src}
          alt={selectedImage.alt}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}

export default function App() {
  const [activeAlbum, setActiveAlbum] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeAlbum]);

  return (
    <div className="min-h-screen text-gray-900 font-sans selection:bg-fuchsia-100 selection:text-fuchsia-900">
      <main className="container mx-auto px-6 py-8">
        {!activeAlbum ? (
          <div className="space-y-10">
            <div className="text-center px-2">
              <div className="inline-block max-w-full">
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent italic leading-[0.9] pb-2">
                  Event Recap
                </h1>
                <div className="h-1.5 w-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 mx-auto mt-2 rounded-full opacity-50"></div>
              </div>
              <p className="mt-4 text-gray-400 font-medium tracking-widest uppercase text-xs">
                Capturing the energy of the campus
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {ALBUMS_DATA.map((album) => (
                <div 
                  key={album.id}
                  className={`group cursor-pointer bg-gray-800 p-5 rounded-2xl border-2 border-gray-700 ${album.hoverClass || 'hover:border-green-500'} shadow-xl hover:shadow-2xl transition-all duration-300`}
                  onClick={() => setActiveAlbum(album)}
                >
                  <div className="relative overflow-hidden rounded-xl aspect-video mb-5 bg-gray-900">
                    <img 
                      src={album.coverImage} 
                      alt={album.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <div className="bg-green-200 px-6 py-2 rounded-full shadow-xl text-black font-bold transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 uppercase text-xs tracking-widest">
                        View Album
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-start px-1">
                    <div>
                      <h3 className="text-2xl font-black text-white leading-tight">
                        {album.title}
                      </h3>
                      <p className={`font-bold text-sm mt-1 uppercase tracking-wider ${album.textClass}`}>
                        {album.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <AlbumGallery 
            album={activeAlbum} 
            onBack={() => setActiveAlbum(null)} 
          />
        )}
      </main>
    </div>
  );
}
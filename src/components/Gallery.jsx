import React, { useState } from 'react';

function ImageModal({ src, alt, onClose }) {
  const handleImageClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative mx-4 max-w-4xl max-h-[90vh] rounded-lg overflow-hidden"
        onClick={handleImageClick}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-10 p-2 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-colors"
          aria-label="Close image view"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain"
          // --- ADDED THESE PROPS TO THE MODAL IMAGE ---
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
          // ---------------------------------------------
        />
      </div>
    </div>
  );
}

function ImageGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
              onClick={() => openModal(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                loading="lazy"
               
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                
              />

              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/70 to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xl font-bold px-4 pb-2">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <ImageModal
          src={selectedImage.src}
          alt={selectedImage.alt}
          onClose={closeModal}
        />
      )}
    </>
  );
}

const apiData = [
  {
    id: 1,
    imageUrl: '/slideshow/1.jpg',
    description: 'Domination',
  },
   {
    id: 2,
    imageUrl: '/slideshow/2.jpg',
    description: 'Domination',
  },
   {
    id: 3,
    imageUrl: '/slideshow/3.jpg',
    description: 'Domination',
  },
   {
    id: 4,
    imageUrl: '/slideshow/4.jpg',
    description: 'Domination',
  },
   {
    id: 5,
    imageUrl: '/slideshow/5.jpg',
    description: 'Domination',
  },
   {
    id: 6,
    imageUrl: '/slideshow/6.jpg',
    description: 'Domination',
  },
   {
    id: 7,
    imageUrl: '/slideshow/7.jpg',
    description: 'Domination',
  },
   {
    id: 8,
    imageUrl: '/slideshow/8.jpg',
    description: 'Domination',
  },
   {
    id: 9,
    imageUrl: '/slideshow/9.jpg',
    description: 'Domination',
  },
   {
    id: 10,
    imageUrl: '/slideshow/10.jpg',
    description: 'Domination',
  },
   {
    id: 11,
    imageUrl: '/slideshow/11.jpg',
    description: 'Domination',
  },
   {
    id: 12,
    imageUrl: '/slideshow/12.jpg',
    description: 'Domination',
  },
   {
    id: 13,
    imageUrl: '/slideshow/13.jpg',
    description: 'Domination',
  },

];

function GalleryComp() {
  const myImages = apiData.map((item) => ({
    id: item.id,
    src: item.imageUrl,
    alt: item.description,
  }));

  return (
    <div id='gallery' className="App">
      <header className=" p-4 text-center text-white">
        <h1 className="text-3xl font-bold">Event Recap</h1>
      </header>
      <main>
        <ImageGallery images={myImages} />
      </main>
    </div>
  );
}


export default GalleryComp;

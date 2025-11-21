import React from 'react';

// const imageData = [
//     { id: 1, src: '/logos/social_logo.png', alt: "logo", title: "S One" },
//     { id: 2, src: '/logos/whitelogo.png', alt: "logo", title: "S Two" },
//     { id: 3, src: '/images/image3.jpg', alt: "", title: "S Three" },
//     { id: 4, src: '/images/image4.jpg', alt: "", title: "S Four" },
// ];

// const SponserComp = () => (
//     <div className='bg-grey-800'>
//         <div className={`flex items-center w-full my-6 px-12`}>
//             <div className={`flex-grow border-t border-white`} />
//             <span className="flex-shrink-0 px-4 text-lg  text-white font-bold">
//                 Title Partners
//             </span>
//             <div className={`flex-grow border-t border-white`} />
//         </div>

//         <div className="flex justify-center space-x-6 max-w-7xl mx-auto">

//             {imageData.map((item) => (

//                 <div
//                     key={item.id}
//                     className="flex-1 overflow-hidden rounded-xl shadow-xl 
//                "
//                 >
//                     <img
//                         src={item.src}
//                         alt={item.alt}
//                         className="w-full h-48 object-cover border-none"
//                     />

//                     <div className="p-4 text-center">
//                         <h3 className="text-xl font-semibold text-white">
//                             {item.title}
//                         </h3>
//                     </div>
//                 </div>
//             ))}

//         </div>




//         <div className={`flex items-center w-full my-6 px-12`}>
//             <div className={`flex-grow border-t border-white`} />
//             <span className="flex-shrink-0 px-4 text-lg  text-white font-bold">
//                 Powered By
//             </span>
//             <div className={`flex-grow border-t border-white`} />
//         </div>


//         <div className={`flex items-center w-full my-6 px-12`}>
//             <div className={`flex-grow border-t border-white`} />
//             <span className="flex-shrink-0 px-4 text-lg  text-white font-bold">
//                 Venue Partner
//             </span>
//             <div className={`flex-grow border-t border-white`} />
//         </div>


//         <div className={`flex items-center w-full my-6 px-12`}>
//             <div className={`flex-grow border-t border-white`} />
//             <span className="flex-shrink-0 px-4 text-lg  text-white font-bold">
//                 Gaming Gear Partner
//             </span>
//             <div className={`flex-grow border-t border-white`} />
//         </div>


//         <div className={`flex items-center w-full my-6 px-12`}>
//             <div className={`flex-grow border-t border-white`} />
//             <span className="flex-shrink-0 px-4 text-lg  text-white font-bold">
//                 Energy Drink Partner
//             </span>
//             <div className={`flex-grow border-t border-white`} />
//         </div>



//         <div className={`flex items-center w-full my-6 px-12`}>
//             <div className={`flex-grow border-t border-white`} />
//             <span className="flex-shrink-0 px-4 text-lg  text-white font-bold">
//                 Streaming / Broadcast Partner
//             </span>
//             <div className={`flex-grow border-t border-white`} />
//         </div>




//         <div className={`flex items-center w-full my-6 px-12`}>
//             <div className={`flex-grow border-t border-white`} />
//             <span className="flex-shrink-0 px-4 text-lg  text-white font-bold">
//                 Hospitality Partner
//             </span>
//             <div className={`flex-grow border-t border-white`} />
//         </div>



//         <div className={`flex items-center w-full my-6 px-12`}>
//             <div className={`flex-grow border-t border-white`} />
//             <span className="flex-shrink-0 px-4 text-lg  text-white font-bold">
//                 Merchandise Partner
//             </span>
//             <div className={`flex-grow border-t border-white`} />
//         </div>




//         <div className={`flex items-center w-full my-6 px-12`}>
//             <div className={`flex-grow border-t border-white`} />
//             <span className="flex-shrink-0 px-4 text-lg  text-white font-bold">
//                 Media Partner
//             </span>
//             <div className={`flex-grow border-t border-white`} />
//         </div>



//         <div className={`flex items-center w-full my-6 px-12`}>
//             <div className={`flex-grow border-t border-white`} />
//             <span className="flex-shrink-0 px-4 text-lg  text-white font-bold">
//                 Gifting Partner
//             </span>
//             <div className={`flex-grow border-t border-white`} />
//         </div>



//         <div className={`flex items-center w-full my-6 px-12`}>
//             <div className={`flex-grow border-t border-white`} />
//             <span className="flex-shrink-0 px-4 text-lg  text-white font-bold">
//                 Supporting Partner
//             </span>
//             <div className={`flex-grow border-t border-white`} />
//         </div>


//         <div className={`flex items-center w-full my-6 px-12`}>
//             <div className={`flex-grow border-t border-white`} />
//             <span className="flex-shrink-0 px-4 text-lg  text-white font-bold">
//                 Representing 12 Universities of Uttarakhand
//             </span>
//             <div className={`flex-grow border-t border-white`} />
//         </div>

//     </div>
// );

// export default SponserComp;
import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4 font-inter">
      <div
        className="bg-gray-900/60 backdrop-blur-xl p-10 md:p-14 rounded-3xl shadow-[0_0_40px_-10px_rgba(99,102,241,0.6)] max-w-2xl w-full text-center border border-gray-700/60 transform transition-all duration-700 hover:scale-[1.015] hover:shadow-[0_0_60px_-5px_rgba(99,102,241,0.9)]"
      >
        <div className="flex justify-center mb-8 animate-spin-slow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-indigo-400 drop-shadow-[0_0_15px_rgba(99,102,241,0.8)]"
          >
            <circle cx="12" cy="12" r="10" className="opacity-60" />
            <path d="M12 6v6l4 2" />
          </svg>
        </div>

        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-300 leading-tight mb-6 tracking-tight animate-fade-in"
        >
          Announcing Soon
        </h1>

        <p className="mt-4 text-2xl sm:text-3xl font-light text-gray-300 opacity-90 animate-slide-up">
          Big updates are on the way. Get ready.
        </p>
      </div>
    </div>
  );
};

export default App;

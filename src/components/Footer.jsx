import React from 'react';
import { HashLink } from 'react-router-hash-link';

function Footer() {
  const currentYear = new Date().getFullYear();
  const currentDate = new Date();

const options = { 
    day: 'numeric',
    month: 'long',
};

const formattedDate = currentDate.toLocaleDateString('en-GB', options);
  const InstagramIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
    </svg>
  );

//    const scrollWithDelay = (el) => {
//   setTimeout(() => {
//     const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
//     const yOffset = -64; 
//     window.scrollTo({ 
//       top: yCoordinate + yOffset, 
//       behavior: 'smooth' 
//     });
//   }, 50); 
// };

  return (
    <footer id='footer' className=" text-white border-t border-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col lg:flex-row items-start justify-between gap-10">
        
        <div className="flex flex-col gap-6 max-w-sm">
          <div className="flex items-center gap-4">
            <img 
              src="/logos/whitelogo.png"
              alt="logo" 
              className="h-12 w-12 rounded-lg object-cover" 
              onError={(e) => { e.target.src = 'https://placehold.co/96x96/1f2937/d1d5db?text=UK' }}
            />
            <div>
        
              <div className="font-extrabold text-xl tracking-wide text-white">UK ESPORTS HUB</div>
              <div className="text-sm text-gray-400">Uttarakhand Esports Community</div>
            </div>
          </div>
     
          <p className="text-sm text-gray-400 mt-2">Follow us on social platforms for real time updates, brackets, and live streams.</p>

          <div className="flex mt-2">
            <a href="https://www.instagram.com/ukesportshub" target="_blank" rel="noopener noreferrer" 
              aria-label="UK Esports Hub" 
              className="text-gray-400 hover:text-pink-500 transition duration-300" >
              {InstagramIcon}
               
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-16 md:gap-24 lg:gap-32">
          
          {/* Quick Links */}
          <div>
            <div className="font-bold text-lg mb-4 text-white">Quick Links</div>
            <div className="text-base space-y-3">
              {/* Links styled for dark mode with purple hover */}
              <a className="text-gray-400 hover:text-purple-500 transition duration-300 block" href="#tournaments">Tournaments</a>
              <a className="text-gray-400 hover:text-purple-500 transition duration-300 block" href="#events">Events</a>
              <a className="text-gray-400 hover:text-purple-500 transition duration-300 block" href="#team">Team</a>
              <a className="text-gray-400 hover:text-purple-500 transition duration-300 block" href="#contact">Contact</a>
            </div>
          </div>

          <div>
            <div className="font-bold text-lg mb-4 text-white">Legal</div>
            <div className="text-base space-y-3">
              <HashLink to="/pandp" className="text-gray-400 hover:text-purple-500 transition duration-300 block">Privacy Policy</HashLink>
              <HashLink to="/tandc" className="text-gray-400 hover:text-purple-500 transition duration-300 block">Terms & Conditions</HashLink>
            </div>
          </div>
          
        </div>
      </div>

      <div className="bg-gray-900 border-t border-gray-800 text-center text-sm text-gray-500 py-2">
        &copy;UK Esports Hub | Level Up Your Game. | All Rights Reserved. | {formattedDate} {currentYear} 
       <p className="mt-1">Developed and Maintained by UK Esports Hub</p>
      </div>
    </footer>
  );
}

export default Footer;






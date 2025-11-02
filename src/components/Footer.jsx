import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start justify-between gap-6">
        <div>
          <div className="flex items-center gap-3">
            <img 
              src="/Assist/Logo/social_logo.png" 
              alt="logo" 
              className="h-10 w-10 rounded-md object-cover" 
              onError={(e) => { e.target.src = 'https://via.placeholder.com/80' }}
            />
            <div>
              <div className="font-bold">UKESPORTS HUB</div>
              <div className="text-xs text-gray-400">Uttarakhand Esports Community</div>
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-4 max-w-sm">Follow us on social platforms for real-time updates, brackets and live streams.</p>
        </div>

        <div className="text-sm text-gray-300">
          <div className="font-semibold">Quick Links</div>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <a className="underline text-gray-400" href="#tournaments">Tournaments</a>
            <a className="underline text-gray-400" href="#events">Events</a>
            <a className="underline text-gray-400" href="#team">Team</a>
            <a className="underline text-gray-400" href="#contact">Contact</a>
          </div>
        </div>

        <div className="text-sm text-gray-400">
          <div className="font-semibold">Legal</div>
          <div className="mt-2 space-y-2">
            <a href="#" className="underline">Terms</a>
            <a href="#" className="underline">Privacy</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center text-xs text-gray-500 py-4">
        © <span id="year">{new Date().getFullYear()}</span> UKESPORTS HUB — Built for the community.
      </div>
    </footer>
  );
}

export default Footer;
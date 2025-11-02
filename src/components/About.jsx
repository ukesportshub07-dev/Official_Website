import React from 'react';

function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold">About UKESPORTS HUB</h2>
          <p className="mt-3 text-gray-300">UKESPORTS HUB is a community-run platform dedicated to organizing local tournaments, connecting players and teams, and promoting esports in Uttarakhand. We focus on accessibility, fair play, and creating opportunities for amateur and semi-pro players.</p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-800 rounded-lg">
              <h4 className="font-semibold">Local Tournaments</h4>
              <p className="text-sm text-gray-400 mt-2">Online & LAN competitions with transparent brackets and prizes.</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg">
              <h4 className="font-semibold">Community Nights</h4>
              <p className="text-sm text-gray-400 mt-2">Casual play, coaching sessions, and scrim matchmaking.</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg">
              <h4 className="font-semibold">Team Support</h4>
              <p className="text-sm text-gray-400 mt-2">Help with team formation, practice schedules, and tournament registration.</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg">
              <h4 className="font-semibold">News & Guides</h4>
              <p className="text-sm text-gray-400 mt-2">Local esports news, how-to guides, and patch/meta breakdowns.</p>
            </div>
          </div>
        </div>

        <aside className="p-6 bg-gray-800 rounded-lg">
          <h3 className="font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li><a href="#tournaments" className="underline">Current Tournaments</a></li>
            <li><a href="#register" className="underline">Register Team</a></li>
            <li><a href="#events" className="underline">Host an Event</a></li>
            <li><a href="#contact" className="underline">Sponsor / Partner</a></li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

export default About;
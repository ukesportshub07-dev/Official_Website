"use client"; 

import React from 'react';
import { motion } from 'framer-motion'; 

const floatVariant = {
  float: {
    y: [0, -15, 0], 
    transition: {
      duration: 2.5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay: 0.5, 
    },
  },
};

function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-white">About UK ESPORTS HUB</h2>
          <p className="mt-3 text-gray-300">UK ESPORTS HUB is a community-run platform dedicated to organizing local tournaments, connecting players and teams, and promoting esports in Uttarakhand. We focus on accessibility, fair play, and creating opportunities for amateur and semi-pro players.</p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-800 rounded-lg">
              <h4 className="font-semibold text-white">Local Tournaments</h4>
              <p className="text-sm text-gray-400 mt-2">Online & LAN competitions with transparent brackets and prizes.</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg">
              <h4 className="font-semibold text-white">Community Nights</h4>
              <p className="text-sm text-gray-400 mt-2">Casual play, coaching sessions, and scrim matchmaking.</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg">
              <h4 className="font-semibold text-white">Team Support</h4>
              <p className="text-sm text-gray-400 mt-2">Help with team formation, practice schedules, and tournament registration.</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg">
              <h4 className="font-semibold text-white">News & Guides</h4>
              <p className="text-sm text-gray-400 mt-2">Local esports news, how-to guides, and patch/meta breakdowns.</p>
            </div>
          </div>
        </div>
        
        <aside className="p-8 m-6 rounded-lg mt-15 w-96 h-96 ">
          <motion.img 
            initial={{ y: 0 }} 
            animate="float"
            variants={floatVariant}
            
            src="slideshow\float.png" 
            alt="Esports players ready for battle" 
            className="w-full h-auto object-cover" 
          />
        </aside>
        
      </div>
    </section>
  );
}


export default About;

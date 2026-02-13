

import React from 'react';
import { Helmet } from 'react-helmet-async';


import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Tournaments from '../components/Tournaments.jsx';
import Team from '../components/Team.jsx';
import Contact from '../components/Contact.jsx';
import SlideShow from '../components/Slideshow.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Ambassador from '../components/Ambassador.jsx';

function Home() {
  return (
    <>
      <Helmet>
        <title>Uttarakhand Esports Hub | Home</title>
        <meta
          name="description"
          content="UK ESPORTS HUB hosts esports tournaments, LAN events, and campus competitions across Uttarakhand. Join BGMI, Free Fire, Valorant and other competitive events from Dehradun and beyond."
        />
        <meta
          name="keywords"
          content="uttarakhand esports, uk esports hub, esports dehradun, gaming tournaments dehradun, uttarakhand gaming community, uk esports tournaments, bgmi tournament uttarakhand, free fire tournament dehradun, lan events uk"
        />
      </Helmet>

      <Navbar />
      <SlideShow />
      <Hero />
      <About />
      <Tournaments />
      <Team />
      {/*<Ambassador />*/}
      <Contact />
      <Footer />
    </>
  );
}

export default Home;


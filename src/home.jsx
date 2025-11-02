// src/components/Home.jsx

import React from 'react';
// Import all your original components
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Tournaments from './components/Tournaments.jsx';
import Events from './components/Events.jsx';
import News from './components/News.jsx';
import Team from './components/Team.jsx';
import Register from './components/Register.jsx';
import Contact from './components/Contact.jsx';
import SlideShow from './components/Slideshow.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function Home() {
  return (
    <>
      <Navbar/>
      <SlideShow/>
      <Hero />
      <About />
      <Tournaments />
      <Events />
      <News />
      <Team />
      <Contact />
      <Footer/>
    </>
  );
}

export default Home;
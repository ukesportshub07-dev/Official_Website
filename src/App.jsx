import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Tournaments from './components/Tournaments.jsx';
import Events from './components/Events.jsx';
import News from './components/News.jsx';
import Team from './components/Team.jsx';
import Register from './components/Register.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import SlideShow from './components/Slideshow.jsx';

function App() {
  return (
    <div className="bg-gray-900 text-gray-100 leading-relaxed">
      <Navbar />
      <SlideShow/>
      <Hero />
      <About />
      <Tournaments />
      <Events />
      <News />
      <Team />
      <Register />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
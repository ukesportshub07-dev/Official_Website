
import React from 'react';
import { Helmet } from 'react-helmet-async';

import Footer from '../components/Footer';

import Navbar from '../components/Navbar';
import Newses from '../components/News';
import Update from '../components/Updates';

function Blogs() {
  return (
    <>
      <Helmet>
        <title>Uk Esports Hub | Updates & News</title>

        <meta
          name="description"
          content="Get the latest esports updates, event announcements, tournament news, and results from Uttarakhand Esports Hub. Stay updated with BGMI, Valorant, Free Fire and LAN event news."
        />

        <meta
          name="keywords"
          content="uttarakhand esports news, uk esports updates, bgmi news uttarakhand, valorant tournaments uk, esports updates dehradun, uk esports hub news, gaming events news"
        />
      </Helmet>

      <Navbar />
      <Update />
      <Newses />
      <Footer />
    </>
  );
}

export default Blogs;


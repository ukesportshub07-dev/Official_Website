// src/components/NewPage.jsx

import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/2ndhero';
import Navbar from '../components/Navbar';
import Newses from '../components/News';
import Update from '../components/Updates';

function Blogs() {
  return (
   <>
   <Navbar/>
   <Update/>
   <Newses/>
    <Footer/>
   </>
    
  );
}

export default Blogs;
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async'; // 1. Import Helmet
import './index.css';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/home.jsx';
import Blogs from './pages/Blog.jsx';
import Form from './pages/Form.jsx';
import Oursponsors from './pages/sponsor.jsx';
import TermsandCondition from './pages/TermsandCondition.jsx';
import PrivacyandPolicy from './pages/PrivacyandPolicy.jsx';
import Gallery from './pages/Gallery.jsx';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    // 2. Wrap the entire app in HelmetProvider
    <HelmetProvider>
      <div className="bg-gray-900 text-gray-100 leading-relaxed min-h-screen flex flex-col">
        
        {/* 3. Set Default SEO Metadata (Fallback for pages that don't have their own) */}
        <Helmet>
          <title> Uttarakhand Esports Hub | Home </title>
          <meta name="description" content="Welcome to our website. We provide blog posts, galleries, and more." />
          <meta name="keywords" content="React, Blog, Gallery, Tech" />
        </Helmet>


        <main className="flex-grow">
          <ScrollToTop /> 
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blogs />} /> 
            <Route path="/forms" element={<Form />} /> 
            <Route path="/sponsers" element={<Oursponsors/>} /> 
            <Route path="/tandc" element={<TermsandCondition/>} />
            <Route path="/pandp" element={<PrivacyandPolicy />} /> 
            <Route path="/gallery" element={<Gallery />} /> 

            {/* Better 404 handling (Status code is still 200, but user sees error) */}
            <Route path="*" element={<div className="p-10 text-center"><h1 className="text-4xl text-red-500">404</h1><p>Page Not Found</p></div>} />
          </Routes>
        </main>
        
      

      </div>
    </HelmetProvider>
  );
}

export default App;

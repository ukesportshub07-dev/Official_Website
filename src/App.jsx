import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
    <div className="bg-gray-900 text-gray-100 leading-relaxed min-h-screen">

      <main>
        <ScrollToTop /> 
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blogs />} /> 
          <Route path="/forms" element={<Form />} /> 
          <Route path="/sponsers" element={<Oursponsors/>} /> 
          <Route path="/tandc" element={<TermsandCondition/>} />
          <Route path="/pandp" element={<PrivacyandPolicy />} /> 
          <Route path="/gallery" element={<Gallery />} /> 

          <Route path="*" element={<h1 className="p-10 text-4xl text-red-500">404 - Page Not Found</h1>} />
        </Routes>
      </main>
    
    </div>
  );
}

export default App;

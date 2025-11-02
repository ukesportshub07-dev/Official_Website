import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './index.css';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './home.jsx';
import NewPage from './2ndpge.jsx';
import Form from './Form.jsx';

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
          <Route path="/new-page" element={<NewPage />} />
          <Route path="/forms" element={<Form />} /> 
          <Route path="*" element={<h1 className="p-10 text-4xl text-red-500">404 - Page Not Found</h1>} />
        </Routes>
      </main>

    </div>
  );
}

export default App;

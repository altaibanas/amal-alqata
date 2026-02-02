import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Products from './components/Products/Products';
import TrailerCutting from './components/Products/TrailerCutting';
import Petroleum from './components/Products/Petroleum';

import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';

import './App.css';
import ChineseTrucks from './components/Products/ChineseTrucks';

function App() {
  const [, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Router>
      <LanguageProvider>
        <div className="App">
          <Header />
          
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              
              {/* مسارات المنتجات */}
              <Route path="/products" element={<Products />} />
              <Route path="/products/chineseTrucks" element={<ChineseTrucks />} />
              <Route path="/products/TrailerCutting" element={<TrailerCutting />} />
              <Route path="/products/petroleum" element={<Petroleum />} />
            
              
              <Route path="/services" element={<Services />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* إعادة توجيه للمسارات القديمة (اختياري)
              <Route path="/products/chinese-truck-parts" element={<Navigate to="/products/truck-parts" replace />} />
              <Route path="/products/petroleum-parts" element={<Navigate to="/products/oil-parts" replace />} />
               */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <Footer />

          {/* أزرار سريعة */}
          <div className="quick-buttons">
            <a 
              href="https://wa.me/966552065095" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="whatsapp-button"
              aria-label="WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <button 
              id="backToTop" 
              className="back-to-top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
            >
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>
          <SpeedInsights />
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;
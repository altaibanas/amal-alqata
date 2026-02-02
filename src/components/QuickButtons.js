import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const QuickButtons = () => {
  const { t } = useTranslation();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="quick-buttons">
      <a 
        href={`https://wa.me/${t('common.phone').replace(/\D/g, '')}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-button"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
      {showBackToTop && (
        <button id="backToTop" className="back-to-top" onClick={scrollToTop}>
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
};

export default QuickButtons;

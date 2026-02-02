import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const RequestPrices = () => {
  const { translations } = useLanguage();

  useEffect(() => {
    // تأثيرات التمرير
    const handleScrollAnimations = () => {
      const fadeElements = document.querySelectorAll('.fade-in');
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimations);
    handleScrollAnimations();

    return () => {
      window.removeEventListener('scroll', handleScrollAnimations);
    };
  }, []);

  return (
    <section className="section bg-light">
      <div className="container">
        <div className="cta-section fade-in">
          <div className="cta-content">
            <h2 className="cta-title">{translations.servicesPage?.cta?.title}</h2>
            <p className="cta-description">{translations.servicesPage?.cta?.description}</p>
            <div className="cta-buttons">
              <a href="contact" className="btn btn-primary-services">
                <i className="fas fa-comments"></i>
                {translations.servicesPage?.cta?.buttons?.consultation}
              </a>
              <a href="tel:+966500022169" className="btn btn-secondary-services">
                <i className="fas fa-phone-alt"></i>
                {translations.servicesPage?.cta?.buttons?.contact}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestPrices;
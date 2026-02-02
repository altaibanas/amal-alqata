import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const ServicesSection = () => {
  const { translations } = useLanguage();

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header fade-in">
          <h2 dangerouslySetInnerHTML={{ __html: translations.services?.title || '' }} />
          <p>{translations.services?.description}</p>
        </div>
        
        <div className="services-grid">
          {translations.services?.items?.map((service, index) => (
            <div 
              key={index} 
              className="service-item fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">
                <i className={`fas ${
                  index === 0 ? 'fa-shopping-cart' :
                  index === 1 ? 'fa-shipping-fast' :
                  'fa-headset'
                }`}></i>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
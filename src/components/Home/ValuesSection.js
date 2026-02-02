import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const ValuesSection = () => {
  const { translations,  } = useLanguage();

  return (
    <section id="values" className="section bg-light">
      <div className="container">
        <div className="section-header fade-in">
          <h2 dangerouslySetInnerHTML={{ __html: translations.values?.title || '' }} />
          <p>{translations.values?.description}</p>
        </div>
        
        <div className="values-grid">
          <div className="value-card fade-in">
            <div className="value-icon">
              <i className="fas fa-handshake"></i>
            </div>
            <h3>{translations.values?.items?.professionalism?.title}</h3>
            <p>{translations.values?.items?.professionalism?.description}</p>
          </div>
          
          <div className="value-card fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="value-icon">
              <i className="fas fa-bolt"></i>
            </div>
            <h3>{translations.values?.items?.responsiveness?.title}</h3>
            <p>{translations.values?.items?.responsiveness?.description}</p>
          </div>
          
          <div className="value-card fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="value-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>{translations.values?.items?.trust?.title}</h3>
            <p>{translations.values?.items?.trust?.description}</p>
          </div>
          
          <div className="value-card fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="value-icon">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h3>{translations.values?.items?.innovation?.title}</h3>
            <p>{translations.values?.items?.innovation?.description}</p>
          </div>
        </div>
        
        <div className="values-quote fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="quote-icon">
            <i className="fas fa-quote-right"></i>
          </div>
          <p className="quote-text">
            "{translations.values?.quote}"
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
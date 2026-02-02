import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const BrandsSection = () => {
  const { translations, language } = useLanguage();

  return (
    <section id="brands" className="section bg-light">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-subtitle">// {translations.brands?.subtitle} //</span>
          <h2 dangerouslySetInnerHTML={{ __html: translations.brands?.title || '' }} />
          <p>{translations.brands?.description}</p>
        </div>
        
        <div className="brands-showcase">
          <div className="brands-grid">
            {translations.brands?.items?.map((brand, index) => (
              <div 
                key={index} 
                className="brand-item fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="brand-logo">
                  <i className={`fas ${
                    index === 0 ? 'fa-truck-monster fa-3x' :
                    index === 1 ? 'fa-globe-asia fa-3x' :
                    index === 2 ? 'fa-globe-europe fa-3x' :
                    'fa-flag fa-3x'
                  }`} style={{ 
                    color: index === 0 ? '#1e3a8a' :
                           index === 1 ? '#dc2626' :
                           index === 2 ? '#1d4ed8' : '#059669'
                  }}></i>
                </div>
                <h3>{brand.name}</h3>
                <p>{brand.description}</p>
                <div className="partner-since">
                  <i className="far fa-calendar-alt"></i>
                  {brand.since}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a href="#partners" className="btn btn-secondary">
              <i className="fas fa-handshake"></i>
              {translations.common?.readMore}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
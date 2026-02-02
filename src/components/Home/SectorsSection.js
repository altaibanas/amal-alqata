import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const SectorsSection = () => {
  const { translations } = useLanguage();

  return (
    <section id="sectors" className="section">
      <div className="container">
        <div className="section-header fade-in">
          
          <h2 dangerouslySetInnerHTML={{ __html: translations.sectors?.title || '' }} />
          <p>{translations.sectors?.description}</p>
        </div>
        
        <div className="sectors-grid">
          {translations.sectors?.items?.map((sector, index) => (
            <div 
              key={index} 
              className="sector-card fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="sector-icon">
                <i className={`fas ${
                  index === 0 ? 'fa-truck-moving' :
                  index === 1 ? 'fa-industry' :
                  index === 2 ? 'fa-gas-pump' :
                  index === 3 ? 'fa-warehouse' :
                  index === 4 ? 'fa-building' :
                  'fa-hard-hat'
                }`}></i>
              </div>
              <h3>{sector.title}</h3>
              <p>{sector.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
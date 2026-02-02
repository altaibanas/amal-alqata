import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const WhyUsSection = () => {
  const { translations } = useLanguage();

  return (
    <section id="why-us" className="section bg-light">
      <div className="container">
        <div className="section-header fade-in">
          <h2 dangerouslySetInnerHTML={{ __html: translations.whyUs?.title || '' }} />
          <p>{translations.whyUs?.description}</p>
        </div>
        
        <div className="features-grid">
          <div className="feature-card fade-in">
            <div className="feature-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <h3>{translations.whyUs?.features?.quality?.title}</h3>
            <p>{translations.whyUs?.features?.quality?.description}</p>
          </div>
          
          <div className="feature-card fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="feature-icon">
              <i className="fas fa-shipping-fast"></i>
            </div>
            <h3>{translations.whyUs?.features?.delivery?.title}</h3>
            <p>{translations.whyUs?.features?.delivery?.description}</p>
          </div>
          
          <div className="feature-card fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="feature-icon">
              <i className="fas fa-tags"></i>
            </div>
            <h3>{translations.whyUs?.features?.pricing?.title}</h3>
            <p>{translations.whyUs?.features?.pricing?.description}</p>
          </div>
          
          <div className="feature-card fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="feature-icon">
              <i className="fas fa-headset"></i>
            </div>
            <h3>{translations.whyUs?.features?.support?.title}</h3>
            <p>{translations.whyUs?.features?.support?.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;    
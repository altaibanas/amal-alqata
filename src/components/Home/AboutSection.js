import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const AboutSection = () => {
  const { translations, language } = useLanguage();

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header fade-in">
          <h2 dangerouslySetInnerHTML={{ __html: translations.about?.title || '' }} />
          <p>{translations.about?.description}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
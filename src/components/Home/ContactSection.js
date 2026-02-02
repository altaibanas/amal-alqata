import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const ContactSection = () => {
  const { translations,  } = useLanguage();

  return (
    <section id="contact" className="section contact-cta">
      <div className="container">
        <div className="contact-cta-content fade-in">
          <h2 dangerouslySetInnerHTML={{ __html: translations.contact?.title || '' }} />
          <p>{translations.contact?.description}</p>
          
          <div className="contact-methods">
            {translations.contact?.methods?.map((method, index) => (
              <div key={index} className="contact-method">
                <i className={`fas ${
                  index === 0 ? 'fa-phone-alt' :
                  index === 1 ? 'fab fa-whatsapp' :
                  'fa-envelope'
                }`}></i>
                <h3>{method.title}</h3>
                <a 
                  href={
                    index === 0 ? `tel:${method.detail}` :
                    index === 1 ? `https://wa.me/${method.detail.replace(/\D/g, '')}` :
                    `mailto:${method.detail}`
                  } 
                  className="contact-detail"
                >
                  {method.detail}
                </a>
                <p className="contact-note">{method.note}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a href="#contact-form" className="btn btn-primary btn-lg">
              <i className="fas fa-paper-plane"></i>
              {translations.common?.contactNow}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
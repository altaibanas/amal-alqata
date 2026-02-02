import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import '../../css/PetroContact.css';

const PetroContact = () => {
  const { language, isRTL } = useLanguage();
  const sectionRef = useRef(null);

  useEffect(() => {
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

    // إضافة تأثيرات للعناصر عند التمرير
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener('scroll', handleScrollAnimations);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="cta-section petro-container" 
      style={{ animationDelay: '1.2s' }} 
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">
            {language === 'ar' 
                    ? "تواصل مع خبراء التعبئة والتفريغ البترولي" 
                    : "Connect with Petroleum Loading/Unloading Experts"}
          </h2>
          
          <p className="cta-description">
                  {language === 'ar'
                    ? "نحن هنا لتزويدك بأفضل حلول التعبئة والتفريغ البترولي المعتمدة دولياً"
                    : "We're here to provide you with the best internationally certified petroleum loading/unloading solutions"}
                </p>
          
          <div className="cta-buttons">
            <a 
              href="/شركة-أعمال-القطع،-الملف-التعريفي (1).pdf"  
              className="primary-btn"
              download={language === 'ar' ? "اعمال القطع.pdf" : "Petro-Parts-Catalog.pdf"}
            >
              <i className="fas fa-file-invoice"></i>
              <span>{language === 'ar' ? "طلب كتالوج" : "Request Catalog"}</span>
            </a>
            
            <a 
              href="https://wa.me/966552065095" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="secondary-btn"
            >
              <i className="fas fa-comments"></i>
              <span>{language === 'ar' ? "استشارة فنية" : "Technical Consultation"}</span>
            </a>
            
            <a  
              href="tel:+966500022169"  
              className="outline-btn"
            >
              <i className="fas fa-phone-alt"></i>
              <span className='spann'>{language === 'ar' ? "اتصل الآن" : "Call Now"}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetroContact;
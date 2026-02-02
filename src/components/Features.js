import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../css/Features.css';

const Features = () => {
  const { translations, language, isRTL } = useLanguage();

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
    <section className="section">
      <div className="container">
        <div className="features-container" dir={isRTL ? 'rtl' : 'ltr'}>
          <div className="features-header fade-in">
            <div className="features-title-wrapper">
              <h2 className="features-title">
                {translations.featuresPage?.title || 'ميزاننا'}
              </h2>
              <div className="title-underline"></div>
            </div>
          </div>
          
          <div className="features-list">
            {(translations.featuresPage?.items || [
              "التزام بمعايير السلامة الأوروبية",
              "تحمل عالي في البيئات الصحراوية والحمل الثقيل",
              "متوفر دائما بكيمات متنوعة",
              "دعم فني لاختيار الأنسب لمقطورتك"
            ]).map((feature, index) => (
              <div 
                key={index} 
                className="feature-item fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path 
                      d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                      stroke="#1E90FF" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="feature-text">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

// مكونات فرعية لكل قسم
import AboutSection from './AboutSection';
import ProductsSection from './ProductsSection';
import RequestPrices from '../RequestPrices'
import WhyUs from '../Whyus';
import CertificationsSection from './CertificationsSection';
import Partners from '../About/Partners';


const Home = () => {
  const { translations,  } = useLanguage();

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

    // عدادات الإحصائيات
    const startCounters = () => {
      const counters = document.querySelectorAll('.stat-number');
      counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace('+', ''));
        const increment = target / 50;
        let current = 0;
        
        const updateCounter = () => {
          current += increment;
          if (current < target) {
            counter.textContent = Math.floor(current) + '+';
            setTimeout(updateCounter, 50);
          } else {
            counter.textContent = target + '+';
          }
        };
        
        updateCounter();
      });
    };

    window.addEventListener('scroll', handleScrollAnimations);
    handleScrollAnimations();
    
    // تشغيل العدادات عند ظهورها
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) observer.observe(statsSection);

    return () => {
      window.removeEventListener('scroll', handleScrollAnimations);
      if (statsSection) observer.unobserve(statsSection);
    };
  }, []);

  const createMarkup = (html) => {
    return { __html: html };
  };

  return (
    <main>
      {/* قسم البطل (heroh) */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content fade-in">
              <div className="hero-badge">
                <span className="badge-dot"></span>
                <span>{translations.heroh?.badge}</span>
              </div>
              
              <h1 dangerouslySetInnerHTML={createMarkup(translations.heroh?.title || '')} />
              
              <p className="hero-description">
                {translations.heroh?.description}
              </p>
              
              <div className="hero-buttons">
                <a href="products" className="btn btn-primary">
                  <i className="fas fa-box-open"></i>
                  {translations.heroh?.browseProducts}
                </a>
                <a href="contact" className="btn btn-secondary">
                  <i className="fas fa-headset"></i>
                  {translations.heroh?.freeConsultation}
                </a>
              </div>
              
              {/* الإحصائيات */}
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">
                    {translations.heroh?.years}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hero-card fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="card-inner">
                <div className="card-icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <h3>
                  {translations.heroh?.certifiedQuality}
                </h3>
                <p>
                  {translations.heroh?.qualityDescription}
                </p>
                
                <div className="card-stats">
                  <div className="card-stat">
                    <div className="card-stat-number">ISO 9001</div>
                    <div className="card-stat-label">
                      {translations.heroh?.isoCertificate}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* قسم نبذة عن الشركة */}
      <AboutSection />

    

      
      <WhyUs/>

 
   
     

      {/* قسم المنتجات الرئيسية */}
      <ProductsSection />


      <Partners/>

      {/* قسم الشهادات */}
      <CertificationsSection />

      
      <RequestPrices/>
   
    </main>
  );
};

export default Home;
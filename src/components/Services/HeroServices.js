import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import '../../css/HeroServices.css';

const HeroServices = () => {
  const { translations,  isRTL } = useLanguage();

  useEffect(() => {
    // تأثيرات التمرير
    const handleScrollAnimations = () => {
      const fadeElements = document.querySelectorAll('.fade-in-services');
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
          element.classList.add('visible-services');
        }
      });
    };

    // عدادات الإحصائيات (إذا كانت موجودة في الترجمات)
    const startCounters = () => {
      const counters = document.querySelectorAll('.service-stat-number');
      counters.forEach(counter => {
        const targetText = counter.textContent;
        let target;
        
        if (targetText.includes('%')) {
          target = parseInt(targetText.replace('%', ''));
        } else if (targetText.includes('+')) {
          target = parseInt(targetText.replace('+', ''));
        } else if (targetText.includes('h')) {
          target = parseInt(targetText.replace('h', ''));
        } else {
          target = parseInt(targetText) || 0;
        }
        
        if (isNaN(target)) return;
        
        const increment = target / 50;
        let current = 0;
        
        const updateCounter = () => {
          current += increment;
          if (current < target) {
            if (targetText.includes('%')) {
              counter.textContent = Math.floor(current) + '%';
            } else if (targetText.includes('+')) {
              counter.textContent = Math.floor(current) + '+';
            } else if (targetText.includes('h')) {
              counter.textContent = Math.floor(current) + 'h';
            } else {
              counter.textContent = Math.floor(current);
            }
            setTimeout(updateCounter, 50);
          } else {
            counter.textContent = targetText;
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

    const statsSection = document.querySelector('.services-card-stats');
    if (statsSection) observer.observe(statsSection);

    return () => {
      window.removeEventListener('scroll', handleScrollAnimations);
      if (statsSection) observer.unobserve(statsSection);
    };
  }, []);

 

  return (
    <section className="hero-services" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container">
        <div className="hero-services-grid">
          {/* المحتوى النصي */}
          <div className="hero-services-content fade-in-services">
            <div className="services-badge">
              <span className="badge-dot-services"></span>
              <span>{translations.servicesPagess?.heroServices?.badge || "خدماتنا"}</span>
            </div>
            
            <h1 className="services-title">
              {translations.servicesPagess?.heroServices?.title || "حلول متكاملة تدعم استمرارية أعمالك"}
            </h1>
            
            <p className="services-description">
              {translations.servicesPagess?.heroServices?.description || 
                "في شركة أعمال القطع للتجارة، لا نكتفي فقط بتوفير قطع الغيار، بل نقدم خدمات متكاملة مصممة لتلبية احتياجات عملائنا وتحقيق أعلى درجات الرضا والكفاءة. نحرص على تقديم تجربة متميزة، تبدأ من الطلب وتنتهي بخدمة ما بعد البيع والدعم الفني المستمر."}
            </p>
            
            <div className="services-features">
              {translations.servicesPagess?.heroServices?.features?.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon">
                    <i className={feature.icon || "fas fa-headset"}></i>
                  </div>
                  <div className="feature-content">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              )) || (
                <>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fas fa-headset"></i>
                    </div>
                    <div className="feature-content">
                      <h3>دعم فني متكامل</h3>
                      <p>فريق دعم فني متخصص على مدار الساعة لحل جميع الاستفسارات التقنية</p>
                    </div>
                  </div>
                  
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fas fa-shipping-fast"></i>
                    </div>
                    <div className="feature-content">
                      <h3>توصيل سريع</h3>
                      <p>شبكة توصيل تغطي جميع المناطق بضمان وصول القطع في الوقت المحدد</p>
                    </div>
                  </div>
                </>
              )}
            </div>
            
            <div className="services-cta">
              <a href="contact" className="btn btn-primary-services">
                <i className="fas fa-phone-alt"></i>
                {translations.servicesPagess?.heroServices?.ctaPrimary || "احصل على استشارة مجانية"}
              </a>
              <a href="#services-spcial" className="btn btn-secondary-services">
                <i className="fas fa-list-alt"></i>
                {translations.servicesPagess?.heroServices?.ctaSecondary || "عرض جميع الخدمات"}
              </a>
            </div>
          </div>
          
          {/* البطاقة الجانبية */}
          <div className="services-card fade-in-services" style={{ animationDelay: '0.2s' }}>
            <div className="services-card-inner">
              <div className="services-card-icon">
                <i className={translations.servicesPagess?.heroServices?.cardIcon || "fas fa-handshake"}></i>
              </div>
              
              <h3>
                {translations.servicesPagess?.heroServices?.cardTitle || "شراكة متكاملة"}
              </h3>
              <p>
                {translations.servicesPagess?.heroServices?.cardDescription || 
                  "نعمل كشريك استراتيجي لنمو أعمالك من خلال حلول دعم شاملة تضمن استمرارية عملياتك"}
              </p>
              
              <div className="services-card-footer">
                <div className="guarantee-badge">
                  <i className="fas fa-shield-alt"></i>
                  <span>
                    {translations.servicesPagess?.heroServices?.guarantee || "ضمان الخدمة  "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroServices;
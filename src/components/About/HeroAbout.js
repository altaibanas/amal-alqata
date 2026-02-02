import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import '../../css/heroAbout.css'

const HeroAbout = () => {
  const { translations, language, isRTL } = useLanguage();

  useEffect(() => {
    // تأثيرات التمرير
    const handleScrollAnimations = () => {
      const fadeElements = document.querySelectorAll('.about-hero-fade-in');
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
          element.classList.add('about-hero-visible');
        }
      });
    };

    // عدادات الإحصائيات
    const startCounters = () => {
      const counters = document.querySelectorAll('.about-hero-stat-number');
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

    const statsSection = document.querySelector('.about-hero-stats');
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
    <main className={`about-hero-main ${isRTL ? 'about-hero-rtl' : 'about-hero-ltr'}`}>
      {/* قسم من نحن */}
      <section className="about-hero-section">
        <div className="about-hero-container">
          <div className="about-hero-grid">
            <div className="about-hero-content about-hero-fade-in">
              <div className="about-hero-badge">
                <span className="about-hero-badge-dot"></span>
                <span>{translations.aboutHero?.badge || 'من نحن'}</span>
              </div>
              
              <h1 className="about-hero-title">
                {translations.aboutHero?.title || 'من نحن'}
              </h1>
              
              {/* النقاط البارزة */}
              <div className="about-hero-highlights">
                <div className="about-hero-highlight-item">
                  <i className="fas fa-star about-hero-highlight-icon"></i>
                  <span className="about-hero-highlight-text">
                    {translations.aboutHero?.highlights?.quality || 'شغف بالجودة'}
                  </span>
                </div>
                <div className="about-hero-highlight-item">
                  <i className="fas fa-shield-alt about-hero-highlight-icon"></i>
                  <span className="about-hero-highlight-text">
                    {translations.aboutHero?.highlights?.reliability || 'التزام بالموثوقية'}
                  </span>
                </div>
              </div>
              
              <p className="about-hero-description">
                {translations.aboutHero?.description || 
                  'نحن شركة سعودية متخصصة في تجارة وتوزيع قطع الغيار، تأسست لتقديم حلول عملية تلبي احتياجات السوق المحلي والإقليمي. نمتلك شبكة توريد قوية وفريقاً بخبرة عميقة في المجال، لنكون شركاء في الاستمرارية والكفاءة'}
              </p>
              
              <div className="about-hero-buttons">
                <a href="products" className="about-hero-btn about-hero-btn-primary">
                  <i className="fas fa-box-open"></i>
                  {translations.aboutHero?.buttons?.browseProducts || 'تصفح المنتجات'}
                </a>
                <a href=" contact" className="about-hero-btn about-hero-btn-secondary">
                  <i className="fas fa-headset"></i>
                  {translations.aboutHero?.buttons?.contactUs || 'تواصل معنا'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroAbout;
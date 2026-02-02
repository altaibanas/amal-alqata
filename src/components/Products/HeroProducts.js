import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import '../..//css/HeroProducts.css';

const HeroProducts = () => {
  const { translations,  isRTL } = useLanguage();

  useEffect(() => {
    // تأثيرات التمرير
    const handleScrollAnimations = () => {
      const fadeElements = document.querySelectorAll('.fade-in-products');
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
          element.classList.add('visible-products');
        }
      });
    };

    // عدادات الإحصائيات
    const startCounters = () => {
      const counters = document.querySelectorAll('.product-stat-number');
      counters.forEach(counter => {
        const targetText = counter.textContent;
        let target;
        
        if (targetText.includes('+')) {
          target = parseInt(targetText.replace('+', ''));
        } else if (targetText.includes('%')) {
          target = parseInt(targetText.replace('%', ''));
        } else {
          target = parseInt(targetText) || 0;
        }
        
        if (isNaN(target)) return;
        
        const increment = target / 50;
        let current = 0;
        
        const updateCounter = () => {
          current += increment;
          if (current < target) {
            if (targetText.includes('+')) {
              counter.textContent = Math.floor(current) + '+';
            } else if (targetText.includes('%')) {
              counter.textContent = Math.floor(current) + '%';
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

    const statsSection = document.querySelector('.products-card-stats');
    if (statsSection) observer.observe(statsSection);

    return () => {
      window.removeEventListener('scroll', handleScrollAnimations);
      if (statsSection) observer.unobserve(statsSection);
    };
  }, []);

  return (
    <section className="hero-products" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container">
        <div className="hero-products-grid">
          {/* المحتوى النصي */}
          <div className="hero-products-content fade-in-products">
            <div className="products-badge">
              <span className="badge-dot-products"></span>
              <span>{translations.productsPageh?.heroProducts?.badge || "منتجاتنا"}</span>
            </div>
            
            <h1 className="products-title">
              {translations.productsPageh?.heroProducts?.title || "حلول قطع الغيار التي تحتاجها - بجودة تستحقها"}
            </h1>
            
            <p className="products-description">
              {translations.productsPageh?.heroProducts?.description || 
                "في شركة أعمال القطع للتجارة، نقدم مجموعة شاملة من قطع الغيار الأصلية والعالية الجودة لمختلف التطبيقات الصناعية والتجارية. نحن نضمن الجودة والأداء المتميز لجميع منتجاتنا."}
            </p>
            
            <div className="products-features">
              {translations.productsPageh?.heroProducts?.features?.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon">
                    <i className={feature.icon || "fas fa-check-circle"}></i>
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
                      <i className="fas fa-certificate"></i>
                    </div>
                    <div className="feature-content">
                      <h3>جودة معتمدة</h3>
                      <p>جميع منتجاتنا تخضع لفحوصات الجودة الدقيقة وتمتلك شهادات المواصفات العالمية</p>
                    </div>
                  </div>
                  
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fas fa-truck-fast"></i>
                    </div>
                    <div className="feature-content">
                      <h3>توصيل سريع</h3>
                      <p>خدمة توصيل فورية لجميع أنواع قطع الغيار في مختلف المناطق</p>
                    </div>
                  </div>
                </>
              )}
            </div>
            
            <div className="products-cta">
              <a
                href="/شركة-أعمال-القطع،-الملف-التعريفي (1).pdf" 
                className="btn btn-primary-products"
                download="اعمال القطع.pdf"
              >
                <i className="fas fa-box-open"></i>
                {translations.productsPageh?.heroProducts?.ctaPrimary || "تصفح الكتالوج"}
              </a>
              <a href="#contact" className="btn btn-secondary-products">
                <i className="fas fa-headset"></i>
                {translations.productsPageh?.heroProducts?.ctaSecondary || "استشارة مجانية"}
              </a>
            </div>
          </div>
          
          {/* البطاقة الجانبية */}
          <div className="products-card fade-in-products" style={{ animationDelay: '0.2s' }}>
            <div className="products-card-inner">
              <div className="products-card-icon">
                <i className={translations.productsPageh?.heroProducts?.cardIcon || "fas fa-cogs"}></i>
              </div>
              
              <h3>
                {translations.productsPageh?.heroProducts?.cardTitle || "جودة لا تقبل المساومة"}
              </h3>
              <p>
                {translations.productsPageh?.heroProducts?.cardDescription || 
                  "نحرص على توفير قطع الغيار التي تفي بأعلى معايير الجودة العالمية، مما يضمن أداءً متميزًا وعمرًا افتراضيًا أطول."}
              </p>
              
              <div className="products-card-stats">
                {translations.productsPageh?.heroProducts?.stats?.map((stat, index) => (
                  <div key={index} className="product-stat">
                    <div className="product-stat-number">{stat.value}</div>
                    <div className="product-stat-label">{stat.label}</div>
                  </div>
                )) || (
                  <>
                    <div className="product-stat">
                      <div className="product-stat-number">100%</div>
                      <div className="product-stat-label">جودة أصلية</div>
                    </div>
                    <div className="product-stat">
                      <div className="product-stat-number">5000+</div>
                      <div className="product-stat-label">منتج مختلف</div>
                    </div>
                    <div className="product-stat">
                      <div className="product-stat-number">24h</div>
                      <div className="product-stat-label">أقصى وقت للتوصيل</div>
                    </div>
                  </>
                )}
              </div>
              
              <div className="products-card-footer">
                <div className="quality-badge">
                  <i className="fas fa-shield-alt"></i>
                  <span>
                    {translations.productsPageh?.heroProducts?.guarantee || "ضمان الجودة  "}
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

export default HeroProducts;
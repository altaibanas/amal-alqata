import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import '../../css/HeroQata.css';

const HeroQata = () => {
  const { translations, language, isRTL } = useLanguage();

  useEffect(() => {
    // تأثيرات التمرير
    const handleScrollAnimations = () => {
      const fadeElements = document.querySelectorAll('.fade-in-qata');
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
          element.classList.add('visible-qata');
        }
      });
    };

    // عدادات الإحصائيات
    const startCounters = () => {
      const counters = document.querySelectorAll('.qata-stat-number');
      counters.forEach(counter => {
        const targetText = counter.textContent;
        let target;
        
        if (targetText.includes('%')) {
          target = parseInt(targetText.replace('%', ''));
        } else if (targetText.includes('+')) {
          target = parseInt(targetText.replace('+', ''));
        } else if (targetText.includes('K')) {
          target = parseInt(targetText.replace('K', '')) * 1000;
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
            } else if (targetText.includes('K')) {
              counter.textContent = Math.floor(current / 1000) + 'K';
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

    const statsSection = document.querySelector('.qata-stats');
    if (statsSection) observer.observe(statsSection);

    return () => {
      window.removeEventListener('scroll', handleScrollAnimations);
      if (statsSection) observer.unobserve(statsSection);
    };
  }, []);

  // الحصول على البيانات المترجمة
  const getQataData = () => {
    if (translations.qataHero) {
      return translations.qataHero;
    }
    
    // بيانات افتراضية بالعربية والإنجليزية
    const defaultData = {
      ar: {
        badge: "قطع غيار المقطورات",
        title: "قطع غيار المقطورات",
        description: "كل ما تحتاجه لمقطورتك جودة وأمان في الطريق",
        ctaPrimary: "استشارة فنية مجانية",
        ctaSecondary: "طلب قطع غيار",
        stats: [
          { value: "95%", label: "قطع أصلية" },
          { value: "48h", label: "توصيل سريع" },
          { value: "5K+", label: "عملاء راضون" }
        ],
        features: [
          {
            icon: "fas fa-trailer",
            title: "قطع متكاملة",
            description: "جميع قطع غيار المقطورات بمختلف أنواعها وأحجامها"
          },
          {
            icon: "fas fa-shield-alt",
            title: "سلامة وأمان",
            description: "قطع غيار مصممة لضمان سلامة وأمان المقطورة على الطريق"
          },
          {
            icon: "fas fa-tools",
            title: "تركيب احترافي",
            description: "فريق متخصص لتركيب وضبط القطع باحترافية عالية"
          }
        ],
        cardTitle: "حلول شاملة للمقطورات",
        cardDescription: "نوفر جميع احتياجات مقطورتك من قطع الغيار مع ضمان الجودة والدعم الفني المستمر",
        cardIcon: "fas fa-trailer",
        guarantee: "ضمان الجودة"
      },
      en: {
        badge: "Trailer Spare Parts",
        title: "Trailer Spare Parts",
        description: "Everything your trailer needs for quality and safety on the road",
        ctaPrimary: "Free Technical Consultation",
        ctaSecondary: "Order Spare Parts",
        stats: [
          { value: "95%", label: "Original Parts" },
          { value: "48h", label: "Fast Delivery" },
          { value: "5K+", label: "Satisfied Customers" }
        ],
        features: [
          {
            icon: "fas fa-trailer",
            title: "Complete Parts",
            description: "All trailer spare parts for different types and sizes"
          },
          {
            icon: "fas fa-shield-alt",
            title: "Safety & Security",
            description: "Spare parts designed to ensure trailer safety and security on the road"
          },
          {
            icon: "fas fa-tools",
            title: "Professional Installation",
            description: "Specialized team for professional installation and adjustment of parts"
          }
        ],
        cardTitle: "Comprehensive Trailer Solutions",
        cardDescription: "We provide all your trailer's spare parts needs with quality guarantee and continuous technical support",
        cardIcon: "fas fa-trailer",
        guarantee: "Quality Warranty"
      }
    };
    
    return defaultData[language] || defaultData.ar;
  };

  const qataData = getQataData();

  return (
    <section className="hero-qata" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container">
        <div className="hero-grid-qata">
          {/* المحتوى النصي */}
          <div className="hero-content-qata fade-in-qata">
            <div className="hero-badge-qata">
              <span className="badge-dot-qata"></span>
              <span>{qataData.badge}</span>
            </div>
            
            <h1>{qataData.title}</h1>
            
            <p className="hero-description-qata">
              {qataData.description}
            </p>
            
            <div className="hero-buttons-qata">
              <a href="contact" className="btn btn-primary-qata">
                <i className="fas fa-headset"></i>
                {qataData.ctaPrimary}
              </a>
              <a href="contact" className="btn btn-secondary-qata">
                <i className="fas fa-shopping-cart"></i>
                {qataData.ctaSecondary}
              </a>
            </div>
            
          
          </div>
          
          {/* البطاقة الجانبية */}
          <div className="hero-card-qata fade-in-qata" style={{ animationDelay: '0.2s' }}>
            <div className="card-inner-qata">
              <div className="card-icon-qata">
                <i className={qataData.cardIcon}></i>
              </div>
              
              <h3>{qataData.cardTitle}</h3>
              <p>{qataData.cardDescription}</p>
              
              <div className="qata-features">
                {qataData.features.map((feature, index) => (
                  <div key={index} className="feature-item-qata">
                    <div className="feature-icon-qata">
                      <i className={feature.icon}></i>
                    </div>
                    <div className="feature-content-qata">
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="qata-guarantee">
                <div className="guarantee-badge-qata">
                  <i className="fas fa-award"></i>
                  <span>{qataData.guarantee}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroQata;
import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import '../../css/ChineHero.css';

const ChineHero = () => {
  const { translations, language, isRTL } = useLanguage();

  useEffect(() => {
    // تأثيرات التمرير
    const handleScrollAnimations = () => {
      const fadeElements = document.querySelectorAll('.fade-in-chine');
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
          element.classList.add('visible-chine');
        }
      });
    };

    // عدادات الإحصائيات
    const startCounters = () => {
      const counters = document.querySelectorAll('.chine-stat-number');
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

    const statsSection = document.querySelector('.chine-stats');
    if (statsSection) observer.observe(statsSection);

    return () => {
      window.removeEventListener('scroll', handleScrollAnimations);
      if (statsSection) observer.unobserve(statsSection);
    };
  }, []);

  // الحصول على البيانات المترجمة
  const getChineData = () => {
    if (translations.chineHero) {
      return translations.chineHero;
    }
    
    // بيانات افتراضية بالعربية والإنجليزية
    const defaultData = {
      ar: {
        badge: "خدماتنا المتخصصة",
        title: "قطع غيار الشاحنات الصينية",
        description: "قوة تتحرك بثقة",
        ctaPrimary: "استفسر عن القطع",
        ctaSecondary: "طلب قطع غيار",
        stats: [
          { value: "98%", label: "توفر القطع" },
          { value: "24h", label: "خدمة التوصيل" },
          { value: "10K+", label: "قطع متوفرة" }
        ],
        features: [
          {
            icon: "fas fa-truck",
            title: "جميع الماركات",
            description: "قطع غيار لجميع ماركات الشاحنات الصينية"
          },
          {
            icon: "fas fa-tools",
            title: "أصلية ومتوافقة",
            description: "قطع أصلية وقطع متوافقة بجودة عالية"
          },
          {
            icon: "fas fa-headset",
            title: "دعم فني",
            description: "فريق دعم فني متخصص لمساعدتك في الاختيار"
          }
        ],
        cardTitle: "شبكة توريد شاملة",
        cardDescription: "نوفر جميع قطع غيار الشاحنات الصينية مع ضمان الجودة والتوصيل السريع",
        cardIcon: "fas fa-truck-moving",
        guarantee: "ضمان الجودة لمدة 6 أشهر"
      },
      en: {
        badge: "Our Specialized Services",
        title: "Chinese Truck Spare Parts",
        description: "Power that moves with confidence",
        ctaPrimary: "Inquire About Parts",
        ctaSecondary: "Order Spare Parts",
        stats: [
          { value: "98%", label: "Parts Availability" },
          { value: "24h", label: "Delivery Service" },
          { value: "10K+", label: "Available Parts" }
        ],
        features: [
          {
            icon: "fas fa-truck",
            title: "All Brands",
            description: "Spare parts for all Chinese truck brands"
          },
          {
            icon: "fas fa-tools",
            title: "Original & Compatible",
            description: "Original parts and high-quality compatible parts"
          },
          {
            icon: "fas fa-headset",
            title: "Technical Support",
            description: "Specialized technical support team to help you choose"
          }
        ],
        cardTitle: "Comprehensive Supply Network",
        cardDescription: "We provide all Chinese truck spare parts with quality guarantee and fast delivery",
        cardIcon: "fas fa-truck-moving",
        guarantee: "6 Months Quality Warranty"
      }
    };
    
    return defaultData[language] || defaultData.ar;
  };

  const chineData = getChineData();

  return (
    <section className="hero-chine" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container">
        <div className="hero-grid-chine">
          {/* المحتوى النصي */}
          <div className="hero-content-chine fade-in-chine">
            <div className="hero-badge-chine">
              <span className="badge-dot-chine"></span>
              <span>{chineData.badge}</span>
            </div>
            
            <h1>{chineData.title}</h1>
            
            <p className="hero-description-chine">
              {chineData.description}
            </p>
            
           
              <a href="contact" className="btn btn-secondary-chine">
                <i className="fas fa-shopping-cart"></i>
                {chineData.ctaSecondary}
              </a>
          
            
           
          </div>
          
          {/* البطاقة الجانبية */}
          <div className="hero-card-chine fade-in-chine" style={{ animationDelay: '0.2s' }}>
            <div className="card-inner-chine">
              <div className="card-icon-chine">
                <i className={chineData.cardIcon}></i>
              </div>
              
              <h3>{chineData.cardTitle}</h3>
              <p>{chineData.cardDescription}</p>
              
              <div className="chine-features">
                {chineData.features.map((feature, index) => (
                  <div key={index} className="feature-item-chine">
                    <div className="feature-icon-chine">
                      <i className={feature.icon}></i>
                    </div>
                    <div className="feature-content-chine">
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="chine-guarantee">
                <div className="guarantee-badge-chine">
                  <i className="fas fa-shield-alt"></i>
                  <span>{chineData.guarantee}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChineHero;
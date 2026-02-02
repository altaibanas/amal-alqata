import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import '../../css/HeroPetro.css';

const HeroPetro = () => {
  const { translations, language, isRTL } = useLanguage();

  useEffect(() => {
    // تأثيرات التمرير
    const handleScrollAnimations = () => {
      const fadeElements = document.querySelectorAll('.fade-in-petro');
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
          element.classList.add('visible-petro');
        }
      });
    };

    // عدادات الإحصائيات
    const startCounters = () => {
      const counters = document.querySelectorAll('.petro-stat-number');
      counters.forEach(counter => {
        const targetText = counter.textContent;
        let target;
        
        if (targetText.includes('%')) {
          target = parseInt(targetText.replace('%', ''));
        } else if (targetText.includes('+')) {
          target = parseInt(targetText.replace('+', ''));
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

    const statsSection = document.querySelector('.petro-stats');
    if (statsSection) observer.observe(statsSection);

    return () => {
      window.removeEventListener('scroll', handleScrollAnimations);
      if (statsSection) observer.unobserve(statsSection);
    };
  }, [isRTL]); // أضف isRTL كـ dependency

  // الحصول على البيانات المترجمة
  const getPetroData = () => {
    // إذا كانت هناك ترجمة في السياق، استخدمها
    if (translations.petroHero) {
      return translations.petroHero;
    }
    
    // بيانات افتراضية بالعربية والإنجليزية
    const defaultData = {
      ar: {
        badge: "خدماتنا المتخصصة",
        title: "قطع غيار التعبئة والتفريغ البترولي",
        description: "مكونات تعبئة وتفريغ آمنة وموثوقة للمنتجات البترولية",
        ctaPrimary: "اطلب استشارة فنية",
        ctaSecondary: "تحميل الكاتالوج",
        stats: [
          { value: "100%", label: "جودة مضمونة" },
          { value: "24/7", label: "دعم فني" },
          { value: "500+", label: "عميل راضٍ" }
        ],
        features: [
          {
            icon: "fas fa-shield-alt",
            title: "جودة عالية",
            description: "قطع غيار مصنعة وفق أعلى معايير الجودة والسلامة"
          },
          {
            icon: "fas fa-cogs",
            title: "توافق تام",
            description: "متوافقة مع جميع أنظمة التعبئة والتفريغ البترولية"
          },
          {
            icon: "fas fa-clock",
            title: "توصيل سريع",
            description: "شحن سريع لضمان استمرارية عملياتكم دون توقف"
          }
        ],
        cardTitle: "حلول بترولية متكاملة",
        cardDescription: "نقدم مجموعة شاملة من قطع الغيار والمكونات لأنظمة التعبئة والتفريغ البترولية",
        cardIcon: "fas fa-oil-can",
        guarantee: "ضمان الجودة لمدة سنة"
      },
      en: {
        badge: "Our Specialized Services",
        title: "Petroleum Loading and Unloading Spare Parts",
        description: "Safe and reliable loading and unloading components for petroleum products",
        ctaPrimary: "Request Technical Consultation",
        ctaSecondary: "Download Catalog",
        stats: [ // تم إضافة stats هنا
          { value: "100%", label: "Quality Guaranteed" },
          { value: "24/7", label: "Technical Support" },
          { value: "500+", label: "Satisfied Clients" }
        ],
        features: [
          {
            icon: "fas fa-shield-alt",
            title: "High Quality",
            description: "Spare parts manufactured to the highest quality and safety standards"
          },
          {
            icon: "fas fa-cogs",
            title: "Full Compatibility",
            description: "Compatible with all petroleum loading and unloading systems"
          },
          {
            icon: "fas fa-clock",
            title: "Fast Delivery",
            description: "Fast shipping to ensure continuity of your operations"
          }
        ],
        cardTitle: "Integrated Petroleum Solutions",
        cardDescription: "We provide a comprehensive range of spare parts and components for petroleum loading and unloading systems",
        cardIcon: "fas fa-oil-can",
        guarantee: "One Year Quality Warranty"
      }
    };
    
    return defaultData[language] || defaultData.ar;
  };

  const petroData = getPetroData();

  // دالة لتأمين ظهور الأيقونة
  const getSafeIcon = (iconClass) => {
    // إذا كانت الأيقونة فارغة أو غير معرفة، استخدم بديل
    if (!iconClass || iconClass.trim() === '') {
      return 'fas fa-industry';
    }
    return iconClass;
  };

  return (
    <section className="hero-petro" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container">
        <div className="hero-grid-petro">
          {/* المحتوى النصي */}
          <div className="hero-content-petro fade-in-petro">
            <div className="hero-badge-petro">
              <span className="badge-dot-petro"></span>
              <span>{petroData.badge}</span>
            </div>
            
            <h1>{petroData.title}</h1>
            
            <p className="hero-description-petro">
              {petroData.description}
            </p>
            
            <div className="hero-buttons-petro">
              <a href="#contact" className="btn btn-primary-petro">
                <i className="fas fa-phone-alt"></i>
                {petroData.ctaPrimary}
              </a>
              <a href="#catalog" className="btn btn-secondary-petro">
                <i className="fas fa-download"></i>
                {petroData.ctaSecondary}
              </a>
            </div>
            
         
          </div>
          
          {/* البطاقة الجانبية */}
          <div className="hero-card-petro fade-in-petro" style={{ animationDelay: '0.2s' }}>
            <div className="card-inner-petro">
              {/* الأيقونة مع تأمين إضافي */}
              <div className="card-icon-petro">
                <i className={getSafeIcon(petroData.cardIcon)}></i>
              </div>
              
              <h3>{petroData.cardTitle}</h3>
              <p>{petroData.cardDescription}</p>
              
              <div className="petro-features">
                {petroData.features.map((feature, index) => (
                  <div key={index} className="feature-item-petro">
                    <div className="feature-icon-petro">
                      <i className={feature.icon}></i>
                    </div>
                    <div className="feature-content-petro">
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="petro-guarantee">
                <div className="guarantee-badge-petro">
                  <i className="fas fa-shield-alt"></i>
                  <span>{petroData.guarantee}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPetro;
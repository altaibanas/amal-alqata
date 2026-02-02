import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../css/whyUs.css';

const WhyUs = () => {
  const { translations, language,  } = useLanguage();

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

    return () => {
      window.removeEventListener('scroll', handleScrollAnimations);
    };
  }, []);

  
  const whyUsData = {
    title: translations.whyUsPage?.title || (language === 'ar' ? "لماذا تختارنا" : "Why Choose Us"),
    subtitle: translations.whyUsPage?.subtitle || (language === 'ar' 
      ? "نحن نقدم قيمة استثنائية تجعلنا الخيار الأفضل" 
      : "We deliver exceptional value that makes us the preferred choice"),
    items: translations.whyUsPage?.items || [
    
       {
        id: 3,
        icon: "fas fa-certificate",
        title: language === 'ar' ? "جودة عالية معتمدة" : "High Quality & Certified",
        description: language === 'ar' 
          ? "جميع منتجاتنا تحمل شهادات الجودة العالمية بأعلى المعايير" 
          : "All products carry international quality certificates with highest standards",
        stats: language === 'ar' ? "شهادات ISO" : "ISO Certified",
        color: "#1e3a8a"
      },
     
      {
        id: 2,
        icon: "fas fa-tags",
        title: language === 'ar' ? "أسعار تنافسية متنوعة" : "Competitive & Diverse Prices",
        description: language === 'ar' 
          ? "أفضل الأسعار في السوق مع خيارات دفع مرنة وعروض متنوعة" 
          : "Best market prices with flexible payment options and diverse offers",
        stats: language === 'ar' ? "توفير 40%" : "Save 40%",
        color: "#10b981"
      },
       {
        id: 1,
        icon: "fas fa-users",
        title: language === 'ar' ? "فريق عمل خبير ومحترف" : "Expert & Professional Team",
        description: language === 'ar' 
          ? "نمتلك فريقاً من الخبراء ذوي الكفاءة العالية في جميع المجالات" 
          : "We have a team of highly skilled experts in all fields",
        stats: language === 'ar' ? "+15 عام خبرة" : "+15 Years Experience",
        color: "#6366f1"
      },
      {
        id: 4,
        icon: "fas fa-bolt",
        title: language === 'ar' ? "استجابة سريعة ومرنة" : "Fast & Flexible Response",
        description: language === 'ar' 
          ? "نعمل على مدار الساعة لتقديم حلول سريعة مع مرونة تامة" 
          : "We work 24/7 to provide quick solutions with complete flexibility",
        stats: language === 'ar' ? "رد خلال 24 ساعة" : "24h Response",
        color: "#ef4444"
      },
      {
        id: 5,
        icon: "fas fa-shield-alt",
        title: language === 'ar' ? "التزام بالجودة والضمان" : "Quality & Warranty Commitment",
        description: language === 'ar' 
          ? "ضمان طويل الأمد وسياسات صيانة شاملة لجميع المنتجات" 
          : "Long-term warranty and comprehensive maintenance policies for all products",
        stats: language === 'ar' ? "ضمان  " : " Warranty",
        color: "#8b5cf6"
      },
      {
        id: 6,
        icon: "fas fa-rocket",
        title: language === 'ar' ? "خدمة سريعة وفعالة" : "Fast & Effective Service",
        description: language === 'ar' 
          ? "خدمات ما بعد البيع سريعة الاستجابة لضمان استمرارية العمل" 
          : "Responsive after-sales services to ensure business continuity",
        stats: language === 'ar' ? "دعم فني 24/7" : "24/7 Support",
        color: "#3b82f6"
      }
    ],
    stats: {
      clients: language === 'ar' ? "عميل راضٍ" : "Satisfied Clients",
      satisfaction: language === 'ar' ? "معدل رضا" : "Satisfaction Rate",
      support: language === 'ar' ? "دعم فني" : "Technical Support",
      experience: language === 'ar' ? "سنة خبرة" : "Years Experience"
    }
  };

  // const statsData = additionalStats[language] || additionalStats.en;

  return (
    <section className="why-us-section">
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title animated-gear-title ">{whyUsData.title}</h2>
          <p className="section-subtitle">{whyUsData.subtitle}</p>
        </div>

        <div className="why-us-grid">
          {whyUsData.items.map((item, index) => (
            <div 
              key={item.id}
              className="why-us-card fade-in"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                '--card-color': item.color 
              }}
            >
              <div className="card-decoration">
                <div className="decoration-dot"></div>
              </div>
              
              <div className="card-icon-wrapper">
                <div 
                  className="card-icon"
                  style={{ backgroundColor: item.color + '15' }}
                >
                  <i 
                    className={item.icon}
                    style={{ color: item.color }}
                  ></i>
                </div>
              </div>
              
              <div className="card-content">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
                <div className="card-footer">
                  <span className="card-stats" style={{ color: item.color }}>
                    <i className="fas fa-check-circle"></i>
                    {item.stats}
                  </span>
                  <span className="card-number">0{index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default WhyUs;
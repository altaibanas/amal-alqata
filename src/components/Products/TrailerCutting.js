import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import '../../css/TrailerCutting.css';
import HeroQata from './HeroQata';
import TailerQata from './TailerQata'


const TrailerCutting = () => {
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

  // بيانات قطع غيار المقطورات
  const trailerData = {
    title: translations.trailerCuttingPage?.title || (language === 'ar' 
      ? "قطع غيار المقطورات" 
      : "Trailer Spare Parts"),
    subtitle: translations.trailerCuttingPage?.subtitle || (language === 'ar' 
      ? "كل ما تحتاجه لمقطورتك جودة وأمان في الطريق" 
      : "Everything your trailer needs for quality and safety on the road"),
    description: translations.trailerCuttingPage?.description || (language === 'ar'
      ? "نوفر تشكيلة متكاملة من قطع غيار المقطورات الثقيلة والخفيفة التي تخدم شركات النقل والخدمات اللوجستية، وتساهم في تعزيز السلامة والأداء على الطريق"
      : "We provide a complete range of heavy and light trailer spare parts that serve transportation and logistics companies, and contribute to enhancing safety and performance on the road"),
    
    // أنواع القطع
    partsCategories: translations.trailerCuttingPage?.partsCategories || [
      {
        id: 1,
        title: language === 'ar' ? "مساعدات وبوابين" : "Assistants & Boabs",
        icon: "fas fa-truck-monster",
        color: "#0d1b3e",
        parts: [
          {
            name: language === 'ar' ? "هوبات" : "Hubs",
            icon: "fas fa-cog",
            description: language === 'ar' 
              ? "أقراص دوارة محورية للمحافظة على حركة العجلات"
              : "Rotating discs for wheel movement maintenance"
          },
          {
            name: language === 'ar' ? "محاور (Axles)" : "Axles",
            icon: "fas fa-sync-alt",
            description: language === 'ar' 
              ? "أنظمة محورية تحمل ثقل المقطورة وتوزع الحمل"
              : "Axial systems that bear trailer weight and distribute load"
          }
        ]
      },
      {
        id: 2,
        title: language === 'ar' ? "دسكات وبواكم الهواء وفحمات" : "Discs & Air Systems",
        icon: "fas fa-compress-arrows-alt",
        color: "#0d1b3e",
        parts: [
          {
            name: language === 'ar' ? "دسكات فرامل" : "Brake Discs",
            icon: "fas fa-stop-circle",
            description: language === 'ar' 
              ? "أقراص فرامل عالية التحمل لعمليات الكبح الفعالة"
              : "High endurance brake discs for effective braking"
          },
          {
            name: language === 'ar' ? "بواكم هواء" : "Air Compressors",
            icon: "fas fa-wind",
            description: language === 'ar' 
              ? "أنظمة هواء متطورة لتشغيل الفرامل والإطارات"
              : "Advanced air systems for brakes and tires operation"
          },
          {
            name: language === 'ar' ? "فحمات" : "Brake Pads",
            icon: "fas fa-oil-can",
            description: language === 'ar' 
              ? "وسادات فرامل عالية الجودة لتحسين الكبح"
              : "High quality brake pads for improved braking"
          }
        ]
      },
      {
        id: 3,
        title: language === 'ar' ? "خابور سحب" : "Tow Hitch",
        icon: "fas fa-link",
        color: "#0d1b3e",
        mainParts: [
          {
            name: language === 'ar' ? "خابور سحب" : "Tow Hitch",
            icon: "fas fa-hands-helping",
            description: language === 'ar' 
              ? "نظام سحب متين وآمن لربط المقطورة بالجرار"
              : "Durable and safe towing system for trailer attachment"
          },
          {
            name: language === 'ar' ? "أرجل رفع" : "Lift Legs",
            icon: "fas fa-arrows-alt-v",
            description: language === 'ar' 
              ? "أنظمة رفع متينة لدعم المقطورة أثناء التحميل"
              : "Durable lifting systems for trailer support during loading"
          },
          {
            name: language === 'ar' ? "سمكره" : "Landing Gear",
            icon: "fas fa-mountain",
            description: language === 'ar' 
              ? "أرجل هبوط قوية لتثبيت المقطورة عند الوقوف"
              : "Strong landing gear for trailer stabilization when parked"
          }
        ]
      },
      {
        id: 4,
        title: language === 'ar' ? "إنارة" : "Lighting",
        icon: "fas fa-lightbulb",
        color: "#0d1b3e",
        parts: [
          {
            name: language === 'ar' ? "مصابيح خلفية" : "Tail Lights",
            icon: "fas fa-car-battery",
            description: language === 'ar' 
              ? "أنظمة إنارة متطورة للرؤية والإشارات الضوئية"
              : "Advanced lighting systems for visibility and signals"
          },
          {
            name: language === 'ar' ? "فوانيس جانبية" : "Side Lights",
            icon: "far fa-lightbulb",
            description: language === 'ar' 
              ? "إضاءة جانبية للرؤية الأمامية والخلفية"
              : "Side lighting for front and rear visibility"
          },
          {
            name: language === 'ar' ? "إشارات ضوئية" : "Turn Signals",
            icon: "fas fa-traffic-light",
            description: language === 'ar' 
              ? "أنظمة إشارات ضوئية لتحسين السلامة المرورية"
              : "Turn signal systems for improved traffic safety"
          }
        ]
      }
    ],
    
    // المميزات
    features: translations.trailerCuttingPage?.features || [
      {
        id: 1,
        title: language === 'ar' 
          ? "التزام بمعايير السلامة الأوروبية" 
          : "Commitment to European Safety Standards",
        icon: "fas fa-shield-alt",
        color: "#0d1b3e",
        description: language === 'ar'
          ? "جميع القطع مطابقة للمواصفات الأوروبية والدولية"
          : "All parts comply with European and international specifications"
      },
      {
        id: 2,
        title: language === 'ar' 
          ? "تحمل عالي في البيئات الصحراوية والحمل الثقيل" 
          : "High endurance in desert environments and heavy loads",
        icon: "fas fa-sun",
        color: "#0d1b3e",
        description: language === 'ar'
          ? "تصميم خاص للظروف الصحراوية القاسية والأحمال الثقيلة"
          : "Special design for harsh desert conditions and heavy loads"
      },
      {
        id: 3,
        title: language === 'ar' 
          ? "متوفر دائماً بكميات متنوعة" 
          : "Always available in various quantities",
        icon: "fas fa-boxes",
        color: "#0d1b3e",
        description: language === 'ar'
          ? "توفير مستمر لجميع القطع بكميات تلبي احتياجات السوق"
          : "Continuous supply of all parts in quantities that meet market needs"
      },
      {
        id: 4,
        title: language === 'ar' 
          ? "دعم فني لاختيار الأنسب لمقطورتك" 
          : "Technical support to choose the best for your trailer",
        icon: "fas fa-headset",
        color: "#0d1b3e",
        description: language === 'ar'
          ? "فريق فني متخصص لمساعدتك في اختيار القطع المناسبة"
          : "Specialized technical team to help you choose the right parts"
      }
    ],
    
    // إحصائيات
    stats: translations.trailerCuttingPage?.stats || {
      parts: language === 'ar' ? "نوع قطعة" : "Part Types",
      durability: language === 'ar' ? "عام ضمان" : "Years Warranty",
      delivery: language === 'ar' ? "توصيل سريع" : "Fast Delivery",
      clients: language === 'ar' ? "عميل راضٍ" : "Satisfied Clients"
    }
  };

  return (

    <>
      
       <HeroQata/>
    <section className="trailer-cutting-section">
      <div className="container">
       
     

       <TailerQata/>

        {/* مميزات القطع */}
        <div className="features-section fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="section-subheader">
            <h2>
              {language === 'ar' 
                ? "مميزات قطعنا" 
                : "Our Parts Features"}
            </h2>
            <p>
              {language === 'ar'
                ? "نضمن لكم الجودة والأداء المتميز مع كل قطعة"
                : "We guarantee quality and outstanding performance with every part"}
            </p>
          </div>
          
          <div className="features-grid">
            {trailerData.features.map((feature, index) => (
              <div 
                key={feature.id}
                className="feature-card fade-in"
                style={{ 
                  animationDelay: `${index * 0.1 + 0.7}s`,
                  '--feature-color': feature.color
                }}
              >
                <div className="feature-icont">
                  <i className={feature.icon}></i>
                </div>
                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
               
              </div>
            ))}
          </div>
        </div>

        {/* قسم التطبيقات */}
        <div className="applications-section fade-in" style={{ animationDelay: '0.9s' }}>
          <div className="applications-content">
            <div className="applications-text">
              <h2>
                {language === 'ar' 
                  ? "تطبيقات متعددة للمقطورات" 
                  : "Multiple Trailer Applications"}
              </h2>
              <p>
                {language === 'ar'
                  ? "قطع غيار تناسب جميع أنواع المقطورات:"
                  : "Spare parts suitable for all types of trailers:"}
              </p>
              <ul className="applications-list">
                <li>
                  <i className="fas fa-truck-loading"></i>
                  <span>{language === 'ar' ? "مقطورات النقل الثقيل" : "Heavy Transport Trailers"}</span>
                </li>
                <li>
                  <i className="fas fa-trailer"></i>
                  <span>{language === 'ar' ? "مقطورات الحاويات" : "Container Trailers"}</span>
                </li>
                <li>
                  <i className="fas fa-gas-pump"></i>
                  <span>{language === 'ar' ? "مقطورات الوقود" : "Fuel Tank Trailers"}</span>
                </li>
                <li>
                  <i className="fas fa-utensils"></i>
                  <span>{language === 'ar' ? "مقطورات الأغذية" : "Food Trailers"}</span>
                </li>
                <li>
                  <i className="fas fa-tools"></i>
                  <span>{language === 'ar' ? "مقطورات المعدات" : "Equipment Trailers"}</span>
                </li>
              </ul>
            </div>
            <div className="applications-visual">
              <div className="trailer-visual">
                <div className="trailer-icon">
                  <i className="fas fa-trailer fa-4x"></i>
                </div>
                <div className="trailer-parts">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div 
                      key={i}
                      className="part-dot"
                      style={{
                        '--dot-color': [
                          '#FF6B35', '#00B894', '#0984E3', '#FDCB6E',
                          '#6C5CE7', '#E17055', '#00CEC9', '#A29BFE'
                        ][i % 8]
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* دعوة للعمل */}
        <div className="cta-section fade-in" style={{ animationDelay: '1.2s' }}>
          <div className="cta-content">
            <h2>
              {language === 'ar' 
                ? "جاهزون لتجهيز مقطورتك بأفضل القطع" 
                : "Ready to equip your trailer with the best parts"}
            </h2>
            <p>
              {language === 'ar'
                ? "تواصل مع فريق المبيعات لدينا للحصول على استشارة مجانية وتحديد احتياجاتك"
                : "Contact our sales team for a free consultation and to determine your needs"}
            </p>
            <div className="cta-buttons">
             <a 
                href="/شركة-أعمال-القطع،-الملف-التعريفي (1).pdf"  
                className="primary-btn"
                download="اعمال القطع.pdf"
              >
                <i className="fas fa-file-invoice"></i>
                {language === 'ar' ? "طلب كتالوج" : "Request Catalog"}
              </a>
              <a href="https://wa.me/966552065095" target="_blank"  className="secondary-btn" rel=''>
                <i className="fas fa-comments"></i>
                {language === 'ar' ? "استشارة فنية" : "Technical Consultation"}
              </a>
              <a  href="tel:+966500022169"  className="outline-btn">
                <i className="fas fa-phone-alt"></i>
                {language === 'ar' ? "اتصل الآن" : "Call Now"}
              </a>
            </div>
          </div>
        </div>
      </div>
      </section>

  
      
      </>
  );
};

export default TrailerCutting;
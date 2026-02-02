import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import '../../css/Petroleum.css';
import HeroPetro from './HeroPetro';
import PetroContact from'./PetroContact';

const Petroleum = () => {
  const { translations, language, isRTL } = useLanguage();

  useEffect(() => {
    const handleScrollAnimations = () => {
      const fadeElements = document.querySelectorAll('.petro-fade-in');
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
          element.classList.add('petro-visible');
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimations);
    handleScrollAnimations();

    return () => {
      window.removeEventListener('scroll', handleScrollAnimations);
    };
  }, []);

  // بيانات قطع غيار التعبئة والتفريغ البترولي
  const petroleumData = {
    title: translations.petroleumPage?.title || (language === 'ar' 
      ? "قطع غيار التعبئة والتفريغ البترولي" 
      : "Petroleum Loading & Unloading Spare Parts"),
    subtitle: translations.petroleumPage?.subtitle || (language === 'ar' 
      ? "مكونات تعبئة وتفريغ آمنة وموثوقة للمنتجات البترولية" 
      : "Safe and Reliable Loading/Unloading Components for Petroleum Products"),
    description: translations.petroleumPage?.description || (language === 'ar'
      ? "نقدم حلولاً متكاملة لأنظمة التعبئة والتفريغ البترولي في محطات الوقود، الناقلات، ومراكز التوزيع. جميع منتجاتنا مختارة من موردين معتمدين وتستخدم في مشاريع حساسة تتطلب أعلى درجات الأمان والجودة. جميع المنتجات معتمدة وتستخدم في منشآت النفط والغاز الكبرى."
      : "We provide integrated solutions for petroleum loading and unloading systems in fuel stations, tankers, and distribution centers. All our products are selected from certified suppliers and used in sensitive projects requiring the highest levels of safety and quality. All products are certified and used in major oil and gas facilities."),
    
    // القطع المتوفرة
    availableParts: translations.petroleumPage?.availableParts || [
      {
        id: 1,
        title: language === 'ar' ? "صمامات أمان وضغط" : "Pressure Relief Valves",
        icon: "fas fa-tachometer-alt",
        color: "#0d1b3e",
        description: language === 'ar'
          ? "أنظمة تحكم في الضغط للحفاظ على السلامة ومنع الانفجارات"
          : "Pressure control systems to maintain safety and prevent explosions"
      },
      {
        id: 2,
        title: language === 'ar' ? "أذرع تحميل هيدروليكية" : "Hydraulic Loading Arms",
        icon: "fas fa-cogs",
        color: "#1D3557",
        description: language === 'ar'
          ? "أنظمة هيدروليكية متطورة لنقل المواد البترولية بأمان"
          : "Advanced hydraulic systems for safe petroleum material transfer"
      },
      {
        id: 3,
        title: language === 'ar' ? "وصلات التعبئة والتفريغ" : "Loading/Unloading Couplings",
        icon: "fas fa-link",
        color: "#457B9D",
        description: language === 'ar'
          ? "وصلات API معتمدة لنقل الوقود دون تسرب"
          : "Certified API couplings for leak-free fuel transfer"
      },
      {
        id: 4,
        title: language === 'ar' ? "فواتح تعبئة الوقود" : "Fuel Loading Nozzles",
        icon: "fas fa-gas-pump",
        color: "#A8DADC",
        description: language === 'ar'
          ? "فواتح ثقيلة وخفيفة مصممة لأنواع الوقود المختلفة"
          : "Heavy and light nozzles designed for different fuel types"
      },
      {
        id: 5,
        title: language === 'ar' ? "فلاتر وعدادات تدفق" : "Filters & Flow Meters",
        icon: "fas fa-filter",
        color: "#F4A261",
        description: language === 'ar'
          ? "أنظمة ترشيح وقياس دقيقة لمراقبة جودة الوقود"
          : "Precise filtration and measurement systems for fuel quality monitoring"
      },
      {
        id: 6,
        title: language === 'ar' ? "خراطيم وقود مقاومة" : "Fuel-Resistant Hoses",
        icon: "fas fa-oil-can",
        color: "#2A9D8F",
        description: language === 'ar'
          ? "خراطيم مصممة لتحمل الحرارة العالية والضغط المرتفع"
          : "Hoses designed to withstand high temperatures and pressure"
      }
    ],
    
    // تطبيقات الاستخدام
    applications: translations.petroleumPage?.applications || [
      {
        id: 1,
        title: language === 'ar' ? "مستودعات البترول والغاز" : "Oil & Gas Storage Facilities",
        icon: "fas fa-warehouse",
        color: "#264653"
      },
      {
        id: 2,
        title: language === 'ar' ? "منشآت التوزيع البترولي" : "Petroleum Distribution Facilities",
        icon: "fas fa-truck-moving",
        color: "#2A9D8F"
      },
      {
        id: 3,
        title: language === 'ar' ? "محطات التعبئة" : "Loading Stations",
        icon: "fas fa-gas-pump",
        color: "#E9C46A"
      },
      {
        id: 4,
        title: language === 'ar' ? "ناقلات الوقود" : "Fuel Tankers",
        icon: "fas fa-truck",
        color: "#F4A261"
      }
    ],
    
    // مزايا المنتجات
    advantages: translations.petroleumPage?.advantages || [
      {
        id: 1,
        title: language === 'ar' ? "معتمدة من هيئات دولية" : "Certified by International Bodies",
        icon: "fas fa-certificate",
        color: "#4CAF50"
      },
      {
        id: 2,
        title: language === 'ar' ? "مقاومة للظروف الصعبة" : "Resistant to Harsh Conditions",
        icon: "fas fa-sun",
        color: "#FF9800"
      },
      {
        id: 3,
        title: language === 'ar' ? "مواصفات عالمية" : "International Specifications",
        icon: "fas fa-globe",
        color: "#2196F3"
      },
      {
        id: 4,
        title: language === 'ar' ? "صيانة سهلة وعمر طويل" : "Easy Maintenance & Long Lifespan",
        icon: "fas fa-tools",
        color: "#9C27B0"
      }
    ],
    
    // إحصائيات
    stats: translations.petroleumPage?.stats || {
      certifications: language === 'ar' ? "شهادة اعتماد" : "Certifications",
      projects: language === 'ar' ? "مشروع منجز" : "Completed Projects",
      safety: language === 'ar' ? "عام بلا حوادث" : "Accident-Free Years",
      clients: language === 'ar' ? "عميل صناعي" : "Industrial Clients"
    }
  };

  return (
    <>
      <HeroPetro />
      
      <section className="petro-section">
        <div className="petro-container">
          {/* القطع المتوفرة */}
          <div className="petro-parts-section petro-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="petro-section-subheader">
              <h2>
                {language === 'ar' 
                  ? "القطع المتوفرة" 
                  : "Available Parts"}
              </h2>
            </div>
            
            <div className="petro-parts-grid">
              {petroleumData.availableParts.map((part, index) => (
                <div 
                  key={part.id}
                  className="petro-part-card petro-fade-in"
                  style={{ 
                    animationDelay: `${index * 0.1 + 0.3}s`,
                    '--petro-part-color': part.color
                  }}
                >
                  <div className="petro-part-header">
                    <div className="petro-part-icon">
                      <i className={part.icon}></i>
                    </div>
                    <h3>{part.title}</h3>
                  </div>
                  <div className="petro-part-body">
                    <p>{part.description}</p>
                  </div>
                  <div className="petro-part-footer">
                    <span className="petro-part-spec">
                      {language === 'ar' ? "مطابق لـ API" : "API Compliant"}
                    </span>
                    <div className="petro-part-hover">
                      <i className="fas fa-arrow-left"></i>
                    </div>
                  </div>
                  <div className="petro-part-overlay"></div>
                </div>
              ))}
            </div>
          </div>

          {/* تطبيقات الاستخدام */}
          <div className="petro-applications-section petro-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="petro-applications-content">
              <div className="petro-applications-header">
                <h2>
                  {language === 'ar' 
                    ? "تطبيقات الاستخدام" 
                    : "Usage Applications"}
                </h2>
                <p>
                  {language === 'ar'
                    ? "تستخدم منتجاتنا في أهم المنشآت البترولية والصناعية"
                    : "Our products are used in major petroleum and industrial facilities"}
                </p>
              </div>
              
              <div className="petro-applications-grid">
                {petroleumData.applications.map((app, index) => (
                  <div 
                    key={app.id}
                    className="petro-application-item petro-fade-in"
                    style={{ 
                      animationDelay: `${index * 0.1 + 0.7}s`,
                      '--petro-app-color': app.color
                    }}
                  >
                    <div className="petro-app-icon">
                      <i className={app.icon}></i>
                    </div>
                    <h3>{app.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* مزايا المنتجات */}
          <div className="petro-advantages-section petro-fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="petro-advantages-content">
              <div className="petro-advantages-header">
                <h2>
                  {language === 'ar' 
                    ? "مزايا المنتجات" 
                    : "Product Advantages"}
                </h2>
              </div>
              
              <div className="petro-advantages-grid">
                {petroleumData.advantages.map((advantage, index) => (
                  <div 
                    key={advantage.id}
                    className="petro-advantage-item petro-fade-in"
                    style={{ 
                      animationDelay: `${index * 0.1 + 1.0}s`,
                      '--petro-advantage-color': advantage.color
                    }}
                  >
                    <div className="petro-advantage-icon">
                      <i className={advantage.icon}></i>
                    </div>
                    <div className="petro-advantage-content">
                      <h3>{advantage.title}</h3>
                      <div className="petro-advantage-check">
                        <i className="fas fa-check-circle"></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* قسم السلامة */}
          <div className="petro-safety-section petro-fade-in" style={{ animationDelay: '1.2s' }}>
            <div className="petro-safety-content">
              <div className="petro-safety-visual">
                <div className="petro-safety-icon">
                  <i className="fas fa-shield-alt fa-4x"></i>
                </div>
                <div className="petro-safety-rings">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="petro-safety-ring"></div>
                  ))}
                </div>
              </div>
              <div className="petro-safety-text">
                <h2>
                  {language === 'ar' 
                    ? "السلامة أولاً في كل منتج" 
                    : "Safety First in Every Product"}
                </h2>
                <p>
                  {language === 'ar'
                    ? "جميع منتجاتنا تخضع لاختبارات السلامة الشاملة وتتوافق مع أعلى المعايير الدولية. نحن نضمن أداءً آمناً وموثوقًا في جميع ظروف التشغيل."
                    : "All our products undergo comprehensive safety testing and comply with the highest international standards. We guarantee safe and reliable performance in all operating conditions."}
                </p>
                <ul className="petro-safety-list">
                  <li>
                    <i className="fas fa-check"></i>
                    <span>{language === 'ar' ? "اختبارات ضغط متقدمة" : "Advanced Pressure Testing"}</span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>{language === 'ar' ? "مقاومة للتآكل والتسرب" : "Corrosion & Leak Resistance"}</span>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    <span>{language === 'ar' ? "مراقبة الجودة المستمرة" : "Continuous Quality Monitoring"}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

         
        </div>

         <PetroContact/>
        
      </section>

     
      
    </>
  );
};

export default Petroleum;
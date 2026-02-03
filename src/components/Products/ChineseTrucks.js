import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import '../../css/ChineseTrucks.css';
import ChineHero from './ChineHero';
import ChineTrucksQata from './ChineTrucksQata'


const ChineseTrucks = () => {
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

  // بيانات قطع غيار الشاحنات الصينية
  const chineseTrucksData = {
    title: translations.chineseTrucksPage?.title || (language === 'ar' 
      ? "قطع غيار الشاحنات الصينية" 
      : "Chinese Trucks Spare Parts"),
    subtitle: translations.chineseTrucksPage?.subtitle || (language === 'ar' 
      ? "قطع تتحرك بثقة" 
      : "Parts That Move With Confidence"),
    description: translations.chineseTrucksPage?.description || (language === 'ar'
      ? "في شركة أعمال القطع للتجارة، نوفر مجموعة شاملة ومختارة من قطع غيار الشاحنات الصينية. تستخدم في السوق السعودي والخليجي على نطاق واسع. نعمل على تلبية متطلبات الصيانة والتجديد لجميع أنواع الشاحنات الصينية."
      : "At Amal Al-Qata Trading Company, we provide a comprehensive and selected range of Chinese truck spare parts. Widely used in the Saudi and Gulf markets. We work to meet the maintenance and renewal requirements for all types of Chinese trucks."),
    
   // ماركات الشاحنات
brands: translations.chineseTrucksPage?.brands || [
  {
    id: 1,
    name: "FAW",
    logo: "FAW",
    "imageUrl": "/images/Asset-40.webp", // تمت الإضافة
    description: language === 'ar' 
      ? "قطع غيار أصلية للشاحنات الثقيلة والمتوسطة" 
      : "Genuine parts for heavy and medium trucks",
    color: "#F3F4F6"
  },
  {
    id: 2,
    name: "SINOTRUK",
    // logo: "SINOTRUK",
    imageUrl: "/images/Asset-39 (1).webp", // تمت الإضافة
    description: language === 'ar' 
      ? "رائدة في صناعة الشاحنات الصينية العالمية" 
      : "Pioneer in global Chinese truck manufacturing",
    color: "#F3F4F6"
  },
  {
    id: 3,
    name: "SHACMAN",
    // logo: "SHACMAN",
    imageUrl: "/images/Asset-38.webp", // تمت الإضافة
    description: language === 'ar' 
      ? "قطع غيار متوافقة وذات جودة عالية" 
      : "Compatible parts with high quality",
    color: "#F3F4F6"
  },
  {
    id: 4,
    name: "FOTON",
    // logo: "FOTON",
    imageUrl: "/images/Asset-37.webp", // تمت الإضافة
    description: language === 'ar' 
      ? "حلول متكاملة للصيانة والإصلاح" 
      : "Integrated solutions for maintenance and repair",
    color: "#F3F4F6"
  },
  {
    id: 5,
    name: "HOWO",
    logo: "HOWO",
   imageUrl: "/images/Asset-39 (1).webp", // تمت الإضافة
    description: language === 'ar' 
      ? "قطع غيار معتمدة بأسعار تنافسية" 
      : "Certified parts at competitive prices",
    color: "#F3F4F6"
  }
],
    // أنواع القطع المتوفرة
    partsCategories: translations.chineseTrucksPage?.partsCategories || [
      {
        id: 1,
        title: language === 'ar' ? "قطع داخلية وطرقية" : "Interior & Body Parts",
        icon: "fas fa-car",
        color: "#2196F3",
        parts: language === 'ar' 
          ? ["مقاعد", "طبلون", "أبواب", "زجاج", "مفصلات", "قفل باب"]
          : ["Seats", "Dashboard", "Doors", "Glass", "Hinges", "Door Locks"]
      },
      {
        id: 2,
        title: language === 'ar' ? "أنظمة الكهرباء" : "Electrical Systems",
        icon: "fas fa-bolt",
        color: "#FF9800",
        parts: language === 'ar' 
          ? ["أسلاك", "بطارية", "مولد", "محركات كهربائية", "فوانيس", "شاشات"]
          : ["Wiring", "Battery", "Alternator", "Electric Motors", "Lights", "Screens"]
      },
      {
        id: 3,
        title: language === 'ar' ? "أنظمة التعليق والفرامل" : "Suspension & Brake Systems",
        icon: "fas fa-cogs",
        color: "#4CAF50",
        parts: language === 'ar' 
          ? ["كوابح", "هوبات", "مساعدين", "نوابض", "محاور", "مكابح"]
          : ["Brake Pads", "Hubs", "Shock Absorbers", "Springs", "Axles", "Brakes"]
      },
      {
        id: 4,
        title: language === 'ar' ? "أنظمة التبريد" : "Cooling Systems",
        icon: "fas fa-fan",
        color: "#F44336",
        parts: language === 'ar' 
          ? ["راديتر", "مروحة", "بلف حرارة", "مضخة ماء", "خزان ماء", "مبرد هواء"]
          : ["Radiator", "Fan", "Thermostat", "Water Pump", "Reservoir", "Air Cooler"]
      },
      {
        id: 5,
        title: language === 'ar' ? "قطع المحرك" : "Engine Parts",
        icon: "fas fa-engine",
        color: "#9C27B0",
        parts: language === 'ar' 
          ? ["رؤوس سليندر", "بساتين", "صمامات", "كرنك", "كامات", "منظم سرعة"]
          : ["Cylinder Heads", "Pistons", "Valves", "Crankshaft", "Camshaft", "Governor"]
      },
      {
        id: 6,
        title: language === 'ar' ? "قطع ميكانيكية" : "Mechanical Parts",
        icon: "fas fa-tools",
        color: "#795548",
        parts: language === 'ar' 
          ? ["جياطير", "رفعات", "سلفتر", "تيربو", "كلتش", "دفرنس"]
          : ["Gaskets", "Lifters", "Starter", "Turbo", "Clutch", "Differential"]
      }
    ],
    
    // الجدول التفصيلي
    partsTable: translations.chineseTrucksPage?.partsTable || {
      title: language === 'ar' ? "أنواع القطع المتوفرة" : "Available Parts Types",
      columns: [
        {
          id: 1,
          title: language === 'ar' ? "قطع داخلية وطرقية" : "Interior & Body Parts",
          icon: "fas fa-car-alt",
          items: language === 'ar' 
            ? ["كبوت", "مصابيح", "مقاعد", "طبلون", "أبواب", "زجاج أمامي", "مرايا"]
            : ["Hood", "Lights", "Seats", "Dashboard", "Doors", "Windshield", "Mirrors"]
        },
        {
          id: 2,
          title: language === 'ar' ? "أنظمة الكهرباء" : "Electrical Systems",
          icon: "fas fa-car-battery",
          items: language === 'ar' 
            ? ["أسالك", "حساسات", "كمبيوتر", "فوانيس", "بلف حرارة", "رؤوس سلفتر"]
            : ["Wires", "Sensors", "Computer", "Lights", "Thermostat", "Starter Heads"]
        },
        {
          id: 3,
          title: language === 'ar' ? "أنظمة التعديل" : "Modification Systems",
          icon: "fas fa-tachometer-alt",
          items: language === 'ar' 
            ? ["إستلام رغبات", "رؤوس سليندر", "تيربو", "شحن توربيني", "منظمات هواء"]
            : ["Request Receivers", "Cylinder Heads", "Turbo", "Turbo Charging", "Air Regulators"]
        }
      ]
    },
    
    // المميزات
    features: translations.chineseTrucksPage?.features || [
      {
        id: 1,
        title: language === 'ar' 
          ? "منتجات أصلية ومطابقة للمواصفات الأصلية" 
          : "Original products matching OEM specifications",
        icon: "fas fa-check-circle",
        color: "#4CAF50"
      },
      {
        id: 2,
        title: language === 'ar' 
          ? "خيارات متعددة من الشركات المصنعة" 
          : "Multiple options from manufacturers",
        icon: "fas fa-check-circle",
        color: "#2196F3"
      },
      {
        id: 3,
        title: language === 'ar' 
          ? "دعم في اختيار القطعة الصحيحة" 
          : "Support in choosing the right part",
        icon: "fas fa-check-circle",
        color: "#FF9800"
      },
      {
        id: 4,
        title: language === 'ar' 
          ? "أسعار تنافسية وتوصيل سريع" 
          : "Competitive prices and fast delivery",
        icon: "fas fa-check-circle",
        color: "#9C27B0"
      }
    ],
    
    // إحصائيات
    stats: translations.chineseTrucksPage?.stats || {
      parts: language === 'ar' ? "قطعة غيار" : "Spare Parts",
      brands: language === 'ar' ? "ماركة" : "Brands",
      delivery: language === 'ar' ? "توصيل سريع" : "Fast Delivery",
      warranty: language === 'ar' ? "ضمان الجودة" : "Quality Warranty"
    }
  };

  return (

    <>
      
         <ChineHero/>
    <section className="chinese-trucks-section">
      <div className="container">
   

        {/* ماركات الشاحنات */}
       <div className="brands-section fade-in" style={{ animationDelay: '0.1s' }}>
  <div className="section-subheader">
    <h2>
      {language === 'ar' 
        ? "نعمل على تلبية متطلبات جميع أنواع الشاحنات الصينية مثل:" 
        : "We meet the requirements of all types of Chinese trucks such as:"}
    </h2>
  </div>
  
  <div className="brands-grid">
    {chineseTrucksData.brands.map((brand, index) => (
      <div 
        key={brand.id}
        className="brand-card fade-in"
        style={{ 
          animationDelay: `${index * 0.1}s`,
          '--brand-color': brand.color
        }}
      >
        <div className="brand-logo">
          {/* الصورة بدلاً من النص */}
          <img 
            src={brand.imageUrl || `/images/brands/${brand.id}.png`}
            alt={brand.name}
            className="brand-logo-img"
            onError={(e) => {
              // إذا لم تعمل الصورة، يتم عرض النص بدلاً منها
              e.target.style.display = 'none';
              const logoText = document.createElement('span');
              logoText.className = 'logo-text';
              logoText.textContent = brand.logo;
              e.target.parentElement.appendChild(logoText);
            }}
          />
        </div>
        <h3 className="brand-name">{brand.name}</h3>
        <p className="brand-description">{brand.description}</p>
        <div className="brand-hover">
          <i className="fas fa-truck"></i>
          <span>
            {language === 'ar' ? "استعراض القطع" : "Browse Parts"}
          </span>
        </div>
      </div>
    ))}
  </div>
</div>
        {/* جدول أنواع القطع */}
        <ChineTrucksQata/>

     
        {/* المميزات */}
        <div className="features-section fade-in" style={{ animationDelay: '0.9s' }}>
          <div className="section-subheader">
            <h2>{language === 'ar' ? "مميزاتنا" : "Our Advantages"}</h2>
          </div>
          
          <div className="features-list">
            {chineseTrucksData.features.map((feature, index) => (
              <div 
                key={feature.id}
                className="feature-item fade-in"
                style={{ 
                  animationDelay: `${index * 0.1 + 1.0}s`,
                  '--feature-color': feature.color
                }}
              >
                <div className="feature-icon">
                  <i className={feature.icon}></i>
                </div>
                <div className="feature-content">
                  <h3>{feature.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

      
        {/* دعوة للعمل */}
        <div className="cta-section fade-in" style={{ animationDelay: '1.3s' }}>
          <div className="cta-content">
            <h2>
              {language === 'ar' 
                ? "هل تبحث عن قطع غيار لشاحنتك الصينية؟" 
                : "Looking for parts for your Chinese truck?"}
            </h2>
            <p>
              {language === 'ar'
                ? "تواصل معنا الآن للحصول على أفضل القطع بأسعار تنافسية وضمان الجودة."
                : "Contact us now to get the best parts at competitive prices with quality warranty."}
            </p>
            <div className="cta-buttons">
              <a href="tel:+966500022169"  className="primary-btn" >
               
                <i className="fas fa-phone-alt"></i>
                {language === 'ar' ? "اتصل بنا" : "Contact Us"}
              </a>
              <a href='contact' className="secondary-btn">
                <i className="fas fa-list"></i>
                {language === 'ar' ? "طلب عرض سعر " : "request a quote"}
              </a>
            </div>
          </div>
        </div>
      </div>
      </section>

     
      
      </>
  );
};

export default ChineseTrucks;
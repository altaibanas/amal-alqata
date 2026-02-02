import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import '../../css/TailerQata.css'

const TailerQata = () => {
  const { translations, currentLanguage } = useLanguage();

  useEffect(() => {
    // تأثيرات التمرير
    const handleScrollAnimations = () => {
      const fadeElements = document.querySelectorAll('.tq-fade-in');
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
          element.classList.add('tq-visible');
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimations);
    handleScrollAnimations();

    return () => {
      window.removeEventListener('scroll', handleScrollAnimations);
    };
  }, []);

  // استخدام البيانات من الترجمات
  const trailerParts = translations.trailerQata?.parts || [
    {
      id: 1,
      title: "مساعدات وبوالبين",
      image: "/images/Asset-144.webp",
    },
    {
      id: 2,
      title: "دسكات وبواكم",
      image: "/images/Asset-144.webp",
    },
    {
      id: 3,
      title: "خابور سحب",
      image: "/images/trailer-parts/khabour-towing.jpg",
    },
    {
      id: 4,
      title: "سمكره",
      image: "/images/trailer-parts/samkara.jpg",
    }
  ];

  return (
    <section className="tq-section" dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}>
      <div className="tq-container">
        <div className="section-header fade-in">
          <h2 className='section-title'>
            {translations.trailerQata?.title || "أنواع القطع المتوفرة"}
          </h2>
          <p className="tq-section-subtitle">
            {translations.trailerQata?.subtitle || "أفضل قطع غيار التيلر بأعلى جودة وأسعار تنافسية"}
          </p>
        </div>
        
        {/* قسم القطع الرئيسية */}
        <div className="tq-main-parts-grid">
          {trailerParts.map((part, index) => (
            <div 
              key={part.id} 
              className="tq-part-item tq-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="tq-part-image-container">
                <img 
                  src={part.image} 
                  alt={part.title}
                  className="tq-part-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/trailer-parts/placeholder.jpg";
                  }}
                />
                <div className="tq-part-overlay">
                  <span className="tq-part-badge">
                    {translations.trailerQata?.available || "متوفر"}
                  </span>
                </div>
              </div>
              <div className="tq-part-info">
                <h3 className="tq-part-title">{part.title}</h3>
               
              
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TailerQata;
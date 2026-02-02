import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import '../../css/Partners.css';

const PartnersSimple = () => {
  const { language } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);
  const trackRef = useRef(null);
  const timeoutRef = useRef(null);
  
  // بيانات الشركاء مع صور حقيقية
  const partners = [
    { 
      id: 1, 
      name: "SINOTRUK",
      logo: "images/Asset-141.webp",
      width: 200
    },
    { 
      id: 2, 
      name: "FREN SISTEMLERİ BRAKE SYSTEMS",
      logo: "images/Asset-142.webp",
      width: 180
    },
    { 
      id: 3, 
      name: "BTE",
      logo: "images/Asset-143.webp",
      width: 150
    },
    { 
      id: 4, 
      name: "BETTER HOLDING",
      logo: "images/Asset-144.webp",
      width: 200
    },
  ];

  // إعادة تعيين الحركة
  const resetAnimation = useCallback((mobile) => {
    if (!trackRef.current) return;
    
    const track = trackRef.current;
    
    // تنظيف أي timeout سابق
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // إزالة أي حركة سابقة فوراً
    track.style.animation = 'none';
    track.style.display = 'flex';
    
    // إعادة تشغيل الحركة بعد تحديث الـ DOM فقط للشاشات الصغيرة
    timeoutRef.current = setTimeout(() => {
      if (trackRef.current) {
        if (mobile) {
          const animationName = language === 'ar' ? 'scrollInfiniteRTL' : 'scrollInfiniteLTR';
          trackRef.current.style.animation = `${animationName} 80s linear infinite`;
          trackRef.current.style.animationPlayState = 'running';
        } else {
          // في الشاشات الكبيرة: إيقاف الحركة وإعادة تعيين التنسيق
          trackRef.current.style.animation = 'none';
          trackRef.current.style.transform = 'none';
          trackRef.current.style.justifyContent = 'center';
          trackRef.current.style.flexWrap = 'wrap';
        }
      }
    }, 50);
  }, [language]);

  // كشف حجم الشاشة
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // إعادة تشغيل الحركة عند تغيير حجم الشاشة أو اللغة
  useEffect(() => {
    resetAnimation(isMobile);
  }, [isMobile, language, resetAnimation]);

  // تنظيف عند فك التركيب
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // دالة لمعالجة أخطاء الصور
  const handleImageError = useCallback((e, partner) => {
    const img = e.target;
    img.style.display = 'none';
    
    const container = img.parentElement;
    if (container) {
      const fallback = document.createElement('div');
      fallback.className = 'partner-fallback';
      fallback.textContent = partner.name;
      container.appendChild(fallback);
    }
  }, []);

  // عرض الشركاء مع التكرار للحركة المستمرة
  const renderPartners = useCallback(() => {
    const items = [];
    
    // تكرار الشركاء لضمان استمرارية الحركة في الشاشات الصغيرة فقط
    const repeatCount = isMobile ? 3 : 1;
    
    for (let i = 0; i < repeatCount; i++) {
      partners.forEach((partner) => {
        items.push(
          <div 
            className="partner-item" 
            key={`${partner.id}-${i}`}
          >
            <img 
              src={partner.logo} 
              alt={partner.name}
              className="partner-logo"
              onError={(e) => handleImageError(e, partner)}
              loading="lazy"
            />
          </div>
        );
      });
    }
    
    return items;
  }, [isMobile, handleImageError]);

  return (
    <div className="partners-simple">
      <div className="partners-container">
        {/* العنوان الرئيسي */}
        <h1 className="main-title animated-gear-title">
          {language === 'ar' ? "شركاءنا" : "Our Partners"}
        </h1>
        
        {/* الوصف */}
        <p className="description">
          {language === 'ar' 
            ? "نفتخر بشراكتنا مع أبرز الموردين والمصانع العالمية في مجال قطع الغيار"
            : "We are proud to partner with leading global suppliers and factories in the spare parts industry"}
        </p>
        
        {/* حاوية الشركاء */}
        <div className="partners-wrapper">
          <div 
            className="partners-track"
            ref={trackRef}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: isMobile ? '40px' : '40px',
              padding: '20px 0',
              justifyContent: isMobile ? 'flex-start' : 'center',
              flexWrap: isMobile ? 'nowrap' : 'wrap'
            }}
          >
            {renderPartners()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSimple;
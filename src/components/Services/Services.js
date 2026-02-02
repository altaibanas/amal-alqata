import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import HeroServices from './HeroServices';

const Services = () => {
  const { translations,  } = useLanguage();

  useEffect(() => {
    // تأثيرات التمرير
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

  // دالة لاستبدال placeholders في النصوص
  const replacePlaceholders = (text, replacements) => {
    if (!text) return '';
    
    let result = text;
    Object.entries(replacements).forEach(([key, value]) => {
      result = result.replace(`{{${key}}}`, value);
    });
    return result;
  };

  // دالة لاستخراج آخر كلمتين من اسم القطاع
  const extractSectorKeywords = (sectorName) => {
    const words = sectorName.split(' ');
    return words.slice(-2).join(' ');
  };

  // دالة لتحويل الأيقونات إلى Font Awesome
  const getIconClassName = (icon) => {
    // إذا كانت الأيقونة تحتوي على رمز تعبيري، نستبدلها بـ Font Awesome
    if (!icon) return 'fas fa-cog'; // أيقونة افتراضية
    
    
   
    // إذا كانت الأيقونة بالفعل من Font Awesome
    if (icon.includes('fa-')) {
      return icon;
    }
    
    // إذا كانت الكلمة تشير إلى أيقونة محددة
    if (icon.toLowerCase().includes('truck')) return 'fas fa-truck';
    if (icon.toLowerCase().includes('warehouse') || icon.includes('🏭')) return 'fas fa-warehouse';
    if (icon.toLowerCase().includes('contract') || icon.includes('📄')) return 'fas fa-file-contract';
    if (icon.toLowerCase().includes('cold') || icon.includes('❄️')) return 'fas fa-snowflake';
    if (icon.toLowerCase().includes('oil')) return 'fas fa-oil-can';
    if (icon.toLowerCase().includes('hospital') || icon.includes('🏥')) return 'fas fa-hospital';
    if (icon.toLowerCase().includes('retail') || icon.includes('🏬')) return 'fas fa-store';
    if (icon.toLowerCase().includes('food') || icon.includes('🍽️')) return 'fas fa-utensils';
    if (icon.toLowerCase().includes('agriculture') || icon.includes('🌱')) return 'fas fa-seedling';
    if (icon.toLowerCase().includes('water') || icon.includes('💧')) return 'fas fa-tint';
    if (icon.toLowerCase().includes('environment') || icon.includes('🍃')) return 'fas fa-leaf';
    if (icon.toLowerCase().includes('energy') || icon.includes('⚛️')) return 'fas fa-atom';
    if (icon.toLowerCase().includes('mining') || icon.includes('💎')) return 'fas fa-gem';
    
    return 'fas fa-cog'; // أيقونة افتراضية
  };

  // دالة لاسترجاع المميزات الخاصة بكل قطاع
const getSectorFeatures = (sectorName) => {
  if (sectorName.includes('البترولية') || sectorName.includes('Oil')) {
    return [
      'أنظمة تحكم متكاملة',
      'صيانة دورية وتفقد',
      'قطع غيار أصلية',
      'دعم فني متخصص'
    ];
  } else if (sectorName.includes('المقاولات') || sectorName.includes('Construction')) {
    return [
      'معدات ثقيلة متخصصة',
      'قطع غيار أصلية للمعدات',
      'صيانة وقائية',
      'خدمات سريعة 24/7'
    ];
  } else if (sectorName.includes('حكومية') || sectorName.includes('Government')) {
    return [
      'شهادات معتمدة',
      'توثيق كامل للعمليات',
      'تقارير فنية مفصلة',
      'التزام بمعايير الجودة'
    ];
  } else if (sectorName.includes('ورش') || sectorName.includes('Workshop')) {
    return [
      'أدوات ومعدات متخصصة',
      'تدريب الفنيين',
      'حلول مخصصة',
      'دعم تقني مستمر'
    ];
  } else {
    return [
      'جودة عالية',
      'تسليم في الوقت المحدد',
      'دعم فني متكامل',
      'أسعار تنافسية'
    ];
  }
};

// دالة لتحويل الأيقونات emoji إلى صور إذا لزم الأمر
const renderSectorIcon = (icon) => {
  // إذا كان أيقونة emoji
  if (icon && icon.length <= 3) {
    return <span className="emoji-icon">{icon}</span>;
  }
  // إذا كان اسم أيقونة font awesome
  return <i className={`fas ${icon}`}></i>;
};

  return (
    <>
      {/* صفحة العنوان */}
     <HeroServices/>

      {/* القسم الرئيسي للخدمات */}
      <section className="section">
        <div className="container">
          <div className="services-hero fade-in">
            <div className="hero-content">
           
              <h1 className="hero-title animated-gear-title">{translations.servicesPage?.title}</h1>
              <h2 className="hero-subtitle">{translations.servicesPage?.subtitle}</h2>
              <p className="hero-description">{translations.servicesPage?.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* الخدمات المتخصصة */}
         <section className="hero-section about-hero">
        <div className="container">
          <div className="hero-content">
          
           
          

         
       
          </div>
        </div>
      </section>

      {/* قسم الخدمات المتخصصة */}

<section className="section bg-light" id="services-spcial">
  <div className="container">
    <div className="section-header">
      <h2 className="section-title">
        {translations.servicesPages?.specializedServices?.title}
      </h2>
      <p className="section-description">
        {translations.servicesPages?.specializedServices?.description}
      </p>
    </div>

    <div className="services-grid">
      {/* الخدمة 1 */}
      <div className="service-card">
        <div className="service-card-header">
          <div className="service-icons">
            <i className="fas fa-headset"></i>
          </div>
          <h3 className="service-title">
            {translations.servicesPages?.specializedServices?.service1?.title}
          </h3>
        </div>
        <p className="service-description">
          {translations.servicesPages?.specializedServices?.service1?.description}
        </p>
      </div>

      {/* الخدمة 2 */}
      <div className="service-card">
        <div className="service-card-header">
          <div className="service-icons">
            <i className="fas fa-shipping-fast"></i>
          </div>
          <h3 className="service-title">
            {translations.servicesPages?.specializedServices?.service2?.title}
          </h3>
        </div>
        <p className="service-description">
          {translations.servicesPages?.specializedServices?.service2?.description}
        </p>
      </div>

      {/* الخدمة 3 */}
      <div className="service-card">
        <div className="service-card-header">
          <div className="service-icons">
            <i className="fas fa-globe"></i>
          </div>
          <h3 className="service-title">
            {translations.servicesPages?.specializedServices?.service3?.title}
          </h3>
        </div>
        <p className="service-description">
          {translations.servicesPages?.specializedServices?.service3?.description}
        </p>
      </div>

      {/* الخدمة 4 */}
      <div className="service-card">
        <div className="service-card-header">
          <div className="service-icons">
            <i className="fas fa-print"></i>
          </div>
          <h3 className="service-title">
            {translations.servicesPages?.specializedServices?.service4?.title}
          </h3>
        </div>
        <p className="service-description">
          {translations.servicesPages?.specializedServices?.service4?.description}
        </p>
      </div>

      {/* الخدمة 5 */}
      <div className="service-card">
        <div className="service-card-header">
          <div className="service-icons">
            <i className="fas fa-laptop-code"></i>
          </div>
          <h3 className="service-title">
            {translations.servicesPages?.specializedServices?.service5?.title}
          </h3>
        </div>
        <p className="service-description">
          {translations.servicesPages?.specializedServices?.service5?.description}
        </p>
      </div>

      {/* الخدمة 6 */}
      <div className="service-card">
        <div className="service-card-header">
          <div className="service-icons">
            <i className="fas fa-oil-can"></i>
          </div>
          <h3 className="service-title">
            {translations.servicesPages?.specializedServices?.service6?.title}
          </h3>
        </div>
        <p className="service-description">
          {translations.servicesPages?.specializedServices?.service6?.description}
        </p>
      </div>

      {/* الخدمة 7 */}
      <div className="service-card">
        <div className="service-card-header">
          <div className="service-icons">
            <i className="fas fa-tools"></i>
          </div>
          <h3 className="service-title">
            {translations.servicesPages?.specializedServices?.service7?.title}
          </h3>
        </div>
        <p className="service-description">
          {translations.servicesPages?.specializedServices?.service7?.description}
        </p>
      </div>
    </div>
  </div>
</section>

      {/* القطاعات المستهدفة */}
    <section className="section">
  <div className="container">
    <div className="sectors-section">
      <div className="sectors-content">
        <div className="section-header fade-in">
          <h2 className="section-title">{translations.servicesPag?.targetSectors?.title}</h2>
          <p className="section-subtitle">{translations.servicesPag?.targetSectors?.subtitle}</p>
          <p className="section-description">{translations.servicesPag?.targetSectors?.description}</p>
        </div>
        
        <div className="sectors-grid">
          {translations.servicesPag?.targetSectors?.sectors?.map((sector, index) => {
            // استخراج اسم القطاع للاستخدام في الوصف
            const sectorName = sector.name;
            
            // استخدام الصور المناسبة لكل قطاع
            const getSectorImage = (sectorName) => {
              if (sectorName.includes('البترولية') || sectorName.includes('Oil')) {
                return '/images/sectors/oil-factory.jpg';
              } else if (sectorName.includes('النقل') || sectorName.includes('Transport')) {
                return '/images/sectors/transport.jpg';
              } else if (sectorName.includes('المقاولات') || sectorName.includes('Construction')) {
                return '/images/sectors/construction.jpg';
              } else if (sectorName.includes('حكومية') || sectorName.includes('Government')) {
                return '/images/sectors/government.jpg';
              } else if (sectorName.includes('ورش') || sectorName.includes('Workshop')) {
                return '/images/sectors/workshop.jpg';
              }
              return '/images/sectors/default.jpg';
            };
            
            // إعداد الوصف مع استبدال النص المميز
            const sectorDescription = translations.servicesPag?.targetSectors?.sectorDescription
              ?.replace('{{sector}}', sectorName);
            
            // الحصول على لون مميز لكل قطاع
            const getSectorColor = (index) => {
              const colors = [
                'linear-gradient(135deg, #EBEFF1, #EBEFF1)', // أزرق
                'linear-gradient(135deg, #EBEFF1, #EBEFF1)',
               'linear-gradient(135deg, #EBEFF1, #EBEFF1)',
                'linear-gradient(135deg, #EBEFF1, #EBEFF1)',
                'linear-gradient(135deg, #EBEFF1, #EBEFF1)',
              ];
              return colors[index % colors.length];
            };
            
            return (
              <div 
                key={index} 
                className="sector-card fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* صورة الخلفية للقطاع */}
                <div 
                  className="sector-background"
                  style={{
                    backgroundImage: `url(${getSectorImage(sector.name)})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="sector-overlay"></div>
                </div>
                
                {/* أيقونة القطاع */}
                <div className="sector-icon-wrapper">
                  <div 
                    className="sector-icon"
                    style={{ background: getSectorColor(index) }}
                  >
                    <i className={sector.icon}></i>
                  </div>
                 
                </div>
                
                {/* محتوى القطاع */}
                <div className="sector-content">
                  <h3 className="sector-name">{sector.name}</h3>
                  <div className="sector-divider"></div>
                  <p className="sector-description">{sectorDescription}</p>
                  
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
</section>
      {/* دعوة للاتصال */}
      <section className="section bg-light">
        <div className="container">
          <div className="cta-section fade-in">
            <div className="cta-content">
              <h2 className="cta-title">{translations.servicesPage?.cta?.title}</h2>
              <p className="cta-description">{translations.servicesPage?.cta?.description}</p>
              <div className="cta-buttons">
                <a  href="contact" className="btn btn-primary-services">
                  <i className="fas fa-comments"></i>
                  {translations.servicesPage?.cta?.buttons?.consultation}
                </a>
              <a href="tel:+966500022169" className="btn btn-secondary-services">
                <i className="fas fa-phone-alt"></i>
                {translations.servicesPage?.cta?.buttons?.contact}
              </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
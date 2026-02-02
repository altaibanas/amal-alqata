import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import '../../css/herocontact.css';

const HeroContact = () => {
  const { translations, language, isRTL } = useLanguage();

  useEffect(() => {
    // تأثيرات التمرير
    const handleScrollAnimations = () => {
      const fadeElements = document.querySelectorAll('.fade-in-contact');
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
          element.classList.add('visible-contact');
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimations);
    handleScrollAnimations();

    return () => {
      window.removeEventListener('scroll', handleScrollAnimations);
    };
  }, []);

  return (
    <section className="hero-contact" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container">
        <div className="hero-contact-grid">
          {/* المحتوى النصي */}

          <div className="hero-contact-content fade-in-contact">
            <div className="contact-badge">
              <span className="badge-dot-contact"></span>
              <span>{translations.contactPages?.heroContact?.badge || "انصل بنا"}</span>
            </div>
            
            <h1 className="contact-title">
              {translations.contactPages?.heroContact?.title || "نحن هنا لمساعدتك!"}
            </h1>
            
            <p className="contact-description">
              {translations.contactPages?.heroContact?.description || 
                "فريقنا من الخبراء جاهز للإجابة على استفساراتك وتقديم الدعم اللازم. تواصل معنا اليوم للحصول على أفضل الحلول لاحتياجاتك."}
            </p>
            
            <div className="contact-features">
              {translations.contactPages?.heroContact?.features?.map((feature, index) => (
                <div key={index} className="contact-feature-item">
                  <div className="contact-feature-icon">
                    <i className={feature.icon || "fas fa-phone-alt"}></i>
                  </div>
                  <div className="contact-feature-content">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                    <a href={feature.link} className="contact-feature-link">
                      {feature.linkText} <i className="fas fa-arrow-left"></i>
                    </a>
                  </div>
                </div>
              )) || (
                <>
                  <div className="contact-feature-item">
                    <div className="contact-feature-icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="contact-feature-content">
                      <h3>اتصل بنا</h3>
                      <p>تواصل مع فريق المبيعات والدعم على مدار الساعة</p>
                      <a href="tel:+966123456789" className="contact-feature-link">
                        +966500022169 <i className="fas fa-arrow-left"></i>
                      </a>
                    </div>
                  </div>
                  
                  <div className="contact-feature-item">
                    <div className="contact-feature-icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="contact-feature-content">
                      <h3>البريد الإلكتروني</h3>
                      <p>أرسل استفسارك وسنرد عليك في أسرع وقت</p>
                      <a href="mailto:info@amal-alqata.com" className="contact-feature-link">
                        info@amal-alqata.com <i className="fas fa-arrow-left"></i>
                      </a>
                    </div>
                  </div>
                </>
              )}
            </div>
            
            <div className="contact-cta">
              <a href="https://wa.me/966552065095" className="btn btn-primary-contact">
                <i className="fas fa-comments"></i>
                {translations.contactPages?.heroContact?.ctaPrimary || "تواصل معنا الآن"}
              </a>
              <a href="https://www.google.com/maps/place/Al+Kharj+Rd+Saudi+Arabia/@24.497624,46.940824,12z/data=!4m6!3m5!1s0x3e2f08a99af66523:0xb622d01ae835df69!8m2!3d24.4976241!4d46.9408241!16s%2Fg%2F1v8y2j1t?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D" className="btn btn-secondary-contact">
                <i className="fas fa-map-marker-alt"></i>
                {translations.contactPages?.heroContact?.ctaSecondary || "زيارة المقر الرئيسي"}
              </a>
            </div>
          </div>
          
         
        </div>
      </div>
    </section>
  );
};

export default HeroContact;
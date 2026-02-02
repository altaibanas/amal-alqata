import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { translations, language } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // تحديث السنة الحالية
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
      yearElement.textContent = currentYear;
    }
  }, []);

  // دالة للتعامل مع النقر على روابط التنقل - تنتقل دائمًا إلى أعلى الصفحة
  const handleLinkClick = (path, e) => {
    e.preventDefault();
    
    if (location.pathname === path) {
      // إذا كنا بالفعل في نفس الصفحة، ننتقل إلى أعلى الصفحة
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // الانتقال إلى صفحة جديدة ثم الانتقال إلى أعلى الصفحة
      navigate(path);
      // إضافة تأخير بسيط للتأكد من تحميل الصفحة قبل التمرير لأعلى
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const navItems = [
    { 
      id: 'home', 
      text: translations.nav?.home || 'الرئيسية',
      path: '/'
    },
    { 
      id: 'about', 
      text: translations.nav?.about || 'عن الشركة',
      path: '/about'
    },
    { 
      id: 'products', 
      text: translations.nav?.products || 'المنتجات',
      path: '/products'
    },
    { 
      id: 'services', 
      text: translations.nav?.services || 'الخدمات',
      path: '/services'
    },
    { 
      id: 'blog', 
      text: translations.nav?.blog || 'المدونة',
      path: '/blog'
    },
    { 
      id: 'contact', 
      text: translations.nav?.contact || 'اتصل بنا',
      path: '/contact'
    }
  ];

  const socialLinks = [
    { 
      platform: 'x-twitter', 
      icon: 'fab fa-x',
      title: language === 'ar' ? 'اكس' : 'Twitter',
      url: 'https://x.com/amaal_alqata'
    },
    { 
      platform: 'facebook-f', 
      icon: 'fab fa-facebook-f',
      title: language === 'ar' ? 'فيسبوك' : 'Facebook',
      url: 'https://www.facebook.com/amaal.alqata'
    },
    { 
      platform: 'tiktok', 
      icon: 'fab fa-tiktok',
      title: language === 'ar' ? 'تيك توك' : 'TikTok',
      url: 'https://www.tiktok.com/@amaal.alqata'
    },
    { 
      platform: 'instagram', 
      icon: 'fab fa-instagram',
      title: language === 'ar' ? 'إنستغرام' : 'Instagram',
      url: 'https://www.instagram.com/amaal.alqata/'
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* معلومات الشركة */}
          <div className="footer-about">
            <Link to="/" className="logo">
              <div className="logo-icon">
                <img src='images/logo.webp' alt={translations.common?.companyName || 'شعار الشركة'} />
              </div>
              <div className="logo-text">
                <h1>{translations.common?.companyName || 'أمل القطا'}</h1>
              </div>
            </Link>
            
            <p className="footer-description">
              {translations.footer?.description || 'شركة رائدة في مجالها'}
            </p>
            
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  className="social-icon" 
                  title={social.title}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* روابط سريعة */}
          <div className="footer-links">
            <h4>{translations.footer?.quickLinks || 'روابط سريعة'}</h4>
            {navItems.map((item) => (
              <a 
                key={item.id}
                href={item.path}
                onClick={(e) => handleLinkClick(item.path, e)}
                className="footer-link"
              >
                {item.text}
              </a>
            ))}
          </div>

          {/* معلومات الاتصال */}
          <div className="footer-contact">
            <h4>{translations.footer?.contactInfo || 'معلومات الاتصال'}</h4>
            
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <a 
                href={`https://maps.google.com/?q=${encodeURIComponent(translations.footer?.address || 'السعودية')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {translations.footer?.address || 'العنوان'}
              </a>
            </div>
            
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <a href="tel:+966500022169">
               +966500022169
              </a>
            </div>
            
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:info@amal-alqata.com">
                info@amal-alqata.com
              </a>
            </div>
            
            <div className="contact-item">
              <i className="fab fa-whatsapp"></i>
              <a 
                href="https://wa.me/966552065095"
                target="_blank"
                rel="noopener noreferrer"
              >
                +966 55 206 5095
              </a>
            </div>
          </div>
        </div>

        {/* حقوق النشر */}
        <div className="footer-bottom">
          <p>&copy; <span id="currentYear">2026</span> {translations.footer?.copyright || 'جميع الحقوق محفوظة'}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
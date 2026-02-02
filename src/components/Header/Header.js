import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const Header = () => {
  const { translations, language, toggleLanguage, isRTL } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    setMobileProductsOpen(false);
  }, [location]);

  // إغلاق القائمة المنسدلة عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProductsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // قائمة الروابط الأساسية
  const navItems = [
    { id: 'home', path: '/', icon: 'fa-home', text: translations.nav?.home },
    { id: 'about', path: '/about', icon: 'fa-info-circle', text: translations.nav?.about },
    // { id: 'products', path: '/products', icon: 'fa-info-circle', text: translations.nav?.products },
    { id: 'services', path: '/services', icon: 'fa-handshake', text: translations.nav?.sevices },
    { id: 'blog', path: '/blog', icon: 'fa-award', text: translations.nav?.blog },
    { id: 'contact', path: '/contact', icon: 'fa-envelope', text: translations.nav?.contact }
  ];

  // قائمة المنتجات الفرعية مع دعم اللغتين - المسارات المعدلة
  const productsSubmenu = [
    { 
      id: 'chinese-trucks', 
      path: '/products/chineseTrucks', 
      text: language === 'ar' ? 'قطع غيار الشاحنات الصينية' : 'Chinese Truck Parts',
      icon: 'fa-truck'
    },
    { 
      id: 'trailer-parts', 
      path: '/products/TrailerCutting', 
      text: language === 'ar' ? 'قطع غيار المقطورات' : 'Trailer Parts',
      icon: 'fa-trailer'
    },
    { 
      id: 'petroleum-parts', 
      path: '/products/petroleum', 
      text: language === 'ar' ? 'قطع غيار التعبئة والتفريغ البترولي' : 'Petroleum Loading/Unloading Parts',
      icon: 'fa-oil-can'
    }
  ];

  // دالة لتبديل اتجاه أيقونة السهم حسب اللغة
  const getArrowIcon = (isOpen = false) => {
    return isOpen ? 'fa-chevron-up' : 'fa-chevron-down';
  };

  const getMobileArrowIcon = () => {
    return mobileProductsOpen ? 'fa-chevron-up' : 'fa-chevron-down';
  };

  // التعامل مع فتح القائمة المنسدلة عند التمرير
  const handleMouseEnter = () => {
    if (window.innerWidth > 768) { // للأجهزة الكبيرة فقط
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
      setProductsDropdownOpen(true);
    }
  };

  // التعامل مع إغلاق القائمة المنسدلة بعد تأخير
  const handleMouseLeave = () => {
    if (window.innerWidth > 768) { // للأجهزة الكبيرة فقط
      dropdownTimeoutRef.current = setTimeout(() => {
        setProductsDropdownOpen(false);
      }, 300); // تأخير 300 مللي ثانية لمنع الإغلاق السريع
    }
  };

  // النقر على رابط المنتجات الرئيسي
  const handleProductsClick = (e) => {
    if (window.innerWidth <= 768) { // للجوال
      e.preventDefault();
      setMobileProductsOpen(!mobileProductsOpen);
    } else { // للشاشات الكبيرة
      navigate('/products');
      setProductsDropdownOpen(false);
    }
  };

  // النقر على رابط فرعي في القائمة المنسدلة
  const handleSubmenuItemClick = (path) => {
    navigate(path);
    setProductsDropdownOpen(false);
    setMobileProductsOpen(false);
    setMobileMenuOpen(false);
  };

  // التحقق إذا كان الرابط نشط (صفحة منتجات رئيسية أو فرعية)
  const isProductsActive = () => {
    return location.pathname === '/products' || 
           location.pathname === '/products/chineseTrucks' ||
           location.pathname === '/products/TrailerCutting' ||
           location.pathname === '/products/petroleum';
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container">
        <div className="nav-container">
          {/* الشعار */}
          <NavLink to="/" className="logo">
            <div className="logo-icon">
              <img src='images/logo.webp' alt='' />
            </div>
            <div className="logo-text">
              <h1>{translations.common?.companyName}</h1>
            </div>
          </NavLink>

          {/* روابط التنقل */}
          <div className="nav-links" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
            {/* الرئيسية */}
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? 'active' : ''}
              end
            >
              {translations.nav?.home}
            </NavLink>

            {/* من نحن */}
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              {translations.nav?.about}
            </NavLink>
            
            {/* قائمة المنتجات المنسدلة */}
            <div 
              ref={dropdownRef}
              className="nav-item dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ direction: isRTL ? 'rtl' : 'ltr' }}
            >
              <NavLink
                to="/products"
                className={`nav-link ${isProductsActive() ? 'active' : ''}`}
                onClick={handleProductsClick}
                onMouseEnter={() => {
                  if (window.innerWidth > 768) {
                    handleMouseEnter();
                  }
                }}
              >
                {translations.nav?.products}
                <i className={`fas ${getArrowIcon(productsDropdownOpen)}`} 
                   style={{ 
                     marginRight: language === 'ar' ? '5px' : '0', 
                     marginLeft: language === 'en' ? '5px' : '0',
                     transition: 'transform 0.3s ease'
                   }}></i>
              </NavLink>
              {productsDropdownOpen && (
                <div 
                  className="dropdown-menu"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{ 
                    right: language === 'ar' ? '0' : 'auto',
                    left: language === 'en' ? '0' : 'auto',
                    textAlign: language === 'ar' ? 'right' : 'left',
                    minWidth: '280px'
                  }}
                >
                  {productsSubmenu.map((item) => (
                    <div
                      key={item.id}
                      className={`dropdown-item ${location.pathname === item.path ? 'active-submenu' : ''}`}
                      onClick={() => handleSubmenuItemClick(item.path)}
                      style={{ 
                        direction: isRTL ? 'rtl' : 'ltr',
                        textAlign: language === 'ar' ? 'right' : 'left',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        cursor: 'pointer'
                      }}
                    >
                      <i className={`fas ${item.icon}`} style={{ width: '20px' }}></i>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* باقي الروابط */}
            {navItems.slice(2).map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {item.text}
              </NavLink>
            ))}
          </div>

          {/* زر تحميل الكتالوج */}
          <a 
            href="/شركة-أعمال-القطع،-الملف-التعريفي (1).pdf" 
            className="nav-phone" 
            download={language === 'ar' ? "الملف التعريفي.pdf" : "Company-Profile.pdf"}
            onClick={() => setMobileMenuOpen(false)}
            style={{ direction: isRTL ? 'rtl' : 'ltr' }}
          >
            <i className="fas fa-file-pdf"></i>
            {translations.nav?.download || (language === 'ar' ? "تحميل الكتالوج" : "Download Catalog")}
          </a>

          {/* مفتاح تبديل اللغة */}
          <button className="language-switcher" onClick={toggleLanguage}>
            <i className="fas fa-globe"></i>
            {language === 'ar' ? 'EN' : 'العربية'}
          </button>

          {/* زر القائمة للجوال */}
          <button 
            id="menuToggle" 
            className="menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 
              (language === 'ar' ? 'إغلاق القائمة' : 'Close menu') : 
              (language === 'ar' ? 'فتح القائمة' : 'Open menu')
            }
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>

        {/* قائمة الجوال */}
        <div 
          id="mobileMenu" 
          className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}
          style={{ direction: isRTL ? 'rtl' : 'ltr' }}
        >
          <div className="mobile-links">
            {/* الرئيسية */}
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? 'active' : ''}
              end
              onClick={() => setMobileMenuOpen(false)}
              style={{ direction: isRTL ? 'rtl' : 'ltr' }}
            >
              <i className="fas fa-home"></i>
              {translations.nav?.home}
            </NavLink>

            {/* من نحن */}
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={() => setMobileMenuOpen(false)}
              style={{ direction: isRTL ? 'rtl' : 'ltr' }}
            >
              <i className="fas fa-info-circle"></i>
              {translations.nav?.about}
            </NavLink>
            
            {/* قائمة المنتجات في الجوال */}
            <div className="mobile-products-item">
              <div 
                className={`mobile-products-toggle ${isProductsActive() ? 'active' : ''}`}
                style={{ 
                  direction: isRTL ? 'rtl' : 'ltr',
                  textAlign: language === 'ar' ? 'right' : 'left',
                  justifyContent: language === 'ar' ? 'space-between' : 'space-between',
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  padding: '15px 20px',
                  background: 'transparent',
                  border: 'none',
                  color: 'inherit',
                  fontSize: '16px',
                  cursor: 'pointer'
                }}
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fas fa-box-open"></i>
                  {translations.nav?.products}
                </div>
                <i className={`fas ${getMobileArrowIcon()}`}></i>
              </div>
              {mobileProductsOpen && (
                <div 
                  className="mobile-products-submenu"
                  style={{ 
                    paddingRight: language === 'ar' ? '30px' : '15px',
                    paddingLeft: language === 'en' ? '30px' : '15px',
                    textAlign: language === 'ar' ? 'right' : 'left'
                  }}
                >
                  <div
                    className={`mobile-submenu-item ${location.pathname === '/products' ? 'active-submenu' : ''}`}
                    onClick={() => {
                      handleSubmenuItemClick('/products');
                    }}
                    style={{ 
                      direction: isRTL ? 'rtl' : 'ltr',
                      textAlign: language === 'ar' ? 'right' : 'left',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '12px 20px',
                      paddingRight: language === 'ar' ? '40px' : '20px',
                      paddingLeft: language === 'en' ? '40px' : '20px',
                      cursor: 'pointer'
                    }}
                  >
                    <i className="fas fa-boxes"></i>
                    {language === 'ar' ? 'جميع المنتجات' : 'All Products'}
                  </div>
                  
                  {productsSubmenu.map((item) => (
                    <div
                      key={item.id}
                      className={`mobile-submenu-item ${location.pathname === item.path ? 'active-submenu' : ''}`}
                      onClick={() => {
                        handleSubmenuItemClick(item.path);
                      }}
                      style={{ 
                        direction: isRTL ? 'rtl' : 'ltr',
                        textAlign: language === 'ar' ? 'right' : 'left',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '12px 20px',
                        paddingRight: language === 'ar' ? '40px' : '20px',
                        paddingLeft: language === 'en' ? '40px' : '20px',
                        cursor: 'pointer'
                      }}
                    >
                      <i className={`fas ${item.icon}`} style={{ width: '20px' }}></i>
                      {item.text}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* باقي الروابط للجوال */}
            {navItems.slice(2).map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={() => setMobileMenuOpen(false)}
                style={{ direction: isRTL ? 'rtl' : 'ltr' }}
              >
                <i className={`fas ${item.icon}`}></i>
                {item.text}
              </NavLink>
            ))}
            
            <a 
              href="/شركة-أعمال-القطع،-الملف-التعريفي (1).pdf" 
              className="mobile-phone" 
              download={language === 'ar' ? "الملف التعريفي.pdf" : "Company-Profile.pdf"}
              onClick={() => setMobileMenuOpen(false)}
              style={{ direction: isRTL ? 'rtl' : 'ltr' }}
            >
              <i className="fas fa-file-pdf"></i>
              {translations.nav?.download || (language === 'ar' ? "تحميل الملف التعريفي" : "Download Profile")}
            </a>
            
            {/* تبديل اللغة في الجوال */}
            <button className="mobile-language-switcher" onClick={toggleLanguage}>
              <i className="fas fa-globe"></i>
              {language === 'ar' ? 'English' : 'العربية'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
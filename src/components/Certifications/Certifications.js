import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const Certifications = () => {
  const { translations, language } = useLanguage();

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

  const createMarkup = (html) => {
    return { __html: html };
  };

  return (
    <>
      {/* صفحة العنوان */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <h1>{translations.certificationsPage?.title}</h1>
            <p>{translations.certificationsPage?.subtitle}</p>
            <nav className="breadcrumb">
              <Link to="/">{translations.certificationsPage?.breadcrumb?.home}</Link>
              <span>/</span>
              <span className="current">{translations.certificationsPage?.breadcrumb?.current}</span>
            </nav>
          </div>
        </div>
      </section>

      {/* شهادة ISO الرئيسية */}
      <section className="section">
        <div className="container">
          <div className="certification-hero fade-in">
            <div className="certification-content">
              {/* <span className="section-subtitle">// {translations.certificationsPage?.isoCertification?.subtitle} //</span> */}
              <h2 dangerouslySetInnerHTML={createMarkup(translations.certificationsPage?.isoCertification?.title || '')} />
              <p className="lead" dangerouslySetInnerHTML={{ __html: translations.certificationsPage?.isoCertification?.description }} />
              
              <div className="certification-benefits">
                {translations.certificationsPage?.isoCertification?.benefits?.map((benefit, index) => (
                  <div key={index} className="benefit-item">
                    <i className="fas fa-check-circle"></i>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="certification-details">
                <div className="detail-item">
                  <div className="detail-label">{language === 'ar' ? 'تاريخ الحصول:' : 'Obtained Date:'}</div>
                  <div className="detail-value">{translations.certificationsPage?.isoCertification?.details?.obtained}</div>
                </div>
                <div className="detail-item">
                  <div className="detail-label">{language === 'ar' ? 'تاريخ التجديد:' : 'Renewal Date:'}</div>
                  <div className="detail-value">{translations.certificationsPage?.isoCertification?.details?.renewed}</div>
                </div>
                <div className="detail-item">
                  <div className="detail-label">{language === 'ar' ? 'جهة الإصدار:' : 'Issuing Authority:'}</div>
                  <div className="detail-value">{translations.certificationsPage?.isoCertification?.details?.issuer}</div>
                </div>
              </div>
            </div>
            
            <div className="certification-badge fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="badge-container">
                <div className="iso-badge">
                  <div className="iso-text">ISO</div>
                  <div className="iso-number">9001:2015</div>
                  <div className="iso-certified">
                    {language === 'ar' ? 'شهادة معتمدة' : 'Certified'}
                  </div>
                </div>
                <div className="badge-ribbon">
                  <i className="fas fa-award"></i>
                  <span>{language === 'ar' ? 'شهادة الجودة' : 'Quality Certificate'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* معايير الجودة */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header fade-in">
            {/* <span className="section-subtitle">// {translations.certificationsPage?.standards?.subtitle} //</span> */}
            <h2 dangerouslySetInnerHTML={createMarkup(translations.certificationsPage?.standards?.title || '')} />
          </div>
          
          <div className="standards-grid">
            {translations.certificationsPage?.standards?.items?.map((standard, index) => (
              <div 
                key={index} 
                className="standard-card fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="standard-icon">
                  <i className={`fas ${
                    index === 0 ? 'fa-clipboard-check' :
                    index === 1 ? 'fa-user-check' :
                    'fa-sync-alt'
                  }`}></i>
                </div>
                <h3>{standard.title}</h3>
                <p>{standard.description}</p>
                <ul className="standard-list">
                  {standard.features?.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* لماذا نحن */}
      <section className="section">
        <div className="container">
          <div className="section-header fade-in">
            {/* <span className="section-subtitle">// {translations.certificationsPage?.advantages?.subtitle} //</span> */}
            <h2 dangerouslySetInnerHTML={createMarkup(translations.certificationsPage?.advantages?.title || '')} />
            <p>{translations.certificationsPage?.advantages?.description}</p>
          </div>
          
          <div className="advantages-grid">
            {translations.certificationsPage?.advantages?.items?.map((advantage, index) => (
              <div 
                key={index} 
                className="advantage-card fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="advantage-number">{`0${index + 1}`}</div>
                <div className="advantage-content">
                  <h3>{advantage.title}</h3>
                  <p>{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* بيان الجودة */}
          <div className="quality-statement fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="statement-header">
              <h3>{translations.certificationsPage?.qualityStatement?.title}</h3>
              <p>{translations.certificationsPage?.qualityStatement?.description}</p>
            </div>
            <div className="statement-metrics">
              {translations.certificationsPage?.qualityStatement?.metrics?.map((metric, index) => (
                <div key={index} className="metric-item">
                  <div className="metric-number">{metric.value}</div>
                  <div className="metric-label">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* شهادات إضافية */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header fade-in">
            {/* <span className="section-subtitle">// {translations.certificationsPage?.additionalCertifications?.subtitle} //</span> */}
            <h2 dangerouslySetInnerHTML={createMarkup(translations.certificationsPage?.additionalCertifications?.title || '')} />
          </div>
          
          <div className="additional-certs">
            {translations.certificationsPage?.additionalCertifications?.items?.map((cert, index) => (
              <div 
                key={index} 
                className="cert-item fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="cert-icon">
                  <i className={`fas ${
                    index === 0 ? 'fa-shield-alt' :
                    index === 1 ? 'fa-gas-pump' :
                    'fa-truck'
                  }`}></i>
                </div>
                <div className="cert-content">
                  <h3>{cert.title}</h3>
                  <p>{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* دعوة للتواصل */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content fade-in">
            <h2>{translations.certificationsPage?.cta?.title}</h2>
            <p>{translations.certificationsPage?.cta?.description}</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                <i className="fas fa-envelope"></i>
                {translations.certificationsPage?.cta?.buttons?.samples}
              </Link>
              <a href="tel:+966552065095" className="btn btn-secondary">
                <i className="fas fa-phone"></i>
                {translations.certificationsPage?.cta?.buttons?.visit}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Certifications;
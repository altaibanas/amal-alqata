import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import HeroContact from './HeroContact';

const Contact = () => {
  const { translations, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [activeFaq, setActiveFaq] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});

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

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // إزالة خطأ الحقل عند البدء بالكتابة
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]+$/;

    if (!formData.name.trim()) {
      errors.name = language === 'ar' ? 'الرجاء إدخال الاسم الكامل' : 'Please enter full name';
    }

    if (!formData.email.trim()) {
      errors.email = language === 'ar' ? 'الرجاء إدخال البريد الإلكتروني' : 'Please enter email';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = language === 'ar' ? 'الرجاء إدخال بريد إلكتروني صحيح' : 'Please enter valid email';
    }

    if (!formData.phone.trim()) {
      errors.phone = language === 'ar' ? 'الرجاء إدخال رقم الهاتف' : 'Please enter phone number';
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = language === 'ar' ? 'الرجاء إدخال رقم هاتف صحيح' : 'Please enter valid phone number';
    }

    if (!formData.subject) {
      errors.subject = language === 'ar' ? 'الرجاء اختيار موضوع الرسالة' : 'Please select message subject';
    }

    if (!formData.message.trim()) {
      errors.message = language === 'ar' ? 'الرجاء كتابة رسالتك' : 'Please write your message';
    } else if (formData.message.trim().length < 10) {
      errors.message = language === 'ar' ? 'الرجاء كتابة رسالة أكثر تفصيلاً' : 'Please write a more detailed message';
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setFormErrors({});

    try {
      // محاكاة إرسال النموذج
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // في التطبيق الحقيقي: إرسال البيانات إلى الخادم
      console.log('Form data:', formData);
      
      // إظهار رسالة نجاح
      alert(language === 'ar' 
        ? 'تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.' 
        : 'Your message has been sent successfully! We will contact you soon.');
      
      // إعادة تعيين النموذج
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(language === 'ar' 
        ? 'حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.' 
        : 'An error occurred while sending the message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openGoogleMaps = () => {
    const address = language === 'ar' 
      ? 'الرياض، السعودية' 
      : 'Riyadh, Saudi Arabia';
    window.open(`https://maps.google.com/?q=${encodeURIComponent(address)}`, '_blank');
  };

  return (
    <>
      {/* صفحة العنوان */}
     <HeroContact/>

    

      {/* نموذج الاتصال */}
      <section className="section bg-light">
        <div className="container">
          <div className="contact-form-section">
            <div className="form-intro fade-in">
              {/* <span className="section-subtitle">// {translations.contactPage?.contactForm?.subtitle} //</span> */}
              <h2 dangerouslySetInnerHTML={createMarkup(translations.contactPage?.contactForm?.title || '')} />
              <p>{translations.contactPage?.contactForm?.description}</p>
              
              <div className="form-features">
                {translations.contactPage?.contactForm?.features?.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <i className={`fas fa-${feature.icon}`}></i>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="contact-form fade-in" style={{ animationDelay: '0.1s' }}>
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">{translations.contactPage?.contactForm?.form?.name?.label}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder={translations.contactPage?.contactForm?.form?.name?.placeholder}
                    className={formErrors.name ? 'error' : ''}
                  />
                  {formErrors.name && <div className="error-message">{formErrors.name}</div>}
                </div>
                
               
                  <div className="form-group">
                    <label htmlFor="email">{translations.contactPage?.contactForm?.form?.email?.label}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder={translations.contactPage?.contactForm?.form?.email?.placeholder}
                      className={formErrors.email ? 'error' : ''}
                    />
                    {formErrors.email && <div className="error-message">{formErrors.email}</div>}
                  </div>
                  
                  
                
                
             
              
                
                <div className="form-group">
                  <label htmlFor="message">{translations.contactPage?.contactForm?.form?.message?.label}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder={translations.contactPage?.contactForm?.form?.message?.placeholder}
                    className={formErrors.message ? 'error' : ''}
                  ></textarea>
                  {formErrors.message && <div className="error-message">{formErrors.message}</div>}
                </div>
                
                <div className="form-submit">
                  <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i>
                        {language === 'ar' ? 'جاري الإرسال...' : 'Sending...'}
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane"></i>
                        {translations.contactPage?.contactForm?.form?.submit}
                      </>
                    )}
                  </button>
                  <p className="form-note">{translations.contactPage?.contactForm?.form?.note}</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* معلومات إضافية */}
      <section className="section">
        <div className="container">
          <div className="additional-info">
          
            
            {/* كيفية الوصول إلينا */}
            <div className="info-section fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="section-header">
                <h3><i className="fas fa-map-marked-alt"></i> {translations.contactPage?.additionalInfo?.location?.title}</h3>
              </div>
              <div className="location-info">
                <p>{translations.contactPage?.additionalInfo?.location?.description}</p>
               
              </div>
            </div>
            
            {/* الدعم الفني */}
            <div className="info-section fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="section-header">
                <h3><i className="fas fa-headset"></i> {translations.contactPage?.additionalInfo?.support?.title}</h3>
              </div>
              <div className="support-info">
                <p>{translations.contactPage?.additionalInfo?.support?.description}</p>
                <ul className="support-list">
                  {translations.contactPage?.additionalInfo?.support?.items?.map((item, index) => (
                    <li key={index}>
                      <i className="fas fa-check"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* خريطة الموقع
      <section className="section bg-light">
        <div className="container">
          <div className="map-section fade-in">
            <div className="section-header">
              <h3><i className="fas fa-map"></i> {translations.contactPage?.map?.title}</h3>
            </div>
            <div className="map-container">
              <div className="map-placeholder">
                <div className="map-content">
                  <i className="fas fa-map-marker-alt"></i>
                  <h4>{translations.contactPage?.map?.address}</h4>
                  <p>{translations.contactPage?.map?.location}</p>
                  <button 
                    onClick={openGoogleMaps} 
                    className="btn btn-secondary"
                  >
                    <i className="fas fa-directions"></i>
                    {translations.contactPage?.map?.button}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* الأسئلة الشائعة */}
      <section className="section">
        <div className="container">
          <div className="section-header fade-in">
            {/* <span className="section-subtitle">// {translations.contactPage?.faq?.subtitle} //</span> */}
            <h2 dangerouslySetInnerHTML={createMarkup(translations.contactPage?.faq?.title || '')} />
          </div>
          
          <div className="faq-container">
            {translations.contactPage?.faq?.items?.map((item, index) => (
              <div 
                key={index} 
                className={`faq-item fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{item.question}</span>
                  <i className={`fas ${activeFaq === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </button>
                <div className={`faq-answer ${activeFaq === index ? 'active' : ''}`}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="faq-cta fade-in" style={{ animationDelay: '0.4s' }}>
            <p>
              {translations.contactPage?.faq?.cta}{' '}
              <a href="#contactForm">{translations.contactPage?.faq?.link}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
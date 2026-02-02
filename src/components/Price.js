import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../css/Price.css';

const Price = () => {
  const { translations, language, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    request: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    // تأثيرات التمرير
    const handleScrollAnimations = () => {
      const fadeElements = document.querySelectorAll('.fade-in');
      const slideElements = document.querySelectorAll('.slide-in');
      
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
          element.classList.add('visible');
        }
      });

      slideElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 150) {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // هنا يمكنك إضافة منطق إرسال البيانات للخادم
      await new Promise(resolve => setTimeout(resolve, 1500)); // محاكاة إرسال
      
      setSubmitMessage(translations.pricePage?.form?.successMessage || 'تم إرسال طلبك بنجاح!');
      setFormData({ name: '', email: '', request: '' });
      
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    } catch (error) {
      setSubmitMessage(translations.pricePage?.form?.errorMessage || 'حدث خطأ، يرجى المحاولة مرة أخرى');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* صفحة العنوان */}
      <section className="page-header price-header">
        <div className="container">
          <div className="page-header-content">
            <h1>{translations.pricePage?.title}</h1>
            <p>{translations.pricePage?.subtitle}</p>
           
          </div>
        </div>
      </section>

      {/* نموذج طلب عرض سعر */}
      <section className="section quote-section">
        <div className="container">
          <div className="quote-form-container">
            <div className="form-header fade-in">
              <h2>{translations.pricePage?.quoteForm?.title}</h2>
              <p>{translations.pricePage?.quoteForm?.subtitle}</p>
            </div>
            
            <div className="form-wrapper">
              <form onSubmit={handleSubmit} className="quote-form fade-in">
                {submitMessage && (
                  <div className={`alert ${submitMessage.includes('خطأ') ? 'alert-error' : 'alert-success'}`}>
                    <i className="fas fa-info-circle"></i>
                    {submitMessage}
                  </div>
                )}

                <div className="form-group">
                  <div className="input-group">
                    <label htmlFor="name">
                      <i className="fas fa-user"></i>
                      {translations.pricePage?.quoteForm?.fields?.name?.label}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={translations.pricePage?.quoteForm?.fields?.name?.placeholder}
                      required
                      dir={isRTL ? 'rtl' : 'ltr'}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="input-group">
                    <label htmlFor="email">
                      <i className="fas fa-envelope"></i>
                      {translations.pricePage?.quoteForm?.fields?.email?.label}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={translations.pricePage?.quoteForm?.fields?.email?.placeholder}
                      required
                      dir={isRTL ? 'rtl' : 'ltr'}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="input-group">
                    <label htmlFor="request">
                      <i className="fas fa-clipboard-list"></i>
                      {translations.pricePage?.quoteForm?.fields?.request?.label}
                    </label>
                    <textarea
                      id="request"
                      name="request"
                      value={formData.request}
                      onChange={handleInputChange}
                      placeholder={translations.pricePage?.quoteForm?.fields?.request?.placeholder}
                      rows="4"
                      required
                      dir={isRTL ? 'rtl' : 'ltr'}
                    ></textarea>
                  </div>
                </div>

                <div className="form-group">
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-block"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i>
                        {translations.pricePage?.quoteForm?.submittingText}
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane"></i>
                        {translations.pricePage?.quoteForm?.submitButton}
                      </>
                    )}
                  </button>
                </div>

                <div className="form-footer">
                  <p className="form-note">
                    <i className="fas fa-shield-alt"></i>
                    {translations.pricePage?.quoteForm?.privacyNote}
                  </p>
                </div>
              </form>

              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Price;
import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ar');
  const [translations, setTranslations] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const translationModule = await import(`../locales/${language}.json`);
        setTranslations(translationModule.default);
      } catch (error) {
        console.error('Error loading translations:', error);
        // Load default language if error
        const defaultModule = await import('../locales/ar.json');
        setTranslations(defaultModule.default);
      }
      setLoading(false);
    };

    loadTranslations();
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'ar' ? 'en' : 'ar');
  };

  const changeLanguage = (lang) => {
    if (['ar', 'en'].includes(lang)) {
      setLanguage(lang);
    }
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{
      language,
      translations,
      toggleLanguage,
      changeLanguage,
      isRTL,
      loading,
      dir: isRTL ? 'rtl' : 'ltr'
    }}>
      <div dir={isRTL ? 'rtl' : 'ltr'} lang={language}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};
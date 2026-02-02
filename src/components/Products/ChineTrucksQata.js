import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import '../../css/ChineTrucksQata.css';

const ChineTrucksQata = () => {
  const { translations } = useLanguage();

  // استخدام البيانات من الترجمات مباشرة
  const sections = translations.chineTrucksQata?.sections || [];

  return (
    <div className="parts-container">
      {/* العنوان الرئيسي */}
      <div className="main-header">
        <div className="title-icon-wrapper">
          <i className="fas fa-tools title-icon"></i>
          <h1 className="main-title">
            {translations.chineTrucksQata?.title || "أنواع القطع المتوفرة"}
          </h1>
        </div>
        <div className="title-line"></div>
      </div>

      {/* الشبكة الرئيسية - تظهر فقط إذا كانت هناك أقسام */}
      {sections.length > 0 ? (
        <div className="parts-grid">
          {sections.map((section, index) => (
            <div key={index} className="section-card">
              {/* عنوان القسم */}
              <div className="section-header">
                <div className="section-icon">
                  <i className={section.icon || "fas fa-cog"}></i>
                </div>
                <h3 className="section-title">{section.title}</h3>
                <div className="section-line"></div>
              </div>

              {/* محتوى القسم */}
              <div className="section-content">
                {section.items && section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="item-row">
                    {/* <div className="item-icon-bullet">
                      <i className="fas fa-circle bullet-icon"></i>
                    </div> */}
                    <div className="item-content">
                      <div className="item-text-row">
                        {item.icon && <i className={`${item.icon} item-icon`}></i>}
                        <span className="item-text">{item.text}</span>
                      </div>
                      {item.secondLine && (
                        <div className="second-line">
                          <span className="item-text second">{item.secondLine}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-data-message">
          <i className="fas fa-exclamation-circle"></i>
          <p>{translations.chineTrucksQata?.noData || "جاري تحميل البيانات..."}</p>
        </div>
      )}
    </div>
  );
};

export default ChineTrucksQata;
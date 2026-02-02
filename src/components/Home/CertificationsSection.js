import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const CertificationsSection = () => {
  const { translations, language } = useLanguage();

  return (
    <section id="certifications" className="section bg-light">
      <div className="container">
        <div className="section-header fade-in">
          <h2 dangerouslySetInnerHTML={{ __html: translations.certifications?.title || '' }} />
          <p>{translations.certifications?.description}</p>
        </div>
        
        <div className="certifications-preview">
          <div className="certifications-grid">
            {translations.certifications?.items?.map((cert, index) => (
              <div 
                key={index} 
                className="certification-card fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="certification-header">
                  <h3>{cert.title}</h3>
                </div>
                <div className="certification-body">
                  <p>{cert.description}</p>
                  <div className="certification-details">
                    <div className="detail-item">
                      <span className="detail-label">
                        {index === 0 ? 
                          (language === 'ar' ? 'تاريخ الحصول:' : 'Obtained:') :
                          (language === 'ar' ? 'المعايير:' : 'Standards:')
                        }
                      </span>
                      <span className="detail-value">
                        {index === 0 ? cert.obtained :
                         index === 1 ? cert.standards :
                         cert.applications}
                      </span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">
                        {index === 0 ? 
                          (language === 'ar' ? 'تاريخ التجديد:' : 'Renewed:') :
                          (language === 'ar' ? 'التطبيق:' : 'Application:')
                        }
                      </span>
                      <span className="detail-value">
                        {index === 0 ? cert.renewed :
                         index === 1 ? cert.application :
                         cert.quality}
                      </span>
                    </div>
                  </div>
                  <div className="certification-badge">
                    <i className="fas fa-award"></i>
                    <span>{cert.badge}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
         
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
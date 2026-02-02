import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import HeroAbout from './HeroAbout';
import WhyUs from '../Whyus';
import Partners from './Partners';
import Certifications from './Certifications';
import TeamSection from './TeamSection';
import RequestPrices from '../RequestPrices'


const About = () => {
  const { translations,   } = useLanguage();

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
      <HeroAbout />
      
   
      
     

      {/* نبذة عن الشركة */}
      <section className="section">
  <div className="container">
    <div className="about-company">
      <div className="about-content fade-in">
        <h2 className='animated-gear-title'>{translations.aboutPage?.company?.title}</h2>
        <p className="lead">
          {translations.aboutPage?.company?.description}
        </p>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-award"></i>
            </div>
            <h3>{translations.aboutPage?.company?.features?.quality?.title}</h3>
            <p>{translations.aboutPage?.company?.features?.quality?.description}</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-shipping-fast"></i>
            </div>
            <h3>{translations.aboutPage?.company?.features?.delivery?.title}</h3>
            <p>{translations.aboutPage?.company?.features?.delivery?.description}</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-headset"></i>
            </div>
            <h3>{translations.aboutPage?.company?.features?.support?.title}</h3>
            <p>{translations.aboutPage?.company?.features?.support?.description}</p>
          </div>
        </div>
      </div>
      <div className="about-image fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="image-wrapper">
          {/* Replaced the icon with an image */}
          <img 
            src="/images/Asset-61-1.webp" 
            alt={translations.aboutPage?.company?.title || "Company Building"}
            className="company-building-img"
          />
          <div className="experience-badge">
            <span className="exp-years">15+</span>
            <span>{translations.common?.yearsExperience}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

         <WhyUs />

      {/* الرسالة والرؤية */}
      <section className="section bg-light">
        <div className="container">
          <div className="mission-vision">
            <div className="mission-card fade-in">
              <div className="card-header">
                <div className="card-icon">
                  <i className="fas fa-bullseye"></i>
                </div>
                <h3  >{translations.aboutPage?.mission?.title}</h3>
              </div>
              <div className="card-body">
                <p>{translations.aboutPage?.mission?.description}</p>
                <ul className="mission-list">
                  {translations.aboutPage?.mission?.items?.map((item, index) => (
                    <li key={index}>
                      <i className="fas fa-check-circle"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="vision-card fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="card-header">
                <div className="card-icon">
                  <i className="fas fa-eye"></i>
                </div>
                <h3>{translations.aboutPage?.vision?.title}</h3>
              </div>
              <div className="card-body">
                <p>{translations.aboutPage?.vision?.description}</p>
                <div className="vision-goals">
                  {translations.aboutPage?.vision?.goals?.map((goal, index) => (
                    <div key={index} className="goal-item">
                      <div className="goal-number">{`0${index + 1}`}</div>
                      <div className="goal-content">
                        <h4>{goal.title}</h4>
                        <p>{goal.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* قيم الشركة */}
      <section className="section">
        <div className="container">
          <div className="section-header fade-in">
            {/* <span className="section-subtitle">// {translations.aboutPage?.values?.subtitle} //</span> */}
            <h2 className='animated-gear-title '  dangerouslySetInnerHTML={createMarkup(translations.aboutPage?.values?.title || '')} />
            <p>{translations.aboutPage?.values?.description}</p>
          </div>
          
          <div className="values-grid">
            {translations.aboutPage?.values?.items?.map((value, index) => (
              <div 
                key={index} 
                className="value-card fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="value-icon">
                  <i className={`fas ${
                    index === 0 ? 'fa-handshake' :
                    index === 1 ? 'fa-bolt' :
                    index === 2 ? 'fa-shield-alt' :
                    'fa-lightbulb'
                  }`}></i>
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
          
          <div className="values-quote fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="quote-icon">
              <i className="fas fa-quote-right"></i>
            </div>
            <p className="quote-text">
              "{translations.aboutPage?.values?.quote}"
            </p>
          </div>
        </div>
      </section>

        <TeamSection/>

       <Partners />
      
      <Certifications />
      
       <RequestPrices/>

    
    </>
  );
};

export default About;
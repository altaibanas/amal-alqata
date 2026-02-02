import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import '../../css/blog.css';

const HeroBlog = () => {
  const { translations,  } = useLanguage();

  return (
    <section className="hero-section hero-blog">
      <div className="container">
        <div className="hero-content">
          <span className="hero-badge fade-in">
            {translations.blogPage?.heroBlog?.badge}
          </span>
          
          <h1 
            className="hero-title fade-in"
            dangerouslySetInnerHTML={{ __html: translations.blogPage?.heroBlog?.title }}
          />
          
          <p className="hero-description fade-in" style={{ animationDelay: '0.1s' }}>
            {translations.blogPage?.heroBlog?.description}
          </p>
          
          <div className="hero-features fade-in" style={{ animationDelay: '0.2s' }}>
            {translations.blogPage?.heroBlog?.features?.map((feature, index) => (
              <div key={index} className="hero-feature">
                <div className="feature-iconb">
                  <i className={feature.icon}></i>
                </div>
                <div className="feature-content">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
         
        </div>
        
       
      </div>
    </section>
  );
};

export default HeroBlog;
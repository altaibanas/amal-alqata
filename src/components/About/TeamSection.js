import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const TeamSection = () => {
  const { translations } = useLanguage();

  return (
    <section id="team" className="section">
      <div className="container">
        <div className="section-header fade-in">
          <h2 dangerouslySetInnerHTML={{ __html: translations.team?.title || '' }} />
          <p>{translations.team?.description}</p>
        </div>
        
        <div className="team-grid">
          {translations.team?.members?.map((member, index) => (
            <div 
              key={index} 
              className="team-member fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="member-image">
                <i className={`fas ${
                  index === 0 ? 'fa-users fa-4x' :
                  index === 1 ? 'fa-cogs fa-4x' :
                  'fa-chart-line fa-4x'
                }`} style={{ color: 'rgba(255,255,255,0.8)' }}></i>
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-description">{member.description}</p>
                <div className="member-skills">
                  {member.skills?.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
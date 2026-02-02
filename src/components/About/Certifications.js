import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import '../../css/Certifications.css';

const Certifications = () => {
  const { translations, language } = useLanguage();

  useEffect(() => {
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

  // بيانات الشهادات
  const certificationsData = {
    title: translations.certificationsPages?.title || (language === 'ar' ? "الشهادات" : "Certifications"),
    subtitle: translations.certificationsPages?.subtitle || (language === 'ar' 
      ? "اعتماد عالمي يضمن جودة خدماتنا" 
      : "Global accreditation ensuring our service quality"),
    description: translations.certificationsPages?.description || (language === 'ar'
      ? "نحن حاصلون على شهادة ISO 9001:2015 في نظام إدارة الجودة، ما يعكس التزامنا الدائم بالتحسين المستمر وتقديم خدمة تفوق التوقعات."
      : "We are certified with ISO 9001:2015 Quality Management System, reflecting our continuous commitment to improvement and delivering service that exceeds expectations."),
    certificates: translations.certificationsPages?.certificates || [
      {
        id: 1,
        title: language === 'ar' ? "شهادة ISO 9001:2015" : "ISO 9001:2015 Certificate",
        type: "ISO 9001:2015",
        companyName: language === 'ar' ? "أمل القطاع التجارية" : "AMAL AL-QATA FOR TRADING COMPANY",
        address: language === 'ar' 
          ? "4096 جبل أبي 7007 الحي البر البديع 14518 الرياض، المملكة العربية السعودية"
          : "4096 Jabal Abi 7007 Al Bar Al Badia Dair 14518 Riyadh, Kingdom of Saudi Arabia",
        scope: language === 'ar' 
          ? "الجملة والتجزئة لقطع غيار الشاحنات والمقطورات والسيارات."
          : "Wholesale and retail of truck, trailer, and automobile spare parts.",
        certificateNo: "AMER17744",
        issueDate: "03/06/2023",
        expiryDate: "03/06/2028",
        issuedBy: language === 'ar' 
          ? "المعايير الأمريكية لتسجيل الجودة (المحدودة)" 
          : "AMERICAN QUALITY STANDARDS REGISTRATION PVT LTD",
        issuerAddress: language === 'ar'
          ? "المكتب المسجل: 1000 شارع لاكسيمي ناجار، المرحلة 2، غورغاون، هاريانا 122001، الهند"
          : "Registered Office: 1000 Laxmi Nagar Road, Phase 2, Gurgaon, Haryana 122001, India",
        issuerPhone: "+91-120-4567890",
        accreditation: "IAF",
        accreditationFull: language === 'ar' 
          ? "المنتدى الدولي للاعتماد" 
          : "International Accreditation Forum",
        color: "#0066CC",
        icon: "fas fa-award"
      },
      {
        id: 2,
        title: language === 'ar' ? "شهادة المورد المعتمد" : "Certified Supplier",
        type: "SUPPLIER",
        companyName: language === 'ar' ? "أمل القطاع التجارية" : "AMAL AL-QATA FOR TRADING COMPANY",
        scope: language === 'ar' 
          ? "مورد معتمد لأكبر مصانع قطع الغيار في أوروبا وآسيا."
          : "Certified supplier for major spare parts manufacturers in Europe and Asia.",
        certificateNo: "ASR2023",
        issueDate: "15/03/2022",
        expiryDate: "15/03/2025",
        issuedBy: language === 'ar' 
          ? "هيئة الجودة العالمية" 
          : "Global Quality Authority",
        color: "#00A86B",
        icon: "fas fa-certificate"
      },
      {
        id: 3,
        title: language === 'ar' ? "شهادة الجودة الصناعية" : "Industrial Quality Certificate",
        type: "IQC",
        scope: language === 'ar' 
          ? "معايير الجودة في التخزين والتوزيع والنقل."
          : "Quality standards in storage, distribution, and transportation.",
        certificateNo: "IQC7890",
        issueDate: "10/09/2021",
        expiryDate: "10/09/2024",
        issuedBy: language === 'ar' 
          ? "مجلس الجودة الصناعية" 
          : "Industrial Quality Council",
        color: "#FF6B35",
        icon: "fas fa-industry"
      }
    ],
    stats: {
      valid: language === 'ar' ? "شهادة سارية" : "Valid Certificates",
      years: language === 'ar' ? "سنوات اعتماد" : "Accreditation Years",
      standards: language === 'ar' ? "معيار عالمي" : "Global Standards",
      renewal: language === 'ar' ? "تجديد سنوي" : "Annual Renewal"
    }
  };

  return (
    <section className="certifications-section">
      <div className="container">
        {/* رأس القسم */}
        <div className="section-header fade-in">
          <h2 className="section-title animated-gear-title">{certificationsData.title}</h2>
          <p className="section-subtitle">{certificationsData.subtitle}</p>
          
          {/* Image added after subtitle */}
          <div className="certifications-header-image fade-in" style={{ animationDelay: '0.1s' }}>
            <img 
              src="/images/Asset-140.webp" 
              alt={certificationsData.title} 
              className="cert-img"
            />
          </div>
          
          <div className="section-description">
            <p>{certificationsData.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
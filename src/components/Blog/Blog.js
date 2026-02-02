import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import HeroBlog from './HeroBlog'; // سننشئ هذا المكون لاحقًا
import '../../css/blog.css';
import RequestPrices from '../RequestPrices'


const Blog = () => {
  const { translations, language, isRTL } = useLanguage();
  const [articles, setArticles] = useState([]);
  
  // في حالة حقيقية، هنا نستدعي API لجلب المقالات
  useEffect(() => {
    // محاكاة جلب البيانات
    const mockArticles = [
      {
        id: 1,
        category: 'قطع الغيار',
        date: 'يناير 19, 2026',
        title: 'أهمية قطع الغيار الأصلية في المعدات الثقيلة',
        excerpt: 'كيف يمكن لقطع الغيار الأصلية أن تطيل عمر المعدات وتوفر في التكاليف طويلة المدى',
        readTime: '5 دقائق',
        imageUrl: '/images/blog/article1.jpg'
      },
      {
        id: 2,
        category: 'النقل والمعدات',
        date: 'يناير 15, 2026',
        title: 'اتجاهات سوق النقل في العام الجديد',
        excerpt: 'تحليل لأبرز التوجهات التقنية والتشريعية المؤثرة على قطاع النقل',
        readTime: '8 دقائق',
        imageUrl: '/images/blog/article2.jpg'
      },
      {
        id: 3,
        category: 'أنظمة التعبئة البترولية',
        date: 'يناير 10, 2026',
        title: 'التطورات الحديثة في أنظمة السلامة البترولية',
        excerpt: 'أحدث التقنيات المستخدمة لتعزيز السلامة في عمليات التعبئة البترولية',
        readTime: '6 دقائق',
        imageUrl: '/images/blog/article3.jpg'
      }
    ];
    
    setArticles(mockArticles);
  }, []);

  useEffect(() => {
    // تأثيرات التمرير - نفس التأثيرات المستخدمة في About
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
      {/* Hero Section - سيكون مكون HeroBlog مشابه لـ HeroAbout */}
      <HeroBlog />

    
       <RequestPrices/>
    

   

      
    </>
  );
};

export default Blog;
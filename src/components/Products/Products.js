import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import HeroProducts from './HeroProducts';
import ProductsSection from '../Home/ProductsSection'
import RequestPrices from '../RequestPrices'

const Products = () => {
  const { translations,  } = useLanguage();

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

 

  return (
    <>
      {/* Hero Section */}
    <HeroProducts/>

      <ProductsSection />
      
       <RequestPrices/>
      

    </>
  );
};

export default Products;
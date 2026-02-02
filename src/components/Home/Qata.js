import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import '../../css/Qata.css';

const Qata = () => {
  const { translations } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [, setHoveredProduct] = useState(null);

  useEffect(() => {
    const handleScrollAnimations = () => {
      const productCards = document.querySelectorAll('.product-card');
      
      productCards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (cardTop < windowHeight - 100) {
          setTimeout(() => {
            card.classList.add('visible');
          }, index * 100);
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimations);
    handleScrollAnimations();

    return () => window.removeEventListener('scroll', handleScrollAnimations);
  }, []);

  const filteredProducts = translations.qataPage?.products?.filter(product => 
    activeCategory === 'all' || product.category === activeCategory
  );

  return (
    <>
      {/* Header Section */}
      <section className="page-header products-header">
        <div className="container">
          <div className="page-header-content text-center">
            <h1 className="page-title">{translations.qataPage?.title}</h1>
            <p className="page-subtitle">{translations.qataPage?.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section products-section">
        <div className="container">
          <div className="products-grid">
            {filteredProducts?.map((product, index) => (
              <div 
                key={index} 
                className="product-card"
                onMouseEnter={() => setHoveredProduct(index)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="product-image-container">
                  <div className="product-image">
                    {product.imageUrl ? (
                      <img 
                        src={product.imageUrl} 
                        alt={product.name}
                        className="product-img"
                      />
                    ) : (
                      <div className="image-placeholder">
                        <i className={product.icon}></i>
                      </div>
                    )}
                    
                    <div className="category-badge">
                      <span>{product.categoryName}</span>
                    </div>

                    {/* <div className={`product-overlay ${hoveredProduct === index ? 'visible' : ''}`}>
                      <button className="view-details-btn">
                        <i className="fas fa-eye"></i>
                        {translations.common?.viewDetails}
                      </button>
                    </div> */}
                  </div>
                </div>
                
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts?.length === 0 && (
            <div className="no-products text-center">
              <i className="fas fa-box-open"></i>
              <h3>{translations.qataPage?.noProducts?.title}</h3>
              <p>{translations.qataPage?.noProducts?.description}</p>
              <button 
                className="btn btn-outline"
                onClick={() => setActiveCategory('all')}
              >
                {translations.qataPage?.noProducts?.reset}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>{translations.qataPage?.cta?.title}</h2>
            <p>{translations.qataPage?.cta?.description}</p>
            <div className="cta-buttons">
              <button className="btn btn-primary">
                <i className="fas fa-phone-alt"></i>
                {translations.qataPage?.cta?.contact}
              </button>
              <button className="btn btn-outline">
                <i className="fas fa-download"></i>
                {translations.common?.downloadCatalog}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Qata;
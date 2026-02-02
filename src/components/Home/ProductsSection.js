import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const ProductsSection = () => {
  const { translations, language } = useLanguage();

  return (
    <section id="products" className="section">
      <div className="container">
        <div className="section-header fade-in">
          <h2 dangerouslySetInnerHTML={{ __html: translations.products?.title || '' }} />
          <p>{translations.products?.description}</p>
        </div>
        
        <div className="products-grid">
          {/* قطعة غيار المركبات الصينية */}
                <div className="product-card fade-in">
            <div className="product-image">
              {/* Replace the icon with an image */}
              <img 
                src="/images/Asset-61-1.webp" 
                alt={translations.products?.categories?.chineseVehicles?.title || "Chinese Vehicles"}
                className="product-img"
              />
              <div className="product-badge">
                {translations.products?.categories?.chineseVehicles?.badge}
              </div>
            </div>
          <div className="product-content">
            <h3>{translations.products?.categories?.chineseVehicles?.title}</h3>
            <p>{translations.products?.categories?.chineseVehicles?.description}</p>
            <ul className="product-features">
              {translations.products?.categories?.chineseVehicles?.features?.map((feature, index) => (
                <li key={index}>
                  <i className="fas fa-check"></i>
                  {feature}
                </li>
              ))}
            </ul>
            <Link to="/products/ChineseTrucks" className="btn btn-outline btn-block">
              <i className={`fas ${language === 'ar' ? 'fa-arrow-left' : 'fa-arrow-right'}`}></i>
              {translations.common?.viewAll}
            </Link>
          </div>
                </div>
        {/* قطعة غيار المقطورات */}
          <div className="product-card fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="product-image">
              {/* Replace the icon with an image */}
              <img 
                src="/images/Asset-60.webp" 
                alt={translations.products?.categories?.trailers?.title || "Trailer Parts"}
                className="product-img"
              />
              <div className="product-badge">
                {translations.products?.categories?.trailers?.badge}
              </div>
            </div>
            <div className="product-content">
              <h3>{translations.products?.categories?.trailers?.title}</h3>
              <p>{translations.products?.categories?.trailers?.description}</p>
              <ul className="product-features">
                {translations.products?.categories?.trailers?.features?.map((feature, index) => (
                  <li key={index}>
                    <i className="fas fa-check"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to="/products/TrailerCutting" className="btn btn-outline btn-block">
                <i className={`fas ${language === 'ar' ? 'fa-arrow-left' : 'fa-arrow-right'}`}></i>
                {translations.common?.viewAll}
              </Link>
            </div>
          </div>
                    
          {/* أنظمة التعبئة البترولية */}
                <div className="product-card fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="product-image">
            {/* Replace the icon with an image */}
            <img 
              src="/images/Asset-59.webp" 
              alt={translations.products?.categories?.petroleumSystems?.title || "Petroleum Systems"}
              className="product-img"
            />
            <div className="product-badge">
              {translations.products?.categories?.petroleumSystems?.badge}
            </div>
          </div>
          <div className="product-content">
            <h3>{translations.products?.categories?.petroleumSystems?.title}</h3>
            <p>{translations.products?.categories?.petroleumSystems?.description}</p>
            <ul className="product-features">
              {translations.products?.categories?.petroleumSystems?.features?.map((feature, index) => (
                <li key={index}>
                  <i className="fas fa-check"></i>
                  {feature}
                </li>
              ))}
            </ul>
            <Link to="/products/Petroleum" className="btn btn-outline btn-block">
              <i className={`fas ${language === 'ar' ? 'fa-arrow-left' : 'fa-arrow-right'}`}></i>
              {translations.common?.viewAll}
            </Link>
          </div>
                </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
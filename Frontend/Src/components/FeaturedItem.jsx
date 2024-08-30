import React from 'react';

const FeaturedItem = ({ imageSrc, altText, badgeText, title, description, price, oldPrice, rating }) => {
  return (
    <div className="featured-product">
      <div className="product-image">
        <img src={imageSrc} alt={altText} />
        {badgeText && <span className={`badge ${badgeText.toLowerCase()}`}>{badgeText}</span>}
      </div>
      <div className="product-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="price-container">
          <span className="price">{price}</span>
          {oldPrice && <span className="old-price">{oldPrice}</span>}
        </div>
        {rating && <div className="rating">{rating}</div>}
      </div>
    </div>
  );
};

export default FeaturedItem;

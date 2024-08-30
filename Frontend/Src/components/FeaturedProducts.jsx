import React from 'react';
import FeaturedItem from './FeaturedItem';

const FeaturedProducts = () => {
  const products = [
    {
      imageSrc: '/vite-project/src/imagen/KitDeJardineria.jpg',
      altText: 'Kit de jardinería',
      badgeText: 'Hot',
      title: 'Kit de jardinería',
      description: 'Solo desde',
      price: '$9.99'
    },
    {
      imageSrc: '/vite-project/src/imagen/basureros.jpg',
      altText: 'Kit Basureros',
      badgeText: 'New',
      title: 'Kit Basureros',
      description: '1 por pack',
      price: '$4.49',
      oldPrice: '$5.90',
      rating: '★★★★☆ (6)'
    },
    {
      imageSrc: '/vite-project/src/imagen/colmena.jpg',
      altText: 'Colmena',
      badgeText: 'Discount',
      title: 'Colmena',
      description: '1 por pack',
      price: '$3.99',
      oldPrice: '$4.90',
      rating: '★★★☆☆ (10)'
    },
    {
      imageSrc: '/vite-project/src/imagen/fertilizanteorganico.jpg',
      altText: 'Fertilizante',
      title: 'Fertilizante',
      description: '1 por pack',
      price: '$5.90',
      rating: '★★★★☆ (13)'
    },
    {
      imageSrc: '/vite-project/src/imagen/bebederodeaves.jpg',
      altText: 'Bebedor de Aves',
      title: 'Bebedor de Aves',
      description: '1 por pack',
      price: '$6.99',
      rating: '★★★☆☆ (8)'
    },
    {
      imageSrc: '/vite-project/src/imagen/Semillas.jpg',
      altText: 'Semillas',
      title: 'Semillas',
      description: '1 por pack',
      price: '$7.49',
      rating: '★★★★☆ (15)'
    }
  ];

  return (
    <section className="featured-products">
      <h2>Productos Destacados</h2>
      <div className="featured-products-container">
        {products.map((product, index) => (
          <FeaturedItem
            key={index}
            imageSrc={product.imageSrc}
            altText={product.altText}
            badgeText={product.badgeText}
            title={product.title}
            description={product.description}
            price={product.price}
            oldPrice={product.oldPrice}
            rating={product.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;


import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Import product images
import Product1 from '../../assets/images/products/Tuscany3.jpg';
import Product2 from '../../assets/images/products/Magnolia2.jpg';
import Product3 from '../../assets/images/products/Tuscany2.jpg';
import BackgroundImage from '../../assets/images/test.jpg'; // Replace with your background image

const ShopCarousel = () => {
  const products = [
    {
      id: 1,
      title: 'Product 1',
      image: Product1,
      description: 'This is a great product that you will love.',
      price: 'R29.99',
    },
    {
      id: 2,
      title: 'Product 2',
      image: Product2,
      description: 'This product is even better than the first one.',
      price: 'R39.99',
    },
    {
      id: 3,
      title: 'Product 3',
      image: Product3,
      description: 'The best product in our shop.',
      price: 'R49.99',
    },
  ];

  return (
    <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-16 animate__animated animate__zoomIn">Our Products</h2>
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          transitionTime={600}
          className="product-carousel"
          centerMode={true}
          centerSlidePercentage={33.33}
        >
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 mx-2 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.title}</h3>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-orange-600 font-bold text-lg">{product.price}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ShopCarousel;
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Import product images
import Product1 from '../../assets/images/products/product1.jpg';
import Product2 from '../../assets/images/products/product2.jpg';
import Product3 from '../../assets/images/products/product3.jpg';
import Product4 from '../../assets/images/products/product4.jpg';
import Product5 from '../../assets/images/products/product5.jpg';
import BackgroundImage from '../../assets/images/test.jpg'; // Replace with your background image

const ShopCarousel = () => {
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(33.33);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCenterSlidePercentage(100);
      } else {
        setCenterSlidePercentage(33.33);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const products = [
    {
      id: 1,
      title: 'Concrete stones 13mm',
      image: Product1,
      description: 'High-quality 13mm concrete stones, perfect for construction and landscaping projects.',
      price: 'R750.00 per cube',
    },
    {
      id: 2,
      title: 'Mamasbery sand',
      image: Product2,
      description: 'Premium Mamasbery sand, ideal for building and plastering applications.',
      price: 'R600 per cube',
    },
    {
      id: 3,
      title: 'Phillip sand',
      image: Product3,
      description: 'Fine Phillip sand, suitable for a variety of construction and landscaping uses.',
      price: 'R350 per cube',
    },
    {
      id: 4,
      title: 'Phillip sand',
      image: Product4,
      description: 'Another batch of fine Phillip sand, perfect for your construction needs.',
      price: 'R300 per cube',
    },
    {
      id: 5,
      title: '19mm stones',
      image: Product5,
      description: 'Durable 19mm stones, great for concrete mixes and other construction projects.',
      price: 'R800 per cube',
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
          centerSlidePercentage={centerSlidePercentage}
          renderArrowPrev={(onClickHandler, hasPrev, label) => hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2"
            >
              &#9664;
            </button>
          )}
          renderArrowNext={(onClickHandler, hasNext, label) => hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2"
            >
              &#9654;
            </button>
          )}
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
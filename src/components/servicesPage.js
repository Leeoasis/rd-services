import React, { useEffect, useRef } from 'react';
import {
  FaWrench, FaPaintRoller, FaHammer, FaTools,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import '../styles/servicesPage.css';

// Import images
import PlumbingImage from '../assets/images/test.jpg';
import WeldingImage from '../assets/images/tester.jpg';
import PaintingImage from '../assets/images/waste.jpg';
import RenovationImage from '../assets/images/demol.jpg';
import WhyImage from '../assets/images/contactimage.jpeg';

const ServicesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center animate__animated animate__fadeIn" style={{ backgroundImage: `url(${PlumbingImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl font-bold text-center text-white animate__animated animate__fadeInUp mb-8">Our Comprehensive Services</h1>
          <p className="text-xl text-center text-white mb-12 animate__animated animate__fadeInUp animate__delay-1s">
            We provide a wide range of rubble removal services tailored to meet your specific needs. Whether it's waste removal, demolition, or site clearing, we deliver quality workmanship with a commitment to excellence.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-orange-700 mb-16 animate__animated animate__zoomIn">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="service-card transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl p-6 rounded-lg" data-aos="flip-left">
              <FaWrench size={48} className="service-icon text-orange-600" />
              <h3 className="service-title">Site Clearing</h3>
              <p className="service-description">
                Our site clearing services involve safely and efficiently removing debris and rubble from construction sites to prepare for new projects.
              </p>
            </div>
            <div className="service-card transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl p-6 rounded-lg" data-aos="flip-right">
              <FaTools size={48} className="service-icon text-blue-600" />
              <h3 className="service-title">Demolition</h3>
              <p className="service-description">
                Offering safe demolition services for buildings and structures. We prioritize safety and ensure that the site is cleared quickly and thoroughly.
              </p>
            </div>
            <div className="service-card transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl p-6 rounded-lg" data-aos="flip-left">
              <FaPaintRoller size={48} className="service-icon text-green-600" />
              <h3 className="service-title">Rubble Removal</h3>
              <p className="service-description">
                We specialize in fast and efficient rubble removal from your residential or commercial properties. No job is too big or small.
              </p>
            </div>
            <div className="service-card transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl p-6 rounded-lg" data-aos="flip-right">
              <FaHammer size={48} className="service-icon text-red-600" />
              <h3 className="service-title">Waste Disposal</h3>
              <p className="service-description">
                Our waste disposal services are designed to keep your property clean and free from construction waste. We handle removal and responsible disposal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-orange-700 mb-16 animate__animated animate__fadeInUp">Service Details</h2>
          <div className="service-details max-w-6xl mx-auto px-4">
            <div className="service-detail flex items-center mb-12 shadow-md rounded-lg p-6 bg-white hover:shadow-xl transition-shadow duration-300" data-aos="fade-right">
              <img src={PlumbingImage} alt="Site Clearing" className="w-1/3 h-64 object-cover rounded-lg float-animation animate-bounce" />
              <div className="ml-8 max-w-md space-y-4">
                <h3 className="text-3xl font-semibold mb-4">Site Clearing Services</h3>
                <p>
                  Our site clearing services involve removing unwanted debris and rubble from construction sites, preparing the area for new building projects. We ensure the site is left clean and ready for work.
                </p>
              </div>
            </div>
            <div className="service-detail flex items-center mb-12 flex-row-reverse shadow-md rounded-lg p-6 bg-white hover:shadow-xl transition-shadow duration-300" data-aos="fade-left">
              <img src={RenovationImage} alt="Demolition Services" className="w-1/3 h-64 object-cover rounded-lg float-animation animate-bounce" />
              <div className="ml-8 max-w-md space-y-4">
                <h3 className="text-3xl font-semibold mb-4">Demolition Services</h3>
                <p>
                  We offer safe and professional demolition services for residential and commercial properties. Our team handles everything from breaking down structures to clearing the rubble.
                </p>
              </div>
            </div>
            <div className="service-detail flex items-center mb-12 shadow-md rounded-lg p-6 bg-white hover:shadow-xl transition-shadow duration-300" data-aos="fade-right">
              <img src={PaintingImage} alt="Rubble Removal" className="w-1/3 h-64 object-cover rounded-lg float-animation animate-bounce" />
              <div className="ml-8 max-w-md space-y-4">
                <h3 className="text-3xl font-semibold mb-4">Rubble Removal Services</h3>
                <p>
                  We specialize in efficient rubble removal services for construction and renovation projects. We ensure that your property is free of any debris or rubble, leaving it clean and safe.
                </p>
              </div>
            </div>
            <div className="service-detail flex items-center mb-12 flex-row-reverse shadow-md rounded-lg p-6 bg-white hover:shadow-xl transition-shadow duration-300" data-aos="fade-left">
              <img src={WeldingImage} alt="Waste Disposal" className="w-1/3 h-64 object-cover rounded-lg float-animation animate-bounce" />
              <div className="ml-8 max-w-md space-y-4">
                <h3 className="text-3xl font-semibold mb-4">Waste Disposal Services</h3>
                <p>
                  Our waste disposal services include removing all types of construction waste. We handle everything from packaging materials to hazardous debris, ensuring proper disposal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative bg-gray-100 py-20" style={{ backgroundImage: `url(${WhyImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-olive-green-gradient opacity-60"></div>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8 animate__animated animate__fadeInDown">Ready to Start Your Project?</h2>
          <p className="text-white text-lg mb-12 animate__animated animate__fadeInDown animate__delay-1s">
            Contact us today to discuss your project and get a free quote.
          </p>
          <button className="px-6 py-3 text-lg font-semibold text-orange-700 bg-white rounded-lg animate__animated animate__pulse animate__infinite">
            Get a Quote
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
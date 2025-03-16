import React from 'react';
import {
  FaTruck, FaTrashAlt, FaRecycle, FaTools,
} from 'react-icons/fa';
import Services from '../../assets/images/test.jpg'; // Replace with rubble removal related image if needed
import '../../styles/homeServices.css';

const HomeServices = () => (
  <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `url(${Services})` }}>
    <div className="absolute inset-0 bg-black bg-opacity-70"></div>
    <div className="container mx-auto px-6 relative z-10">
      <h2 className="text-4xl font-extrabold text-center mb-8 text-white animate-fade-in">Our Services</h2>
      <p className="text-lg text-center mb-12 text-white">Delivering professional rubble removal and waste management services.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: <FaTruck size={32} className="text-orange-600" />, title: 'Rubble Removal', desc: 'Fast and efficient removal of rubble and construction waste.' },
          { icon: <FaTrashAlt size={32} className="text-blue-600" />, title: 'Waste Disposal', desc: 'Safe and responsible disposal of waste materials from your property.' },
          { icon: <FaRecycle size={32} className="text-green-600" />, title: 'Recycling', desc: 'Sorting and recycling debris to reduce environmental impact.' },
          { icon: <FaTools size={32} className="text-red-600" />, title: 'Site Clean-up', desc: 'Thorough site clean-up to prepare for further construction or use.' },
        ].map((service, index) => (
          <div key={index} className="bg-white text-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 animate-bounce-in">
            <div className="flex items-center mb-4">
              {service.icon}
              <h3 className="text-2xl font-semibold ml-4">{service.title}</h3>
            </div>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <a href="/services" className="inline-block bg-gradient-to-r from-orange-600 to-orange-800 hover:from-orange-700 hover:to-orange-900 text-white font-bold py-3 px-6 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          Explore More
        </a>
      </div>
    </div>
  </section>
);

export default HomeServices;

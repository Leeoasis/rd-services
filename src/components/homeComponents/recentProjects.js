import React, { useEffect, useRef } from 'react';
import Services from '../../assets/images/test.jpg';
import '../../styles/recentProjects.css';

// Image Imports
// Coetzenburg
import Coetzenburg1 from '../../assets/images/projects/Coetzenburg/Coetzenburg1.jpg';

// Magnoliaway
import Magnolia1 from '../../assets/images/projects/Magnolia/Magnolia1.jpg';

// Tuscany
import Tuscany1 from '../../assets/images/projects/Tuscany/Tuscany1.jpg';

const RecentProjects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
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
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden"
      style={{ backgroundImage: `url(${Services})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-8 animate-slide-in-up">
          Recent Projects
        </h2>
        <p className="text-lg text-center text-white mb-12">
          Take a look at some of our most recent and impactful projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-in-out float-up">
            <img
              src={Coetzenburg1}
              alt="first project"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-orange-700">Coetzenburg Vista Estate</h3>
            <p>We successfully completed a painting and tiling project at Coetzenburg Vista Estate, Kaapzicht Road. Our team handled every aspect of the project, from surface preparation to the final coat of paint and tile installation. The result is a beautifully finished space that enhances the aesthetic appeal and functionality of the property.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-in-out float-up delay-100">
            <img
              src={Magnolia1}
              alt="Project 2"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-orange-700">12 Magnolia, Durbanville - Demolition Waste Removal</h3>
            <p>After a major renovation, we handled the removal of broken tiles, concrete, and other debris, ensuring a spotless site for the next phase of construction.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-in-out float-up delay-200">
            <img
              src={Tuscany1}
              alt="Project 3"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-orange-700">Camps Bay8 Visse close, Tuscany Glen , Bluedowns - Bulk Waste Hauling</h3>
            <p>Cleared out excess construction waste from a home renovation project, including bricks, drywall, and scrap materials, making the property clean and ready for final touches.</p>
          </div>
        </div>
        <div className="text-center mt-12">
          <a href="/projects" className="inline-block bg-orange-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-orange-600 transition-colors duration-300">
            See More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
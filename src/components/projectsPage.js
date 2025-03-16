import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import '../styles/projectsPage.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';

// Import project images
import ProjectImage from '../assets/images/projects.jpg';

// Coetzenburg
import Coetzenburg1 from '../assets/images/projects/Coetzenburg/Coetzenburg1.jpg';
import Coetzenburg2 from '../assets/images/projects/Coetzenburg/Coetzenburg2.jpg';
import Coetzenburg3 from '../assets/images/projects/Coetzenburg/Coetzenburg3.jpg';
import Coetzenburg4 from '../assets/images/projects/Coetzenburg/Coetzenburg4.jpg';
import Coetzenburg5 from '../assets/images/projects/Coetzenburg/Coetzenburg5.jpg';
import Coetzenburg6 from '../assets/images/projects/Coetzenburg/Coetzenburg6.jpg';

// Magnolia
import Magnolia1 from '../assets/images/projects/Magnolia/Magnolia1.jpg';
import Magnolia2 from '../assets/images/projects/Magnolia/Magnolia2.jpg';
import Magnolia3 from '../assets/images/projects/Magnolia/Magnolia3.jpg';
import Magnolia4 from '../assets/images/projects/Magnolia/Magnolia4.jpg';

// Tuscany
import Tuscany1 from '../assets/images/projects/Tuscany/Tuscany1.jpg';
import Tuscany2 from '../assets/images/projects/Tuscany/Tuscany2.jpg';
import Tuscany3 from '../assets/images/projects/Tuscany/Tuscany3.jpg';
import Tuscany4 from '../assets/images/projects/Tuscany/Tuscany4.jpg';
import Tuscany5 from '../assets/images/projects/Tuscany/Tuscany5.jpg';

// Lovel
import Lovel1 from '../assets/images/projects/Lovel/lovel1.jpg';
import Lovel2 from '../assets/images/projects/Lovel/lovel2.jpg';
import Lovel3 from '../assets/images/projects/Lovel/lovel3.jpg';
import Lovel4 from '../assets/images/projects/Lovel/lovel4.jpg';
import Lovel5 from '../assets/images/projects/Lovel/lovel5.jpg';
import Lovel6 from '../assets/images/projects/Lovel/lovel6.jpg';

// Rohm
import Rohm1 from '../assets/images/projects/Rohm/Rohm1.jpg';
import Rohm2 from '../assets/images/projects/Rohm/Rohm2.jpg';
import Rohm3 from '../assets/images/projects/Rohm/Rohm3.jpg';
import Rohm4 from '../assets/images/projects/Rohm/Rohm4.jpg';

// Capetown
import CapetownImage1 from '../assets/images/projects/Capetown/cape1.jpg';

const ProjectsPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);

  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  const projects = [
    {
      id: 1,
      title: '5 Coetzenburg Street, Stellenboch Central - Construction Site Cleanup',
      images: [Coetzenburg1, Coetzenburg2, Coetzenburg3, Coetzenburg4, Coetzenburg5, Coetzenburg6],
      description: 'Cleared out construction debris and rubble to prepare the site for new development. Our team ensured a clean and hazard-free environment with swift and efficient waste disposal.',
    },
    {
      id: 2,
      title: '12 Magnolia, Durbanville - Demolition Waste Removal',
      images: [Magnolia1, Magnolia2, Magnolia3, Magnolia4],
      description: 'After a major renovation, we handled the removal of broken tiles, concrete, and other debris, ensuring a spotless site for the next phase of construction.',
    },
    {
      id: 3,
      title: '28 Visse close, Tuscany Glen , Bluedowns - Bulk Waste Hauling',
      images: [Tuscany1, Tuscany2, Tuscany3, Tuscany4, Tuscany5],
      description: 'Cleared out excess construction waste from a home renovation project, including bricks, drywall, and scrap materials, making the property clean and ready for final touches.',
    },
    {
      id: 4,
      title: '15 Boekenhout str, rouxville, Cape Town - Post-Renovation Cleanup',
      images: [Tuscany1],
      description: 'Handled debris removal after a bathroom remodel, removing old fixtures, tiles, and concrete to provide a clean and safe environment for the property owners.',
    },
    {
      id: 5,
      title: '7 Ashton str , Oakdale Bellville- Site Preparation & Hauling',
      images: [Tuscany1],
      description: 'Cleared a construction site of rubble, dirt, and waste materials, ensuring the space was ready for the next phase of development.',
    },
    {
      id: 6,
      title: '43 coral road highbury - Heavy-Duty Waste Management',
      images: [Tuscany1],
      description: 'Managed large-scale debris removal, including old cabinets, broken tiles, and cement chunks, keeping the site clean and compliant with regulations.',
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeGallery = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section
        className="relative py-24 bg-cover bg-center animate__animated animate__fadeIn"
        style={{ backgroundImage: `url(${Magnolia1})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl font-bold text-center text-white animate__animated animate__fadeInUp mb-8">
            Our Projects
          </h1>
          <p className="text-xl text-center text-white mb-12 animate__animated animate__fadeInUp animate__delay-1s">
            Take a look at some of the projects we've completed. Our commitment to quality and excellence
            is reflected in every project we undertake.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => handleProjectClick(project)}
                data-aos="fade-up"
              >
                <img src={project.images[0]} alt={project.title} className="w-full h-64 object-cover" />
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                  <span className="text-orange-600 hover:text-orange-700 font-semibold mt-4 inline-block">
                    View Gallery
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {selectedProject && (
        <div className="modal">
          <div className="modal-content">
            <button
              className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2 hover:bg-red-700"
              onClick={closeGallery}
            >
              &times;
            </button>
            <Carousel infiniteLoop useKeyboardArrows showThumbs={false}>
              {selectedProject.images.map((image, index) => (
                <div key={index} className="h-64 md:h-80">
                  <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </Carousel>
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              <button
                onClick={closeGallery}
                className="mt-4 bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700"
              >
                Close Gallery
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8 animate__animated animate__pulse animate__infinite">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-12">
            Let's work together to create something amazing. Contact us today to discuss your project and get
            a free quote.
          </p>
          <a
            href="/contact"
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out"
          >
            Get a Free Quote
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
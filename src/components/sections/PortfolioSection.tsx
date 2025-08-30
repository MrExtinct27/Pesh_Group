'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight, Calendar, MapPin, Building, X } from 'lucide-react';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProject = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyPress);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isModalOpen]);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'industrial', name: 'Industrial' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Corporate Headquarters',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Mumbai, India',
      date: '2024',
      area: '2.5M sq ft',
      description: 'A premium corporate headquarters featuring sustainable design and modern architecture.',
      details: 'This state-of-the-art corporate headquarters represents the pinnacle of commercial construction excellence. Featuring 45 floors of premium office space, sustainable LEED Gold certification, and cutting-edge smart building technology.',
      features: ['LEED Gold Certified', 'Smart Building Technology', '45 Floors', 'Premium Amenities', 'Underground Parking', 'Rooftop Garden'],
      budget: '₹500 Crores'
    },
    {
      id: 2,
      title: 'Manufacturing Complex',
      category: 'industrial',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Pune, India',
      date: '2024',
      area: '1.8M sq ft',
      description: 'State-of-the-art manufacturing facility with advanced automation systems.',
      details: 'A cutting-edge manufacturing complex designed for Industry 4.0 operations. Features automated production lines, climate-controlled environments, and advanced safety systems.',
      features: ['Automated Production Lines', 'Climate Control', 'Advanced Safety Systems', 'Quality Control Labs', 'Warehouse Integration'],
      budget: '₹300 Crores'
    },
    {
      id: 3,
      title: 'Business Park',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Bangalore, India',
      date: '2023',
      area: '3.2M sq ft',
      description: 'Multi-tenant business park with world-class amenities and green spaces.',
      details: 'An expansive business park hosting multiple Fortune 500 companies. Features modern office towers, recreational facilities, and extensive green landscaping.',
      features: ['Multiple Office Towers', 'Conference Centers', 'Food Courts', 'Gym & Spa', 'Green Landscaping', '24/7 Security'],
      budget: '₹750 Crores'
    },
    {
      id: 4,
      title: 'Industrial Hub',
      category: 'industrial',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Chennai, India',
      date: '2023',
      area: '2.1M sq ft',
      description: 'Integrated industrial complex with logistics and warehouse facilities.',
      details: 'A comprehensive industrial hub combining manufacturing, warehousing, and logistics. Strategically located with excellent connectivity to major transportation networks.',
      features: ['Manufacturing Units', 'Warehouse Facilities', 'Logistics Center', 'Rail Connectivity', 'Power Infrastructure'],
      budget: '₹400 Crores'
    },
    {
      id: 5,
      title: 'Tech Campus',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Hyderabad, India',
      date: '2022',
      area: '1.9M sq ft',
      description: 'Innovation-focused technology campus with collaborative workspaces.',
      details: 'A modern technology campus designed to foster innovation and collaboration. Features open workspaces, research labs, and state-of-the-art IT infrastructure.',
      features: ['Open Workspaces', 'Research Labs', 'IT Infrastructure', 'Innovation Centers', 'Cafeterias', 'Recreation Areas'],
      budget: '₹350 Crores'
    },
    {
      id: 6,
      title: 'Logistics Center',
      category: 'industrial',
      image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Delhi, India',
      date: '2022',
      area: '2.8M sq ft',
      description: 'Advanced logistics and distribution center with automated systems.',
      details: 'A state-of-the-art logistics facility with automated sorting systems, temperature-controlled storage, and advanced inventory management technology.',
      features: ['Automated Sorting', 'Temperature Control', 'Inventory Management', 'Loading Docks', 'Office Complex', 'Security Systems'],
      budget: '₹450 Crores'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-sm font-medium text-gray-600 mb-4 uppercase tracking-widest">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Exceptional Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our portfolio of landmark commercial and industrial projects 
            that showcase our commitment to excellence and innovation.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex space-x-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-white overflow-hidden hover:shadow-lg transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 text-sm font-medium text-gray-900">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="space-y-2 text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    <span>{project.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Building size={16} className="mr-2" />
                    <span>{project.area}</span>
                  </div>
                </div>

                <motion.button 
                  onClick={() => openProject(project)}
                  className="flex items-center text-black font-medium hover:text-gray-600 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  View Details
                  <ArrowRight size={16} className="ml-2" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.button 
            onClick={() => {
              // Show all projects by resetting filter
              setActiveFilter('all');
              // Scroll to portfolio top
              const portfolioSection = document.querySelector('#portfolio');
              if (portfolioSection) {
                portfolioSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-black text-white px-8 py-4 font-medium hover:bg-gray-800 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>

        {/* Project Modal */}
        {isModalOpen && selectedProject && (
          <motion.div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <X size={20} />
                </button>
                <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 text-sm font-medium">
                  {selectedProject.category}
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <h3 className="text-3xl font-light text-gray-900 mb-4">{selectedProject.title}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="flex items-center">
                    <MapPin size={20} className="mr-3 text-gray-400" />
                    <span className="text-gray-600">{selectedProject.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={20} className="mr-3 text-gray-400" />
                    <span className="text-gray-600">{selectedProject.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Building size={20} className="mr-3 text-gray-400" />
                    <span className="text-gray-600">{selectedProject.area}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {selectedProject.details}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-medium text-gray-900 mb-4">Key Features</h4>
                    <div className="space-y-2">
                      {selectedProject.features.map((feature: string, idx: number) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-medium text-gray-900 mb-4">Project Investment</h4>
                    <div className="text-2xl font-light text-gray-900 mb-4">{selectedProject.budget}</div>
                    <button 
                      onClick={() => {
                        closeModal();
                        const contactSection = document.querySelector('#contact');
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition-colors duration-300"
                    >
                      Start Similar Project
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
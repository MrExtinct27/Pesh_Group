'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { ArrowRight, Calendar, MapPin, Building, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  images: string[];
  location: string;
  date: string;
  area: string;
  description: string;
  details: string;
  features: string[];
  budget: string;
}

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentSlide(0); // Reset to first slide
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setCurrentSlide(0);
    document.body.style.overflow = 'unset';
  };

  const nextSlide = useCallback(() => {
    if (selectedProject && selectedProject.images) {
      setCurrentSlide((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  }, [selectedProject]);

  const prevSlide = useCallback(() => {
    if (selectedProject && selectedProject.images) {
      setCurrentSlide((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  }, [selectedProject]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isModalOpen) return;

      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyPress);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isModalOpen, selectedProject, nextSlide, prevSlide]);

  // Auto-play slideshow
  useEffect(() => {
    if (
      !isModalOpen ||
      !selectedProject ||
      !selectedProject.images ||
      selectedProject.images.length <= 1
    ) {
      return;
    }

    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, [isModalOpen, selectedProject, currentSlide, nextSlide]);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'industrial', name: 'Industrial' },
    { id: 'it-offices', name: 'IT Offices' }
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Midas Tower',
      category: 'it-offices',
      image: '/midas0.jpeg',
      images: [
        '/portfolio/MT/MT01.jpg',
        '/portfolio/MT/MT02.JPG',
        '/portfolio/MT/MT03.jpeg',
        '/portfolio/MT/MT04.JPG',
        '/portfolio/MT/MT05.jpeg'
      ],
      location: 'Hinjewadi, Pune',
      date: '2024',
      area: '2,65,000 sq ft',
      description: 'Grade A IT spaces built for performance, security, and productivity.',
      details:
        'Midas Tower is a A Grade IT office space project . It is  specifically designed to take your business to a whole new level of performance & productivity. Large efficient,Floor plates,clean,secured & well maintained premises. give me just one line explaining all this',
      features: [
        'Strategic Location',
        'Grade A IT Office',
        'Green Building',
        'Premium Amenities',
        'Tallest IT Office',
        'Rooftop Cafeteria'
      ],
      budget: '₹500 Crores'
    },
    {
      id: 2,
      title: 'Midas Infinite',
      category: 'it-offices',
      image: '/portfolio/MI/MI01.jpeg',
      images: [
        '/portfolio/MI/MI01.jpeg',
        '/portfolio/MI/MI02.jpeg',
        '/portfolio/MI/MI03.jpeg',
        '/portfolio/MI/MI04.jpeg',
        '/portfolio/MI/MI05.jpeg'
      ],
      location: 'Hinjewadi, Pune',
      date: '2024',
      area: '45,000 sq ft',
      description: 'Premium IT workspace with global standards and SEZ benefits.',
      details:
        'A world-class SEZ IT office project crafted to international standards, combining safety, security, sustainability, and robust infrastructure to deliver a future-ready workplace.Green building concept with natural light, ventilation, water conservation & rainwater harvesting.',
      features: [
        'Green Building',
        'SEZ Project',
        'World Class Amenities',
        'Ample Parking Spaces',
        'Efficient Floor Plates'
      ],
      budget: '₹300 Crores'
    },
    {
      id: 3,
      title: 'Midas SEZ',
      category: 'commercial',
      image: '/portfolio/MS/MS01.jpeg',
      images: [
        '/portfolio/MS/MS01.jpeg',
        '/portfolio/MS/MS02.jpeg',
        '/portfolio/MS/MS03.JPG',
        '/portfolio/MS/MS04.jpeg',
        '/portfolio/MS/MS05.jpeg'
      ],
      location: 'Hinjewadi, Pune',
      date: '2023',
      area: '62,000 sq ft',
      description:
        'Future-ready commercial spaces designed for performance, security, and long-term value.',
      details:
        ' Ready possession bare shell  office space project.Features modern office towers, recreational facilities, and extensive green landscaping.',
      features: [
        'Ideal for Commercial/IT offices',
        'Modern Infrastructure',
        'Modern Amenities',
        'Green Landscaping',
        '24/7 Security'
      ],
      budget: '₹750 Crores'
    },
    {
      id: 4,
      title: 'Ish Infotech',
      category: 'it-offices',
      image: '/portfolio/II/II01.jpg',
      images: [
        '/portfolio/II/II01.jpg',
        '/portfolio/II/II02.JPG',
        '/portfolio/II/II03.JPG',
        '/portfolio/II/II04.JPG',
        '/portfolio/II/II05.jpg'
      ],
      location: 'Hinjewadi, Pune',
      date: '2023',
      area: '1,10,000 sq ft',
      description:
        'Modern IT hubs built to inspire productivity and empower businesses.',
      details:
        'Crafted for the modern workforce, these IT offices combine advanced facilities with eco-friendly design. From seamless functionality to reliable infrastructure, every detail is tailored to help businesses thrive. Strategically located with excellent connectivity to major transportation networks.',
      features: [
        'Prime Location',
        'Fully Furnished',
        '24/7 Security',
        'Auditorium',
        'Rooftop Cafeteria'
      ],
      budget: '₹400 Crores'
    },
    {
      id: 5,
      title: 'Pesh Technology Park',
      category: 'it-offices',
      image: '/portfolio/PTP/PTP01.JPG',
      images: [
        '/portfolio/PTP/PTP01.JPG',
        '/portfolio/PTP/PTP02.jpg',
        '/portfolio/PTP/PTP03.jpg',
        '/portfolio/PTP/PTP04.jpg',
        '/portfolio/PTP/PTP05.jpg'
      ],
      location: 'Talwade, Pune',
      date: '2022',
      area: '85,000 sq ft',
      description:
        'Innovation-focused technology campus with collaborative workspaces.',
      details:
        'A modern technology campus designed to foster innovation and collaboration. With state-of-the-art infrastructure, natural surroundings, and thoughtful facilities, it creates an ideal environment for productivity and well-being.',
      features: [
        'Recreational Zone',
        'Grand Amphitheater',
        'IT Infrastructure',
        'Recreation Areas',
        'Cafeterias'
      ],
      budget: '₹350 Crores'
    },
    {
      id: 6,
      title: 'Raj Motors',
      category: 'industrial',
      image: '/portfolio/RJM/RJM01.png',
      images: [
        'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1590479773265-7464e5d48118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
      ],
      location: 'Chinchwad, Pune',
      date: '2022',
      area: '10,000 sq ft',
      description: 'Advanced commercial center with automated systems.',
      details:
        'A state-of-the-art facility with automated systems, three-star facilities, and advanced management technology.',
      features: [
        'Prime Location',
        'Green Building',
        'Water Conservation',
        'Fire Safety',
        'Office Complex',
        'Security Systems'
      ],
      budget: '₹450 Crores'
    },
    // Additional projects that will be shown when "View All Projects" is clicked
    {
      id: 7,
      title: 'Tech Valley Hub',
      category: 'it-offices',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
      ],
      location: 'Mumbai, India',
      date: '2021',
      area: '2.5M sq ft',
      description:
        'Modern tech campus with sustainable design and smart infrastructure.',
      details:
        'A LEED Platinum certified technology campus featuring smart building systems, renewable energy integration, and collaborative innovation spaces.',
      features: [
        'LEED Platinum Certified',
        'Smart Building Systems',
        'Renewable Energy',
        'Innovation Labs',
        'Green Roof',
        'EV Charging'
      ],
      budget: '₹600 Crores'
    },
    {
      id: 8,
      title: 'Industrial Excellence Center',
      category: 'industrial',
      image:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
      ],
      location: 'Ahmedabad, India',
      date: '2021',
      area: '3.5M sq ft',
      description:
        'Advanced manufacturing complex with robotics and automation.',
      details:
        'A cutting-edge industrial facility featuring Industry 4.0 technologies, robotic assembly lines, and sustainable manufacturing processes.',
      features: [
        'Industry 4.0 Technology',
        'Robotic Assembly',
        'Sustainable Manufacturing',
        'Quality Labs',
        'Training Center',
        'Green Energy'
      ],
      budget: '₹800 Crores'
    },
    {
      id: 9,
      title: 'Corporate Plaza',
      category: 'commercial',
      image:
        'https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1590479773265-7464e5d48118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
      ],
      location: 'Kolkata, India',
      date: '2020',
      area: '1.6M sq ft',
      description:
        'Premium office complex with luxury amenities and services.',
      details:
        'A prestigious corporate headquarters featuring premium office spaces, luxury amenities, and world-class business services.',
      features: [
        'Premium Office Spaces',
        'Luxury Amenities',
        'Business Services',
        'Conference Facilities',
        'Fine Dining',
        'Concierge Service'
      ],
      budget: '₹450 Crores'
    },
    {
      id: 10,
      title: 'Innovation District',
      category: 'it-offices',
      image:
        'https://images.unsplash.com/photo-1590479773265-7464e5d48118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1590479773265-7464e5d48118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
      ],
      location: 'Pune, India',
      date: '2020',
      area: '2.2M sq ft',
      description:
        'Collaborative innovation hub for startups and enterprises.',
      details:
        'A dynamic innovation district designed to foster collaboration between startups, enterprises, and research institutions.',
      features: [
        'Startup Incubator',
        'Research Labs',
        'Collaborative Spaces',
        'Innovation Center',
        'Tech Hub',
        'Networking Areas'
      ],
      budget: '₹380 Crores'
    },
    {
      id: 11,
      title: 'Logistics Gateway',
      category: 'industrial',
      image:
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
      ],
      location: 'Nagpur, India',
      date: '2019',
      area: '4.0M sq ft',
      description: 'Strategic logistics hub with multimodal connectivity.',
      details:
        'A strategic logistics hub featuring multimodal connectivity, advanced warehousing systems, and efficient supply chain management.',
      features: [
        'Multimodal Connectivity',
        'Advanced Warehousing',
        'Supply Chain Management',
        'Cold Storage',
        'Customs Facility',
        'Security Systems'
      ],
      budget: '₹650 Crores'
    },
    {
      id: 12,
      title: 'Business Park',
      category: 'commercial',
      image:
        'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
      ],
      location: 'Indore, India',
      date: '2019',
      area: '2.8M sq ft',
      description: 'Mixed-use business park with retail and office spaces.',
      details:
        'A comprehensive mixed-use development combining modern office spaces, retail outlets, and recreational facilities.',
      features: [
        'Mixed-use Development',
        'Office Spaces',
        'Retail Outlets',
        'Recreational Facilities',
        'Food Courts',
        'Parking Complex'
      ],
      budget: '₹520 Crores'
    },
    {
      id: 13,
      title: 'Data Center Campus',
      category: 'it-offices',
      image:
        'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
      ],
      location: 'Bangalore, India',
      date: '2018',
      area: '1.5M sq ft',
      description: 'Tier-4 data center with advanced security and redundancy.',
      details:
        'A state-of-the-art Tier-4 data center featuring advanced security systems, redundant power infrastructure, and 99.99% uptime guarantee.',
      features: [
        'Tier-4 Certification',
        'Advanced Security',
        'Redundant Power',
        '99.99% Uptime',
        'Climate Control',
        '24/7 Monitoring'
      ],
      budget: '₹750 Crores'
    },
    {
      id: 14,
      title: 'Manufacturing Hub',
      category: 'industrial',
      image:
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1590479773265-7464e5d48118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
      ],
      location: 'Coimbatore, India',
      date: '2018',
      area: '3.8M sq ft',
      description:
        'Advanced manufacturing facility with lean production systems.',
      details:
        'A modern manufacturing facility implementing lean production systems, Six Sigma methodologies, and sustainable manufacturing practices.',
      features: [
        'Lean Production',
        'Six Sigma',
        'Sustainable Manufacturing',
        'Quality Control',
        'Training Center',
        'Green Energy'
      ],
      budget: '₹680 Crores'
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  // Show only first 6 projects initially, or all projects when "View All Projects" is clicked
  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 6);

  // Function to get display name for category
  const getCategoryDisplayName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : categoryId;
  };

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
            {categories.map((category) => {
              const projectCount = category.id === 'all'
                ? projects.length
                : projects.filter(project => project.category === category.id).length;

              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveFilter(category.id);
                    setShowAllProjects(false); // Reset to show only 6 projects when filter changes
                  }}
                  className={`px-6 py-3 font-medium transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-black text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-xs opacity-75">({projectCount})</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
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
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={256}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 text-sm font-medium text-gray-900">
                  {getCategoryDisplayName(project.category)}
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
              setShowAllProjects(!showAllProjects);
              // Scroll to portfolio top when showing all projects
              if (!showAllProjects) {
                const portfolioSection = document.querySelector('#portfolio');
                if (portfolioSection) {
                  portfolioSection.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
            className="bg-black text-white px-8 py-4 font-medium hover:bg-gray-800 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAllProjects ? 'Show Less Projects' : 'View All Projects'}
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
              {/* Modal Header - Slideshow */}
              <div className="relative">
                {/* Main Image */}
                <div className="relative h-96 overflow-hidden">
                  {/* Background Image for Parallax Effect */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110"
                    style={{
                      backgroundImage: `url(${selectedProject.images[currentSlide]})`,
                      filter: 'blur(8px) brightness(0.7)',
                      transform: `scale(1.1) translateY(${currentSlide * 2}px)`
                    }}
                  />

                  {/* Main Image with Zoom Effect */}
                  <motion.img
                    key={`slide-img-${selectedProject.id}-${currentSlide}`}
                    src={selectedProject.images[currentSlide]}
                    alt={`${selectedProject.title} - Image ${currentSlide + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{
                      scale: 1.1,
                      opacity: 0,
                      filter: 'brightness(0.8)'
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      filter: 'brightness(1)'
                    }}
                    transition={{
                      duration: 1.2,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    exit={{
                      scale: 0.9,
                      opacity: 0
                    }}
                  />

                  {/* Overlay Gradient for Better Text Visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                  {/* Enhanced Image Counter with Animation */}
                  <motion.div
                    key={`slide-counter-${selectedProject.id}-${currentSlide}`}
                    className="absolute top-4 left-4 bg-black/80 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm"
                    initial={{
                      scale: 0.8,
                      opacity: 0,
                      y: -10
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      y: 0
                    }}
                    transition={{
                      duration: 0.6,
                      ease: 'easeOut'
                    }}
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      {currentSlide + 1} / {selectedProject.images.length}
                    </motion.span>
                  </motion.div>

                  {/* Enhanced Close Button with Animation */}
                  <motion.button
                    onClick={closeModal}
                    className="absolute top-4 right-4 w-12 h-12 bg-white/95 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 z-10 shadow-lg backdrop-blur-sm"
                    whileHover={{
                      scale: 1.1,
                      rotate: 90,
                      boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: 'easeOut'
                    }}
                  >
                    <X size={22} />
                  </motion.button>

                  {/* Enhanced Category Badge with Animation */}
                  <motion.div
                    key={`slide-cat-${selectedProject.id}-${currentSlide}`}
                    className="absolute bottom-4 left-4 bg-white/95 px-4 py-2 text-sm font-medium rounded-lg shadow-lg backdrop-blur-sm"
                    initial={{
                      scale: 0.8,
                      opacity: 0,
                      x: -20
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      x: 0
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3,
                      ease: 'easeOut'
                    }}
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                    >
                      {getCategoryDisplayName(selectedProject.category)}
                    </motion.span>
                  </motion.div>

                  {/* Enhanced Dots Indicator with Animation */}
                  {selectedProject.images.length > 1 && (
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                      {selectedProject.images.map((image: string, index: number) => (
                        <motion.button
                          key={`dot-${selectedProject.id}-${index}`}
                          onClick={() => goToSlide(index)}
                          className={`relative w-3 h-3 rounded-full transition-all duration-500 ${
                            currentSlide === index
                              ? 'bg-white'
                              : 'bg-white/30 hover:bg-white/50'
                          }`}
                          whileHover={{ scale: 1.3 }}
                          whileTap={{ scale: 0.9 }}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{
                            scale: currentSlide === index ? 1 : 0.8,
                            opacity: 1
                          }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.1,
                            ease: 'easeOut'
                          }}
                        >
                          {/* Active dot pulse effect */}
                          {currentSlide === index && (
                            <motion.div
                              className="absolute inset-0 bg-white rounded-full"
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.7, 0, 0.7]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut'
                              }}
                            />
                          )}
                        </motion.button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <h3 className="text-3xl font-light text-gray-900 mb-4">{selectedProject.title}</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex items-center">
                    <MapPin size={20} className="mr-3 text-gray-400" />
                    <span className="text-gray-600">{selectedProject.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Building size={20} className="mr-3 text-gray-400" />
                    <span className="text-gray-600">{selectedProject.area}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {selectedProject.details}
                </p>

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
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;

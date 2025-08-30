'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Building2, Users, Award } from 'lucide-react';

const HeroSection = () => {
  const handleDiscoverMore = () => {
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewPortfolio = () => {
    const portfolioSection = document.querySelector('#portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gray-50">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/midas0.jpeg')"
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-sm font-medium text-gray-200 mb-6 uppercase tracking-widest">
              Premium Construction Excellence
            </span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-light text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Crafting Tomorrow's
            <span className="block font-normal">Architectural Legacy</span>
          </motion.h1>

          <motion.p 
            className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Where visionary design meets precision engineering. We create extraordinary 
            commercial spaces that define the future of urban architecture.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button 
              onClick={handleDiscoverMore}
              className="bg-white text-black px-8 py-4 font-medium hover:bg-gray-100 transition-colors duration-300 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover More
              <ArrowRight className="ml-2" size={20} />
            </motion.button>
            
            <motion.button 
              onClick={handleViewPortfolio}
              className="border border-white text-white px-8 py-4 font-medium hover:bg-white hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Statistics */}
      <motion.div 
        className="absolute bottom-20 left-0 right-0"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-white">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Building2 size={24} className="text-gray-300" />
              </div>
              <div className="text-3xl font-light mb-2">9+</div>
              <div className="text-sm text-gray-300 uppercase tracking-wider">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Users size={24} className="text-gray-300" />
              </div>
              <div className="text-3xl font-light mb-2">45+</div>
              <div className="text-sm text-gray-300 uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Award size={24} className="text-gray-300" />
              </div>
              <div className="text-3xl font-light mb-2">100%</div>
              <div className="text-sm text-gray-300 uppercase tracking-wider">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyPress);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleEnquireClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-black text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+91 9999999999</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={14} />
              <span>Pimpri Chinchwad, Pune</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={14} />
              <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
            </div>
          </div>
          <div className="text-gray-300">
            Premium Construction Excellence Since 1999
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header 
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">PG</span>
              </div>
              <div>
                <h1 className={`text-2xl font-light ${isScrolled ? 'text-black' : 'text-black'}`}>
                  PESGROUP
                </h1>
                <p className={`text-xs ${isScrolled ? 'text-gray-600' : 'text-gray-600'} font-medium`}>
                  Premium Builders
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`font-medium transition-colors duration-300 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-black' 
                      : 'text-white hover:text-gray-300'
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.button 
                onClick={handleEnquireClick}
                className="bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enquire Now
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X size={24} className={isScrolled ? 'text-black' : 'text-white'} />
              ) : (
                <Menu size={24} className={isScrolled ? 'text-black' : 'text-white'} />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-white border-t"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block text-gray-700 hover:text-black font-medium py-2 w-full text-left"
                >
                  {item.name}
                </button>
              ))}
              <button 
                onClick={handleEnquireClick}
                className="w-full bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition-colors duration-300"
              >
                Enquire Now
              </button>
            </div>
          </motion.div>
        )}
      </motion.header>
    </>
  );
};

export default Header;
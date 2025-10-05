'use client';

import { motion } from 'framer-motion';
import { Building, Factory, Warehouse } from 'lucide-react';

const ServicesSection = () => {


  const services = [
    {
      icon: Building,
      title: 'Commercial Buildings',
      description: 'Premium office complexes and corporate headquarters designed for the modern business landscape.',
      features: ['Office Buildings', 'Corporate Campuses', 'High-Rise Developments', 'Sustainable Design'],
      price: '',
      popular: true
    },
    {
      icon: Factory,
      title: 'Industrial Construction',
      description: 'State-of-the-art manufacturing facilities and industrial complexes built to international standards.',
      features: ['Manufacturing Plants', 'Warehouses', 'Industrial Parks', 'Logistics Centers'],
      price: '',
      popular: false
    },
    {
      icon: Warehouse,
      title: 'Infrastructure Projects',
      description: 'Large-scale infrastructure development including commercial complexes and mixed-use developments.',
      features: ['Shopping Centers', 'Mixed-Use Developments', 'Commercial Complexes', 'Public Buildings'],
      price: '',
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
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
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Comprehensive Construction Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From conceptual design to project completion, we deliver exceptional commercial 
            construction services with unmatched quality and precision.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                className="group relative bg-gray-50 p-8 hover:bg-white hover:shadow-lg transition-all duration-500 border border-transparent hover:border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {service.popular && (
                  <span className="absolute -top-3 left-8 bg-black text-white px-4 py-1 text-sm font-medium">
                    Most Popular
                  </span>
                )}

                <div className="flex items-start mb-6">
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 ${
                    service.popular ? 'bg-black text-white' : 'bg-gray-200 text-gray-700 group-hover:bg-gray-300'
                  }`}>
                    <IconComponent size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">{service.title}</h3>
                    <div className="text-lg font-medium text-gray-900">{service.price}</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
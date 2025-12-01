'use client';

import { motion } from 'framer-motion';
import { Building2, Briefcase, Store, Hammer, Warehouse } from 'lucide-react';

const ServicesSection = () => {


  const services = [
    {
      icon: Building2,
      title: 'Grade-A Office Buildings',
      description: 'Premium IT towers and corporate office spaces designed with modern architecture, efficient layouts, and enterprise-grade infrastructure.'
    },
    {
      icon: Briefcase,
      title: 'Fully Furnished / Warm Shell Offices',
      description: 'Plug-and-play workspaces and customizable warm-shell floors for tech companies, SMEs, and enterprise clients.'
    },
    {
      icon: Store,
      title: 'Showrooms & Retail Spaces',
      description: 'High-visibility commercial showrooms in prime PCMC locations — ideal for automobile brands, premium retail, lifestyle stores, and service outlets.'
    },
    {
      icon: Hammer,
      title: 'Built-to-Suit Developments',
      description: 'Custom-planned offices, industrial sheds, or mixed-use projects delivered exactly as per your business needs.'
    },
    {
      icon: Warehouse,
      title: 'Industrial Units & Warehouses',
      description: 'Large industrial sheds, manufacturing units, and logistics-ready facilities in Pune\'s growing industrial corridors.'
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
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            End-to-End Commercial Real Estate Solutions
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                className="group bg-gray-50 p-8 hover:bg-white hover:shadow-lg transition-all duration-500 border border-transparent hover:border-gray-200 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 rounded-lg bg-gray-200 text-gray-700 group-hover:bg-gray-300 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={32} />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const ClientsTestimonialsSection = () => {
  // Happy Clients Data
  const happyClients = [
    { name: 'Tata Group', logo: 'TG' },
    { name: 'Reliance Industries', logo: 'RI' },
    { name: 'Infosys', logo: 'IN' },
    { name: 'Wipro', logo: 'WI' },
    { name: 'Tech Mahindra', logo: 'TM' },
    { name: 'L&T', logo: 'LT' },
    { name: 'Bajaj Auto', logo: 'BA' },
    { name: 'HDFC Bank', logo: 'HD' },
    { name: 'ICICI Bank', logo: 'IC' },
    { name: 'Godrej', logo: 'GD' },
    { name: 'Mahindra Group', logo: 'MG' },
    { name: 'Aditya Birla', logo: 'AB' }
  ];

  // Testimonials Data
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      position: 'CEO, TechCorp Industries',
      company: 'TechCorp Industries',
      rating: 5,
      text: 'PESGROUP delivered our corporate headquarters ahead of schedule and within budget. Their attention to detail and professional approach is unmatched.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      position: 'Director, Manufacturing Solutions',
      company: 'Manufacturing Solutions Ltd',
      rating: 5,
      text: 'The industrial complex they built for us is world-class. From planning to execution, every phase was handled with utmost professionalism.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b0395111?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      name: 'Amit Patel',
      position: 'Project Manager, Real Estate Division',
      company: 'Real Estate Division',
      rating: 5,
      text: 'Outstanding quality and innovation. PESGROUP transformed our vision into reality with their cutting-edge construction techniques.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      position: 'Operations Head, Logistics Hub',
      company: 'Logistics Hub',
      rating: 5,
      text: 'The logistics facility exceeded our expectations. Superior construction quality and timely delivery made this project a huge success.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 5,
      name: 'Vikram Singh',
      position: 'Chairman, Business Park',
      company: 'Business Park Ventures',
      rating: 5,
      text: 'PESGROUP\'s expertise in commercial construction is remarkable. They delivered a state-of-the-art business park that stands as a landmark.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 6,
      name: 'Kavya Nair',
      position: 'Facility Manager, IT Campus',
      company: 'IT Campus Solutions',
      rating: 5,
      text: 'From concept to completion, PESGROUP maintained the highest standards. Our IT campus is now a model for sustainable construction.',
      image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  // Duplicate arrays for seamless infinite scroll
  const extendedClients = [...happyClients, ...happyClients];
  const extendedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-white overflow-hidden">
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
            Client Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover why leading companies choose PESGROUP for their most important construction projects.
          </p>
        </motion.div>

        {/* Happy Clients - Horizontal Animation */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-medium text-center text-gray-900 mb-8">
            Our Happy Clients
          </h3>
          
          <div className="relative">
            <div className="flex overflow-hidden">
              <motion.div 
                className="flex space-x-12 min-w-max"
                animate={{
                  x: [0, -1920], // Adjust based on content width
                }}
                transition={{
                  x: {
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                {extendedClients.map((client, index) => (
                  <motion.div
                    key={`${client.name}-${index}`}
                    className="flex items-center justify-center w-48 h-24 bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold text-lg">
                          {client.logo}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-gray-900">{client.name}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Testimonials - Different Horizontal Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-medium text-center text-gray-900 mb-8">
            What Our Clients Say
          </h3>
          
          <div className="relative">
            <div className="flex overflow-hidden">
              <motion.div 
                className="flex space-x-8 min-w-max"
                animate={{
                  x: [-1920, 0], // Reverse direction
                }}
                transition={{
                  x: {
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                {extendedTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={`${testimonial.id}-${index}`}
                    className="w-96 bg-gray-50 p-8 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200"
                    whileHover={{ y: -5 }}
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: 'vertical' as const,
                    }}
                  >
                    {/* Quote Icon */}
                    <Quote size={32} className="text-gray-400 mb-4" />
                    
                    {/* Rating Stars */}
                    <div className="flex space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    {/* Testimonial Text */}
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    
                    {/* Client Info */}
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.position}</p>
                        <p className="text-xs text-gray-500">{testimonial.company}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-600 mb-8">
            Ready to join our list of satisfied clients?
          </p>
          <motion.button 
            onClick={() => {
              const contactSection = document.querySelector('#contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-black text-white px-8 py-4 font-medium hover:bg-gray-800 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsTestimonialsSection;
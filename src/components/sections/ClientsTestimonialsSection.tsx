'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const ClientsTestimonialsSection = () => {
  // Happy Clients Data — put your direct URLs here
  const happyClients = [
    { name: 'Tata Group', logo: '/logos/tata.png' },
    { name: 'Capgemini', logo: '/logos/capgemini.png' },
    { name: 'BVG', logo: '/logos/bvg.png' },
    { name: 'Worldline', logo: '/logos/worldline.png' },
    { name: 'T Cube', logo: '/logos/tcube.png' },
    { name: 'Dassault Systems', logo: '/logos/dassault.png' },
    { name: 'ATS Group', logo: '/logos/ats.png' },
    { name: 'Harris Pye', logo: '/logos/harrispye.png' },
    { name: 'Tudip', logo: '/logos/tudip.png' },
    { name: 'Msys Technologies', logo: '/logos/msys.png' },
    { name: 'Fiat', logo: '/logos/fiat.png' },
    { name: 'MobiSoft', logo: '/logos/mobisoft.png' },
    // { name: 'HashMap', logo: '/logos/hashmap.png' },
    { name: 'Infineon', logo: '/logos/infineon.png' },
    { name: 'Bluebinaries', logo: '/logos/bluebinaries.png' },
    { name: 'Shore Auto', logo: '/logos/shoreauto.png' },
    { name: 'MOOG', logo: '/logos/moog.png' },
    { name: 'Innoplexus', logo: '/logos/innoplexus.png' },
    { name: 'Obara', logo: '/logos/obara.png' },
  ];

  // Testimonials Data (unchanged)
  const testimonials = [
    {
      id: 1,
      name: 'Vijayendra Surve',
      position: 'Hashmap India Pvt Ltd.',
      company: '',
      rating: 5,
      text: 'Midas Team is doing a fantastic job. Very responsive and supportive. I appreciate the team for their efforts to keep the building clean and safe.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      name: 'Amruta Bhatia',
      position: 'MOOG India Technology Pvt Ltd.',
      company: '',
      rating: 5,
      text: 'Midas is a clean and safe building and the view of Midas is fantastic.BMS team is very supportive',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b0395111?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      name: 'Rakesh Singh ',
      position: 'Msystechnologies LLC',
      company: '',
      rating: 5,
      text: 'Midas BMC Team is doing Great Job!. Pesh Groups services are extremely Good!!',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 4,
      name: 'Abhijeet Durgavade',
      position: 'Innoplexus Consulting Services Pvt Ltd.',
      company: '',
      rating: 5,
      text: 'Midas is a fantastic green building and very good facility management services provided by Midas Team.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },

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
                animate={{ x: [0, -1920] }}
                transition={{ x: { duration: 30, repeat: Infinity, ease: 'linear' } }}
              >
                {extendedClients.map((client, index) => (
                  <motion.div
                    key={`${client.name}-${index}`}
                    className="flex items-center justify-center w-48 h-24 bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-center">
                      {/* ✅ render the image, not the URL string */}
                      <div className="w-16 h-16 flex items-center justify-center mx-auto mb-2">
                        <Image
                          src={client.logo}
                          alt={client.name}
                          width={64}
                          height={64}
                          className="object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition"
                        />
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
                animate={{ x: [-1920, 0] }}
                transition={{ x: { duration: 40, repeat: Infinity, ease: 'linear' } }}
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
                    <Quote size={32} className="text-gray-400 mb-4" />
                    <div className="flex space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
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
          <p className="text-gray-600 mb-8">Ready to join our list of satisfied clients?</p>
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

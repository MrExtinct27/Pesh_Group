'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    position: 'CEO, TechCorp Industries',
    company: 'TechCorp Industries',
    rating: 5,
    text: 'PESGROUP delivered our corporate headquarters ahead of schedule and within budget. Their attention to detail and professional approach is unmatched.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    position: 'Director, Manufacturing Solutions',
    company: 'Manufacturing Solutions Ltd',
    rating: 5,
    text: 'The industrial complex they built for us is world-class. From planning to execution, every phase was handled with utmost professionalism.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b0395111?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    name: 'Amit Patel',
    position: 'Project Manager, Real Estate Division',
    company: 'Real Estate Division',
    rating: 5,
    text: 'Outstanding quality and innovation. PESGROUP transformed our vision into reality with their cutting-edge construction techniques.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    position: 'Operations Head, Logistics Hub',
    company: 'Logistics Hub',
    rating: 5,
    text: 'The logistics facility exceeded our expectations. Superior construction quality and timely delivery made this project a huge success.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 5,
    name: 'Vikram Singh',
    position: 'Chairman, Business Park',
    company: 'Business Park Ventures',
    rating: 5,
    text: "PESGROUP's expertise in commercial construction is remarkable. They delivered a state-of-the-art business park that stands as a landmark.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 6,
    name: 'Kavya Nair',
    position: 'Facility Manager, IT Campus',
    company: 'IT Campus Solutions',
    rating: 5,
    text: 'From concept to completion, PESGROUP maintained the highest standards. Our IT campus is now a model for sustainable construction.',
    image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
];

const extendedTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-medium text-center text-gray-900 mb-8">
            What Our Clients Say
          </h3>
        </motion.div>

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
      </div>
    </section>
  );
}

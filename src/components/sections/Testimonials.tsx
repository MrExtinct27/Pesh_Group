'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

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
                  <p className="text-gray-700 mb-6 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
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

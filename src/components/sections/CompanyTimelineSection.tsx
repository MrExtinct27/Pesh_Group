'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Building2, Award, Users, TrendingUp, MapPin, Star, Calendar, Briefcase } from 'lucide-react';

const CompanyTimelineSection = () => {
  const [activeYear, setActiveYear] = useState<number | null>(null);

  const timelineData = [
    {
      year: 2000,
      title: 'Foundation & First Steps',
      description: 'Pesh Group was established with a vision to transform the construction landscape in Maharashtra.',
      achievements: [
        'Company incorporation and team formation',
        'First residential project - 50 units',
        'Established core values and quality standards'
      ],
      stats: { projects: 1, employees: 15, area: '25,000 sq ft' },
      icon: Building2,
      color: 'from-gray-600 to-gray-700',
      bgColor: 'bg-gray-50'
    },
    {
      year: 2005,
      title: 'Growth & Recognition',
      description: 'Expanded operations and received first industry recognition for quality construction.',
      achievements: [
        'First commercial project completed',
        'Quality certification achieved',
        'Team expanded to 50+ professionals',
        'Revenue milestone of ₹10 crores'
      ],
      stats: { projects: 12, employees: 52, area: '2.5 lakh sq ft' },
      icon: Award,
      color: 'from-gray-700 to-gray-800',
      bgColor: 'bg-gray-100'
    },
    {
      year: 2010,
      title: 'Market Leadership',
      description: 'Established as a leading construction company with multiple ongoing projects.',
      achievements: [
        'First IT office complex project',
        'Partnership with major corporations',
        'Advanced construction technologies adopted',
        'ISO certification achieved'
      ],
      stats: { projects: 35, employees: 125, area: '8 lakh sq ft' },
      icon: TrendingUp,
      color: 'from-gray-800 to-black',
      bgColor: 'bg-gray-200'
    },
    {
      year: 2015,
      title: 'Innovation & Expansion',
      description: 'Pioneered green building practices and expanded to industrial construction.',
      achievements: [
        'First LEED certified project',
        'Industrial sector entry',
        'Green building expertise developed',
        'Technology integration in construction'
      ],
      stats: { projects: 58, employees: 200, area: '15 lakh sq ft' },
      icon: Star,
      color: 'from-black to-gray-900',
      bgColor: 'bg-gray-100'
    },
    {
      year: 2020,
      title: 'Digital Transformation',
      description: 'Embraced digital technologies and sustainable construction practices during challenging times.',
      achievements: [
        'Digital project management implementation',
        'Sustainable construction practices',
        'Remote collaboration tools',
        'Safety protocol enhancement'
      ],
      stats: { projects: 85, employees: 350, area: '25 lakh sq ft' },
      icon: Briefcase,
      color: 'from-gray-900 to-black',
      bgColor: 'bg-gray-50'
    },
    {
      year: 2024,
      title: 'Excellence & Future Vision',
      description: 'Leading the industry with cutting-edge projects and establishing new benchmarks.',
      achievements: [
        'Midas Tower - 26-story IT complex',
        '₹500+ crore project portfolio',
        'AI-integrated construction processes',
        'Expansion to multiple cities'
      ],
      stats: { projects: '120+', employees: '500+', area: '50+ lakh sq ft' },
      icon: Users,
      color: 'from-black to-gray-800',
      bgColor: 'bg-gray-200'
    }
  ];

  const milestones = [
    { year: 2003, text: 'First ₹1 Crore Project' },
    { year: 2008, text: 'First ₹10 Crore Project' },
    { year: 2012, text: 'First ₹50 Crore Project' },
    { year: 2018, text: 'First ₹100 Crore Project' },
    { year: 2022, text: 'First ₹500 Crore Project' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-4"
          >
            <Calendar className="w-8 h-8 text-gray-700 mr-3" />
            <span className="text-gray-700 font-semibold text-lg">Our Journey</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            25 Years of
            <span className="text-gray-800"> Excellence</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From humble beginnings to industry leadership - discover how we've grown to become one of Maharashtra's most trusted construction companies.
          </motion.p>
        </div>


        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-400 to-gray-700 transform md:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white border-4 border-gray-600 rounded-full transform md:-translate-x-1/2 z-10">
                    <div className="absolute inset-1 bg-gray-600 rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${isEven ? '' : 'md:mr-12'} ${!isEven ? 'md:text-right' : ''}`}>
                    <div
                      className={`bg-white rounded-2xl shadow-2xl p-8 transition-all duration-300 hover:shadow-3xl cursor-pointer ${
                        activeYear === item.year ? 'ring-2 ring-gray-600' : ''
                      }`}
                      onClick={() => setActiveYear(activeYear === item.year ? null : item.year)}
                    >
                      {/* Year Badge */}
                      <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${item.color} text-white font-bold text-lg mb-4`}>
                        <Icon className="w-5 h-5 mr-2" />
                        {item.year}
                      </div>

                      {/* Title and Description */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 mb-6">{item.description}</p>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className={`text-center p-3 rounded-lg ${item.bgColor}`}>
                          <div className="font-bold text-lg text-gray-900">{item.stats.projects}</div>
                          <div className="text-sm text-gray-600">Projects</div>
                        </div>
                        <div className={`text-center p-3 rounded-lg ${item.bgColor}`}>
                          <div className="font-bold text-lg text-gray-900">{item.stats.employees}</div>
                          <div className="text-sm text-gray-600">Employees</div>
                        </div>
                        <div className={`text-center p-3 rounded-lg ${item.bgColor}`}>
                          <div className="font-bold text-lg text-gray-900">{item.stats.area}</div>
                          <div className="text-sm text-gray-600">Built Area</div>
                        </div>
                      </div>

                      {/* Achievements - Expandable */}
                      {activeYear === item.year && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-gray-200 pt-6"
                        >
                          <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                          <ul className="space-y-2">
                            {item.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start">
                                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-600">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}

                      {/* Click indicator */}
                      <div className="text-center mt-4">
                        <span className="text-sm text-gray-600 font-medium">
                          {activeYear === item.year ? 'Click to collapse' : 'Click to expand'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for even alignment */}
                  <div className="hidden md:block w-2/12"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-gray-800 to-black rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">Looking Ahead to 2030</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our vision is to become India's most trusted construction partner, delivering 1000+ projects and building sustainable cities for the future.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-gray-300">Projects by 2030</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">₹10,000Cr</div>
                <div className="text-gray-300">Annual Revenue Target</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">10 Cities</div>
                <div className="text-gray-300">Expansion Plan</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyTimelineSection;

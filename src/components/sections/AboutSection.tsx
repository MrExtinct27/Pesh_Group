'use client';

import { motion } from 'framer-motion';
import { Award, Users, Building2, Target, Bold } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

// Custom hook for animated counting
const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrame: number;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTime: number;
          let currentCount = 0;
          const increment = Math.max(1, Math.ceil(end / (duration / 16))); // 60fps animation

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            
            if (currentCount < end) {
              currentCount = Math.min(currentCount + increment, end);
              setCount(currentCount);
              
              if (currentCount < end) {
                animationFrame = requestAnimationFrame(animate);
              }
            }
          };

          animationFrame = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      observer.disconnect();
    };
  }, [end, duration]);

  return { count, ref };
};

// Animated Counter Component
const AnimatedCounter = ({ number, text, icon: IconComponent, index }: {
  number: string;
  text: string;
  icon: any;
  index: number;
}) => {
  // Extract numeric value and suffix (e.g., "100+" -> 100, "+")
  const numericMatch = number.match(/^(\d+)(.*)$/);
  const numericValue = numericMatch ? parseInt(numericMatch[1]) : 0;
  const suffix = numericMatch ? numericMatch[2] : '';
  
  const { count, ref } = useCountUp(numericValue, 2000);

  return (
    <motion.div 
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mx-auto mb-4">
        <IconComponent size={32} className="text-white" />
      </div>
      <div className="text-3xl font-light text-gray-900 mb-2" ref={ref}>
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-gray-600 uppercase tracking-wider">{text}</div>
    </motion.div>
  );
};

const AboutSection = () => {
  const achievements = [
    { icon: Users, number: '100+', text: 'Expert Team Members' },
    { icon: Award, number: '250000', text: 'Developed Area' },
    { icon: Award, number: '20000', text: 'Under Developed Area' },
    { icon: Target, number: '100+', text: 'Satisfied Clients ' }
  ];

  const leadership = [
    {
      name: 'Sunil Peswani',
      role: 'CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Visionary leader with 25+ years of experience in commercial construction and development.'
    },
    {
      name: 'Ram Peswani',
      role: 'Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b0395111?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Founder whose vision in 1978 turned dreams into enduring landmarks.'
    },
    {
      name: 'Rashmi Peswani',
      role: 'CMO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Expert in large-scale commercial and industrial project management.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
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
            About PESGROUP
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Building Excellence Since 1978
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over four decades, PESHGROUP has been at the forefront of commercial construction, 
            delivering landmark projects that define skylines and shape communities.
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-light text-gray-900 mb-6">
              Our Story
            </h3>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
              Founded in 1978 by <strong>Mr. Ram Peswani</strong> as Pesh Electronics, <strong>Pesh Group </strong>has grown over four decades from a single company into a conglomerate of 15 businesses. 
              Since 1998, under the leadership of <strong>Mr. Sunil Ram Peswani</strong>, the group has emerged as a leader in Grade A commercial real estate.
              </p>
              
              <p>
              Pesh Group is recognized for its commitment, integrity, and client-focused approach. 
              The company provides premium IT office spaces, industrial facilities, SEZ units, boutique offices, and showrooms on both lease and sale. 
              
              </p>
              <p>
                Our commitment to quality, innovation, and sustainable practices has earned us 
                the trust of leading corporations and developers across the country. We don't just 
                build structures; we create environments where businesses thrive and communities flourish.
              </p>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="PESGROUP Construction"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {achievements.map((achievement, index) => (
            <AnimatedCounter
              key={achievement.text}
              number={achievement.number}
              text={achievement.text}
              icon={achievement.icon}
              index={index}
            />
          ))}
        </motion.div>

        {/* Leadership Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-gray-900 mb-4">
              Leadership Team
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the visionary leaders driving innovation and excellence in every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <motion.div 
                key={member.name}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative mb-6 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-48 h-48 object-cover mx-auto rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xl font-medium text-gray-900 mb-2">{member.name}</h4>
                <p className="text-gray-700 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
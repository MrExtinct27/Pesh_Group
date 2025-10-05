'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, MessageCircle, Building2, Clock, DollarSign, Shield, Wrench } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqCategories = [
    {
      icon: Building2,
      name: 'Projects & Services',
      color: 'text-gray-700',
      bgColor: 'bg-gray-100'
    },
    {
      icon: Clock,
      name: 'Timeline & Process',
      color: 'text-gray-600',
      bgColor: 'bg-gray-50'
    },
    {
      icon: DollarSign,
      name: 'Pricing & Payments',
      color: 'text-black',
      bgColor: 'bg-gray-200'
    },
    {
      icon: Shield,
      name: 'Quality & Safety',
      color: 'text-gray-800',
      bgColor: 'bg-gray-100'
    }
  ];

  const faqs = [
    {
      category: 'Projects & Services',
      question: 'What types of construction projects do you handle?',
      answer: 'We specialize in commercial buildings, IT offices, industrial facilities, warehouses, and large-scale infrastructure projects. Our expertise spans from 50,000 sq ft to 5+ lakh sq ft developments with budgets ranging from ₹50 crores to ₹500+ crores.'
    },
    {
      category: 'Projects & Services',
      question: 'Do you provide design and engineering services?',
      answer: 'Yes, we offer comprehensive design-build services including architectural planning, structural engineering, MEP design, and interior fit-outs. Our in-house team ensures seamless coordination from concept to completion.'
    },
    {
      category: 'Timeline & Process',
      question: 'How long does a typical commercial project take?',
      answer: 'Project timelines vary based on size and complexity. Typically, a 1-2 lakh sq ft commercial building takes 18-24 months, while larger IT campuses (3-5 lakh sq ft) require 24-36 months. We provide detailed project schedules during planning.'
    },
    {
      category: 'Timeline & Process',
      question: 'What is your construction process?',
      answer: 'Our process includes: 1) Site analysis & feasibility study, 2) Design development & approvals, 3) Detailed engineering & planning, 4) Construction execution with quality monitoring, 5) Testing & commissioning, 6) Handover with warranty support.'
    },
    {
      category: 'Pricing & Payments',
      question: 'How do you structure project pricing?',
      answer: 'We offer transparent pricing with detailed cost breakdowns. Payment is typically structured as: 10% advance, 80% based on construction milestones, and 10% upon completion. We provide comprehensive BOQ (Bill of Quantities) for full transparency.'
    },
    {
      category: 'Pricing & Payments',
      question: 'Do you provide cost estimates before starting?',
      answer: 'Yes, we provide detailed cost estimates after site survey and requirement analysis. Our estimates include materials, labor, equipment, overheads, and contingencies with ±5% accuracy for informed decision-making.'
    },
    {
      category: 'Quality & Safety',
      question: 'What quality standards do you follow?',
      answer: 'We adhere to IS codes, NBC guidelines, and international standards like LEED for green buildings. All our projects undergo regular quality audits, third-party inspections, and we maintain detailed quality documentation throughout construction.'
    },
    {
      category: 'Quality & Safety',
      question: 'How do you ensure construction safety?',
      answer: 'Safety is our top priority. We implement comprehensive safety protocols including regular training, PPE enforcement, safety audits, emergency procedures, and compliance with all statutory safety requirements. Our safety record speaks for itself with zero major incidents.'
    },
    {
      category: 'Projects & Services',
      question: 'Do you handle government and private projects?',
      answer: 'Yes, we work with both sectors. We have experience with government tenders, PSU projects, and private corporate developments. Our team understands the unique requirements and compliance needs of each sector.'
    },
    {
      category: 'Timeline & Process',
      question: 'How do you handle project delays and changes?',
      answer: 'We maintain buffer time in schedules and have contingency plans. For scope changes, we follow a formal change management process with impact assessment. Our project management approach minimizes delays through proactive planning and risk management.'
    }
  ];

  const getCategoryIcon = (category: string) => {
    const categoryData = faqCategories.find(cat => cat.name === category);
    return categoryData ? categoryData : faqCategories[0];
  };

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
            <MessageCircle className="w-8 h-8 text-gray-700 mr-3" />
            <span className="text-gray-700 font-semibold text-lg">Got Questions?</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Frequently Asked
            <span className="text-gray-800"> Questions</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Get answers to common questions about our construction services, processes, and expertise.
          </motion.p>
        </div>


        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const categoryData = getCategoryIcon(faq.category);
            const Icon = categoryData.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg ${categoryData.bgColor}`}>
                      <Icon className={`w-5 h-5 ${categoryData.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {faq.question}
                      </h3>
                      <span className={`text-sm font-medium ${categoryData.color}`}>
                        {faq.category}
                      </span>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="ml-14">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, MessageCircle, Building2 } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqCategories = [
    {
      icon: Building2,
      name: 'General',
      color: 'text-gray-700',
      bgColor: 'bg-gray-100'
    }
  ];

  const faqs = [
    {
      category: 'General',
      question: 'What types of spaces are available with Pesh Group?',
      answer: 'We offer ready-to-move, warm shell, and fully furnished plug-n-play offices, IT/ITES spaces, showrooms, and industrial units.'
    },
    {
      category: 'General',
      question: 'Where are your projects located?',
      answer: 'Our key developments are in Pune\'s prime business hubs — Hinjewadi, Talawade, Pimpri-Chinchwad, and other MIDC zones.'
    },
    {
      category: 'General',
      question: 'Are your offices ready to move in?',
      answer: 'Yes, many of our spaces are fully furnished and move-in ready to help companies start operations immediately.'
    },
    {
      category: 'General',
      question: 'Can tenants expand or customize their space later?',
      answer: 'Absolutely — we offer flexible leasing options and assist clients who wish to expand or reconfigure their office layouts.'
    },
    {
      category: 'General',
      question: 'How can I enquire or schedule a site visit?',
      answer: 'You can fill out the enquiry form on our website or contact us directly at contact@peshgroup.com or through our phone number.'
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
            Get answers to common questions about our spaces, locations, and leasing options.
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

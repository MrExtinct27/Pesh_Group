'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X, Mail, Phone, Building2, User, CheckCircle, Loader2 } from 'lucide-react';

interface ProjectScheduleVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  projectSlug: string;
}

export default function ProjectScheduleVisitModal({
  isOpen,
  onClose,
  projectTitle,
  projectSlug
}: ProjectScheduleVisitModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    mobileNumber: '',
    requirement: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    let value = e.target.value;
    
    // Only allow numbers for mobile number field
    if (e.target.name === 'mobileNumber') {
      value = value.replace(/\D/g, '').slice(0, 10);
    }
    
    setFormData({
      ...formData,
      [e.target.name]: value
    });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!formData.name || !formData.email || !formData.companyName || !formData.mobileNumber || !formData.requirement) {
      setError('All fields are required');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Phone validation
    const cleanPhone = formData.mobileNumber.replace(/\D/g, '');
    if (cleanPhone.length !== 10) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }

    setIsSubmitting(true);

    try {
      // Create FormData object for getform.io
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('companyName', formData.companyName);
      formDataToSend.append('mobileNumber', formData.mobileNumber);
      formDataToSend.append('requirement', formData.requirement);
      formDataToSend.append('projectTitle', projectTitle);
      formDataToSend.append('projectSlug', projectSlug);
      formDataToSend.append('formType', 'Schedule Visit');

      const response = await fetch('https://getform.io/f/bpjzddyb', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form after 3 seconds and close modal
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            companyName: '',
            mobileNumber: '',
            requirement: ''
          });
          setIsSubmitted(false);
          onClose();
        }, 3000);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to submit. Please try again or contact us directly.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setFormData({
        name: '',
        email: '',
        companyName: '',
        mobileNumber: '',
        requirement: ''
      });
      setError('');
      setIsSubmitted(false);
      onClose();
    }
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl max-w-2xl w-full h-[95vh] sm:h-auto max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
              style={{ paddingBottom: 'env(safe-area-inset-bottom, 0)' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Drag Handle */}
              <div className="sm:hidden flex justify-center pt-3 pb-1">
                <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
              </div>

              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 flex items-start sm:items-center justify-between z-10">
                <div className="flex-1 min-w-0 pr-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Schedule a Visit</h2>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 truncate" title={projectTitle}>
                    {projectTitle}
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  disabled={isSubmitting}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-50 flex-shrink-0"
                  aria-label="Close modal"
                >
                  <X size={20} className="sm:w-6 sm:h-6 text-gray-600" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 sm:py-12"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full mb-4 sm:mb-6">
                      <CheckCircle size={32} className="sm:w-10 sm:h-10 text-green-600" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 px-2">
                      Request Submitted Successfully!
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-2">
                      Our team will contact you shortly to confirm your visit details.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 px-2">
                      This window will close automatically...
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    {/* Honeypot field to prevent spam */}
                    <input type="hidden" name="_gotcha" style={{ display: 'none' }} />
                    
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User size={18} className="sm:w-5 sm:h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail size={18} className="sm:w-5 sm:h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>

                    {/* Company Name */}
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Building2 size={18} className="sm:w-5 sm:h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed"
                          placeholder="Enter your company name"
                        />
                      </div>
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-2">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone size={18} className="sm:w-5 sm:h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          id="mobileNumber"
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          maxLength={10}
                          inputMode="numeric"
                          className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed"
                          placeholder="Enter 10-digit mobile number"
                        />
                      </div>
                    </div>

                    {/* Requirement */}
                    <div>
                      <label htmlFor="requirement" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Requirement <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="requirement"
                        name="requirement"
                        value={formData.requirement}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed appearance-none bg-white"
                      >
                        <option value="">Select your space requirement</option>
                        <option value="3000 to 5000 sqft">3000 to 5000 sqft</option>
                        <option value="5000 to 10000 sqft">5000 to 10000 sqft</option>
                        <option value="10000 sqft & above">10000 sqft & above</option>
                      </select>
                    </div>

                    {/* Error Message */}
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-50 border border-red-200 text-red-700 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base"
                      >
                        {error}
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                      <button
                        type="button"
                        onClick={handleClose}
                        disabled={isSubmitting}
                        className="w-full sm:flex-1 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:flex-1 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={18} className="sm:w-5 sm:h-5 animate-spin mr-2" />
                            <span>Submitting...</span>
                          </>
                        ) : (
                          'Submit Request'
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}


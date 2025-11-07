'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  MapPin, 
  Calendar, 
  Square, 
  Building2, 
  Check, 
  ChevronLeft, 
  ChevronRight,
  Share2,
  Mail,
  Phone,
  ArrowLeft
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectData } from '@/lib/projectsData';
import ProjectScheduleVisitModal from './ProjectScheduleVisitModal';

interface ProjectDetailPageProps {
  project: ProjectData;
}

export default function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [isScheduleVisitModalOpen, setIsScheduleVisitModalOpen] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: project.title,
        text: project.description,
        url: window.location.href,
      });
    } else {
      setShowShareMenu(!showShareMenu);
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
    setShowShareMenu(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/#portfolio" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] bg-gray-900">
        <div className="relative h-full">
          {/* Image Slider */}
          <div className="relative h-full overflow-hidden">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} className="text-gray-900" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
                aria-label="Next image"
              >
                <ChevronRight size={24} className="text-gray-900" />
              </button>
            </>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm z-10">
            {currentImageIndex + 1} / {project.images.length}
          </div>

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Project Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm mb-4">
                  {project.category}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  {project.title}
                </h1>
                <p className="text-xl text-white/90 max-w-3xl">
                  {project.description}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <motion.div
                  className="bg-gray-50 p-6 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <MapPin className="text-gray-700 mb-3" size={24} />
                  <div className="text-sm text-gray-600 mb-1">Location</div>
                  <div className="font-semibold text-gray-900">{project.location}</div>
                </motion.div>

                <motion.div
                  className="bg-gray-50 p-6 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Square className="text-gray-700 mb-3" size={24} />
                  <div className="text-sm text-gray-600 mb-1">Total Area</div>
                  <div className="font-semibold text-gray-900">{project.area}</div>
                </motion.div>

                <motion.div
                  className="bg-gray-50 p-6 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Calendar className="text-gray-700 mb-3" size={24} />
                  <div className="text-sm text-gray-600 mb-1">Completed</div>
                  <div className="font-semibold text-gray-900">{project.date}</div>
                </motion.div>

                
              </div>

              {/* About Project */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  About This Project
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {project.details}
                </p>
              </motion.div>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg"
                    >
                      <div className="bg-black text-white rounded-full p-1 mt-0.5">
                        <Check size={16} />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Amenities */}
              {project.amenities && project.amenities.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Amenities
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {project.amenities.map((amenity, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 text-gray-700"
                      >
                        <div className="w-2 h-2 bg-gray-700 rounded-full" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Specifications */}
              {project.specifications && project.specifications.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Specifications
                  </h2>
                  <div className="bg-gray-50 rounded-xl overflow-hidden">
                    <table className="w-full">
                      <tbody>
                        {project.specifications.map((spec, index) => (
                          <tr
                            key={index}
                            className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                          >
                            <td className="px-6 py-4 font-semibold text-gray-700">
                              {spec.label}
                            </td>
                            <td className="px-6 py-4 text-gray-600">
                              {spec.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              
              {/* Share Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <button
                  onClick={handleShare}
                  className="w-full flex items-center justify-center space-x-2 bg-gray-900 text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition-colors"
                >
                  <Share2 size={20} />
                  <span className="font-semibold">Share Project</span>
                </button>

                {showShareMenu && (
                  <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-10">
                    <button
                      onClick={copyLink}
                      className="w-full px-6 py-3 text-left hover:bg-gray-50 transition-colors"
                    >
                      Copy Link
                    </button>
                  </div>
                )}
              </motion.div>

              {/* Contact Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gray-900 text-white p-8 rounded-xl"
              >
                <h3 className="text-2xl font-bold mb-4">
                  Interested in this project?
                </h3>
                <p className="text-gray-300 mb-6">
                  Contact us to learn more about availability, pricing, and site visits.
                </p>
                
                <div className="space-y-4">
                  <a
                    href="mailto:contact@peshgroup.com"
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <Mail size={20} />
                    <span>peshgroup@gmail.com</span>
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <Phone size={20} />
                    <span>+91 9225655607 / 9225655601</span>
                  </a>
                </div>

                <button
                  onClick={() => setIsScheduleVisitModalOpen(true)}
                  className="w-full bg-white text-gray-900 text-center px-6 py-4 rounded-lg font-semibold mt-6 hover:bg-gray-100 transition-colors"
                >
                  Schedule a Visit
                </button>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <Link
                    href="/#portfolio"
                    className="block text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    View All Projects
                  </Link>
                  <Link
                    href="/#about"
                    className="block text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    About PESH GROUP
                  </Link>
                  <Link
                    href="/#services"
                    className="block text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Our Services
                  </Link>
                  <Link
                    href="/#faq"
                    className="block text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    FAQ
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Visit Modal */}
      <ProjectScheduleVisitModal
        isOpen={isScheduleVisitModalOpen}
        onClose={() => setIsScheduleVisitModalOpen(false)}
        projectTitle={project.title}
        projectSlug={project.slug}
      />
    </div>
  );
}


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
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all z-10"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} className="sm:w-6 sm:h-6 text-gray-900" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all z-10"
                aria-label="Next image"
              >
                <ChevronRight size={20} className="sm:w-6 sm:h-6 text-gray-900" />
              </button>
            </>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black/70 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm z-10">
            {currentImageIndex + 1} / {project.images.length}
          </div>

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Project Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm mb-3 sm:mb-4">
                  {project.category}
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                  {project.title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl line-clamp-2 sm:line-clamp-none">
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
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                <motion.div
                  className="bg-gray-50 p-4 sm:p-6 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <MapPin className="text-gray-700 mb-2 sm:mb-3" size={20} />
                  <div className="text-xs sm:text-sm text-gray-600 mb-1">Location</div>
                  <div className="font-semibold text-sm sm:text-base text-gray-900">{project.location}</div>
                </motion.div>

                <motion.div
                  className="bg-gray-50 p-4 sm:p-6 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Square className="text-gray-700 mb-2 sm:mb-3" size={20} />
                  <div className="text-xs sm:text-sm text-gray-600 mb-1">Total Area</div>
                  <div className="font-semibold text-sm sm:text-base text-gray-900">{project.area}</div>
                </motion.div>

                <motion.div
                  className="bg-gray-50 p-4 sm:p-6 rounded-xl col-span-2 md:col-span-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Calendar className="text-gray-700 mb-2 sm:mb-3" size={20} />
                  <div className="text-xs sm:text-sm text-gray-600 mb-1">Completed</div>
                  <div className="font-semibold text-sm sm:text-base text-gray-900">{project.date}</div>
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
              
              {/* WhatsApp Contact Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <a
                  href="https://wa.link/70itdm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-[#25D366] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl hover:bg-[#20BA5A] transition-colors"
                >
                  <svg 
                    className="w-5 h-5 sm:w-6 sm:h-6" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span className="font-semibold text-sm sm:text-base">Contact Us</span>
                </a>
              </motion.div>

              {/* Contact Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gray-900 text-white p-6 sm:p-8 rounded-xl"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  Interested in this project?
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
                  Contact us to learn more about availability, pricing, and site visits.
                </p>
                
                <div className="space-y-3 sm:space-y-4">
                  <a
                    href="mailto:contact@peshgroup.com"
                    className="flex items-center space-x-2 sm:space-x-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <Mail size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
                    <span className="text-sm sm:text-base break-all">peshgroup@gmail.com</span>
                  </a>
                  <a
                    href="tel:+919225655607"
                    className="flex items-center space-x-2 sm:space-x-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <Phone size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">+91 9225655607 / 9225655601</span>
                  </a>
                </div>

                <button
                  onClick={() => setIsScheduleVisitModalOpen(true)}
                  className="w-full bg-white text-gray-900 text-center px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold mt-4 sm:mt-6 hover:bg-gray-100 transition-colors text-sm sm:text-base"
                >
                  Schedule a Visit
                </button>
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


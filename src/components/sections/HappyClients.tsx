'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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
  { name: 'HashMap', logo: '/logos/hashmap.png' },
  { name: 'Infineon', logo: '/logos/infineon.png' },
  { name: 'Bluebinaries', logo: '/logos/bluebinaries.png' },
  { name: 'Shore Auto', logo: '/logos/shoreauto.png' },
  { name: 'MOOG', logo: '/logos/moog.png' },
  { name: 'Innoplexus', logo: '/logos/innoplexus.png' },
  { name: 'Obara', logo: '/logos/obara.png' },
];

const extendedClients = [...happyClients, ...happyClients];

export default function HappyClients() {
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
            Our Happy Clients
          </h3>
        </motion.div>

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
                  className="flex items-center justify-center w-48 h-24 bg-gray-50 rounded-lg p-6 border border-transparent hover:bg-white hover:shadow-md hover:border-gray-200 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -6 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                >
                  <div className="text-center">
                    <motion.div
                      className="w-16 h-16 flex items-center justify-center mx-auto mb-2"
                      // Single target + tween with reverse repeat => wiggle without keyframe arrays
                      whileHover={{ rotate: 6 }}
                      transition={{
                        rotate: { type: 'tween', duration: 0.18, repeat: 1, repeatType: 'reverse', ease: 'easeInOut' },
                      }}
                    >
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={64}
                        height={64}
                        className="object-contain grayscale opacity-80 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                      />
                    </motion.div>
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
      </div>
    </section>
  );
}

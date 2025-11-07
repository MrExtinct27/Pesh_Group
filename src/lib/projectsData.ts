export interface ProjectData {
  id: number;
  slug: string;
  title: string;
  category: string;
  image: string;
  images: string[];
  location: string;
  date: string;
  area: string;
  description: string;
  details: string;
  features: string[];
  budget: string;
  amenities?: string[];
  specifications?: {
    label: string;
    value: string;
  }[];
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    slug: 'midas-tower',
    title: 'Midas Tower',
    category: 'IT Offices',
    image: '/midas0.jpeg',
    images: [
      '/portfolio/MT/MT01.jpg',
      '/portfolio/MT/MT02.JPG',
      '/portfolio/MT/MT03.jpeg',
      '/portfolio/MT/MT04.JPG',
      '/portfolio/MT/MT05.jpeg'
    ],
    location: 'Hinjewadi, Pune',
    date: '2024',
    area: '2,65,000 sq ft',
    description: 'Grade A IT spaces built for performance, security, and productivity.',
    details:
      'Midas Tower is a Grade A IT office space project specifically designed to take your business to a whole new level of performance & productivity. Large efficient floor plates, clean, secured & well-maintained premises.',
    features: [
      'Strategic Location',
      'Grade A IT Office',
      'Green Building',
      'Premium Amenities',
      'Tallest IT Office',
      'Rooftop Cafeteria'
    ],
    budget: '₹500 Crores',
    amenities: [
      '24/7 Security',
      'Power Backup',
      'Ample Parking',
      'High-Speed Elevators',
      'Cafeteria',
      'Conference Rooms',
      'Gymnasium',
      'Modern HVAC System'
    ],
    specifications: [
      { label: 'Total Area', value: '2,65,000 sq ft' },
      { label: 'Building Type', value: 'Grade A IT Office' },
      { label: 'Location', value: 'Hinjewadi, Pune' },
      { label: 'Completion', value: '2024' },
      { label: 'Parking', value: 'Multi-level' },
      { label: 'Certification', value: 'Green Building' }
    ]
  },
  {
    id: 2,
    slug: 'midas-infinite',
    title: 'Midas Infinite',
    category: 'IT Offices',
    image: '/portfolio/MI/MI01.jpeg',
    images: [
      '/portfolio/MI/MI01.jpeg',
      '/portfolio/MI/MI02.jpeg',
      '/portfolio/MI/MI03.jpeg',
      '/portfolio/MI/MI04.jpeg',
      '/portfolio/MI/MI05.jpeg'
    ],
    location: 'Hinjewadi, Pune',
    date: '2024',
    area: '45,000 sq ft',
    description: 'Premium IT workspace with global standards and SEZ benefits.',
    details:
      'A world-class SEZ IT office project crafted to international standards, combining safety, security, sustainability, and robust infrastructure to deliver a future-ready workplace. Green building concept with natural light, ventilation, water conservation & rainwater harvesting.',
    features: [
      'Green Building',
      'SEZ Project',
      'World Class Amenities',
      'Ample Parking Spaces',
      'Efficient Floor Plates'
    ],
    budget: '₹300 Crores',
    amenities: [
      'SEZ Benefits',
      '24/7 Security',
      'Rainwater Harvesting',
      'Natural Ventilation',
      'Cafeteria',
      'Parking Facility',
      'Conference Rooms',
      'Power Backup'
    ],
    specifications: [
      { label: 'Total Area', value: '45,000 sq ft' },
      { label: 'Building Type', value: 'SEZ IT Office' },
      { label: 'Location', value: 'Hinjewadi, Pune' },
      { label: 'Completion', value: '2024' },
      { label: 'Certification', value: 'Green Building' },
      { label: 'Special Feature', value: 'SEZ Approved' }
    ]
  },
  {
    id: 3,
    slug: 'midas-sez',
    title: 'Midas SEZ',
    category: 'Commercial',
    image: '/portfolio/MS/MS01.jpeg',
    images: [
      '/portfolio/MS/MS01.jpeg',
      '/portfolio/MS/MS02.jpeg',
      '/portfolio/MS/MS03.JPG',
      '/portfolio/MS/MS04.jpeg',
      '/portfolio/MS/MS05.jpeg'
    ],
    location: 'Hinjewadi, Pune',
    date: '2023',
    area: '62,000 sq ft',
    description:
      'Future-ready commercial spaces designed for performance, security, and long-term value.',
    details:
      'Ready possession bare shell office space project. Features modern office towers, recreational facilities, and extensive green landscaping.',
    features: [
      'Ideal for Commercial/IT offices',
      'Modern Infrastructure',
      'Modern Amenities',
      'Green Landscaping',
      '24/7 Security'
    ],
    budget: '₹750 Crores',
    amenities: [
      '24/7 Security',
      'Power Backup',
      'Parking Facility',
      'Recreational Zone',
      'Green Landscaping',
      'Modern Infrastructure',
      'Cafeteria',
      'Conference Rooms'
    ],
    specifications: [
      { label: 'Total Area', value: '62,000 sq ft' },
      { label: 'Building Type', value: 'Commercial Office' },
      { label: 'Location', value: 'Hinjewadi, Pune' },
      { label: 'Completion', value: '2023' },
      { label: 'Status', value: 'Ready Possession' },
      { label: 'Configuration', value: 'Bare Shell' }
    ]
  },
  {
    id: 4,
    slug: 'ish-infotech',
    title: 'Ish Infotech',
    category: 'IT Offices',
    image: '/portfolio/II/II01.jpg',
    images: [
      '/portfolio/II/II01.jpg',
      '/portfolio/II/II02.JPG',
      '/portfolio/II/II03.JPG',
      '/portfolio/II/II04.JPG',
      '/portfolio/II/II05.jpg'
    ],
    location: 'Hinjewadi, Pune',
    date: '2023',
    area: '1,10,000 sq ft',
    description:
      'Modern IT hubs built to inspire productivity and empower businesses.',
    details:
      'Crafted for the modern workforce, these IT offices combine advanced facilities with eco-friendly design. From seamless functionality to reliable infrastructure, every detail is tailored to help businesses thrive. Strategically located with excellent connectivity to major transportation networks.',
    features: [
      'Prime Location',
      'Fully Furnished',
      '24/7 Security',
      'Auditorium',
      'Rooftop Cafeteria'
    ],
    budget: '₹400 Crores',
    amenities: [
      'Fully Furnished',
      'Auditorium',
      'Rooftop Cafeteria',
      '24/7 Security',
      'Power Backup',
      'Conference Rooms',
      'Gymnasium',
      'Parking Facility'
    ],
    specifications: [
      { label: 'Total Area', value: '1,10,000 sq ft' },
      { label: 'Building Type', value: 'IT Office' },
      { label: 'Location', value: 'Hinjewadi, Pune' },
      { label: 'Completion', value: '2023' },
      { label: 'Status', value: 'Fully Furnished' },
      { label: 'Special Feature', value: 'Auditorium & Rooftop Cafeteria' }
    ]
  },
  {
    id: 5,
    slug: 'pesh-technology-park',
    title: 'Pesh Technology Park',
    category: 'IT Offices',
    image: '/portfolio/PTP/PTP01.JPG',
    images: [
      '/portfolio/PTP/PTP01.JPG',
      '/portfolio/PTP/PTP02.jpg',
      '/portfolio/PTP/PTP03.jpg',
      '/portfolio/PTP/PTP04.jpg',
      '/portfolio/PTP/PTP05.jpg'
    ],
    location: 'Talwade, Pune',
    date: '2022',
    area: '85,000 sq ft',
    description:
      'Innovation-focused technology campus with collaborative workspaces.',
    details:
      'A modern technology campus designed to foster innovation and collaboration. With state-of-the-art infrastructure, natural surroundings, and thoughtful facilities, it creates an ideal environment for productivity and well-being.',
    features: [
      'Recreational Zone',
      'Grand Amphitheater',
      'IT Infrastructure',
      'Recreation Areas',
      'Cafeterias'
    ],
    budget: '₹350 Crores',
    amenities: [
      'Grand Amphitheater',
      'Recreational Zone',
      'Multiple Cafeterias',
      'IT Infrastructure',
      'Green Spaces',
      'Conference Rooms',
      'Parking Facility',
      '24/7 Security'
    ],
    specifications: [
      { label: 'Total Area', value: '85,000 sq ft' },
      { label: 'Building Type', value: 'Technology Park' },
      { label: 'Location', value: 'Talwade, Pune' },
      { label: 'Completion', value: '2022' },
      { label: 'Special Feature', value: 'Grand Amphitheater' },
      { label: 'Environment', value: 'Green Campus' }
    ]
  },
  {
    id: 6,
    slug: 'raj-motors',
    title: 'Raj Motors',
    category: 'Industrial',
    image: '/portfolio/RJM/RJM01.png',
    images: [
      'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590479773265-7464e5d48118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    location: 'Chinchwad, Pune',
    date: '2022',
    area: '10,000 sq ft',
    description: 'Advanced commercial center with automated systems.',
    details:
      'A state-of-the-art facility with automated systems, three-star facilities, and advanced management technology.',
    features: [
      'Prime Location',
      'Green Building',
      'Water Conservation',
      'Fire Safety',
      'Office Complex',
      'Security Systems'
    ],
    budget: '₹450 Crores',
    amenities: [
      'Automated Systems',
      'Fire Safety',
      'Security Systems',
      'Water Conservation',
      'Office Complex',
      'Parking Facility',
      'Power Backup',
      'Green Building'
    ],
    specifications: [
      { label: 'Total Area', value: '10,000 sq ft' },
      { label: 'Building Type', value: 'Industrial/Commercial' },
      { label: 'Location', value: 'Chinchwad, Pune' },
      { label: 'Completion', value: '2022' },
      { label: 'Special Feature', value: 'Automated Systems' },
      { label: 'Certification', value: 'Green Building' }
    ]
  }
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsData.find(project => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projectsData.map(project => project.slug);
}


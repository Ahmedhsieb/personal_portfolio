export interface Social {
  github: string;
  linkedin: string;
  twitter: string;
  email: string;
}

export interface Personal {
  name: string;
  title: string;
  tagline: string;
  avatar: string;
  social: Social;
}

export interface About {
  bio: string[];
  interests: string[];
}

export interface SkillItem {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  tech: string[];
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  image: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  details: string[];
}

export interface Course {
  name: string;
  provider: string;
  year: string;
  certificate: string;
}

export interface CVData {
  personal: Personal;
  about: About;
  skills: SkillCategory[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  courses: Course[];
}

export const cvData: CVData = {
  personal: {
    name: 'Ahmed Osama Fawzy',
    title: 'Backend Developer (PHP Laravel)',
    tagline: 'Building scalable ERP systems, APIs, and business solutions',
    avatar:
    '/me.jpg',
    social: {
      github: 'https://github.com/Ahmedhsieb',
      linkedin: 'https://linkedin.com/in/ahmed-osama-573634331',
      twitter: '',
      email: 'AhmedOsama11702@gmail.com'
    }
  },

  about: {
    bio: [
    'Backend Developer specializing in PHP and Laravel with experience building scalable ERP systems and REST APIs.',
    'Experienced in developing full business solutions including CRM, HRM, accounting, and reservation systems.',
    'Passionate about clean code, performance optimization, and building reliable backend architectures.',
    'Continuously learning new technologies and improving software engineering and system design skills.'],

    interests: [
    'Backend Development',
    'System Design',
    'API Development',
    'Database Design',
    'ERP Systems',
    'Learning New Technologies',
    'Programming',
    'Technology']

  },

  skills: [
  {
    category: 'Languages',
    items: [
    { name: 'PHP', level: 95, icon: '🐘' },
    { name: 'JavaScript', level: 80, icon: '📜' },
    { name: 'Python', level: 70, icon: '🐍' },
    { name: 'C++', level: 65, icon: '⚙️' },
    { name: 'SQL', level: 90, icon: '🗄️' }]

  },
  {
    category: 'Frameworks & Tools',
    items: [
    { name: 'Laravel', level: 95, icon: '🔥' },
    { name: 'Livewire', level: 85, icon: '⚡' },
    { name: 'Filament', level: 85, icon: '🧩' },
    { name: 'Bootstrap', level: 90, icon: '🎨' },
    { name: 'REST API', level: 95, icon: '🔗' },
    { name: 'PHPUnit', level: 80, icon: '🧪' }]

  },
  {
    category: 'Databases',
    items: [
    { name: 'MySQL', level: 95, icon: '🐬' }]

  },
  {
    category: 'Cloud & DevOps',
    items: [
    { name: 'Git', level: 90, icon: '📦' },
    { name: 'Debugger Tools', level: 85, icon: '🐞' },
    { name: 'Cpanel', level: 85, icon: '🔧' },
    { name: 'Laravel Telescope', level: 85, icon: '🔭' }]

  }],


  experience: [
  {
    company: 'Dania Air',
    role: 'Backend Developer',
    period: 'Nov 2024 - Present',
    description: [
    'Developing ERP modules including Supplier Management, CRM, Accounting, Production, Assets, and User Management.',
    'Built TSR system to improve communication between sales and technical teams.',
    'Maintaining and improving existing systems and adding new features.',
    'Troubleshooting and optimizing backend performance.'],

    tech: [
    'PHP',
    'Laravel',
    'MySQL',
    'REST API',
    'Livewire',
    'Filament']

  },
  {
    company: 'Freelance',
    role: 'Backend Developer',
    period: 'Oct 2023 - Oct 2024',
    description: [
    'Built CRM system with lead management and role-based access.',
    'Developed agricultural marketplace with vendor management and order system.',
    'Created HRM platform including payroll and leave tracking.',
    'Built preschool management system.',
    'Developed hotel reservation system with booking logic.',
    'Built communication and management systems using Laravel.'],

    tech: [
    'PHP',
    'Laravel',
    'MySQL',
    'REST API',
    'Bootstrap']

  }],


  projects: [
  {
    name: 'ERP System',
    description:
    'Full ERP system including CRM, accounting, supplier, assets, and production modules.',
    tech: ['PHP', 'Laravel', 'MySQL', 'Livewire'],
    link: '',
    github: '',
    image:
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800'
  },
  {
    name: 'Agricultural Marketplace',
    description:
    'Marketplace with vendor accounts, orders, product management, and admin panel.',
    tech: ['Laravel', 'REST API', 'MySQL'],
    link: '',
    github: '',
    image:
    'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800'
  },
  {
    name: 'HRM System',
    description:
    'Human resource system including employee management, payroll, and leaves.',
    tech: ['Laravel', 'MySQL'],
    link: '',
    github: '',
    image:
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800'
  },
  {
    name: 'Hotel Reservation System',
    description:
    'Hotel booking system with availability checking and booking logic.',
    tech: ['Laravel', 'MySQL'],
    link: '',
    github: '',
    image:
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800'
  }],


  education: [
  {
    institution: 'Benha University',
    degree: 'Bachelor of Computers and Artificial Intelligence',
    period: '2020 - 2024',
    details: [
    'GPA: 3.3',
    'Graduation Project: Chatbot Summarization Platform',
    'Built backend using PHP and integrated Python AI model']

  }],


  courses: [
  {
    name: 'Laravel Development',
    provider: 'Udemy',
    year: '2025',
    certificate: ''
  },
  {
    name: 'Backend Development',
    provider: 'Itrax Academy',
    year: '2023',
    certificate: ''
  },
  {
    name: 'Time Management',
    provider: 'Edraak',
    year: '2023',
    certificate: ''
    },
  {
    name: 'Leadership',
    provider: 'Leadership Center',
    year: '2021',
    certificate: ''
    },
  ]


};
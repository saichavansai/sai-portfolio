import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaNodeJs, FaGitAlt, FaGithub,
  FaLinkedinIn, FaGraduationCap,
} from 'react-icons/fa';
import { SiTypescript, SiExpress, SiMongodb } from 'react-icons/si';
import {
  FiSmartphone, FiServer, FiDatabase, FiTool, FiGlobe, FiTarget, FiCode,
  FiRefreshCw, FiCpu, FiLayers, FiBox, FiMonitor, FiShare2,
} from 'react-icons/fi';

/* ------------------------------------------------------------------
   PROFILE
   - To show your photo: drop a file named profile.jpg (or .png/.webp)
     into src/assets/images/. The Hero detects it automatically.
   - LinkedIn: replace `url` with your exact profile URL.
   - GitHub: add a URL to `github.url` and it will appear automatically.
------------------------------------------------------------------- */
export const profile = {
  name: 'Sai Shital Chavan',
  initials: 'SC',
  title: 'MERN Stack Developer | Website Developer',
  headline: 'Building Modern Web Experiences with Code & Creativity.',
  intro:
    "I'm Sai Shital Chavan, a passionate MERN Stack Developer who loves turning ideas into responsive, scalable, and user-focused web applications. I enjoy coding, solving problems, and continuously learning new technologies.",
  email: 'chavansai923@gmail.com',
  phone: '7219809202',
  location: 'Kolhapur, Maharashtra, India',
  socials: {
    // PLACEHOLDER: this opens a LinkedIn people search. Replace with your real profile URL.
    linkedin: {
      label: 'Sai Chavan - LinkedIn',
      url: 'https://www.linkedin.com/search/results/people/?keywords=Sai%20Chavan',
      icon: FaLinkedinIn,
    },
    // Leave url empty until you have one - it is hidden when empty.
    github: { label: 'GitHub', url: '', icon: FaGithub },
  },
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const heroBadges = [
  'React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'TypeScript',
];

export const about = {
  text:
    'I am a Website Developer passionate about coding and building web applications. What I enjoy most about development is solving problems—breaking down complex challenges and turning them into practical solutions. I am continuously improving my technical skills and exploring modern web technologies to create better digital experiences.',
  highlights: [
    { label: 'Passion for coding', icon: FiCode },
    { label: 'Problem-solving mindset', icon: FiTarget },
    { label: 'Interest in web development', icon: FiGlobe },
    { label: 'Continuous learning', icon: FiRefreshCw },
    { label: 'Modern web technologies', icon: FiCpu },
  ],
  roles: ['MERN Stack Developer', 'Problem Solver', 'Web Developer', 'Continuous Learner'],
};

export const skillGroups = [
  {
    title: 'Frontend',
    icon: FiMonitor,
    skills: [
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'JavaScript', icon: FaJs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'React.js', icon: FaReact },
      { name: 'Bootstrap', icon: FaBootstrap },
      { name: 'Responsive Web Development', icon: FiSmartphone },
    ],
  },
  {
    title: 'Backend',
    icon: FiServer,
    skills: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'REST APIs', icon: FiShare2 },
    ],
  },
  {
    title: 'Database',
    icon: FiDatabase,
    skills: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'NoSQL', icon: FiDatabase },
    ],
  },
  {
    title: 'Tools & Development',
    icon: FiTool,
    skills: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
      { name: 'Web Development', icon: FiGlobe },
      { name: 'Problem Solving', icon: FiTarget },
    ],
  },
];

export const experience = [
  {
    role: 'MERN Stack Developer Intern',
    company: 'Neosao Services Pvt. Ltd.',
    start: '2 September 2026',
    current: true,
    description:
      'Currently working as a MERN Stack Developer Intern, gaining practical experience in modern full-stack web development and working with technologies across the MERN ecosystem.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs', 'JavaScript', 'TypeScript', 'Git/GitHub'],
  },
];

export const service = {
  title: 'MERN Stack Development',
  description:
    'Development of modern full-stack web applications using MongoDB, Express.js, React.js, and Node.js, with a focus on responsive design, clean architecture, reusable components, and scalable functionality.',
  capabilities: [
    'Modern React frontend development',
    'Node.js backend development',
    'Express.js APIs',
    'MongoDB database integration',
    'REST API development',
    'Responsive web applications',
    'Component-based architecture',
    'Full-stack web application development',
  ],
  stack: [
    { letter: 'M', name: 'MongoDB', icon: SiMongodb },
    { letter: 'E', name: 'Express.js', icon: SiExpress },
    { letter: 'R', name: 'React.js', icon: FaReact },
    { letter: 'N', name: 'Node.js', icon: FaNodeJs },
  ],
};

export const projects = [
  {
    name: 'Staycation Booking Hub',
    description:
      'A high-performance staycation booking web application designed with a modern, responsive interface and dynamic content rendering.',
    tech: ['React JS', 'Bootstrap', 'MongoDB', 'NoSQL', 'Web Development'],
    features: [
      'Developed the application using React JS for dynamic content rendering.',
      'Implemented a mobile-first responsive interface using Bootstrap.',
      'Created a component-based UI architecture.',
      'Developed 20+ reusable React components for elements such as product cards, navigation, and modals.',
      'Reusable components helped reduce development time for new features by approximately 30%.',
    ],
    stats: [
      { value: '20+', label: 'Reusable components' },
      { value: '~30%', label: 'Faster feature development' },
    ],
    icon: FiLayers,
    image: null, // PLACEHOLDER: add a screenshot to src/assets/images and import it here
    liveUrl: '', // Add a live URL when available
    codeUrl: '', // Add a GitHub URL when available
  },
];

export const education = [
  {
    degree: 'Bachelor of Technology (B.Tech) in Computer Science',
    institution: "D.Y. Patil Pratishthan's College of Engineering, Kolhapur",
    graduation: '2025',
    icon: FaGraduationCap,
  },
];

export const contactDetails = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: 'email' },
  { label: 'Phone', value: profile.phone, href: `tel:+91${profile.phone}`, icon: 'phone' },
  { label: 'Location', value: profile.location, href: null, icon: 'location' },
  { label: 'LinkedIn', value: profile.socials.linkedin.label, href: profile.socials.linkedin.url, icon: 'linkedin' },
];

export const iconFallback = FiBox;

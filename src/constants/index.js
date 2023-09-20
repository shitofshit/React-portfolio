import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  threejs,
  java,
  clanguage,
  python,
  wordpress,
  klk,
  billsplitter,
  movielibrary,
  portfolio,
  onepiecegaming,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "Python Scripts",
    icon: python,
  },
  {
    title: "Backend Developer",
    icon: java,
  },
  {
    title: "Wordpress Creator",
    icon: wordpress,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Wordpress",
    icon: wordpress,
  },
  {
    name: "C++",
    icon: clanguage,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Python Internship",
    company_name: "KLK Berhad",
    icon: klk,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Jan 2021",
    points: [
      "Learned Python for Automation and Data Analysis to streamline processes and improve operational efficiency.",
      "Scripts were developed to automate critical tasks associated with palm mapping, area calculations, distance measurments, palm counting, and facilitating replanting initiatives",
      "Contributing to System Enhancements and Testing by creating comprehensive test plans and executing them rigorously to ensure the effectiveness of the systems",
    ],
  },
  {
    title: "Part-time Developer",
    company_name: "KLK Berhad",
    icon: klk,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - June 2021",
    points: [
      "Actively participating in a project that utilize in drone technology for agricultural insights",
      "Assessed clients’ needs to determine specifications and developed and implemented bespoke systems, fulfilling users requirements.",
      "Contributed in maintenance and facilitating its transition to next script user.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "React Portfolio",
    description:
      "A responsive portfolio created in learning Three.js and React enables user to contact via emailjs for job seeking",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/shitofshit/React-portfolio",
  },
  {
    name: "Splitwise",
    description:
      "Web application that enables users to split bills and calculates the owning between your friends",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: billsplitter,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive movie library platform that allows users search and rate movies via APIs",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: movielibrary,
    source_code_link: "https://github.com/shitofshit/React-WilsonMovieLibrary",
  },
  {
    name: "Gaming website",
    description:
      "A wordpress based website that enables simple navigation to game download, payment gateway and galleries",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
    ],
    image: onepiecegaming,
    source_code_link: null,
  },
];

export { services, technologies, experiences, testimonials, projects };

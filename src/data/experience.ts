export interface Experience {
  title: string;
  company: string;
  date: string;
  bullets: string[];
  link?: string;
}

export const experiences: Experience[] = [
  {
    title: 'Software Engineer',
    company: 'Bloomberg LP',
    date: 'Jul 2026 – Present',
    bullets: [
      'Engineered a Python microservice and AI agent toolset that gives Large Language Models (LLMs) secure, user-scoped access to enterprise data, enabling search, retrieval and navigation of chats.',
      'Designed an opaque reference system backed by a replicated database, keeping internal identifiers out of model context while guaranteeing consistency across distributed systems.',
      'Implemented request-level authorization and identity resolution to enforce per-user access controls and return accurate, readable results to AI clients.',
    ],
    link: 'https://www.bloomberg.com/company/?utm_source=bloomberg-menu&utm_medium=bcom',
  },
  {
    title: 'Robotics Lead',
    company: 'Cornell Cup Robotics',
    date: 'Feb 2024 – May 2026',
    bullets: [
      'Developed a modular educational robot for nationwide school distribution that enhances STEM education with user-programmable controls and interactive features.',
      'Engineered a lab assistant robot with voice recognition, object detection, and sentiment analysis, enabling semi-autonomous task completion.',
      'Spearheaded the development of a bipedal walking robot using neural networks for movement learning and enabling users to control the robot’s actions through Virtual Reality (VR) integration.',
    ],
    link: 'https://cornellcuprobotics.com/',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Bloomberg LP',
    date: 'Jun 2025 – Aug 2025',
    bullets: [
      'Engineered a C++ backend service in a microservices architecture to reconcile state across multiple data sources, enhancing consistency and reliability of enterprise communication workflows.',
      'Integrated external APIs, internal databases, and event-driven systems (Kafka, service-to-service RPC) to ensure accurate, real-time synchronization of user and room data.',
      'Architected automated validation pipelines, monitoring tools, and scheduled recovery workflows to proactively mitigate data or event gaps and maintain system robustness.',
    ],
    link: 'https://www.bloomberg.com/company/?utm_source=bloomberg-menu&utm_medium=bcom',
  },
  {
    title: 'Full Stack Intern',
    company: 'Chapter One',
    date: 'Oct 2024 – Nov 2024',
    bullets: [
      'Collaborated on an AI-driven platform that generates customizable websites for new businesses, enhancing digital accessibility and streamlining their online presence.',
      'Optimized API performance, implementing redundancy measures to ensure seamless data transfer, reliability, and faster response times.',
      'Enhanced website personalization by incorporating custom effects and e-commerce capabilities, allowing businesses to showcase products and sell services on their platforms.',
    ],
    link: 'https://www.startchapterone.com/',
  },
];

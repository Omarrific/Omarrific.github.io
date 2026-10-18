import { useEffect, useRef, useState } from 'react';
import './ExperienceSection.css';

interface Experience {
  title: string;
  company: string;
  date: string;
  bullets: string[];
  link?: string; 
}

const experiences: Experience[] = [
    {
    title: 'Robotics Lead',
    company: 'Cornell Cup Robotics',
    date: 'Feb 2024 – Present',
    bullets: [
      'Developing a modular educational robot for nationwide school distribution that enhances STEM education with user-programmable controls and interactive features',
      'Engineering a lab assistant robot with voice recognition, object detection, and sentiment analysis, enabling semi-autonomous task completion',
      'Spearheading the development of a bipedal walking robot using neural networks for movement learning and enabling users to control the robot’s actions through VR integration'
    ],
    link: 'https://cornellcuprobotics.com/index.html'
  },
    {
    title: 'Software Engineer Intern',
    company: 'Bloomberg LP',
    date: 'Jun 2025 - Aug 2025',
    bullets: [
      'Spearheaded the integration and synchronization between Bloomberg’s application and external services, ensuring real-time data consistency across platforms.',
      'Designed and implemented responsive UI components, optimizing performance through asynchronous calls and multithreading to enhance usability and reduce latency.',
      'Developed and maintained API workflows, retrieving and processing data from distributed databases to support cross-system operations.'
    ],
    link: 'https://www.bloomberg.com/company/?utm_source=bloomberg-menu&utm_medium=bcom'
  },
  {
    title: 'Full Stack Intern',
    company: 'Chapter One',
    date: 'Oct 2024 – Nov 2024',
    bullets: [
      'Collaborated on an AI-driven platform that generates customizable websites for new businesses, enhancing digital accessibility and streamlining their online presence',
      'Optimized API performance, implementing redundancy measures to ensure seamless data transfer, reliability, and faster response times',
      'Enhanced website personalization by incorporating custom effects and e-commerce capabilities, allowing businesses to showcase products and sell services on their platforms'
    ],
    link: 'https://www.startchapterone.com/'
  },
  {
    title: 'Full Stack Intern',
    company: 'Hyphenova',
    date: 'Aug 2024 – Sep 2024',
    bullets: [
      'Developed APIs and implemented endpoints to optimize data transfer between the backend database and front-end application',
      'Designed and created a front-end application, enabling users to interact with the app through a responsive and intuitive interface',
      'Implemented a matchmaking AI model to enhance user experience by providing personalized recommendations and improving match accuracy'
    ],
    link: 'https://hyphenova.com/'
  },
];


export default function ExperienceSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = itemRefs.current.findIndex((el) => el === entry.target);
            if (idx !== -1 && !visibleIndices.has(idx)) {
              setVisibleIndices((prev) => {
                const next = new Set(prev);
                next.add(idx);
                return next;
              });
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -100px 0px', threshold: 0.1 }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [visibleIndices]);

  return (
    <section id='experience'className="experience-section">
      <h2 className="experience-title">
        Experience
        <div className="experience-underline" />
      </h2>
      <div className="vertical-timeline-container">
        <div className="vertical-line" />

        {experiences.map((exp, idx) => {
          const isLeft = idx % 2 === 0;
          const isVisible = visibleIndices.has(idx);

          return (
            <div
              key={idx}
              ref={(el): void => {
                itemRefs.current[idx] = el;
              }}
              className={`timeline-item ${isLeft ? 'left' : 'right'} ${
                isVisible ? 'visible' : ''
              } ${hoveredIndex === idx ? 'active' : ''}`}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="timeline-card">
                <div className="timeline-header">
                  <span className="timeline-role">
                    {exp.title} @{' '}
                    {exp.link ? (
                    <a
                      href={exp.link}
                      className="timeline-company"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    <span className="timeline-company">{exp.company}</span>
                  )}
                  </span>
                  <span className="timeline-date">{exp.date}</span>
                </div>
                <ul className="timeline-bullets">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
              <div className="timeline-dot" />
              <div className="timeline-connector" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

import { experiences, type Experience } from '../data/experience';
import { useInView } from '../hooks/useInView';
import SectionHeading from './SectionHeading';
import './ExperienceSection.css';

interface ItemProps {
  exp: Experience;
  side: 'left' | 'right';
}

function TimelineItem({ exp, side }: ItemProps) {
  const [ref, inView] = useInView<HTMLLIElement>();

  return (
    <li
      ref={ref}
      className={`timeline-item timeline-item--${side} ${inView ? 'is-visible' : ''}`}
    >
      <span className="timeline-dot" aria-hidden="true" />
      <article className="timeline-card">
        <header className="timeline-header">
          <h3 className="timeline-role">
            {exp.title} <span className="timeline-at">@</span>{' '}
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
          </h3>
          <p className="timeline-date">{exp.date}</p>
        </header>
        <ul className="timeline-bullets">
          {exp.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </article>
    </li>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-heading">
      <SectionHeading id="experience-heading">Experience</SectionHeading>
      <ol className="timeline">
        {experiences.map((exp, idx) => (
          <TimelineItem
            key={`${exp.company}-${exp.date}`}
            exp={exp}
            side={idx % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </ol>
    </section>
  );
}

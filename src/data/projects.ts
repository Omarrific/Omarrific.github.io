import capture from '../images/capture.png';
import chronobreak from '../images/chronobreak.png';
import earthdex from '../images/earthdex.png';
import frostbitten from '../images/frostbitten.png';
import hardToHerd from '../images/hardtoherd.png';

export interface Project {
  title: string;
  description: string;
  gitLink?: string;
  liveLink?: string;
  techStack: string[];
  imageSrc: string;
}

export const projects: Project[] = [
  {
    title: 'Hard to Herd',
    description:
      'A frantic 2v2 multiplayer arcade game for mobile. Led a 10-person team and built the multiplayer netcode, physics spatial partitioning, and custom level editors.',
    liveLink: 'https://gdiac.cs.cornell.edu/gdiac/showcase/games/hard_to_herd/',
    techStack: ['iOS', 'Multiplayer Netcode'],
    imageSrc: hardToHerd,
  },
  {
    title: 'Frostbitten',
    description:
      'An ice-themed puzzle platformer where players master momentum to solve physics-driven challenges.',
    liveLink: 'https://gdiac.cs.cornell.edu/gdiac/showcase/',
    techStack: ['Java', 'LibGDX'],
    imageSrc: frostbitten,
  },
  {
    title: 'Capture',
    description:
      'A cloud-powered note-taking app with offline support and AWS-backed storage.',
    gitLink: 'https://github.com/Omarrific/Capture',
    techStack: ['React', 'FastAPI', 'AWS', 'Python'],
    imageSrc: capture,
  },
  {
    title: 'Earthdex',
    description:
      'An AI-driven “Pokédex” that recognizes images and provides dynamic descriptions.',
    gitLink: 'https://github.com/Omarrific/Earthdex',
    liveLink: 'https://earthdex.vercel.app/',
    techStack: ['TensorFlow', 'OpenAI', 'FastAPI', 'React'],
    imageSrc: earthdex,
  },
  {
    title: 'Chronobreak',
    description:
      'A 2D puzzle platformer featuring time-based mechanics and save-state support.',
    gitLink: 'https://github.com/Omarrific/Chronobreak',
    liveLink: 'https://omarriffic.itch.io/chronobreak',
    techStack: ['Godot Engine', 'GDScript', 'C#'],
    imageSrc: chronobreak,
  },
];

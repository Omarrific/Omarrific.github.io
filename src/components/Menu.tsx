import { useEffect, useRef, useState } from 'react';
import './Menu.css';

export default function Menu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => setOpen((o) => !o);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        iconRef.current &&
        !iconRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  useEffect(() => {

    const closeOnScroll = () => setOpen(false);

    window.addEventListener('scroll', closeOnScroll, { passive: true });
    window.addEventListener('wheel', closeOnScroll, { passive: true });
    window.addEventListener('touchmove', closeOnScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', closeOnScroll);
      window.removeEventListener('wheel', closeOnScroll);
      window.removeEventListener('touchmove', closeOnScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      <button
        ref={iconRef}
        className={`burger-icon ${open ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="bar bar1" />
        <span className="bar bar2" />
        <span className="bar bar3" />
      </button>
      <div ref={menuRef} className={`menu-drawer ${open ? 'visible' : ''}`}>
        <div className="menu-title">Menu</div>
        <button className="menu-link" onClick={() => scrollTo('landing')}>
          Home
        </button>
        <button className="menu-link" onClick={() => scrollTo('experience')}>
          Experience
        </button>
        <button className="menu-link" onClick={() => scrollTo('projects')}>
          Projects
        </button>
        <button className="menu-link" onClick={() => scrollTo('contact')}>
          Contact
        </button>
      </div>
    </>
  );
}

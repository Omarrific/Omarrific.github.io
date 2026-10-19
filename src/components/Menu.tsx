import { useEffect, useRef, useState } from 'react';
import './Menu.css';

const links = [
  { id: 'landing', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Menu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => setOpen((o) => !o);

  useEffect(() => {
    if (!open) return;

    // Move focus into the drawer so keyboard users land on the first link.
    menuRef.current?.querySelector<HTMLElement>('a')?.focus({ preventScroll: true });

    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (!menuRef.current?.contains(target) && !iconRef.current?.contains(target)) {
        setOpen(false);
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false);
        iconRef.current?.focus();
      }
    }

    const closeOnScroll = () => setOpen(false);

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', closeOnScroll, { passive: true });

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', closeOnScroll);
    };
  }, [open]);

  return (
    <nav className="site-nav" aria-label="Primary">
      <button
        ref={iconRef}
        type="button"
        className={`burger-icon ${open ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-expanded={open}
        aria-controls="site-menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        <span className="bar bar1" />
        <span className="bar bar2" />
        <span className="bar bar3" />
      </button>

      <div
        ref={menuRef}
        id="site-menu"
        className={`menu-drawer ${open ? 'visible' : ''}`}
        inert={!open}
      >
        <p className="menu-title">Menu</p>
        <ul className="menu-list">
          {links.map(({ id, label }) => (
            <li key={id}>
              <a className="menu-link" href={`#${id}`} onClick={() => setOpen(false)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Omar Abuhammoud</p>
      <a href="#landing" className="footer-top">
        Back to top <span aria-hidden="true">↑</span>
      </a>
    </footer>
  );
}

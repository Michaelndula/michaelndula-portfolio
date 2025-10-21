interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

export function Navbar({ theme, toggleTheme }: NavbarProps) {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        <a href="#" className="navbar-logo">
          /michael-ndula
        </a>
        <div className="navbar-links">
          <a href="#contact" className="btn-cta">
            Let's Connect
          </a>
          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle theme">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  );
}

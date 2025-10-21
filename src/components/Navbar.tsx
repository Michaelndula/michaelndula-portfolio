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
            {theme === 'light' ? '☀️' : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}


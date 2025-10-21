export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container container">
        <a href="#" className="navbar__logo">
          Michael Ndula
        </a>
        <div className="navbar__links">
          <a href="#about" className="navbar__link">
            About
          </a>
          <a href="#projects" className="navbar__link">
            Projects
          </a>
          <a href="#contact" className="navbar__link btn btn-primary">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
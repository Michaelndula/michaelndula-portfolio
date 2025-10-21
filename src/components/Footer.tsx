export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer__nav">
          <a
            href="https://github.com/Michaelndula"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            GitHub
          </a>
          <a href="mailto:michaelndula@gmail.com" className="footer__link">
            Email
          </a>
        </nav>
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} Michael Ndula. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
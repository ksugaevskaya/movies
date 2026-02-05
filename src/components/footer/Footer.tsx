import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <span className="footer__logo">MovieApp</span>

        <nav className="footer__nav">
          <a className="footer__link" href="https://github.com/ksugaevskaya">
            GitHub
          </a>
          <a className="footer__link" href="#">
            Home
          </a>
          <a className="footer__link" href="#">
            Movies
          </a>
          <a className="footer__link" href="#">
            Series
          </a>
          <a className="footer__link" href="#">
            Profile
          </a>
        </nav>
      </div>

      <div className="footer__bottom">
        <span className="footer__copyright">© 2026 MovieApp</span>
      </div>
    </footer>
  );
}

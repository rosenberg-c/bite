import { Link } from "react-router";
import { brand, footerCopy, navigation } from "../../content/site";
import "./SiteFooter.css";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__intro">
          <span className="site-footer__wordmark">{brand.wordmark}</span>
          <p>{brand.tagline}</p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer navigation">
          <p className="site-footer__nav-title">{footerCopy.explore}</p>
          <ul>
            {navigation.map(({ to, label }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="site-footer__bottom">
        <p>{footerCopy.notice}</p>
        <p>{brand.name}</p>
      </div>
    </footer>
  );
}

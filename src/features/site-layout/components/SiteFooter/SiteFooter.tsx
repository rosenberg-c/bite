import { Link } from "react-router";
import { brand } from "../../content/site";
import { navigation } from "../../content/navigation";
import { footerCopy } from "./SiteFooter.content";
import "./SiteFooter.css";

export const SiteFooter = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner container">
        <div className="site-footer__intro">
          <span className="site-footer__wordmark">{brand.wordmark}</span>
          <p>{brand.tagline}</p>
        </div>

        <nav
          className="site-footer__nav"
          aria-label={footerCopy.navigationLabel}
        >
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

      <div className="site-footer__bottom container">
        <p>{footerCopy.notice}</p>
        <p>{brand.name}</p>
      </div>
    </footer>
  );
};

import { useState } from "react";
import { Link, NavLink } from "react-router";
import { brand, navigation } from "../../content/site";
import "./SiteHeader.css";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-header__brand" to="/" onClick={() => setIsOpen(false)}>
          <span className="site-header__wordmark">{brand.wordmark}</span>
          <span className="site-header__descriptor">{brand.descriptor}</span>
        </Link>

        <div className="site-header__actions">
          <button
            type="button"
            className="site-header__toggle"
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="site-header__toggle-bars" aria-hidden="true" />
          </button>
        </div>

        <nav
          id="primary-navigation"
          className="site-nav"
          aria-label="Main navigation"
          data-open={isOpen}
        >
          {navigation.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) => (isActive ? "site-nav__link active" : "site-nav__link")}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

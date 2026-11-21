import { useState } from "react";
import { Link, NavLink } from "react-router";
import { brand } from "../../content/site";
import { navigation } from "../../content/navigation";
import { paths } from "../../../../routes";
import { siteHeaderCopy } from "./SiteHeader.content";
import { useThemePreference } from "../../hooks/useTheme";
import "./SiteHeader.css";

export const SiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { preference, setPreference } = useThemePreference();

  return (
    <header className="site-header">
      <div className="site-header__inner container">
        <Link
          className="site-header__brand"
          to={paths.home}
          onClick={() => setIsOpen(false)}
        >
          <span className="site-header__wordmark">{brand.wordmark}</span>
          <span className="site-header__descriptor">{brand.descriptor}</span>
        </Link>

        <div className="site-header__actions">
          <label className="site-header__theme">
            <span className="site-header__theme-label">
              {siteHeaderCopy.themeLabel}
            </span>
            <select
              className="site-header__theme-select"
              value={preference}
              aria-label={siteHeaderCopy.colorThemeLabel}
              onChange={(event) =>
                setPreference(event.target.value as "system" | "light" | "dark")
              }
            >
              <option value="system">
                {siteHeaderCopy.themeOptions.system}
              </option>
              <option value="light">{siteHeaderCopy.themeOptions.light}</option>
              <option value="dark">{siteHeaderCopy.themeOptions.dark}</option>
            </select>
          </label>
          <button
            type="button"
            className="site-header__toggle"
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            aria-label={
              isOpen
                ? siteHeaderCopy.navigationToggle.close
                : siteHeaderCopy.navigationToggle.open
            }
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="site-header__toggle-bars" aria-hidden="true" />
          </button>
        </div>

        <nav
          id="primary-navigation"
          className="site-nav"
          aria-label={siteHeaderCopy.mainNavigationLabel}
          data-open={isOpen}
        >
          {navigation.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === paths.home}
              className={({ isActive }) =>
                isActive ? "site-nav__link active" : "site-nav__link"
              }
              onClick={() => setIsOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

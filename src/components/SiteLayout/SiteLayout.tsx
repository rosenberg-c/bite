import { Outlet } from "react-router";
import SiteFooter from "../SiteFooter/SiteFooter";
import SiteHeader from "../SiteHeader/SiteHeader";
import "./SiteLayout.css";

export default function SiteLayout() {
  return (
    <div className="site-layout">
      <a className="site-layout__skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" className="site-layout__main" tabIndex={-1}>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

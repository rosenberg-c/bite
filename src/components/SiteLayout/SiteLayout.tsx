import { Outlet } from "react-router";
import SiteFooter from "../SiteFooter/SiteFooter";
import SiteHeader from "../SiteHeader/SiteHeader";
import { siteLayoutCopy } from "./SiteLayout.content";
import "./SiteLayout.css";

export default function SiteLayout() {
  return (
    <div className="site-layout">
      <a className="site-layout__skip-link" href="#main-content">
        {siteLayoutCopy.skipLink}
      </a>
      <SiteHeader />
      <main id="main-content" className="site-layout__main" tabIndex={-1}>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

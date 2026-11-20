import { Route, Routes } from "react-router";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import NotFound from "./pages/NotFound/NotFound";
import SiteLayout from "./features/site-layout/SiteLayout";
import { paths } from "./routes";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path={paths.menu} element={<Menu />} />
        <Route path={paths.about} element={<About />} />
        <Route path={paths.gallery} element={<Gallery />} />
        <Route path={paths.contact} element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

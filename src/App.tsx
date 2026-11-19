import { Route, Routes } from "react-router";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import NotFound from "./pages/NotFound/NotFound";
import SiteLayout from "./components/SiteLayout/SiteLayout";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

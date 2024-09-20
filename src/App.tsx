import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/home/AboutPage";
import WebDevPage from "./pages/services/WebDevPage";
import ContactPage from "./pages/home/ContactPage";
import TeamPage from "./pages/home/TeamPage";
import WordpressDevPage from "./pages/services/WordpressDevPage";
import SEOPage from "./pages/services/SEOPage";
import AppDevPage from "./pages/services/AppDevPage";
import SoftwareDevPage from "./pages/services/SoftwareDevPage";


function App() {
  
    return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/team" element={<Layout><TeamPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />

        <Route path="/services/website-development" element={<Layout><WebDevPage /></Layout>} />
        <Route path="/services/wordpress-development" element={<Layout><WordpressDevPage /></Layout>} />
        <Route path="/services/software-development" element={<Layout><SoftwareDevPage /></Layout>} />
        <Route path="/services/app-development" element={<Layout><AppDevPage /></Layout>} />
        <Route path="/services/seo" element={<Layout><SEOPage /></Layout>} />

        <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App

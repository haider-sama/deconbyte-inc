import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import WebDevelopment from "./pages/Web_Development";
import GameDevelopment from "./pages/Game_Development";
import AppDevelopment from "./pages/App_Development";
import UIUXDesign from "./pages/UIUXDesign";
import QAPage from "./pages/QAPage";
import Contact from "./pages/Contact";


function App() {
  
    return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/careers" element={<Layout><Careers /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />

        <Route path="/services/web-dev" element={<Layout><WebDevelopment /></Layout>} />
        <Route path="/services/ui-ux" element={<Layout><UIUXDesign /></Layout>} />
        <Route path="/services/qa" element={<Layout><QAPage /></Layout>} />
        <Route path="/services/app-dev" element={<Layout><AppDevelopment /></Layout>} />
        <Route path="/services/game-dev" element={<Layout><GameDevelopment /></Layout>} />

        <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App

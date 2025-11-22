import React, { useContext } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Project from "./pages/project.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./Components/Common/Navbar.jsx";
import FullScreenNav from "./Components/Common/FullScreenNav.jsx";
import { NavbarContext } from "./Components/Context/NavContext.jsx";
import { AnimatePresence } from "framer-motion";
import Stairs from "./Components/Common/Stairs.jsx";

const App = () => {
  const [isNavOpen] = useContext(NavbarContext);
  const location = useLocation();

  return (
    <div className="text-white">
      <Navbar />
      <FullScreenNav />
      <Stairs />
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
    );
}

export default App;

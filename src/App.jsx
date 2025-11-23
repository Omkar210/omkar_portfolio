import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Project from "./pages/project.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./Components/Common/Navbar.jsx";
import FullScreenNav from "./Components/Common/FullScreenNav.jsx";
import { AnimatePresence } from "framer-motion";

const App = () => {

  return (
    <div className="text-white">
      <Navbar />
      <FullScreenNav />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
    );
}

export default App;

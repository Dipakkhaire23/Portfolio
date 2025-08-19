import { Link } from "react-router-dom";
import { Router, Routes, Route } from "react-router-dom";

import About from "./components/skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
function App() {
  return (
   
       <>
       <Navbar />
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
       </>
    
  );
}

export default App;

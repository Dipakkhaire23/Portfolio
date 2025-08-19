import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-50 text-white shadow-lg px-6 py-4">
      <div className="flex justify-between items-center">
        <h1></h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
  <Link to="/" className="text-black hover:text-blue-400 transition">Home</Link>
  <Link to="/skills" className="text-black hover:text-blue-400 transition">Skills</Link>
  <Link to="/projects" className="text-black hover:text-blue-400 transition">Projects</Link>
  <Link to="/achievements" className="text-black hover:text-blue-400 transition">Achievements</Link>
  <Link to="/education" className="text-black hover:text-blue-400 transition">Education</Link>
  <Link to="/contact" className="text-black hover:text-blue-400 transition">Contact</Link>
</div>


      {/* Mobile Menu Icon */}
<div className="md:hidden">
  <button 
    onClick={() => setIsOpen(!isOpen)} 
    className="text-2xl text-black focus:outline-none"
  >
    {isOpen ? <FaTimes /> : <FaBars />}
  </button>
</div>

      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
       <div className="md:hidden flex flex-col mt-4 space-y-3">
  <Link to="/" onClick={() => setIsOpen(false)} className="text-black hover:text-blue-400 transition">Home</Link>
  <Link to="/skills" onClick={() => setIsOpen(false)} className="text-black hover:text-blue-400 transition">Skills</Link>
  <Link to="/projects" onClick={() => setIsOpen(false)} className="text-black hover:text-blue-400 transition">Projects</Link>
  <Link to="/achievements" onClick={() => setIsOpen(false)} className="text-black hover:text-blue-400 transition">Achievements</Link>
  <Link to="/education" onClick={() => setIsOpen(false)} className="text-black hover:text-blue-400 transition">Education</Link>
  <Link to="/contact" onClick={() => setIsOpen(false)} className="text-black hover:text-blue-400 transition">Contact</Link>
</div>

      )}
    </nav>
  );
}

export default Navbar;

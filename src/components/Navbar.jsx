import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaCode, FaGithub, FaHome, FaLaptopCode, FaProjectDiagram, FaTrophy, FaGraduationCap, FaEnvelope } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Skills", path: "/skills", icon: <FaLaptopCode /> },
    { name: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
    { name: "Achievements", path: "/achievements", icon: <FaTrophy /> },
    { name: "Education", path: "/education", icon: <FaGraduationCap /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80 text-white px-4 sm:px-6 py-3.5 shadow-2xl transition-all">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-indigo-600 flex items-center justify-center text-white font-black text-lg shadow-lg group-hover:scale-105 transition transform">
            DK
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-wide text-white group-hover:text-emerald-400 transition">
              Dipak Khaire
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">
              AI & Full-Stack Developer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-2xl border border-slate-800/60">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-slate-800 text-emerald-400 font-semibold shadow-sm border border-slate-700/60"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right GitHub Action CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/Dipakkhaire23"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition transform hover:-translate-y-0.5 shadow-sm"
          >
            <FaGithub className="text-base" />
            <span>@Dipakkhaire23</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation menu"
            className="p-2.5 rounded-xl bg-slate-900 text-slate-200 hover:text-white border border-slate-800 focus:outline-none"
          >
            <FaBars className="text-xl text-emerald-400" />
          </button>
        </div>
      </div>

      {/* Left Sliding Mobile Side Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Semi-transparent Dark Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 md:hidden"
            />

            {/* Left Side Drawer Menu */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 bottom-0 w-[290px] max-w-[85vw] bg-[#030712] border-r border-slate-800 p-6 z-50 shadow-2xl flex flex-col justify-between md:hidden"
            >
              <div>
                {/* Drawer Top Header */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-indigo-600 flex items-center justify-center text-white font-black text-base shadow-lg">
                      DK
                    </div>
                    <div>
                      <h4 className="font-extrabold text-base text-white tracking-wide">Dipak Khaire</h4>
                      <p className="text-[11px] text-emerald-400 font-mono font-medium">Portfolio Navigation</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close navigation menu"
                    className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
                  >
                    <FaTimes className="text-base" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="space-y-2.5 bg-[#030712] rounded-xl">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3.5 px-4 py-3.5 rounded-2xl text-base font-bold transition ${
                          isActive
                            ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shadow-md"
                            : "text-slate-100 hover:bg-slate-900 hover:text-white border border-transparent"
                        }`}
                      >
                        <span className={`text-lg ${isActive ? "text-emerald-400" : "text-emerald-400/80"}`}>
                          {link.icon}
                        </span>
                        <span>{link.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Drawer Bottom CTA
              <div className="pt-6 border-t border-slate-800">
                <a
                  href="https://github.com/Dipakkhaire23"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2.5 py-3.5 rounded-2xl text-xs font-extrabold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition shadow-lg"
                >
                  <FaGithub className="text-lg" />
                  <span>GitHub @Dipakkhaire23</span>
                </a>
              </div> */}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;


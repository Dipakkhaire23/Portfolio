import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import dipak from "../Images/Dipak-Professional_photo.png";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaCode, FaRocket, FaGraduationCap } from "react-icons/fa";
import GithubContributions from "../GithubContributions";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative px-4 sm:px-6 md:px-12 py-6 sm:py-12">
      {/* Background Ambient Glows */}
      <div className="ambient-bg" />

      {/* Hero Section Container */}
      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-8 sm:gap-12 py-4 sm:py-8">
        
        {/* Left Column - Headline & Information */}
        <motion.div 
          className="flex-1 text-center md:text-left z-10"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide mb-2.5 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open for Internships & Full-Stack Opportunity</span>
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-2.5 leading-tight">
            Hi, I’m <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">Dipak Khaire</span> 👋
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mb-4 leading-relaxed font-normal">
            <span className="text-emerald-400 font-semibold">AI & Full-Stack Developer</span> 
            <br />
            Crafting high-performance, scalable web solutions and intelligent AI systems. Specializing in Java, Spring Boot microservices, React, and modern database architectures.
          </p>

          {/* Key Skill Highlights Pills */}
          <div className="flex flex-wrap gap-2.5 justify-center md:justify-start mb-5 text-xs font-mono">
            <span className="px-3 py-1.5 rounded-lg bg-slate-900/80 text-emerald-400 border border-slate-800">
              ⚡ Java / Spring Boot 3
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900/80 text-cyan-400 border border-slate-800">
              ⚛️ React.js & Vite
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900/80 text-indigo-400 border border-slate-800">
              🤖 AI & Data Science (B.Tech)
            </span>
            
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
            <Link
              to="/projects"
              className="px-7 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-bold rounded-2xl shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:scale-[1.02] transition transform duration-200 flex items-center gap-2 text-sm"
            >
              <FaCode className="text-base" />
              <span>Explore My Work</span>
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3.5 bg-slate-900/80 hover:bg-slate-800/90 text-slate-200 hover:text-white font-semibold rounded-2xl border border-slate-700/80 shadow-md hover:scale-[1.02] transition transform duration-200 text-sm"
            >
              Get In Touch
            </Link>
          </div>

          {/* Verified Social Links */}
          <div className="flex gap-4 justify-center md:justify-start items-center pt-2 border-t border-slate-800/60">
            <span className="text-xs text-slate-400 font-mono">Connect:</span>
            <motion.a
              href="https://github.com/Dipakkhaire23"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 border border-slate-800 transition shadow-sm text-xl"
              title="GitHub Profile"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/dipak-khaire-1a4227291"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition shadow-sm text-xl"
              title="LinkedIn Profile"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/the_alpha_2316"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-pink-400 border border-slate-800 transition shadow-sm text-xl"
              title="Instagram Profile"
            >
              <FaInstagram />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column - Avatar with Glowing Ring */}
        <motion.div 
          className="flex-1 flex justify-center z-10"
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative group">
            {/* Glowing Gradient Backdrop Aura */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-emerald-500 via-teal-400 to-indigo-600 opacity-60 blur-2xl group-hover:opacity-90 transition duration-500 animate-pulse-glow" />
            
            {/* Profile Image Frame */}
            <div className="relative p-1.5 rounded-full bg-gradient-to-b from-emerald-400/80 via-slate-800 to-indigo-500/80 shadow-2xl">
              <motion.img
                src={dipak}
                alt="Dipak Khaire"
                className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full bg-slate-900 border-4 border-slate-950 shadow-inner"
                style={{ objectPosition: "center 15%" }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            </div>

            {/* Floating Qualification Badge */}
            <div className="absolute -bottom-3 right-0 sm:right-2 bg-slate-900/95 backdrop-blur-xl px-4 py-2.5 rounded-2xl border border-slate-700/80 shadow-2xl flex items-center gap-2.5 z-20">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <FaGraduationCap className="text-lg" />
              </div>
              <div className="text-left font-sans">
                <p className="text-xs font-bold text-white tracking-wide">VIIT Pune</p>
                <p className="text-[10px] text-emerald-400 font-mono font-medium">AI & DS (CGPA 8.62)</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* GitHub Contribution Activity Section */}
      <GithubContributions username="Dipakkhaire23" />
    </div>
  );
}


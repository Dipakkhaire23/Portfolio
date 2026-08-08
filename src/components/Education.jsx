import React from "react";
import { FaGraduationCap, FaBriefcase, FaCalendarAlt, FaAward } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-4 sm:px-6 md:px-16 py-10 sm:py-16 relative">
      <div className="ambient-bg" />

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold tracking-wider uppercase font-mono mb-3 inline-block">
          Journey & Qualifications
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Education & Work Experience
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-base">
          Academic foundation in Artificial Intelligence & Data Science combined with practical software engineering experience.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Education Timeline Column */}
        <div>
          <div className="flex items-center gap-3 mb-8 pb-3 border-b border-slate-800">
            <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xl">
              <FaGraduationCap />
            </div>
            <h3 className="text-2xl font-extrabold text-white">Education</h3>
          </div>

          <div className="space-y-6 relative border-l-2 border-slate-800/80 pl-6 ml-3">
            {/* Degree */}
            <motion.div 
              whileHover={{ x: 4 }}
              className="glass-card rounded-2xl p-6 border border-slate-800/80 shadow-xl relative"
            >
              <span className="w-4 h-4 rounded-full bg-emerald-500 absolute -left-[31px] top-7 border-4 border-slate-950" />
              <div className="flex justify-between items-start gap-2 mb-2">
                <h4 className="text-lg font-bold text-white leading-snug">
                  B.Tech - Artificial Intelligence & Data Science
                </h4>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 text-[11px] font-mono border border-emerald-500/30 whitespace-nowrap">
                  2023 - 2027
                </span>
              </div>
              <p className="text-slate-300 text-sm font-medium mb-3">
                Vishwakarma Institute of Information Technology, Pune
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-slate-900 text-emerald-400 text-xs font-mono border border-slate-800">
                <FaAward /> CGPA: 8.62 / 10.0
              </div>
            </motion.div>

            {/* High School */}
            <motion.div 
              whileHover={{ x: 4 }}
              className="glass-card rounded-2xl p-6 border border-slate-800/80 shadow-xl relative"
            >
              <span className="w-4 h-4 rounded-full bg-cyan-500 absolute -left-[31px] top-7 border-4 border-slate-950" />
              <div className="flex justify-between items-start gap-2 mb-2">
                <h4 className="text-lg font-bold text-white leading-snug">
                  Higher Secondary Certificate (Class XII)
                </h4>
                <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 text-[11px] font-mono border border-cyan-500/30 whitespace-nowrap">
                  2021 - 2023
                </span>
              </div>
              <p className="text-slate-300 text-sm font-medium mb-3">
                Santosh Junior College, Nashik, Maharashtra
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-slate-900 text-cyan-400 text-xs font-mono border border-slate-800">
                <FaAward /> Percentage: 79.33%
              </div>
            </motion.div>
          </div>
        </div>

        {/* Experience Timeline Column */}
        <div>
          <div className="flex items-center gap-3 mb-8 pb-3 border-b border-slate-800">
            <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 text-xl">
              <FaBriefcase />
            </div>
            <h3 className="text-2xl font-extrabold text-white">Experience</h3>
          </div>

          <div className="space-y-6 relative border-l-2 border-slate-800/80 pl-6 ml-3">
            {/* Internship */}
            <motion.div 
              whileHover={{ x: 4 }}
              className="glass-card rounded-2xl p-6 border border-slate-800/80 shadow-xl relative"
            >
              <span className="w-4 h-4 rounded-full bg-indigo-500 absolute -left-[31px] top-7 border-4 border-slate-950" />
              <h4 className="text-lg font-bold text-white leading-snug mb-1">
                Java Full-Stack Developer
              </h4>
              <p className="text-emerald-400 text-xs font-mono mb-3">
                Zidio Development • Internship
              </p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>Developed core backend APIs and services using Java 17 & Spring Boot 3.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>Integrated MySQL databases with Spring Data JPA and managed Git workflows.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>Conducted unit testing, API debugging, and performance optimization.</span>
                </li>
              </ul>
            </motion.div>

            {/* Club Role */}
            <motion.div 
              whileHover={{ x: 4 }}
              className="glass-card rounded-2xl p-6 border border-slate-800/80 shadow-xl relative"
            >
              <span className="w-4 h-4 rounded-full bg-purple-500 absolute -left-[31px] top-7 border-4 border-slate-950" />
              <h4 className="text-lg font-bold text-white leading-snug mb-1">
                Java Developer Member
              </h4>
              <p className="text-purple-400 text-xs font-mono mb-3">
                Research and Innovators Cell • College Organization
              </p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">•</span>
                  <span>Engineered Java backend modules for student research initiatives.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">•</span>
                  <span>Implemented complex Data Structures & Algorithms for practical applications.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}


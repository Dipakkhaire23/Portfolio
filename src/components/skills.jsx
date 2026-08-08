import React from "react";
import { FaJava, FaJs, FaHtml5, FaCss3Alt, FaDocker, FaDatabase, FaReact, FaAndroid, FaGitAlt, FaLinux, FaAws, FaServer, FaLaptopCode, FaCloud } from "react-icons/fa";
import { SiFlutter, SiMysql, SiFirebase, SiSpring, SiCplusplus, SiSpringboot } from "react-icons/si";
import { motion } from "framer-motion";

function About() {
  const skillCategories = [
    {
      title: "Backend & Systems",
      icon: <FaServer className="text-emerald-400" />,
      items: [
        { name: "Core & Adv. Java", icon: <FaJava className="text-red-500" /> },
        { name: "Spring Boot 3", icon: <SiSpringboot className="text-emerald-500" /> },
        { name: "Spring Framework", icon: <SiSpring className="text-emerald-400" /> },
        { name: "Spring Security / JWT", icon: <SiSpring className="text-emerald-300" /> },
        { name: "RESTful APIs", icon: <FaServer className="text-cyan-400" /> },
        { name: "C++ Programming", icon: <SiCplusplus className="text-blue-400" /> },
      ],
    },
    {
      title: "Frontend & Mobile",
      icon: <FaLaptopCode className="text-cyan-400" />,
      items: [
        { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
        { name: "JavaScript (ES6+)", icon: <FaJs className="text-amber-400" /> },
        { name: "Flutter App Dev", icon: <SiFlutter className="text-sky-400" /> },
        { name: "HTML5 / CSS3", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "Android Development", icon: <FaAndroid className="text-emerald-400" /> },
      ],
    },
    {
      title: "Databases & Cloud",
      icon: <FaCloud className="text-indigo-400" />,
      items: [
        { name: "MySQL & TiDB", icon: <SiMysql className="text-blue-400" /> },
        { name: "Firebase Realtime", icon: <SiFirebase className="text-amber-400" /> },
        { name: "AWS Services", icon: <FaAws className="text-amber-500" /> },
        { name: "Docker Containers", icon: <FaDocker className="text-sky-400" /> },
      ],
    },
    {
      title: "Core CS & Tools",
      icon: <FaDatabase className="text-purple-400" />,
      items: [
        { name: "Data Structures & Algos", icon: <FaDatabase className="text-indigo-400" /> },
        { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500" /> },
        { name: "Linux Administration", icon: <FaLinux className="text-slate-300" /> },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-4 sm:px-6 md:px-16 py-10 sm:py-16 relative">
      <div className="ambient-bg" />

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold tracking-wider uppercase font-mono mb-3 inline-block">
          Technical Arsenal
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Skills & Core Competencies
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-base">
          Proven expertise in Java full-stack development, modern web frameworks, intelligent data structures, and cloud deployments.
        </p>
      </div>

      {/* Categorized Skills Section */}
      <div className="max-w-5xl mx-auto space-y-12">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800/80 shadow-xl">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800/80">
              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700/80 text-xl">
                {cat.icon}
              </div>
              <h3 className="text-2xl font-bold text-white tracking-wide">
                {cat.title}
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {cat.items.map((skill, sIdx) => (
                <motion.div
                  key={sIdx}
                  whileHover={{ scale: 1.06, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 hover:border-emerald-500/40 flex flex-col items-center justify-center text-center group cursor-pointer shadow-md"
                >
                  <div className="text-3xl mb-2.5 transition transform group-hover:scale-110">
                    {skill.icon}
                  </div>
                  <p className="text-xs font-semibold text-slate-300 group-hover:text-emerald-400 transition font-sans">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;


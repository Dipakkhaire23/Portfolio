import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaTimes, FaLayerGroup, FaStar, FaCodeBranch, FaSearch, FaSync, FaBook, FaFilter } from "react-icons/fa";
import p1 from "../Images/p1.jpg";
import p12 from "../Images/p12.jpg";
import p21 from "../Images/p21.jpg";
import p22 from "../Images/p22.jpg";
import p23 from "../Images/p23.jpg";
import p24 from "../Images/p24.jpg";
import p25 from "../Images/p25.jpg";

export default function Projects() {
  const username = "Dipakkhaire23";
  const [selectedProject, setSelectedProject] = useState(null);
  const [githubRepos, setGithubRepos] = useState([]);
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  // Flagship featured projects with rich images and architecture details
  const featuredProjects = [
    {
      id: "featured-1",
      title: "Web-Based Vegetable Plant Booking Platform",
      subtitle: "Full-Stack E-Commerce & Management Platform",
      descPoints: [
        "Implemented Firebase for real-time order and inventory notifications.",
        "Integrated SMTP email sender for password reset and transaction receipts.",
        "Incorporated Razorpay payment gateway for secure end-to-end checkout.",
        "Hosted backend on AWS, frontend on Vercel, domain on GoDaddy, and TiDB MySQL-compatible server for data storage.",
        "Integrated Web3Forms for contact inquiries and customer feedback."
      ],
      tech: ["React.js", "Spring Boot 3", "MySQL", "JWT", "OAuth2", "AWS", "Razorpay"],
      mainImage: p1,
      images: [p1, p12],
      github: "https://github.com/Dipakkhaire23/SakashiNursery",
      isFeatured: true,
    },
    {
      id: "featured-2",
      title: "Educonnect Platform",
      subtitle: "Interactive Academic Management & Classroom Portal",
      descPoints: [
        "Built a full-stack web application to enhance collaboration between teachers and students.",
        "Developed classroom system to organize courses, syllabus, and study resources.",
        "Implemented features like dynamic timetable management, grade tracking, and assignment submissions.",
        "Enabled role-based access control (RBAC) with Spring Security & OAuth2 for customized user dashboards."
      ],
      tech: ["React", "Spring Boot", "Spring Data JPA", "OAuth2", "JWT", "Spring Security", "MySQL"],
      mainImage: p21,
      images: [p21, p22, p23, p24, p25],
      github: "https://github.com/Dipakkhaire23/Educonnect-project",
      isFeatured: true,
    },
  ];

  // Fetch all public repos from api.github.com/users/{username}/repos
  const fetchGithubRepos = async () => {
    setLoadingRepos(true);
    try {
      const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          setGithubRepos(data);
        }
      }
    } catch (err) {
      console.warn("Failed to fetch public repositories:", err);
    } finally {
      setLoadingRepos(false);
    }
  };

  useEffect(() => {
    fetchGithubRepos();
  }, []);

  // Filter repos by search and language
  const availableLanguages = ["All", ...new Set(githubRepos.map((r) => r.language).filter(Boolean))];

  const filteredRepos = githubRepos.filter((repo) => {
    const matchesSearch = repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesLanguage = selectedLanguage === "All" || repo.language === selectedLanguage;
    return matchesSearch && matchesLanguage;
  });

  const getLanguageColor = (lang) => {
    switch (lang?.toLowerCase()) {
      case "java": return "bg-red-500/20 text-red-400 border-red-500/30";
      case "javascript": return "bg-amber-500/20 text-amber-400 border-amber-500/30";
      case "typescript": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "html": return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "css": return "bg-indigo-500/20 text-indigo-400 border-indigo-500/30";
      case "c++": return "bg-sky-500/20 text-sky-400 border-sky-500/30";
      case "python": return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
      default: return "bg-slate-800 text-slate-300 border-slate-700";
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-4 sm:px-6 md:px-16 py-10 sm:py-16 relative">
      <div className="ambient-bg" />

      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold tracking-wider uppercase font-mono mb-3 inline-block">
          Portfolio & Repositories
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Projects & Code Repositories
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-base">
          Showcasing major full-stack application systems and real-time open-source repositories fetched live from GitHub (`api.github.com/users/${username}/repos`).
        </p>
      </div>

      {/* SECTION 1: Featured Major Systems */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="flex items-center gap-3 mb-8 pb-3 border-b border-slate-800">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-lg">
            <FaCode />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Featured Full-Stack Platforms</h3>
            <p className="text-xs text-slate-400">Flagship software solutions with full media gallery & system architecture</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="glass-card rounded-3xl p-5 border border-slate-800/80 shadow-2xl flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedProject(p)}
            >
              <div>
                <div className="relative overflow-hidden rounded-2xl mb-5 h-56 bg-slate-900 border border-slate-800">
                  <img
                    src={p.mainImage}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                    <span className="px-3 py-1 rounded-xl bg-slate-900/90 backdrop-blur-md text-emerald-400 text-xs font-mono border border-slate-700">
                      {p.tech.length} Technologies
                    </span>
                    <span className="px-3 py-1 rounded-xl bg-emerald-500/20 backdrop-blur-md text-emerald-300 text-xs font-medium border border-emerald-500/30 flex items-center gap-1.5">
                      <FaExternalLinkAlt className="text-[10px]" /> Details
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-400 font-mono mb-4">
                  {p.subtitle}
                </p>

                <ul className="text-sm text-slate-300 space-y-1.5 mb-5 list-disc list-inside line-clamp-2">
                  {p.descPoints.slice(0, 2).map((pt, idx) => (
                    <li key={idx} className="truncate">{pt}</li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-mono border border-slate-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SECTION 2: All GitHub Repositories (Fetched via GitHub API) */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-slate-800/80 text-white border border-slate-700 shadow-inner">
              <FaGithub className="text-2xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                All GitHub Repositories
              </h3>
             
            </div>
          </div>

          <button
            onClick={fetchGithubRepos}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 text-xs font-semibold self-start md:self-auto transition"
          >
            <FaSync className={`text-xs ${loadingRepos ? "animate-spin text-emerald-400" : ""}`} />
            <span>Refresh Repos</span>
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search Bar */}
          <div className="relative flex-1">
            <FaSearch className="absolute left-4 top-3.5 text-slate-500 text-sm" />
            <input
              type="text"
              placeholder="Search repositories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-900/90 text-white placeholder-slate-500 border border-slate-800 focus:outline-none focus:border-emerald-500 text-sm font-sans"
            />
          </div>

          {/* Language Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            <FaFilter className="text-slate-500 text-xs ml-1 hidden sm:inline" />
            {availableLanguages.map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border whitespace-nowrap transition ${
                  selectedLanguage === lang
                    ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                    : "bg-slate-900/80 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* GitHub Repos Grid */}
        {loadingRepos ? (
          <div className="h-48 flex items-center justify-center text-slate-400 gap-3">
            <FaSync className="animate-spin text-2xl text-emerald-400" />
            <span>Fetching public repositories from GitHub...</span>
          </div>
        ) : filteredRepos.length === 0 ? (
          <div className="p-8 text-center glass-card rounded-2xl border border-slate-800 text-slate-400">
            No repositories found matching your filter criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRepos.map((repo) => (
              <motion.div
                key={repo.id}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="glass-card rounded-2xl p-5 border border-slate-800/80 hover:border-slate-700/90 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  {/* Repo Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <FaBook className="text-slate-400 text-sm flex-shrink-0" />
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-base font-bold text-white group-hover:text-emerald-400 truncate transition"
                      >
                        {repo.name}
                      </a>
                    </div>
                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center gap-1 text-xs font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-lg border border-amber-500/20">
                        <FaStar className="text-[10px]" /> {repo.stargazers_count}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 line-clamp-3 mb-4 leading-relaxed font-sans min-h-[36px]">
                    {repo.description || "Public software repository by Dipak Khaire."}
                  </p>
                </div>

                {/* Footer Info */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                  {repo.language ? (
                    <span className={`px-2.5 py-0.5 rounded-lg text-[11px] font-semibold border ${getLanguageColor(repo.language)}`}>
                      {repo.language}
                    </span>
                  ) : (
                    <span className="text-[11px] text-slate-500">Repository</span>
                  )}

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition font-sans text-xs font-semibold"
                  >
                    <span>View</span>
                    <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Dark Glass Modal Preview */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card rounded-3xl p-6 sm:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-700/80 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition"
              >
                <FaTimes className="text-lg" />
              </button>

              <h2 className="text-3xl font-extrabold text-white mb-1">
                {selectedProject.title}
              </h2>
              <p className="text-sm text-emerald-400 font-mono mb-6">
                {selectedProject.subtitle}
              </p>

              <div className="mb-6">
                <h3 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <FaLayerGroup /> Architecture & Key Features:
                </h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  {selectedProject.descPoints?.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-emerald-400 font-bold mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-3">
                  Technologies Used:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech?.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-slate-900 text-emerald-300 text-xs font-mono border border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.images && (
                <div className="mb-8">
                  <h3 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-3">
                    Project Gallery:
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {selectedProject.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${selectedProject.title}-${idx}`}
                        className="w-full h-32 object-cover rounded-xl border border-slate-800 shadow-md hover:scale-105 transition"
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-4 pt-4 border-t border-slate-800">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-emerald-500 text-slate-950 font-bold rounded-xl hover:bg-emerald-400 transition shadow-lg text-sm"
                >
                  <FaGithub className="text-base" />
                  <span>View Repository on GitHub</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

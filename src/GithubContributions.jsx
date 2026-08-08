import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaFire, FaCalendarAlt, FaCodeBranch, FaUsers, FaPalette, FaExternalLinkAlt, FaSync } from "react-icons/fa";
import { GitHubCalendar } from "react-github-calendar";


// Human-Chosen Color Schemes mapped for react-github-calendar
const COLOR_THEMES = [
  {
    id: "emerald",
    name: "Classic Emerald",
    badge: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    gradient: "from-emerald-500 to-teal-400",
    levels: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  },
 
 
];

export default function GithubContributions({ username = "Dipakkhaire23" }) {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTheme, setActiveTheme] = useState(COLOR_THEMES[0]);

  const fetchGithubUser = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (res.ok) {
        const data = await res.json();
        setUserInfo(data);
      }
    } catch (err) {
      console.warn("Failed to fetch user profile:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGithubUser();
  }, [username]);

  // Convert levels array to theme object format expected by react-github-calendar
  const calendarTheme = {
    dark: activeTheme.levels,
    light: activeTheme.levels,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-5xl mx-auto my-12"
    >
      {/* Outer Card Wrapper */}
      <div className="glass-card rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800/80 relative overflow-hidden">
        
        {/* Subtle Ambient Glow */}
        <div className={`absolute -right-24 -top-24 w-72 h-72 bg-gradient-to-br ${activeTheme.gradient} opacity-10 blur-3xl pointer-events-none rounded-full`} />
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-slate-800/80 text-white border border-slate-700 shadow-inner">
                <FaGithub className="text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  GitHub Contribution Activity
                </h3>
               
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchGithubUser}
              title="Refresh Profile"
              className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition"
            >
              <FaSync className={`text-sm ${loading ? "animate-spin text-emerald-400" : ""}`} />
            </button>
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700/80 text-white font-medium text-sm border border-slate-700/80 shadow-md transition transform hover:-translate-y-0.5"
            >
              <FaExternalLinkAlt className="text-xs" />
              <span>Visit Profile</span>
            </a>
          </div>
        </div>

        {/* User Quick Stats Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          

          

          <div className="bg-slate-900/60 rounded-2xl p-4 border border-slate-800/80 flex items-center gap-3">
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <FaCodeBranch className="text-xl" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Public Repos</p>
              <p className="text-xl font-extrabold text-white">
                {userInfo?.public_repos || "10+"}
              </p>
              <p className="text-[10px] text-slate-500">Open source projects</p>
            </div>
          </div>

          <div className="bg-slate-900/60 rounded-2xl p-4 border border-slate-800/80 flex items-center gap-3">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <FaUsers className="text-xl" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Followers</p>
              <p className="text-xl font-extrabold text-white">
                {userInfo?.followers || "Network"}
              </p>
              <p className="text-[10px] text-slate-500">GitHub community</p>
            </div>
          </div>
        </div>

        {/* Human-Chosen Color Palette Selector */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 bg-slate-900/40 p-3.5 rounded-2xl border border-slate-800/60">
          <div className="flex items-center gap-2 text-sm text-slate-300 font-medium">
            <FaPalette className="text-slate-400" />
            <span>Curated Heatmap Theme:</span>
          </div>

          <div className="flex flex-wrap items-start gap-2">
            {COLOR_THEMES.map((theme) => (
              <button
                key={theme.id}
                onClick={() => setActiveTheme(theme)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold border transition ${
                  activeTheme.id === theme.id
                    ? `${theme.badge} ring-2 ring-white/10 shadow-md`
                    : "bg-slate-800/50 text-slate-400 border-slate-700/50 hover:bg-slate-800 hover:text-slate-200"
                }`}
              >
                <div className="flex gap-0.5">
                  {theme.levels.slice(1).map((lvl, idx) => (
                    <span
                      key={idx}
                      className="w-2.5 h-2.5 rounded-sm"
                      style={{ backgroundColor: lvl }}
                    />
                  ))}
                </div>
                <span>{theme.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* react-github-calendar Heatmap Container */}
        <div className="overflow-x-auto w-full max-w-full pb-2 flex justify-start sm:justify-center text-slate-200 font-sans">
          <div className="p-3 sm:p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 inline-block min-w-[650px] sm:min-w-0">
            <GitHubCalendar
              username={username}
              colorScheme="dark"
              theme={calendarTheme}
              blockSize={12}
              blockMargin={4}
              fontSize={13}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

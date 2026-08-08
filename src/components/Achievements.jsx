import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrophy, FaTimes, FaImages } from "react-icons/fa";
import k from "../Images/k.jpg";
import n from "../Images/n.jpg";
import p from "../Images/p.jpg";
import kk1 from "../Images/kk1.jpg";
import kk2 from "../Images/kk2.jpg";

const achievementsData = [
  {
    title: "First Rank in Kho-Kho",
    description: "Secured First Rank in Kho-Kho tournament at VIIT Annual Sports competition.",
    date: "2023",
    icon: "🏅",
    badge: "Sports & Leadership",
    images: [kk1, kk2],
  },
  {
    title: "Nirman Hackathon Top-6",
    description: "Achieved Top-6 Finalist position in national level Nirman Hackathon for software innovation.",
    date: "2023",
    icon: "🏆",
    badge: "Hackathon Finalist",
    images: [k, n, p],
  },
];

export default function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-4 sm:px-6 md:px-16 py-10 sm:py-16 relative">
      <div className="ambient-bg" />

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold tracking-wider uppercase font-mono mb-3 inline-block">
          Milestones & Recognition
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Key Achievements & Awards
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-base">
          Celebrating competitive hackathons, sports excellence, and software innovation achievements.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {achievementsData.map((achievement, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => setSelectedAchievement(achievement)}
            className="glass-card rounded-3xl p-6 border border-slate-800/80 shadow-2xl relative overflow-hidden cursor-pointer group flex flex-col justify-between"
          >
            {/* Background Icon Watermark */}
            <div className="absolute -right-4 -bottom-4 text-slate-800/40 text-9xl select-none pointer-events-none group-hover:scale-110 transition duration-500">
              {achievement.icon}
            </div>

            <div>
              <div className="flex items-center justify-between gap-4 mb-4 z-10 relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-slate-900 to-slate-800 border border-slate-700 flex items-center justify-center text-3xl shadow-inner">
                  {achievement.icon}
                </div>
                <span className="px-3 py-1 rounded-xl bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/30">
                  {achievement.date}
                </span>
              </div>

              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-1 block">
                {achievement.badge}
              </span>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition">
                {achievement.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 z-10 relative">
                {achievement.description}
              </p>
            </div>

            {/* Click CTA */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-slate-400 group-hover:text-white transition">
              <FaImages className="text-emerald-400 text-sm" />
              <span>Click to view photos ({achievement.images.length})</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedAchievement && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card rounded-3xl p-6 sm:p-8 max-w-3xl w-full border border-slate-700/80 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedAchievement(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition"
              >
                <FaTimes className="text-lg" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{selectedAchievement.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedAchievement.title}</h3>
                  <p className="text-xs font-mono text-emerald-400">{selectedAchievement.date} • {selectedAchievement.badge}</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm mb-6">{selectedAchievement.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto">
                {selectedAchievement.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`achievement-${i}`}
                    className="w-full h-56 object-cover rounded-2xl border border-slate-800 shadow-md hover:scale-102 transition"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}


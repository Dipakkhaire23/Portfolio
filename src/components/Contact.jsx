import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaPaperPlane, FaCheckCircle, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "f8712f11-8ea5-474c-b1ab-a0b4c9623fa2",
          ...formData,
        }),
      });

      const result = await res.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("❌ Something went wrong. Please try again!");
      }
    } catch (err) {
      alert("❌ Submission error. Please try again!");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-4 sm:px-6 md:px-16 py-10 sm:py-16 relative">
      <div className="ambient-bg" />

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold tracking-wider uppercase font-mono mb-3 inline-block">
          Let's Connect
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Get In Touch
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-base">
          Have an internship opportunity, project inquiry, or just want to connect? Send a message below!
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Left Column - Dark Glass Form */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800/80 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
          
          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center space-y-2">
              <FaCheckCircle className="text-4xl mx-auto text-emerald-400 animate-bounce" />
              <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
              <p className="text-xs text-slate-300">Thank you for reaching out. I'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-mono text-slate-400 mb-1.5 block">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 text-white placeholder-slate-500 border border-slate-800 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition text-sm font-sans"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 mb-1.5 block">Your Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="e.g. john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 text-white placeholder-slate-500 border border-slate-800 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition text-sm font-sans"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 mb-1.5 block">Your Message</label>
                <textarea
                  rows="5"
                  name="message"
                  placeholder="How can I help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 text-white placeholder-slate-500 border border-slate-800 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition text-sm font-sans"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 px-6 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold rounded-xl shadow-lg shadow-emerald-500/20 transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm disabled:opacity-50"
              >
                <FaPaperPlane />
                <span>{submitting ? "Sending Message..." : "Send Message"}</span>
              </button>
            </form>
          )}
        </div>

        {/* Right Column - Direct Info & Social Connect */}
        <div className="space-y-6">
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800/80 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Contact & Location</h3>
            
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <FaEnvelope className="text-lg" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-mono">Email Address</p>
                  <p className="text-white font-semibold">dipakkhaire23@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-mono">Location</p>
                  <p className="text-white font-semibold">Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800/80 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-4">Connect Socially</h3>
            <p className="text-xs text-slate-400 mb-6">
              Follow my coding journey, open-source work, and professional updates.
            </p>

            <div className="grid grid-cols-3 gap-3">
              <motion.a
                href="https://github.com/Dipakkhaire23"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3 }}
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 hover:border-emerald-500/40 transition group"
              >
                <FaGithub className="text-3xl text-white group-hover:scale-110 transition mb-2" />
                <span className="text-[11px] font-mono">GitHub</span>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/dipak-khaire-1a4227291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3 }}
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/40 transition group"
              >
                <FaLinkedin className="text-3xl text-cyan-400 group-hover:scale-110 transition mb-2" />
                <span className="text-[11px] font-mono">LinkedIn</span>
              </motion.a>

              <motion.a
                href="https://www.instagram.com/the_alpha_2316?igsh=dTJoMDh2bWU3NXN0"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3 }}
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-pink-400 border border-slate-800 hover:border-pink-500/40 transition group"
              >
                <FaInstagram className="text-3xl text-pink-500 group-hover:scale-110 transition mb-2" />
                <span className="text-[11px] font-mono">Instagram</span>
              </motion.a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}


import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import dipak from "../Images/dipak.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-100 flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 py-12">

      {/* Left Side - Info */}
      <motion.div 
        className="flex-1 text-center md:text-left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Hi, I’m <span className="text-indigo-600">Dipak Khaire</span> 👋
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-6 leading-relaxed">
          <span className="font-semibold">AI & Full-Stack Developer</span> 🚀
          <br /> 
          An enthusiastic Software Developer with proven expertise in Java-based projects and strong problem-solving skills. Passionate about continuous learning and leveraging emerging technologies to build scalable, efficient, and reliable solutions.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-6 animate-pulse">
          Open to Internship & Collaborative Projects
        </h2>

        {/* Call to Action Buttons */}
        <div className="flex gap-4 justify-center md:justify-start mb-8">
          <Link
            to="/projects"
            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-lg hover:bg-indigo-700 transition transform hover:-translate-y-1"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 border border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition transform hover:-translate-y-1"
          >
            Contact Me
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center md:justify-start">
          <motion.a
            href="https://github.com/your-github"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            className="text-gray-700 hover:text-indigo-600 text-3xl transition"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            className="text-gray-700 hover:text-indigo-600 text-3xl transition"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="mailto:your@email.com"
            whileHover={{ scale: 1.2 }}
            className="text-gray-700 hover:text-indigo-600 text-3xl transition"
          >
            <FaEnvelope />
          </motion.a>
        </div>
      </motion.div>

      {/* Right Side - Profile Image */}
      <motion.div 
        className="flex-1 flex justify-center mb-8 md:mb-0"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={dipak}
          alt="Dipak Khaire"
          className="w-36 h-36 md:w-56 md:h-56 object-cover rounded-full shadow-2xl border-4 border-indigo-600"
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>
    </div>
  );
}

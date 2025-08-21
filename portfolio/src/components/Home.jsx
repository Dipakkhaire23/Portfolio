import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import dipak from "../Images/dipak.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col-reverse items-center justify-center min-h-screen px-6 py-12 bg-gradient-to-r from-gray-50 to-gray-100 md:flex-row md:px-20">

      {/* Left Side - Info */}
      <motion.div 
        className="flex-1 text-center md:text-left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
          Hi, I’m <span className="text-indigo-600">Dipak Khaire</span> 👋
        </h1>
        <p className="max-w-xl mb-6 text-lg leading-relaxed text-gray-600 md:text-xl">
          <span className="font-semibold">AI & Full-Stack Developer</span> 🚀
          <br /> 
          An enthusiastic Software Developer with proven expertise in Java-based projects and strong problem-solving skills. Passionate about continuous learning and leveraging emerging technologies to build scalable, efficient, and reliable solutions.
        </p>

        <h2 className="mb-6 text-2xl font-bold text-indigo-600 md:text-3xl animate-pulse">
          Open to Internship & Collaborative Projects
        </h2>

        {/* Call to Action Buttons */}
        <div className="flex justify-center gap-4 mb-8 md:justify-start">
          <Link
            to="/projects"
            className="px-6 py-3 font-medium text-white transition transform bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 hover:-translate-y-1"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 font-medium text-indigo-600 transition transform border border-indigo-600 rounded-lg hover:bg-indigo-50 hover:-translate-y-1"
          >
            Contact Me
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 md:justify-start">
          <motion.a
            href="https://github.com/Dipakkhaire23"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            className="text-3xl text-gray-700 transition hover:text-indigo-600"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/dipak-khaire-1a4227291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            className="text-3xl text-gray-700 transition hover:text-indigo-600"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="dipakkhaire23@gmail.com"
            whileHover={{ scale: 1.2 }}
            className="text-3xl text-gray-700 transition hover:text-indigo-600"
          >
            <FaEnvelope />
          </motion.a>
        </div>
      </motion.div>

      {/* Right Side - Profile Image */}
      <motion.div 
        className="flex justify-center flex-1 mb-8 md:mb-0"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={dipak}
          alt="Dipak Khaire"
          className="object-cover border-4 border-indigo-600 rounded-full shadow-2xl w-36 h-36 md:w-56 md:h-56"
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>
    </div>
  );
}

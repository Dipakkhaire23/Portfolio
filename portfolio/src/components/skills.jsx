import React from "react";
import { FaJava, FaJs, FaHtml5, FaCss3Alt, FaDocker, FaDatabase, FaReact, FaAndroid, FaGitAlt, FaLinux, FaAws } from "react-icons/fa";
import { SiFlutter, SiMysql, SiFirebase, SiSpring, SiCplusplus, SiSpringboot } from "react-icons/si";
import { motion } from "framer-motion";

function About() {
  const skills = [
    { name: "Core & Advanced Java", icon: <FaJava className="text-red-600" /> },
    { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-800" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
    { name: "Spring Framework & Boot", icon: <SiSpring className="text-green-600" /> },
    { name: "Spring Data JPA", icon: <SiSpringboot className="text-green-700" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
    { name: "REST API", icon: <FaReact className="text-blue-500" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
    { name: "DSA", icon: <FaDatabase className="text-gray-700" /> },
    { name: "Spring MVC", icon: <SiSpring className="text-green-600" /> },
    { name: "Backend Development", icon: <FaDatabase className="text-gray-700" /> },
    { name: "App Development", icon: <FaAndroid className="text-green-600" /> },
    { name: "AWS", icon: <FaAws className="text-orange-500" /> },
    { name: "Linux", icon: <FaLinux className="text-gray-800" /> },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-red-600" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-100 flex flex-col px-6 md:px-20 py-10">
      <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center md:text-left">
        Skills
      </h2>
      <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12 text-center md:text-left">
        I’m a Software Developer with strong problem-solving skills and hands-on experience in Java-based projects. 
        Enthusiastic about learning new technologies and delivering scalable, efficient solutions.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, rotate: 3 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col items-center justify-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 group"
          >
            <div className="text-5xl mb-3 group-hover:animate-bounce">{skill.icon}</div>
            <p className="text-center font-semibold text-gray-800 group-hover:text-indigo-600 transition">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default About;

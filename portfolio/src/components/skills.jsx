import React from "react";
import { FaJava, FaJs, FaHtml5, FaCss3Alt, FaDocker, FaDatabase, FaReact, FaAndroid, FaGitAlt, FaLinux, FaAws,FaCode  } from "react-icons/fa";
import { SiFlutter, SiMysql, SiFirebase, SiSpring, SiCplusplus, SiSpringboot,SiDart,   } from "react-icons/si";
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
    { name: "Dart", icon: <SiDart className="text-blue-500" /> },
  { name: "C", icon: <FaCode  className="text-blue-500" /> },
    { name: "DSA", icon: <FaDatabase className="text-gray-700" /> },
    { name: "Spring MVC", icon: <SiSpring className="text-green-600" /> },
    { name: "Backend Development", icon: <FaDatabase className="text-gray-700" /> },
    { name: "App Development", icon: <FaAndroid className="text-green-600" /> },
    { name: "AWS", icon: <FaAws className="text-orange-500" /> },
    { name: "Linux", icon: <FaLinux className="text-gray-800" /> },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-red-600" /> },
  ];

  return (
    <div className="flex flex-col min-h-screen px-6 py-10 bg-gradient-to-r from-gray-50 to-gray-100 md:px-20">
      <h2 className="mb-6 text-4xl font-bold text-center text-gray-800 md:text-left">
        Skills
      </h2>
      <p className="max-w-3xl mx-auto mb-12 text-lg text-center text-gray-600 md:text-left">
        I’m a Software Developer with strong problem-solving skills and hands-on experience in Java-based projects. 
        Enthusiastic about learning new technologies and delivering scalable, efficient solutions.
      </p>

      <div className="grid max-w-5xl grid-cols-2 gap-6 mx-auto md:grid-cols-4 lg:grid-cols-5">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, rotate: 3 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col items-center justify-center p-6 transition-transform duration-300 bg-white shadow-lg rounded-2xl hover:shadow-2xl group"
          >
            <div className="mb-3 text-5xl group-hover:animate-bounce">{skill.icon}</div>
            <p className="font-semibold text-center text-gray-800 transition group-hover:text-indigo-600">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default About;

import React from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

export default function Education() {
  return (
    <div className="px-6 py-20 bg-gray-50">
      {/* Education Section */}
      <h2 className="text-4xl font-extrabold mb-12 text-center text-gray-900">
        <FaGraduationCap className="inline-block mr-3 text-indigo-600" />
        Education
      </h2>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <h3 className="text-2xl font-semibold text-gray-900">
            B.Tech - Artificial Intelligence & Data Science
          </h3>
          <p className="text-gray-700 mt-1 font-medium">
            Vishwakarma Institute of Information Technology, Pune, Maharashtra
          </p>
          <p className="text-gray-600 mt-1">CGPA: 8.35 | 2023-2027</p>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <h3 className="text-2xl font-semibold text-gray-900">Class XII</h3>
          <p className="text-gray-700 mt-1 font-medium">
            Santosh Junior College, Nashik, Maharashtra
          </p>
          <p className="text-gray-600 mt-1">Percentage: 79.33 | 2021-2023</p>
        </div>
      </div>

      {/* Experience Section */}
      <h2 className="text-4xl font-extrabold mt-20 mb-12 text-center text-gray-900">
        <FaBriefcase className="inline-block mr-3 text-indigo-600" />
        Experience
      </h2>

      <div className="max-w-4xl mx-auto space-y-10">
        {/* Internship */}
        <div className="relative border-l-2 border-indigo-600 pl-8">
          <div className="absolute -left-4 top-2 bg-indigo-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">
            1
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
            Java Full-Stack Developer – Zidio Development
          </h3>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>Developed backend features using Java & Spring Boot.</li>
            <li>Worked on REST APIs, database integration, and Git version control.</li>
            <li>Gained experience in debugging, testing, and scalable development.</li>
          </ul>
        </div>

        {/* Club Experience */}
        <div className="relative border-l-2 border-indigo-600 pl-8">
          <div className="absolute -left-4 top-2 bg-indigo-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">
            2
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
            Java Developer – Research and Innovators Cell
          </h3>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>Developed Java-based backend applications for club projects.</li>
            <li>Gained hands-on experience with data structures, algorithms, and Java frameworks.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

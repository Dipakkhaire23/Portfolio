import React, { useState } from "react";
import p1 from "../Images/p1.jpg"
import p12 from "../Images/p12.jpg"
import p21 from "../Images/p21.jpg"
import p22 from "../Images/p22.jpg"
import p23 from "../Images/p23.jpg"
import p24 from "../Images/p24.jpg"
import p25 from "../Images/p25.jpg"
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
const projects = [
  {
    title: "Web-Based Vegetable Plant Booking Platform",
    descPoints: [
      "Implemented Firebase for real-time notifications.",
      "Integrated email sender for password reset functionality.",
      "Incorporated Razorpay payment gateway for secure transactions.",
    " Hosted backend on AWS, frontend on Vercel, managed domain through GoDaddy, and used TiDB MySQL-compatible for data storage.",
    "Used Web3Forms for handling contact form submissions"

    ],
    tech: ["React.js", "Spring Boot 3", "MySQL ","JWT","OAuth2",],
    mainImage: p1,
    images: [p1,p12],
    github: "https://github.com/Dipakkhaire23/SakashiNursery",
  },
  {
    title: "Educonnect",
    descPoints: [
      "Built a full-stack web application to enhance collaboration and communication between teachers and students.",
      "Developed classroom system to organize courses and manage students’ classroom and study material.",

      "Implemented features like timetable management, grade tracking, and assignment uploads/submissions.",
      "Enabled role-based access control for secure and customized user experiences"
    ],
    tech: ["React", "Spring Boot", "Spring JPA", "OAuth2", "JWT", "Spring Security", "MySQL"],
    mainImage: p21,
    images: [p21,p22,p23,p24,p25],
    github: "https://github.com/Dipakkhaire23/Educonnect-project",
  },
];



  return (
    <div className="px-6 py-20 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg cursor-pointer"
            onClick={() => setSelectedProject(p)}
          >
            <img
              src={p.mainImage} // main image of project
              alt={p.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">{p.title}</h3>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white rounded-xl p-6 w-11/12 md:w-3/4 max-h-[90vh] overflow-y-auto relative">
      <button
        onClick={() => setSelectedProject(null)}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-2xl font-bold"
      >
        &times;
      </button>

      <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>

      {/* Description as bullet points */}
      <h3 className="font-semibold mb-2">Description:</h3>
      <ul className="list-disc list-inside mb-4 text-gray-600">
        {selectedProject.descPoints.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>

      <h3 className="font-semibold mb-2">Tech Stack:</h3>
      <p className="text-gray-700 mb-4">{selectedProject.tech.join(", ")}</p>

      <h3 className="font-semibold mb-2">Images:</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        {selectedProject.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${selectedProject.title}-${idx}`}
            className="w-full h-32 object-cover rounded-lg"
          />
        ))}
      </div>

      <a
        href={selectedProject.github}
        target="_blank"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        View on GitHub
      </a>
    </div>
  </div>
)}
    </div>
  );
}

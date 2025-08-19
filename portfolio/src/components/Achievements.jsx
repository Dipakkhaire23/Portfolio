import React, { useState } from "react";
import k from "../Images/k.jpg"
import n from "../Images/n.jpg"
import p from "../Images/p.jpg"
import kk1 from "../Images/kk1.jpg"
import kk2 from "../Images/kk2.jpg"
// Sample data
const achievementsData = [
  {
    title: "First Rank in Kho-Kho",
    description: "Secured First Rank in Kho-Kho at VIIT Annual Sports",
    date: "2023",
    icon: "🏅",
    images: [kk1,kk2],
  },
  {
    title: "Nirman Hackathon Top-6",
    description: "Achieved Top-6 position in Nirman Hackathon",
    date: "2023",
    icon: "🏆",
    images: [k, n, p],
  },
];

export default function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  return (
    <div className="px-6 py-20 bg-gray-50">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
        Achievements
      </h2>

      {/* Achievement Cards */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
        {achievementsData.map((achievement, index) => (
          <div
            key={index}
            onClick={() => setSelectedAchievement(achievement)}
            className="relative cursor-pointer bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-transform duration-300 hover:scale-105 overflow-hidden"
          >
            {/* Background Icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-200 text-9xl select-none pointer-events-none">
              {achievement.icon}
            </div>

            <div className="relative z-10 flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-full text-2xl">
                {achievement.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {achievement.title}
                </h3>
                <p className="text-sm text-gray-500">{achievement.date}</p>
              </div>
            </div>
            <p className="relative z-10 text-gray-700">{achievement.description}</p>
          </div>
        ))}
      </div>

      {/* Modal for images */}
      {selectedAchievement && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full p-6 relative">
            <button
              onClick={() => setSelectedAchievement(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedAchievement.title}</h3>
            <div className="flex gap-4 overflow-x-scroll">
              {selectedAchievement.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`achievement-${i}`}
                  className="w-64 h-64 object-cover rounded-lg shadow-md"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

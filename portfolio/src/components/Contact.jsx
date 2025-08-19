import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "f8712f11-8ea5-474c-b1ab-a0b4c9623fa2", // ✅ Your Web3Forms key
        ...formData,
      }),
    });

    const result = await res.json();
    if (result.success) {
      alert("✅ Message Sent Successfully!");
      setFormData({ name: "", email: "", message: "" }); // reset fields
    } else {
      alert("❌ Something went wrong. Try again!");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 py-20 bg-gray-50">
      {/* Left - Contact Form */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4 bg-white shadow-lg p-6 rounded-2xl">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Right - Connect With Me */}
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Connect With Me</h2>
        <p className="text-lg text-gray-600 mb-8">Dipak Khaire</p>

        {/* Animated Social Buttons */}
        <div className="flex gap-6">
          <motion.a
            href="https://www.linkedin.com/in/dipak-khaire-1a4227291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-indigo-600 text-4xl"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/Dipakkhaire23"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-800 text-4xl"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/the_alpha_2316?igsh=dTJoMDh2bWU3NXN0"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-pink-500 text-4xl"
          >
            <FaInstagram />
          </motion.a>
        </div>
      </div>
    </div>
  );
}

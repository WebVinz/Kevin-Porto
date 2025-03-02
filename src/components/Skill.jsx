import React from "react";
import { motion } from "framer-motion";

const SkillsAndExperience = () => {
  const skills = ["React", "Tailwind CSS", "Laravel", "JavaScript", "Git"];
  const experiences = [
    {
      title: "Frontend Developer",
      description: "Membuat website e-commerce dengan React dan Laravel.",
      img: "https://via.placeholder.com/150",
    },
    {
      title: "E-BUMP Project",
      description: "Mengembangkan produk inovasi untuk menghasilkan listrik.",
      img: "https://via.placeholder.com/150",
    },
    {
      title: "Task Management MVP",
      description: "Mengembangkan MVP untuk kebutuhan perusahaan.",
      img: "https://via.placeholder.com/150",
    },
  ];

  // Efek bintang berkelap-kelip
  const Stars = () => {
    return (
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-0 animate-twinkle"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
    );
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#040717] via-[#1B1F3B] to-[#040717] p-8 text-white overflow-hidden">
      {/* Efek Stars */}
      <Stars />

      {/* Efek Nebula */}
      <div className="absolute inset-0 -z-10 bg-gradient-radial from-purple-500/20 via-transparent to-black opacity-50"></div>

      <div className="relative bg-gradient-to-r from-[#2D1B5A] via-[#3A2678] to-[#4B3390] rounded-lg p-14 shadow-lg">
        {/* Keahlian */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">Keahlian</h2>
          <div className="flex justify-center flex-wrap gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pengalaman */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-8">Pengalaman</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                className="bg-white text-black p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
              >
                <img
                  src={experience.img}
                  alt={experience.title}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                <p className="text-gray-600">{experience.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsAndExperience;

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

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="bg-white rounded-lg p-14">
        {/* Keahlian */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} // Animasi aktif setiap kali elemen terlihat
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
                viewport={{ once: false }} // Animasi aktif setiap kali terlihat
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
          viewport={{ once: false }} // Animasi aktif setiap kali elemen terlihat
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-8">Pengalaman</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }} // Animasi aktif setiap kali terlihat
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
                <h3 className="text-xl font-semibold mb-2">
                  {experience.title}
                </h3>
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

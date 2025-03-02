import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ProfileImage from '../assets/Sales_Man_cropped.jpg';

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

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const achievements = [
    {
      title: "Juara 1 Hackathon Nasional",
      description: "Meraih juara pertama dalam kompetisi hackathon tingkat nasional.",
      image: ProfileImage,
    },
    {
      title: "Finalis AI Challenge 2024",
      description: "Menjadi finalis dalam tantangan kecerdasan buatan tahun 2024.",
      image: ProfileImage,
    },
    {
      title: "Ketua Pramuka 2024",
      description: "Memimpin organisasi Pramuka di sekolah selama satu tahun.",
      image: ProfileImage,
    },
  ];

  const routes = ['/pages/Comp1', '/pages/Comp2', '/pages/Comp3'];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? achievements.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === achievements.length - 1 ? 0 : prevIndex + 1));
  };

  const handleCardClick = () => {
    navigate(routes[currentIndex]);
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#040717] overflow-hidden px-4 md:px-8 text-gray-200">
      <Stars />
      <div ref={ref} className="max-w-5xl w-full text-center relative z-10">
        {isInView && (
          <motion.div
            className="relative flex flex-col items-center p-12 bg-[#1E1E2E] shadow-lg rounded-2xl border border-gray-600 cursor-pointer"
            key={currentIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            onClick={handleCardClick}
          >
            <img
              src={achievements[currentIndex].image}
              alt={achievements[currentIndex].title}
              className="w-64 h-64 rounded-full border-4 border-[#BFBFBF] object-cover mb-6"
            />
            <h2 className="text-3xl font-bold">{achievements[currentIndex].title}</h2>
            <p className="text-gray-300 mt-4 text-lg">{achievements[currentIndex].description}</p>
          </motion.div>
        )}

        <div className="flex justify-between w-full mt-8">
          <button onClick={handlePrev} className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 text-xl">←</button>
          <button onClick={handleNext} className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 text-xl">→</button>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
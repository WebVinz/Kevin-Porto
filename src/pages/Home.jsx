import React from 'react';
import { useNavigate } from 'react-router-dom';
import TypingEffect from 'react-typing-effect';
import ProfileImage from '../assets/Sales_Man_cropped.jpg';
import { motion } from 'framer-motion';
import Stars from "../components/stars"; 

const Home = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate('/about');
  };

  // Variants untuk animasi isi konten
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden px-4">
      {/* Tambahkan Stars sebagai background */}
      <Stars />

      {/* Background tambahan */}
      <div className="absolute inset-0 -z-10 bg-gradient-radial from-purple-600/30 via-transparent to-black overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-96 h-96 bg-purple-600 blur-3xl rounded-full opacity-30"></div>
      </div>

      {/* Konten */}
      <motion.div
        className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-center text-white space-y-8 md:space-y-0 md:space-x-8 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={fadeUp}
        viewport={{ once: false, amount: 0.5 }}
      >
        {/* Gambar */}
        <motion.div
          className="flex justify-center md:justify-start w-full md:w-1/2"
          variants={fadeUp}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.img
            src={ProfileImage}
            alt="Profile of Kevin Ivander"
            className="w-96 h-74 sm:w-96 sm:h-74 md:w-96 md:h-96 rounded-full border-4 border-white object-cover "
          />
        </motion.div>

        {/* Teks */}
        <motion.div
          className="text-center md:text-left w-full md:w-1/2"
          variants={fadeUp}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h1 className="text-4xl sm:text-3xl md:text-4xl font-bold mb-2">Kevin Ivander</h1>
          <TypingEffect
            text={['Web Developer', 'Full Stack', 'React & Tailwind Lover']}
            speed={100}
            eraseSpeed={50}
            eraseDelay={2000}
            typingDelay={500}
            className="text-base sm:text-sm md:text-xl mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import TypingEffect from 'react-typing-effect';
import ProfileImage from '../assets/Sales_Man_cropped.jpg';
import { motion } from "motion/react"

const Home = () => {
  const navigate = useNavigate(); // Hook untuk navigasi

  const handleImageClick = () => {
    navigate('/about'); // Ganti dengan path halaman tujuan
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white px-4 relative bg-black">
      <div className="absolute inset-0 bg-gradient-radial from-purple-600/30 via-transparent to-black">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-96 h-96 bg-purple-600 blur-3xl rounded-full opacity-30"></div>
      </div>

      <div className="relative w-full max-w-md p-8 text-white">
        <div className="flex flex-col items-center space-y-8">
          {/* Container untuk gambar dengan efek border blur */}
          <div className="relative p-2 rounded-full ring-0 transition-all duration-300 hover:ring-8 hover:ring-white hover:blur-sm cursor-pointer">
          <motion.img
            src={ProfileImage}
            alt="Profile picture of Kevin Ivander"
            className="h-60 w-60 rounded-full border-4 border-white object-cover"
            onClick={handleImageClick}
            whileHover={{ scale: 1.2 }} 
            whileTap={{ scale: 0.8 }}  
          />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold">Kevin Ivander</h1>
            <TypingEffect
              text={['Web Developer', 'Full Stack', 'React & Tailwind Lover']}
              speed={100}
              eraseSpeed={50}
              eraseDelay={2000}
              typingDelay={500}
              className="text-2xl mt-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

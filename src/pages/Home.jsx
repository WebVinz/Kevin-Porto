import React from 'react';
import { useNavigate } from 'react-router-dom';
import TypingEffect from 'react-typing-effect';
import ProfileImage from '../assets/Sales_Man_cropped.jpg';
import { motion } from 'framer-motion';
import Navbar from "../components/navbar"; 
import Achievements from '../components/Achievements';
import Skill from '../components/Skill';
import Footer from '../components/footer';
import FAQ from '../components/FAQ';

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

const Home = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate('/about');
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <div className="bg-[#040717] text-white min-h-screen flex flex-col">
      <Navbar />
      <div className="relative w-full flex items-center justify-center overflow-hidden px-4 py-20 min-h-screen">
        <Stars />
        <div className="absolute inset-0 -z-10 bg-gradient-radial from-purple-500/20 via-transparent to-black opacity-50"></div>
        <motion.div
          className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          variants={fadeUp}
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div
            className="flex justify-center md:justify-start w-full md:w-1/2"
            variants={fadeUp}
          >
            <motion.img
              src={ProfileImage}
              alt="Profile of Kevin Ivander"
              className="w-96 h-96 rounded-full border-4 border-[#BFBFBF] object-cover"
            />
          </motion.div>
          <motion.div
            className="text-center md:text-left w-full md:w-1/2"
            variants={fadeUp}
          >
            <h1 className="text-4xl font-bold mb-2">Kevin Ivander</h1>
            <TypingEffect
              text={['Web Developer', 'Full Stack', 'React & Tailwind Lover']}
              speed={100}
              eraseSpeed={50}
              eraseDelay={2000}
              typingDelay={500}
              className="text-base text-[#BFBFBF] sm:text-sm md:text-xl mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
      <div className="w-full">
        <Skill />
        <Achievements />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
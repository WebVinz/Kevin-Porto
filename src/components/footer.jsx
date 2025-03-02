import React from 'react';
import { FaInstagram, FaGithub } from 'react-icons/fa';

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

const Footer = () => {
  return (
    <footer className="w-full bg-[#0A0F2C] text-white py-6 text-center mt-10">
      <div className="flex justify-center space-x-6">
        <a href="https://www.instagram.com/evvin_/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 flex items-center space-x-2">
          <FaInstagram size={24} /> <span>@kevin.ivander</span>
        </a>
        <a href="https://github.com/WebVinz" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 flex items-center space-x-2">
          <FaGithub size={24} /> <span>kevinivander</span>
        </a>
      </div>
      <p className="mt-4 text-sm text-gray-400">© 2025 Kevin Ivander. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
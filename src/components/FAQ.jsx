import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const questions = [
    { question: "Apa itu Hackathon?", answer: "Hackathon adalah acara di mana programmer dan pengembang berkumpul untuk menciptakan proyek perangkat lunak dalam waktu terbatas." },
    { question: "Bagaimana cara ikut AI Challenge?", answer: "Untuk ikut AI Challenge, biasanya Anda perlu mendaftar melalui situs web resmi dan mengikuti tahap seleksi." },
    { question: "Apa manfaat menjadi Ketua Pramuka?", answer: "Menjadi Ketua Pramuka melatih keterampilan kepemimpinan, tanggung jawab, dan kerja sama tim." }
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pertanyaan dari ${name}: ${message}`);
    setName('');
    setMessage('');
  };

  return (
    <div className="max-w-3xl mx-auto py-12 text-gray-200">
      <h2 className="text-3xl font-bold text-center mb-6">FAQ</h2>
      <div className="space-y-4">
        {questions.map((item, index) => (
          <div key={index} className="p-4 bg-[#1E1E2E] rounded-xl shadow-md cursor-pointer border border-gray-600">
            <div className="flex justify-between items-center" onClick={() => toggleAnswer(index)}>
              <h3 className="text-xl font-semibold">{item.question}</h3>
              <span>{openIndex === index ? '▲' : '▼'}</span>
            </div>
            {openIndex === index && (
              <motion.p
                className="mt-2 text-gray-300"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                {item.answer}
              </motion.p>
            )}
          </div>
        ))}
      </div>
      <div className="mt-8 p-6 bg-[#1E1E2E] rounded-xl shadow-md border border-gray-600">
        <h3 className="text-2xl font-bold text-center mb-4">Tanyakan Sesuatu</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nama Anda"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-500 focus:outline-none focus:border-gray-300"
            required
          />
          <textarea
            placeholder="Pesan Anda"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-500 focus:outline-none focus:border-gray-300"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 rounded-md text-white font-bold hover:bg-blue-500"
          >
            Kirim Pertanyaan
          </button>
        </form>
      </div>
    </div>
  );
};

export default FAQ;
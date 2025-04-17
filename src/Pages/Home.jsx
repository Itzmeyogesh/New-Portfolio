import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/Swati.jpg'; // Make sure this path is correct

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center text-white bg-vibrant px-6 py-16">
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-yellow-300">Swati Gadekar</span>
        </h1>
        <p className="text-lg md:text-xl mb-6">
          I'm a passionate <span className="text-pink-300 font-semibold">Data Analyst</span> who transforms raw data into meaningful insights.
        </p>
        <a
          href="#projects"
          className="inline-block bg-yellow-300 text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition"
        >
          View Projects
        </a>
      </motion.div>

      <motion.div
        className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={profileImg}
          alt="Swati Gadekar"
          className="rounded-full w-64 h-64 object-cover border-4 border-white shadow-xl"
        />
      </motion.div>
    </section>
  );
};

export default Home;

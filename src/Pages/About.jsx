// src/pages/About.jsx
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="p-6 max-w-4xl mx-auto text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      <p className="mb-4 leading-relaxed">
        I'm Swati Gadekar, a driven Data Analyst with internship experience at Code Spyder Technologies. 
        Proficient in Python, SQL, Power BI, and data visualization, I'm passionate about transforming complex 
        data into actionable insights using feature engineering and predictive modeling.
      </p>
      <p className="mb-4 leading-relaxed">
        I’ve worked on real-world projects like house price prediction, wine quality prediction, and Amazon 
        sentiment analysis. Currently pursuing my MCA, I’m enthusiastic about leveraging data for impactful decisions.
      </p>

      {/* Resume Button */}
      <a
<<<<<<< HEAD
        href="/Swati_Gadekar_Resume.pdf"
=======
        href="/public/Swati Gadekar Cv (6).pdf"
>>>>>>> 6b3a961 (Initial commit with updated React + Vite + Tailwind portfolio)
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-indigo-100 transition duration-300"
      >
        View Resume
      </a>
    </motion.div>
  );
};

export default About;

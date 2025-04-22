import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative"
    >
      {/* Fancy Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-blur-3xl opacity-50 z-0" style={{ backgroundImage: "url('/path/to/your-image.jpg')" }}></div>

      <div className="relative z-10 container mx-auto text-white">
        {/* Header */}
        <motion.h2
          className="text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg text-center max-w-3xl mx-auto mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          I am Swati Gadekar, a passionate data analyst with a knack for transforming complex data into actionable insights. 
          I have experience in Python, SQL, Power BI, and other data science tools. With a keen eye for problem-solving, 
          I leverage machine learning techniques, data visualization, and business intelligence tools to drive decision-making 
          and improve processes. Always eager to learn new skills and embrace challenges in the data space.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Skills and Proficiency Section */}
          <motion.div
            className="bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-xl hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span className="text-lg">Python</span>
                <span className="text-sm text-gray-300">90%</span>
              </li>
              <li className="flex justify-between">
                <span className="text-lg">SQL</span>
                <span className="text-sm text-gray-300">85%</span>
              </li>
              <li className="flex justify-between">
                <span className="text-lg">Power BI</span>
                <span className="text-sm text-gray-300">80%</span>
              </li>
              <li className="flex justify-between">
                <span className="text-lg">Data Visualization</span>
                <span className="text-sm text-gray-300">85%</span>
              </li>
              <li className="flex justify-between">
                <span className="text-lg">Machine Learning</span>
                <span className="text-sm text-gray-300">70%</span>
              </li>
            </ul>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            className="bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-xl hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Achievements</h3>
            <ul className="space-y-4">
              <li className="text-lg">Completed Data Analytics internship at Code Spyder Technologies.</li>
              <li className="text-lg">Developed a machine learning model for house price prediction with 95% accuracy.</li>
              <li className="text-lg">Created Power BI dashboards for HR analytics, improving decision-making.</li>
              <li className="text-lg">Successfully deployed a sentiment analysis model on Amazon reviews.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

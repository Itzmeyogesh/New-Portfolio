import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Database, BarChart3 } from "lucide-react";

const skillsData = {
  Frontend: [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
  ],
  "Data Tools": [
    { name: "Python", level: 90 },
    { name: "SQL", level: 85 },
    { name: "Pandas", level: 80 },
    { name: "Scikit-learn", level: 75 },
  ],
  BI: [
    { name: "Power BI", level: 85 },
    { name: "Excel", level: 80 },
    { name: "Dashboard Design", level: 75 },
  ],
};

const categories = {
  Frontend: <Code />,
  "Data Tools": <Database />,
  BI: <BarChart3 />,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  return (
    <section id="skills" className="min-h-screen relative p-8 bg-gradient-to-tr from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">
      <h2 className="text-4xl font-bold text-center mb-8">Skills & Proficiency</h2>

      <div className="flex justify-center gap-6 mb-10">
        {Object.keys(categories).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              activeCategory === cat ? "bg-white text-gray-900 font-semibold" : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {categories[cat]}
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {skillsData[activeCategory].map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white bg-opacity-10 p-4 rounded-xl backdrop-blur-md shadow-md"
          >
            <div className="flex justify-between mb-1 text-sm font-medium">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-600 rounded-full h-3">
              <div
                className="bg-green-400 h-3 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Background animation (optional) */}
      <motion.div
        className="absolute w-96 h-96 bg-pink-500 bg-opacity-20 rounded-full top-0 left-0 blur-3xl"
        animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />
    </section>
  );
}

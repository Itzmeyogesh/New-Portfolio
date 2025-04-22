import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Wine Quality Prediction",
    description:
      "Used machine learning techniques to predict the quality of wine based on physicochemical features.",
    tech: ["Python", "Scikit-learn", "Pandas"],
    github: "https://github.com/SWATIG01/WineQualityPrediction",
    live: "",
  },
  {
    title: "Amazon Review Sentiment Analysis",
    description:
      "Performed NLP to analyze customer sentiments and determine the overall tone of Amazon product reviews.",
    tech: ["Python", "NLTK", "Scikit-learn"],
    github: "https://github.com/SWATIG01/Amazon-Sentiment-Analysis",
    live: "",
  },
  {
    title: "HR Analytics Dashboard",
    description:
      "Created an interactive dashboard in Power BI to visualize key HR metrics for better decision-making.",
    tech: ["Power BI", "Excel"],
    github: "",
    live: "",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#1e3c72] text-white px-6 py-16 relative"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:scale-[1.03] transition-all"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-200 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-white bg-opacity-20 text-xs px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition"
                >
                  <Github size={20} />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition"
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Background flair */}
      <motion.div
        className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-500 rounded-full blur-3xl opacity-20"
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ repeat: Infinity, duration: 20 }}
      />
      <motion.div
        className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-cyan-400 rounded-full blur-3xl opacity-20"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ repeat: Infinity, duration: 20 }}
      />
    </section>
  );
}

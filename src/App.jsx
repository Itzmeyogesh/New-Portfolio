import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Section from "./pages/Section";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <main className="scroll-smooth">
        {/* React Router for routing between sections */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Static Sections */}
        <Section id="home" title="Home">
          <Home />
        </Section>
        <Section id="about" title="About">
          <About />
        </Section>
        <Section id="skills" title="Skills">
          <Skills />
        </Section>
        <Section id="projects" title="Projects">
          <Projects />
        </Section>
        <Section id="contact" title="Contact">
          <Contact />
        </Section>
      </main>
    </div>
  );
}

export default App;

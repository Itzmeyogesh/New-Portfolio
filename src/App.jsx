// App.jsx
import { Routes, Route } from 'react-router-dom';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Experience from './Pages/Experience';
import Skills from './Pages/Skills';

function App() {
  return (
    <div className="bg-vibrant min-h-screen">
  
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Skills" element={<Skills />} />
      </Routes>
      </div>
    
  );
}

export default App;

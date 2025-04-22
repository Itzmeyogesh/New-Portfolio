import { useEffect, useState } from "react";
import { Home, User, Wrench, Folder, Phone, Menu, X } from "lucide-react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // Tooltip styling

const sections = [
  { id: "home", label: "Home", icon: <Home size={20} /> },
  { id: "about", label: "About", icon: <User size={20} /> },
  { id: "skills", label: "Skills", icon: <Wrench size={20} /> },
  { id: "projects", label: "Projects", icon: <Folder size={20} /> },
  { id: "contact", label: "Contact", icon: <Phone size={20} /> },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el && scrollY >= el.offsetTop && scrollY < el.offsetTop + el.offsetHeight) {
          setActive(sec.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinks = ({ className }) => (
    <>
      {sections.map((sec) => (
        <Tippy content={sec.label} placement="right" key={sec.id}>
          <a
            href={`#${sec.id}`}
            className={`p-3 rounded-full transition-all duration-300 flex items-center justify-center ${
              active === sec.id
                ? "bg-blue-500 text-white scale-110 shadow-lg"
                : "text-gray-300 hover:text-white hover:scale-105"
            } ${className}`}
            onClick={() => setIsOpen(false)}
          >
            {sec.icon}
          </a>
        </Tippy>
      ))}
    </>
  );

  return (
    <>
      {/* Mobile Toggle */}
      <div className="md:hidden fixed top-6 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white p-2 rounded-full bg-opacity-50 backdrop-blur-lg"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Vertical Navbar */}
      <nav
        className={`fixed top-1/2 -translate-y-1/2 left-4 z-40 transition-all duration-300 ${
          isOpen ? "w-48 p-4" : "w-14 p-1"
        } bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg flex flex-col gap-4 md:w-14 md:p-2`}
      >
        <NavLinks />
      </nav>
    </>
  );
}

import { Routes, Route } from "react-router-dom";
import StarfieldBackground from "./components/StarfieldBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div
      style={{
        margin: 0,
        fontFamily: "'Poppins', 'Segoe UI', sans-serif",
        background:
          "radial-gradient(ellipse at top, #1e1f3a 0%, #0c0d1a 60%)",
        color: "#e4e8ff",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #0c0d1a; }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        ::selection {
          background: rgba(139, 165, 255, 0.3);
          color: #fff;
        }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0c0d1a; }
        ::-webkit-scrollbar-thumb {
          background: rgba(139, 165, 255, 0.3);
          border-radius: 3px;
        }
      `}</style>

      <StarfieldBackground />
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
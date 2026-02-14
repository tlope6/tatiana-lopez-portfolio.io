import Navbar from "./src/components/navbar";
import Hero from "./src/components/hero"
import Projects from "./src/data/projects";

export default function App() {
    return (
        <div 
            style={{
               fontFamily: "'Poppins', 'Segoe UI', sans-serif",
                background: "radial-gradient(ellipse at top, #1e1f3a 0%, #0c0d1a 60%)",
                color: "#e4e8ff",
                minHeight: "100vh",
                overflowX: "hidden",
            }}
        >
            {/* Global keyframe animation */}
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

            ::-webkit-scrollbar {
            width: 6px;
            }
            ::-webkit-scrollbar-track {
            background: #0c0d1a;
            }
            ::-webkit-scrollbar-thumb {
            background: rgba(139, 165, 255, 0.3);
            border-radius: 3px;
            }
        `}</style>

        <StarfieldBackground />
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
        </div>
    );
    
}
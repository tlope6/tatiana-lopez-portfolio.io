import { useState, useEffect } from "react";

export default function Hero () {
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        const t = setTimeout(() => setLoaded(true), 100);
        return () => clearTimeout(t);
    }, []);

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                padding: "0 20px",
                position: "relative",
                zIndex: 1,
                
            }}
        >

            {/* nebula glow behind name */}
            <div 
                style={{
                    position: "absolute",
                    width: 500,
                    height: 500,
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(120,100,200,0.15) 0%, rgba(80,120,220,0.08) 40%, transparent 70%)",
                    filter: "blur(60px)",
                    pointerEvents: "none",
                }}
            />

            <h1
                style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 700,
                background: "linear-gradient(135deg, #c0d9ff, #d8b4fe, #93c5fd)",
                backgroundSize: "200% 200%",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "gradientShift 6s ease infinite",
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(40px)",
                transition: "opacity 1.2s ease, transform 1.2s ease",
                margin: "0 0 8px",
                letterSpacing: "-1px",
                }}
            >
                Tatiana Lopez
            </h1>


            <p
                style={{
                fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
                color: "#b4bfea",
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(30px)",
                transition: "opacity 1.5s ease 0.4s, transform 1.5s ease 0.4s",
                fontWeight: 300,
                letterSpacing: "0.5px",
                }}
            >
                Undergrad CS Major · Developer · Creative Thinker
            </p>

            {/* Scroll indicator */}
            <div
                style={{
                position: "absolute",
                bottom: 40,
                opacity: loaded ? 0.5 : 0,
                transition: "opacity 2s ease 1.5s",
                animation: "float 3s ease-in-out infinite",
                }}
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="None"
                    stroke="#b4bfea"
                    strokeWidth="2"
                >
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
                </svg>
            </div>
        </div>      
    );


}

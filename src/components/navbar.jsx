
import { useState, useEffect, useRef, useCallback } from "react";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect (() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            style={{
                position: "fixed",
                top: 0,
                width: "100%",
                padding: "18px 0",
                display: "flex",
                justifyContent: "center",
                gap: 40,
                zIndex: 100,
                background: scrolled
                ? "rgba(10, 10, 25, 0.75)"
                : "rgba(15, 15, 30, 0.3)",
                backdropFilter: "blur(12px)",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                transition: "background 0.4s ease",
            }}
        > 
            {NAV_LINKS.map((link) => (
                <a
                key={link.label}
                href={link.href}
                style={{
                    color: "#d5d9ff",
                    textDecoration: "none",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    fontSize: "0.95rem",
                    transition: "0.3s",
                }}
                onMouseEnter={(e) => {
                    e.target.style.color = "#a8c6ff";
                    e.target.style.textShadow = "0 0 18px rgba(168,198,255,0.6)";
                }}
                onMouseLeave={(e) => {
                    e.target.style.color = "#d5d9ff";
                    e.target.style.textShadow = "none";
                }}
                >
                    {link.label}
                </a>
            ))}
        </nav>
            
    );

    
}
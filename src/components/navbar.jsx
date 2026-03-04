import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/skills";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = ["contact", "about", "skills", "projects"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActive(id);
          return;
        }
      }
      setActive("");
    };
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
      {NAV_LINKS.map((link) => {
        const sectionId = link.href.replace("#", "");
        const isActive = active === sectionId;
        return (
          <a
            key={link.label}
            href={link.href}
            style={{
              color: isActive ? "#a8c6ff" : "#d5d9ff",
              textDecoration: "none",
              fontWeight: 600,
              letterSpacing: "0.5px",
              fontSize: "0.95rem",
              transition: "all 0.3s ease",
              textShadow: isActive
                ? "0 0 18px rgba(168,198,255,0.6)"
                : "none",
              borderBottom: isActive
                ? "2px solid rgba(168,198,255,0.5)"
                : "2px solid transparent",
              paddingBottom: 4,
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.target.style.color = "#a8c6ff";
                e.target.style.textShadow = "0 0 18px rgba(168,198,255,0.6)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.target.style.color = "#d5d9ff";
                e.target.style.textShadow = "none";
              }
            }}
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );
}
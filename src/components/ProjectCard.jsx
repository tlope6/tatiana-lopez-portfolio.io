import { useState, useEffect, useRef, useCallback } from "react";


function ProjectCard({ project, delay}) {
    const [ref, invisible] = useRevealOnScroll(0.15);
    const [hovered, setHovered] = useState(false);

    return (
        <div
        ref={ref}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
            background: hovered
            ? "rgba(255,255,255,0.1)"
            : "rgba(255,255,255,0.05)",
            padding: 28,
            borderRadius: 20,
            border: hovered
            ? "1px solid rgba(143,165,255,0.5)"
            : "1px solid rgba(255,255,255,0.1)",
            boxShadow: hovered
            ? "0 8px 40px rgba(108,123,255,0.2), inset 0 1px 0 rgba(255,255,255,0.1)"
            : "0 4px 20px rgba(0,0,0,0.3)",
            transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
            opacity: isVisible ? 1 : 0,
            transform: isVisible
            ? hovered
                ? "translateY(-8px)"
                : "translateY(0)"
            : "translateY(50px)",
            transitionDelay: isVisible ? `${delay * 0.15}s` : "0s",
            backdropFilter: "blur(10px)",
            display: "flex",
            flexDirection: "column",
            gap: 12,
        }}
        >
        <h3
            style={{
            margin: 0,
            fontSize: "1.25rem",
            color: "#dce1ff",
            textShadow: "0 0 8px rgba(138,184,255,0.3)",
            }}
        >
            {project.title}
        </h3>

        {/* Tags */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {project.tags.map((tag) => (
            <span
                key={tag}
                style={{
                fontSize: "0.7rem",
                padding: "3px 10px",
                borderRadius: 20,
                background: "rgba(139,165,255,0.12)",
                border: "1px solid rgba(139,165,255,0.2)",
                color: "#a8bcff",
                fontWeight: 600,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                }}
            >
                {tag}
            </span>
            ))}
        </div>

        <p
            style={{
            color: "#b0b8d9",
            lineHeight: 1.65,
            fontSize: "0.95rem",
            margin: 0,
            flex: 1,
            }}
        >
            {project.description}
        </p>

        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
            color: "#9bb5ff",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "0.9rem",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            transition: "0.3s",
            marginTop: 4,
            }}
            onMouseEnter={(e) => {
            e.target.style.color = "#c4d6ff";
            e.target.style.gap = "10px";
            }}
            onMouseLeave={(e) => {
            e.target.style.color = "#9bb5ff";
            e.target.style.gap = "6px";
            }}
        >
            View on GitHub <span style={{ transition: "0.3s" }}>→</span>
        </a>
        </div>
    );

}
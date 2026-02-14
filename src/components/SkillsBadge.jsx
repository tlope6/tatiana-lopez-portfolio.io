import { useEffect, useRef, useState, useCallback } from "react";

function SkillBadge({ name, delay }) {
  const [ref, isVisible] = useRevealOnScroll(0.1);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "12px 24px",
        borderRadius: 30,
        background: hovered
          ? "rgba(180,200,255,0.18)"
          : "rgba(255,255,255,0.06)",
        border: hovered
          ? "1px solid rgba(168,198,255,0.4)"
          : "1px solid rgba(255,255,255,0.1)",
        color: "#d7ddff",
        fontWeight: 600,
        fontSize: "0.9rem",
        transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? hovered
            ? "translateY(-4px) scale(1.05)"
            : "translateY(0)"
          : "translateY(30px)",
        transitionDelay: isVisible ? `${delay * 0.06}s` : "0s",
        boxShadow: hovered ? "0 4px 20px rgba(168,198,255,0.15)" : "none",
        cursor: "default",
        letterSpacing: "0.3px",
      }}
    >
      {name}
    </div>
  );
}

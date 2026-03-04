import { useState } from "react";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { SKILLS } from "../data/skills";

const COLORS = [
  "#7c8aff", "#ff8a9e", "#8affc1", "#ffd68a", "#c78aff",
  "#8ad8ff", "#ff8ad8", "#8affea", "#ffb38a", "#a8ff8a", "#8a9eff",
];

function SkillBar({ name, level, delay, color }) {
  const [ref, isVisible] = useRevealOnScroll(0.1);

  return (
    <div
      ref={ref}
      style={{
        marginBottom: 16,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `all 0.6s ease ${delay * 0.08}s`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 6,
        }}
      >
        <span
          style={{ color: "#c5cce6", fontSize: "0.9rem", fontWeight: 600 }}
        >
          {name}
        </span>
        <span style={{ color: "#6e7494", fontSize: "0.8rem" }}>
          {level}%
        </span>
      </div>
      <div
        style={{
          height: 6,
          borderRadius: 3,
          background: "rgba(255,255,255,0.06)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            borderRadius: 3,
            width: isVisible ? `${level}%` : "0%",
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
            transition: `width 1.2s cubic-bezier(0.23, 1, 0.32, 1) ${delay * 0.08 + 0.3}s`,
            boxShadow: `0 0 10px ${color}40`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, isVisible] = useRevealOnScroll(0.1);

  return (
    <section
      id="skills"
      style={{
        padding: "100px 20px",
        maxWidth: 700,
        margin: "auto",
        position: "relative",
        zIndex: 1,
      }}
    >
      <h2
        ref={ref}
        style={{
          textAlign: "center",
          fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
          marginBottom: 50,
          background: "linear-gradient(135deg, #b5c8ff, #d8b4fe)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease",
          fontWeight: 700,
        }}
      >
        Skills
      </h2>

      {SKILLS.map((skill, i) => (
        <SkillBar
          key={skill.name}
          name={skill.name}
          level={skill.level}
          delay={i}
          color={COLORS[i % COLORS.length]}
        />
      ))}
    </section>
  );
}
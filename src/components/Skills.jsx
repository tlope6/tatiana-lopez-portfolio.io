import { useState, useRef, useEffect, useCallback } from "react";

function Skills() {
  const [ref, isVisible] = useRevealOnScroll(0.1);

  return (
    <section id="skills" style={{ padding: "80px 20px", maxWidth: 1100, margin: "auto", position: "relative", zIndex: 1 }}>
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
        }}
      >
        Skills
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 14,
        }}
      >
        {SKILLS.map((skill, i) => (
          <SkillBadge key={skill} name={skill} delay={i} />
        ))}
      </div>
    </section>
  );
}

import { useState, useEffect, useRef, useCallback } from "react";

function About() {
  const [ref, isVisible] = useRevealOnScroll(0.15);

  return (
    <section id="about" style={{ padding: "80px 20px", maxWidth: 900, margin: "auto", position: "relative", zIndex: 1 }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
          marginBottom: 50,
          background: "linear-gradient(135deg, #b5c8ff, #d8b4fe)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        About Me
      </h2>
      <div
        ref={ref}
        style={{
          background: "rgba(255,255,255,0.05)",
          padding: "32px 36px",
          borderRadius: 20,
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(10px)",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(40px)",
          transition: "all 1s ease",
          boxShadow: "0 4px 30px rgba(0,0,0,0.2)",
        }}
      >
        <p
          style={{
            color: "#c5cce6",
            lineHeight: 1.8,
            fontSize: "1.05rem",
            margin: "0 0 16px",
          }}
        >
          As a CS major, I love exploring different applications of technology
          and I'm passionate about building systems that solve real-world
          problems. From efficient software to intuitive user experiences, I
          enjoy turning complex ideas into clean, practical solutions. Whether
          it's programming, debugging, or exploring new technologies, I thrive
          on the challenge that comes with solving technical problems.
        </p>
        <p
          style={{
            color: "#a8b2d4",
            lineHeight: 1.8,
            fontSize: "1.05rem",
            margin: 0,
            fontStyle: "italic",
          }}
        >
          Currently exploring front-end development and data science.
        </p>
      </div>
    </section>
  );
}
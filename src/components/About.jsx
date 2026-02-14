import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import githubpic from "../assets/githubpic.png"

// For now, use a placeholder:

export default function About() {
  const [ref, isVisible] = useRevealOnScroll(0.15);

  return (
    <section
      style={{
        padding: "120px 20px 80px",
        maxWidth: 900,
        margin: "auto",
        position: "relative",
        zIndex: 1,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
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
          display: "flex",
          gap: 40,
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
          background: "rgba(255,255,255,0.05)",
          padding: "40px",
          borderRadius: 24,
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 30px rgba(0,0,0,0.2)",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(40px)",
          transition: "all 1s ease",
        }}
      >
        {/* Headshot */}
        <div
          style={{
            width: 180,
            height: 180,
            borderRadius: "50%",
            overflow: "hidden",
            flexShrink: 0,
            border: "3px solid rgba(168, 198, 255, 0.25)",
            boxShadow:
              "0 0 30px rgba(139, 165, 255, 0.15), 0 0 60px rgba(139, 165, 255, 0.08)",
          }}
        >
          <img
            src={githubpic}
            alt="Tatiana Lopez"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        {/* Bio text */}
        <div style={{ flex: 1, minWidth: 280 }}>
          <p
            style={{
              color: "#c5cce6",
              lineHeight: 1.8,
              fontSize: "1.05rem",
              margin: "0 0 16px",
            }}
          >
            As a CS major, I love exploring different applications of
            technology and I'm passionate about building systems that solve
            real-world problems. From efficient software to intuitive user
            experiences, I enjoy turning complex ideas into clean, practical
            solutions. Whether it's programming, debugging, or exploring new
            technologies, I thrive on the challenge that comes with solving
            technical problems.
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
            Currently exploring full-stack and data science.
          </p>
        </div>
      </div>
    </section>
  );
}
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../data/projects";

export default function Projects() {
  const [ref, isVisible] = useRevealOnScroll(0.1);

  return (
    <section
      style={{
        padding: "120px 20px 80px",
        maxWidth: 1100,
        margin: "auto",
        position: "relative",
        zIndex: 1,
        minHeight: "100vh",
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
        }}
      >
        Projects
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 25,
        }}
      >
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} delay={i} />
        ))}
      </div>
    </section>
  );
}
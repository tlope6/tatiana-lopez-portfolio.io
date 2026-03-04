import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import ProjectShowcase from "./ProjectShowCase";
import { PROJECTS } from "../data/projects";

export default function Projects() {
  const [ref, isVisible] = useRevealOnScroll(0.05);

  return (
    <section
      id="projects"
      style={{
        padding: "100px 20px 40px",
        maxWidth: 1100,
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
          marginBottom: 20,
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
        Projects
      </h2>
      <p
        style={{
          textAlign: "center",
          color: "#6e7494",
          fontSize: "0.95rem",
          marginBottom: 50,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 1s ease 0.3s",
        }}
      >
        A selection of things I've built
      </p>

      {PROJECTS.map((project, i) => (
        <ProjectShowcase
          key={project.id}
          project={project}
          index={i}
          total={PROJECTS.length}
        />
      ))}
    </section>
  );
}
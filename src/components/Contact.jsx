import { useState } from "react";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";


export default function Contact() {
    const [ref, isVisible] = useRevealOnScroll(0.15);

    const links = [
        {label : "Email", href: "mailto:Tatianamlopez27@gmail.com" },
        {label : "Github", href:"https://github.com/tlope6"},
        {label : "LinkedIn", href:"http://www.linkedin.com/in/tatiana-lopez-59929b234",
        },

    ];

    return (
        <section 
            id="contact"
            style={{
                padding: "80px 20px 120px",
                maxWidth: 1100,
                margin: "auto",
                textAlign: "center",
                position: "relative",
                zIndex: 1,
            }}
        >
            <h2 
                style={{
                    fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
                    marginBottom: 40,
                    background: "linear-gradient(135deg, #b5c8ff, #d8b4fe)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                Contact
            </h2>
            <div 
                ref={ref}
                style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: "all 1s ease",
                display: "flex",
                justifyContent: "center",
                gap: 32,
                flexWrap: "wrap",
                }}
            >
                {links.map((link) => (
                <ContactLink key={link.label} {...link} />
                ))}
            </div>
        </section>
    );

}

function ContactLink({ label, href }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: hovered ? "#c4d6ff" : "#a7c4ff",
        fontSize: "1.2rem",
        textDecoration: "none",
        fontWeight: 600,
        transition: "all 0.3s ease",
        textShadow: hovered ? "0 0 20px rgba(168,198,255,0.5)" : "none",
        padding: "10px 24px",
        borderRadius: 12,
        background: hovered ? "rgba(255,255,255,0.06)" : "transparent",
        border: hovered
          ? "1px solid rgba(168,198,255,0.2)"
          : "1px solid transparent",
      }}
    >
      {label}
    </a>
  );
}
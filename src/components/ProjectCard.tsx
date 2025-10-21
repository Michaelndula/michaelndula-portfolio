interface CardProps {
  title: string;
  role: string;
  description: string;
  tech: string[];
}

export function ProjectCard({ title, role, description, tech }: CardProps) {
  return (
    <div className="project-card">
      <div>
        <h3 className="card-role">{role}</h3>
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
      <div className="card-tech">
        {tech.map((tag) => (
          <span key={tag} className="tech-tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

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
        <h3 className="project-card__role">{role}</h3>
        <h2 className="project-card__title">{title}</h2>
        <p className="project-card__description">{description}</p>
      </div>

      <div className="project-card__tech">
        <h4>Key Technologies:</h4>
        <div className="project-card__tags">
          {tech.map((tag) => (
            <span key={tag} className="project-card__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
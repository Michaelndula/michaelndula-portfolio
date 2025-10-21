import { type Project } from './ProjectModal';

interface CardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: CardProps) {
  return (
    <div className="project-card" onClick={onClick}>
      <div>
        <h3 className="card-role">{project.role}</h3>
        <h2 className="card-title">{project.title}</h2>
        <p className="card-description">{project.description}</p>
      </div>
      <div className="card-tech">
        {project.tech.map((tag) => (
          <span key={tag} className="tech-tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}


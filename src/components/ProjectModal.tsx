import { useEffect } from 'react';

export interface Project {
  title: string;
  role: string;
  description: string;
  tech: string[];
  tags: string[];
  details: string[];
}

interface ModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ModalProps) {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close project details">
          &times;
        </button>
        <h3 className="card-role">{project.role}</h3>
        <h2 className="modal-title">{project.title}</h2>
        <div className="card-tech">
          {project.tech.map((tag) => (
            <span key={tag} className="tech-tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="modal-body">
            <h4>Key Responsibilities & Achievements:</h4>
            <ul>
                {project.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  );
}

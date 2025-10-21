import { useState } from 'react';
import { ProjectCard } from './ProjectCard';

// Add a 'tags' array to each project for filtering
const projectData = [
  {
    title: 'LexKen AI - Legal AI Platform',
    role: 'Lead Developer & AI Architect',
    description: 'Pioneering legal AI platform leveraging RAG and Vector Databases to accelerate case handling for Kenyan law firms.',
    tech: ['Django', 'React', 'Agentic AI', 'RAG', 'Docker', 'AWS'],
    tags: ['ai', 'python', 'react'],
  },
  {
    title: 'South Sudan National EMR',
    role: 'Lead Developer',
    description: 'Led end-to-end development of the national Electronic Medical Records system on OpenMRS 3.x to enhance HIV care.',
    tech: ['OpenMRS', 'Java', 'Spring', 'REST APIs', 'React'],
    tags: ['java', 'react'],
  },
  {
    title: 'AI-Powered Patient Education',
    role: 'Team Lead & AI Specialist',
    description: 'Architected an AI service integrating GPT-3.5 with OpenMRS to transform clinical data into clear SMS summaries for patients.',
    tech: ['AI', 'LLM', 'Docker', 'Python', 'HL7 FHIR', 'SMS API'],
    tags: ['ai', 'python'],
  },
  {
    title: 'Loan Management Platform',
    role: 'Full-Stack Developer',
    description: "Engineered a microfinance system with M-Pesa API for automated loan disbursement and Africa's Talking for SMS notifications.",
    tech: ['React Native', 'Java', 'Spring', 'M-Pesa API'],
    tags: ['java', 'mobile'],
  },
];

const filters = ['All', 'AI', 'Java', 'React', 'Python'];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projectData
    : projectData.filter(p => p.tags.includes(activeFilter.toLowerCase()));

  return (
    <section id="projects" className="section container fade-in-section">
      <h2 className="projects-title">Projects</h2>
      <div className="project-filters">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

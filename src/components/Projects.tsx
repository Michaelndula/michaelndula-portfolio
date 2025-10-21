import { useState, useEffect } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectModal, type Project } from './ProjectModal';

const projectData: Project[] = [
  {
    title: 'LexKen AI - Legal AI Platform',
    role: 'Lead Developer & AI Architect',
    description: 'Pioneering legal AI platform leveraging RAG and Vector Databases to accelerate case handling for Kenyan law firms.',
    tech: ['Django', 'React', 'Agentic AI', 'RAG', 'Docker', 'AWS'],
    tags: ['ai', 'python', 'react'],
    details: [
        'Engineered an advanced Agentic AI system with Retrieval-Augmented Generation (RAG).',
        'Developed sophisticated prompt engineering strategies to optimize LLM performance.',
        'Built the full-stack application using Django for the backend and React for the UI.',
        'Containerized the platform using Docker and deployed on AWS EC2 t3 instances.',
    ]
  },
  {
    title: 'South Sudan National EMR',
    role: 'Lead Developer',
    description: 'Led end-to-end development of the national Electronic Medical Records system on OpenMRS 3.x to enhance HIV care.',
    tech: ['OpenMRS', 'Java', 'Spring', 'REST APIs', 'React'],
    tags: ['java', 'react'],
    details: [
        'Led the full development lifecycle for the South Sudan e-Register system.',
        'Architected core backend functionality, including RESTful web services and APIs.',
        'Designed and built a comprehensive ART Dashboard for real-time data visualizations.',
        'Optimized backend queries, drastically reducing loading times in low-bandwidth areas.',
        'Developed a critical notifications module to alert healthcare workers of patient updates.'
    ]
  },
  {
    title: 'AI-Powered Patient Education',
    role: 'Team Lead & AI Specialist',
    description: 'Architected an AI service integrating GPT-3.5 with OpenMRS to transform clinical data into clear SMS summaries for patients.',
    tech: ['AI', 'LLM', 'Docker', 'Python', 'HL7 FHIR', 'SMS API'],
    tags: ['ai', 'python'],
    details: [
        'Architected a novel AI-powered patient education service by integrating a GPT-3.5 LLM.',
        'Engineered a decoupled, containerized (Docker) Python microservice.',
        'Developed sophisticated prompt engineering techniques to transform FHIR data.',
        'Delivered AI-generated patient education materials via SMS to improve treatment adherence.'
    ]
  },
  {
    title: 'Loan Management Platform',
    role: 'Full-Stack Developer',
    description: "Engineered a microfinance system with M-Pesa API for automated loan disbursement and Africa's Talking for SMS notifications.",
    tech: ['React Native', 'Java', 'Spring', 'M-Pesa API'],
    tags: ['java', 'mobile'],
    details: [
        'Engineered core backend logic for a microfinance loan management system.',
        'Integrated M-Pesa Daraja API for automated loan disbursement and repayments.',
        'Implemented an SMS notification system using the Africa\'s Talking API.',
        'Built a cross-platform compatible mobile application for loan applications and tracking.'
    ]
  },
  {
    title: 'Rentals Management System',
    role: 'Full-Stack Developer',
    description: 'Built a full-stack property management system to streamline listings, tenant communications, and rent tracking for landlords.',
    tech: ['Python', 'Django', 'React', 'MySQL'],
    tags: ['python', 'react'],
    details: [
        'Architected and built a full-stack system now used in over 50 units in multiple counties.',
        'Successfully deployed the system across apartments in Nairobi, Eldoret, and Kakamega.',
        'Designed a comprehensive tenant dashboard for managing bills and lease agreements.',
        'Streamlined property listings, tenant communications, and rent payment tracking.'
    ]
  },
  {
    title: 'Botswana EMR Reporting Module',
    role: 'Backend Engineer',
    description: 'Architected and delivered advanced, indicator-based reporting modules to enable data-driven public health decisions by the MOH.',
    tech: ['Java', 'Spring', 'MySQL', 'Hibernate', 'REST APIs'],
    tags: ['java'],
    details: [
        'Architected and implemented advanced reporting modules for the Botswana EMR system.',
        'Delivered indicator-based reports providing critical insights into disease prevalence.',
        'Enabled the Ministry of Health (MOH) to make data-driven public health decisions.',
        'Enhanced system performance and cybersecurity by implementing secure REST endpoints and RBAC.'
    ]
  },
  {
    title: 'Pharmacovigilance App (PvERS)',
    role: 'Mobile Developer',
    description: 'Revamped the PvERS mobile app, ensuring compatibility with the latest Android & iOS versions to improve drug safety reporting.',
    tech: ['React Native', 'Android', 'iOS', 'TypeScript'],
    tags: ['mobile', 'react'],
    details: [
        'Revamped the Pharmacovigilance Electronic Records System (PvERS) mobile app.',
        'Ensured compatibility with the latest Android and iOS versions.',
        'Improved the UI/UX for public adverse drug reaction reporting.',
        'Resolved critical bugs and enhanced overall application stability.'
    ]
  },
];

const filters = ['All', 'AI', 'Java', 'Python', 'React', 'Mobile'];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === 'All'
    ? projectData
    : projectData.filter(p => p.tags.includes(activeFilter.toLowerCase()));

  // Effect to prevent background scrolling when the modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to reset the style when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  return (
    // Use a React Fragment to return multiple top-level elements
    <>
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
            <ProjectCard
              key={project.title}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </section>

      {/* Conditionally render the modal outside the main section */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}


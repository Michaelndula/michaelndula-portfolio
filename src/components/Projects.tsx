import { ProjectCard } from './ProjectCard';

const projectData = [
  {
    title: 'LexKen AI',
    role: 'Lead Developer & AI Architect',
    description:
      'Pioneering legal AI platform to accelerate case handling for Kenyan law firms and courts, addressing judicial backlogs.',
    tech: [
      'Django',
      'React',
      'Agentic AI',
      'RAG',
      'Vector DB',
      'Docker',
      'AWS EC2',
    ],
  },
  {
    title: 'South Sudan Electronic Medical Records (EMR)',
    role: 'Lead Developer (Consultant)',
    description:
      'Led end-to-end development of the national EMR system using OpenMRS 3.x, deployed to enhance HIV care management for partners like ICAP and the CDC.',
    tech: ['OpenMRS', 'Java', 'Spring', 'REST APIs', 'React', 'TypeScript'],
  },
  {
    title: 'eHospital System & AI Integration',
    role: 'Team Lead & AI Specialist',
    description:
      'Architected an AI-powered patient education service by integrating GPT-3.5 with OpenMRS to transform clinical data into clear SMS summaries.',
    tech: ['OpenMRS', 'AI', 'LLM', 'Docker', 'Python', 'HL7 FHIR', 'SMS API'],
  },
  {
    title: 'Loan Management Platform',
    role: 'Full-Stack Developer',
    description:
      "Engineered a microfinance system with M-Pesa Daraja API for automated loan disbursement and repayment, and Africa's Talking for SMS notifications.",
    tech: ['React Native', 'Java', 'Spring', 'M-Pesa API', "Africa's Talking"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="projects__title">My Work & Success Stories</h2>
        <div className="projects-grid">
          {projectData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
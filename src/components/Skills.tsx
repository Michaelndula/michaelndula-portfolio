import { useEffect } from 'react';

declare const TagCloud: any;

const skillCategories = [
  {
    title: 'Backend Development',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10M18 20V4M6 20V16"/></svg>
    ),
    skills: ['Java', 'Spring Framework', 'Python', 'Django', 'REST APIs', 'MySQL', 'Hibernate', 'Webservices'],
  },
  {
    title: 'Frontend Development',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    ),
    skills: ['React', 'TypeScript', 'Angular', 'React Native', 'Microfrontends'],
  },
  {
    title: 'AI & Specialized Integrations',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2.1a9.5 9.5 0 0 1 10 10c0 2.2-2 4-2 4s-2-1.8-2-4a5.5 5.5 0 0 0-11 0c0 2.2-2 4-2 4s-2-1.8-2-4a9.5 9.5 0 0 1 7-9.9Z"/><path d="M14 6V5a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v1"/></svg>
    ),
    skills: ['Agentic AI', 'LLMs', 'RAG', 'Prompt Engineering', 'Vector DBs', 'M-Pesa API', 'SMS Gateways'],
  },
  {
    title: 'DevOps & Platforms',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
    skills: ['Docker', 'AWS (EC2)', 'Git', 'Jenkins', 'Jira', 'OpenMRS', 'DHIS2', 'HL7 FHIR'],
  },
];

const sphereSkills = [
    'Java', 'Python', 'React', 'TypeScript', 'Agentic AI', 'Spring',
    'Docker', 'AWS', 'LLMs', 'RAG', 'Django', 'REST APIs', 'Microfrontends',
    'React Native', 'OpenMRS', 'MySQL', 'Git', 'Jenkins', 'Vector DBs'
];

export function Skills() {
    useEffect(() => {
        const container = '.tagcloud';
        const options = {
            radius: 250,
            maxSpeed: 'fast',
            initSpeed: 'fast',
            direction: 135,
            keep: true
        };

        TagCloud(container, sphereSkills, options);

        return () => {
            const elements = document.querySelectorAll(container);
            elements.forEach(el => {
                if (el.firstChild) {
                    el.removeChild(el.firstChild);
                }
            });
        };
    }, []);

  return (
    <section id="skills" className="section fade-in-section">
      <div className="container">
        <h2 className="projects-title">Core Technologies</h2>
        <div className="skills-showcase">
            <div className="skill-sphere-container">
                <span className="tagcloud"></span>
            </div>
            <div className="skills-grid">
                {skillCategories.map((category) => (
                <div key={category.title} className="skill-card">
                    <div className="skill-card-header">
                    <div className="skill-card-icon">{category.icon}</div>
                    <h3 className="skill-card-title">{category.title}</h3>
                    </div>
                    <div className="skill-list">
                    {category.skills.map((skill) => (
                        <span key={skill} className="skill-item">
                        {skill}
                        </span>
                    ))}
                    </div>
                </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}


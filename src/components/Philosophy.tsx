const philosophyPillars = [
  {
    title: 'Scalable by Design',
    icon: (
      <svg xmlns="http://www.w.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M3 12h18M18 7l-6 6-6-6"/></svg>
    ),
    description: "I build systems with the future in mind. Every component is designed for scalability and performance, ensuring that today's solutions can handle tomorrow's growth without a complete overhaul."
  },
  {
    title: 'Purposeful AI Integration',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect x="8" y="8" width="8" height="12" rx="2"/><path d="M4 12a8 8 0 0 1 8-8"/></svg>
    ),
    description: "AI is more than a buzzword; it's a tool to solve real problems. I specialize in applying LLMs and Agentic AI pragmatically, focusing on creating tangible business value and superior user experiences."
  },
  {
    title: 'Maintainable Code as a Product',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
    ),
    description: "The best systems are the ones that are easy to maintain and extend. I write clean, well-documented code and champion a strong developer experience to ensure long-term velocity and project health."
  },
  {
    title: 'End-to-End Ownership',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/></svg>
    ),
    description: "I see projects through from initial architecture to final deployment and beyond. My expertise in CI/CD, Docker, and AWS ensures that the systems I build are not just well-coded, but also robust and reliable in production."
  },
];

export function Philosophy() {
  return (
    <section id="philosophy" className="section container fade-in-section">
      <h2 className="projects-title">My Development Philosophy</h2>
      <div className="philosophy-grid">
        {philosophyPillars.map((pillar) => (
          <div key={pillar.title} className="philosophy-card">
            <div className="philosophy-card-icon">{pillar.icon}</div>
            <h3 className="philosophy-card-title">{pillar.title}</h3>
            <p className="philosophy-card-description">{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

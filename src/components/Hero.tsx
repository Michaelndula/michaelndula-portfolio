import { useState, useEffect } from 'react';

const ROLES = ['Software Developer.', 'AI Architect.', 'Full-Stack Engineer.'];
const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const DELAY = 2000;

export function Hero() {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = ROLES[roleIndex];
      if (isDeleting) {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), DELAY);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prevIndex) => (prevIndex + 1) % ROLES.length);
      }
    };

    const speed = isDeleting ? DELETING_SPEED : TYPING_SPEED;
    const timeout = setTimeout(handleTyping, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, text]);

  return (
    <section id="hero" className="hero container">
      <h1 className="hero-name">Michael Ndula</h1>
      <h2 className="hero-subtitle">
        {text}
        <span className="typing-cursor"></span>
      </h2>
      <p className="hero-summary">
        I architect and build intelligent, scalable software solutions, specializing in Agentic AI, backend systems, and modern full-stack development.
      </p>
      <div className="hero-cta">
        <a href="#projects">Explore My Work</a>
      </div>
    </section>
  );
}

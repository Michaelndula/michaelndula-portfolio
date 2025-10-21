import React, { useState, useEffect, useRef } from 'react';

const welcomeMessage = [
  'Welcome to my interactive terminal.',
  'Type `help` to see a list of available commands.',
];

const sessionStartTime = Date.now();

const commands: { [key: string]: string | (() => Promise<string[]>) } = {
  help: 'Available commands: whoami, skills, projects, contact, socials, weather, quote, neofetch, date, location, clear, matrix',
  whoami: 'Michael Ndula - A senior software engineer who builds intelligent, high-impact applications with a specialization in Agentic AI.',
  skills: 'I specialize in AI/ML, Java, Python, React, and DevOps. Scroll down for a more detailed breakdown.',
  projects: 'You can see a list of my key projects below. Use the filters to explore!',
  contact: 'You can reach me at michaelndula@gmail.com or through the contact form at the bottom of the page.',
  socials: 'GitHub: https://github.com/Michaelndula\nLinkedIn: https://linkedin.com/in/michael-ndula',
  date: () => Promise.resolve([new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'long', timeZone: 'Africa/Nairobi' })]),
  location: 'Based in Ngong, Kajiado County, Kenya.',
  weather: async () => {
    try {
      const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-1.28&longitude=36.82&current_weather=true');
      const data = await response.json();
      if (data.current_weather) {
        const { temperature, windspeed } = data.current_weather;
        return [
          `Current Weather in Nairobi, Kenya:`,
          `Temperature: ${temperature}°C`,
          `Wind Speed: ${windspeed} km/h`,
        ];
      }
      return ['Could not fetch weather data.'];
    } catch (error) {
      return ['Error: Failed to connect to the weather service.'];
    }
  },
  quote: async () => {
      try {
          const response = await fetch('https://api.quotable.io/random?tags=technology,famous-quotes');
          const data = await response.json();
          if (data.content && data.author) {
              return [
                  `"${data.content}"`,
                  `- ${data.author}`
              ];
          }
          return ['Could not fetch a quote at this time.'];
      } catch (error) {
          return ['Error: Failed to connect to the quote service.'];
      }
  },
  neofetch: async () => {
    const uptime = Math.floor((Date.now() - sessionStartTime) / 1000);
    const minutes = Math.floor(uptime / 60);
    const seconds = uptime % 60;
    return [
      '  MM   MM NNN    N',
      '  M M M M N  N   N   michael@portfolio',
      '  M  M  M N   N  N   -----------------',
      '  M     M N    NNN   OS: Web Browser',
      '                   Host: Netlify Cloud',
      '                   Kernel: React v18',
      `                   Uptime: ${minutes}m ${seconds}s`,
      '                   Shell: p-cli',
    ];
  },
  matrix: 'Engaging the matrix...',
};

export function Terminal() {
  const [history, setHistory] = useState<string[]>(welcomeMessage);
  const [input, setInput] = useState('');
  const [isMatrix, setIsMatrix] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const handleCommand = async () => {
    const trimmedInput = input.trim().toLowerCase();
    const newHistory = [...history, `> ${input}`];

    if (trimmedInput === 'clear') {
      setHistory([]);
    } else if (trimmedInput === 'matrix') {
        setIsMatrix(true);
        setTimeout(() => setIsMatrix(false), 10000);
        newHistory.push('Engaging the matrix...');
        setHistory(newHistory);
    } else {
      const command = commands[trimmedInput];
      if (command) {
        if (typeof command === 'function') {
          const result = await command();
          setHistory([...newHistory, ...result]);
        } else {
          const lines = command.split('\n');
          setHistory([...newHistory, ...lines]);
        }
      } else {
        setHistory([...newHistory, `Error: command not found: ${trimmedInput}`]);
      }
    }
    setInput('');
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand();
    }
  };

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);
  
  // Matrix effect logic
  useEffect(() => {
    if (!isMatrix) return;
    const canvas = document.getElementById('matrix-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = canvas.parentElement?.clientHeight || 300;

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%^&*()*&^%+-/~{[|`]}'.split('');
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops: number[] = Array.from({ length: columns }).fill(1);

    const draw = () => {
      if (!ctx) return;
      ctx.fillStyle = 'rgba(0, 0, 0, .1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = '#0f0';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    };
    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, [isMatrix]);

  return (
    <section className="section fade-in-section">
      <div className="container">
        <div className="terminal-window" onClick={() => inputRef.current?.focus()}>
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <span>michael@portfolio: ~$</span>
          </div>
          <div className="terminal-body" ref={bodyRef}>
            {isMatrix && <canvas id="matrix-canvas"></canvas>}
            {history.map((line, index) => (
              <pre key={index}>{line}</pre>
            ))}
            <div className="terminal-prompt">
              <span>&gt;</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                className="terminal-input"
                autoFocus
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


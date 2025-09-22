import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

// Narrative terminal commands
const commands = [
  {
    cmdText: "boot diegoOS...",
    output: "> Initializing personality modules...",
  },
  {
    cmdText: "cat about.txt",
    output:
      "> I'm Diego Avila — a full-stack software engineer with a foundation in secure computing.\n> I build high-quality, scalable applications by integrating modern backend and frontend technologies.",
  },
  {
    cmdText: "cat philosophy.txt",
    output:
      "> Clean architecture is the foundation of great software.\n> Security is a natural outcome of quality engineering, not a separate feature.\n> Well-documented, collaborative code leads to the strongest solutions.",
  },
  {
    cmdText: "cat mission.txt",
    output:
      "> To engineer reliable, maintainable systems.\n> To leverage cloud-native technologies to build scalable solutions.\n> To continuously learn and contribute to open, collaborative tech communities.",
  },
  {
    cmdText: "cat services.txt",
    output: [
      "☁️ Full-Stack Application Development (Spring Boot, React, SQL)",
      "⚙️ Backend Architecture & API Design (REST, GraphQL)",
      "🧩 Cloud-Native Solutions & DevOps (AWS, Kubernetes, CI/CD)",
      "🔐 Secure Software Development Lifecycle Practices",
    ],
  },
  {
    cmdText: "cat skills.txt",
    output: [
      "Java",
      "MySQL",
      "React",
      "Spring Boot",
      "HTML/CSS/JavaScript",
      "Python",
      "AWS",
      "Linux & Windows Server",
      "Cryptography",
      "Git & GitHub",    ],
  },
  {
    cmdText: "cat final_thoughts.txt",
    output:
      "> If you're building for scale, reliability, and innovative solutions...\n> Let's connect.",
  },
];

// Typing effect
const TypingCommand = ({ command, onComplete, paused }) => {
  const [typed, setTyped] = useState("");
  const idx = useRef(0);
  const cursorVisible = useRef(true);

  useEffect(() => {
    const blink = setInterval(() => {
      cursorVisible.current = !cursorVisible.current;
      setTyped((t) => t); // re-render
    }, 500);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    if (paused) return;
    const typer = setInterval(() => {
      if (idx.current < command.length) {
        setTyped((t) => t + command[idx.current]);
        idx.current++;
      } else {
        clearInterval(typer);
        setTimeout(onComplete, 400);
      }
    }, 45);
    return () => clearInterval(typer);
  }, [command, onComplete, paused]);

  return (
    <p className="text-green-300 font-mono text-sm sm:text-base">
      <span className="text-teal-400">diego@secure-net:~$</span> {typed}
      <span className="inline-block ml-1">
        {cursorVisible.current ? "|" : "\u00A0"}
      </span>
    </p>
  );
};

const About = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef();

  const next = () => setCurrent((c) => Math.min(c + 1, commands.length));
  const skipAll = () => setCurrent(commands.length);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setPaused(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="bg-[#0f172a] text-white min-h-screen py-20 px-6 font-mono"
    >
      <div
        ref={containerRef}
        className="max-w-4xl mx-auto bg-[#0c1a2c] rounded-md overflow-hidden shadow-lg border border-teal-600"
      >
        {/* Terminal header */}
        <div className="flex space-x-2 items-center bg-[#071526] py-2 px-3">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          <span className="ml-2 text-gray-400 text-sm">diego@secure-net:~</span>
        </div>

        {/* Terminal body */}
        <div className="p-6 space-y-4">
          <h2 className="text-teal-400 text-2xl sm:text-3xl font-bold">
            🖥️ Terminal — Accessing Diego Avila
          </h2>

          {commands.slice(0, current + 1).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              {i === current ? (
                <TypingCommand
                  command={line.cmdText}
                  onComplete={next}
                  paused={paused}
                />
              ) : (
                <>
                  <p className="text-green-300 font-mono text-sm sm:text-base">
                    <span className="text-teal-400">diego@secure-net:~$</span>{" "}
                    {line.cmdText}
                  </p>
                  <motion.div
                    className="text-gray-300 font-mono mt-2 pl-4 whitespace-pre-line"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {Array.isArray(line.output) ? (
                      <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1 pl-2 text-teal-300 text-sm">
                        {line.output.map((o, idx) => (
                          <li
                            key={idx}
                            className="bg-[#11243a] px-3 py-1 rounded-md"
                          >
                            {o}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>{line.output}</p>
                    )}
                  </motion.div>
                </>
              )}
            </motion.div>
          ))}

          {/* Progress & Controls */}
          <div className="flex justify-between items-center pt-4">
            {current < commands.length && (
              <button
                onClick={next}
                className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full font-mono text-sm transition"
              >
                Run Next Command →
              </button>
            )}
            {current < commands.length && (
              <button
                onClick={skipAll}
                className="text-xs text-gray-400 hover:text-teal-300 transition ml-4"
              >
                Skip All
              </button>
            )}
            <p className="text-xs text-gray-500 ml-auto">
              {current + 1}/{commands.length} commands run
            </p>
          </div>

          {/* Final CTA */}
          {current === commands.length && (
            <motion.div
              className="text-center pt-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://docs.google.com/document/d/10vdwlXXtOAXh6HAi5bUXsfeQViSI_m4vWrZRIbLnclA/edit?tab=t.0"
                className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-semibold transition shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                View My Resume 📄
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;

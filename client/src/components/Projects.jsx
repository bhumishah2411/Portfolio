import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "InternIQ",
    subtitle: "Internship Management Platform",
    description: [
      "Implemented secure authentication with login/signup APIs using Node.js, Express.js, and MongoDB.",
      "Built a responsive internship dashboard using React.js for browsing listings and tracking applications.",
      "Designed RESTful API structure following SDLC practices with debugging and integration testing, creating a scalable foundation for future features like resume analysis and internship recommendations.",
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    tag: "MERN Stack",
    github: "https://github.com/bhumishah2411/internIQ",
    live: null,
  },
  {
    title: "Netflix Clone",
    subtitle: "Full-Stack Streaming Platform",
    description: [
      "Built a full-stack Netflix-inspired streaming platform with dynamic movie listings and searchable content pages.",
      "Implemented category-based content retrieval using MySQL queries supporting multiple categories with curated datasets.",
      "Designed interactive UI with responsive layout and video playback functionality.",
      "Simulated real-world streaming experience to demonstrate full-stack development skills.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    tag: "Full Stack",
    github: "https://github.com/bhumishah2411/netflix",
    live: null,
  },
  {
    title: "Sign Language to Text Converter",
    subtitle: "Real-Time Gesture Recognition",
    description: [
      "Built a real-time web app that detects 12 common sign language gestures via webcam using MediaPipe hand tracking and OpenCV.",
      "Integrated Flask backend with a SQLite database to log recognized gestures with timestamps and confidence scores.",
      "Designed a clean modular architecture with REST API communication between frontend (HTML/CSS/JS) and Python backend, enabling live MJPEG video streaming.",
    ],
    tech: ["Python", "Flask", "OpenCV", "MediaPipe", "SQLite", "JavaScript"],
    tag: "AI / CV",
    github: "https://github.com/bhumishah2411/Sign-to-Text",
    live: null,
  },
  {
    title: "News Aggregator App",
    subtitle: "REST API Integration",
    description: [
      "Developed a news aggregator web app that fetches and displays live headlines using a third-party REST API.",
      "Implemented category-based filtering and dynamic content rendering using vanilla JavaScript.",
      "Designed a responsive UI with clean layout ensuring smooth browsing across devices.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "REST API"],
    tag: "Web App",
    github: "https://github.com/bhumishah2411/News-App",
    live: null,
  },
  {
    title: "Simple Calculator",
    subtitle: "Web-Based Calculator",
    description: [
      "Developed a responsive web-based calculator supporting basic arithmetic operations.",
      "Added input validation, keyboard support, and real-time calculation logic.",
      "Designed an intuitive UI ensuring smooth user interaction.",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    tag: "Web App",
    github: null,
    live: "https://calculatorproject24.netlify.app/",
  },
  {
    title: "QuickLearnAI",
    subtitle: "SSIP Funded Project – Contributor",
    description: [
      "Contributed to instant classroom session joining by developing a QR-code–based access system integrated with REST APIs, resulting in 50% faster session entry vs manual code-based joining.",
      "Improved session reliability by redesigning frontend session logic and implementing debugging strategies for smoother live quiz participation.",
      "Contributed to a scalable quiz platform architecture within an Agile development process, improving system stability for interactive classroom engagement.",
    ],
    tech: ["React", "JavaScript", "Backend APIs", "QR Code", "Agile"],
    tag: "Contributor",
    github: null,
    live: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-black py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-14"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 hover:border-cyan-500/50 transition"
            >
              {/* TAG */}
              <span className="absolute top-6 right-6 text-xs uppercase tracking-wider text-cyan-400">
                {project.tag}
              </span>

              <h3 className="text-2xl font-semibold text-white mb-1">
                {project.title}
              </h3>

              {project.subtitle && (
                <p className="text-cyan-400/70 text-sm mb-1">{project.subtitle}</p>
              )}

              <div className="h-px bg-white/10 my-4" />

              <ul className="text-gray-300 space-y-2 mb-6 list-disc list-inside">
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* LINKS */}
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition"
                  >
                    <FaGithub className="text-lg" />
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
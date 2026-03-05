import { motion } from "framer-motion";

const experiences = [
  {
    title: "Full-Stack Project Contributor",
    org: "Team Project / Open-Source Contribution",
    year: "2026",
    description: [
      "Implemented a QR-code based room entry system for secure student access.",
      "Developed a QR scanner using unique room codes to join shared rooms.",
      "Integrated frontend components with backend APIs.",
      "Collaborated with team members to test, debug, and enhance functionality."
    ],
    tech: ["React", "JavaScript", "Backend APIs", "QR Code Scanner"],
    tag: "Project"
  },
  {
    title: "Hackathon Winner – 1st Position",
    org: "CODER’S ARCADE 2.0 (Team of 3)",
    year: "University Level | 2025",
    description: [
      "Secured 1st position in a competitive hackathon focused on C++ and DSA.",
      "Solved algorithmic problems under strict time constraints.",
      "Participated in multiple university and state-level hackathons."
    ],
    tech: ["C++", "DSA", "Problem Solving", "Team Collaboration"],
    tag: "Hackathon"
  },
  {
    title: "Technical Coordinator",
    org: "Competitive Programming Squad ",
    year: "2025 – Present",
    description: [
      "Coordinate competitive programming activities within the club.",
      "Organize coding contests, CP practice sessions, and DSA discussions.",
      "Mentor juniors to improve problem-solving and coding skills."
    ],
    tech: ["Leadership", "Competitive Programming", "Mentorship"],
    tag: "Leadership"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="bg-black py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-14"
        >
          Experience
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 hover:border-cyan-500/50 transition"
            >
              {/* TAG */}
              <span className="absolute top-6 right-6 text-xs uppercase tracking-wider text-cyan-400">
                {exp.tag}
              </span>

              <h3 className="text-2xl font-semibold text-white mb-1">
                {exp.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {exp.org} • {exp.year}
              </p>

              <ul className="text-gray-300 space-y-2 mb-6 list-disc list-inside">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

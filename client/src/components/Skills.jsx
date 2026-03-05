import { motion } from "framer-motion";

import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPhp,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify
} from "react-icons/si";

import { FaJava, FaPython, FaCode } from "react-icons/fa";

/* ==================== Skill Card ==================== */
const SkillCard = ({ icon: Icon, name, color }) => (
  <motion.div
    whileHover={{ scale: 1.08 }}
    className="flex items-center gap-3 px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-800
               hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]
               transition-all cursor-default"
  >
    <Icon className={`text-xl ${color}`} />
    <span className="text-gray-200 text-sm font-medium">{name}</span>
  </motion.div>
);

/* ==================== Section ==================== */
const SkillsSection = ({ title, skills }) => (
  <div className="mb-12">
    <h3 className="text-xl font-semibold text-white mb-5">{title}</h3>
    <div className="flex flex-wrap gap-4">
      {skills.map((skill, index) => (
        <SkillCard key={index} {...skill} />
      ))}
    </div>
  </div>
);

/* ==================== Main Component ==================== */
const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-black px-6 md:px-16 py-20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-14"
        >
          Skills & <span className="text-cyan-400">Expertise</span>
        </motion.h2>

        {/* Programming Languages */}
        <SkillsSection
          title="Programming Languages"
          skills={[
            { icon: SiC, name: "C", color: "text-blue-500" },
            { icon: SiCplusplus, name: "C++", color: "text-blue-400" },
            { icon: FaJava, name: "Java", color: "text-red-500" },
            { icon: SiJavascript, name: "JavaScript", color: "text-yellow-300" },
             { icon: FaPython, name: "Python (Learning)", color: "text-yellow-400" }
          ]}
        />

        {/* Frontend Development */}
        <SkillsSection
          title="Frontend Development"
          skills={[
            { icon: SiHtml5, name: "HTML", color: "text-orange-500" },
            { icon: SiCss3, name: "CSS", color: "text-blue-500" },
            { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-400" },
            { icon: SiJavascript, name: "JavaScript", color: "text-yellow-300" },
            { icon: SiReact, name: "React (Learning)", color: "text-cyan-300" }
          ]}
        />

        {/* Backend & Databases */}
        <SkillsSection
          title="Backend & Databases"
          skills={[
            { icon: SiNodedotjs, name: "Node.js (Learning)", color: "text-green-500" },
            { icon: SiExpress, name: "Express.js (Learning)", color: "text-gray-300" },
            { icon: SiMysql, name: "SQL Databases (Basic)", color: "text-blue-400" },
            { icon: SiPhp, name: "PHP (Academic Project)", color: "text-indigo-400" }
          ]}
        />

        {/* Tools & Platforms */}
        <SkillsSection
          title="Tools & Platforms"
          skills={[
            { icon: SiGit, name: "Git", color: "text-orange-500" },
            { icon: SiGithub, name: "GitHub", color: "text-white" },
            { icon: FaCode, name: "VS Code", color: "text-blue-400" },
            { icon: SiVercel, name: "Vercel", color: "text-white" },
            { icon: SiNetlify, name: "Netlify", color: "text-teal-400" }
          ]}
        />
      </div>
    </section>
  );
};

export default Skills;

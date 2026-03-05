import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

const educationData = [
  {
    icon: FaGraduationCap,
    degree: "B.Tech — Computer Science & Engineering",
    institution: "Charotar University of Science and Technology (CHARUSAT)",
    period: "2024 – 2028",
    detail: "CGPA: 8.5 / 10 ",
    coursework: ["Data Structures", "OOP", "DBMS", "Computer Networks (Basics)"],
    color: "cyan",
  },
  {
    icon: FaSchool,
    degree: "Higher Secondary (12th) — Science",
    institution: "Little Flower School, Ahmedabad",
    period: "Passed 2024",
    detail: "Percentage: 89% | GSEB (English Medium)",
    coursework: [],
    color: "cyan",
  },
  {
    icon: FaSchool,
    degree: "Secondary (10th)",
    institution: "Little Flower School, Ahmedabad",
    period: "Passed 2022",
    detail: "Percentage: 89% | GSEB (English Medium)",
    coursework: [],
    color: "cyan",
  },
];

const colorMap = {
  cyan: {
    border: "hover:border-cyan-500/50",
    tag: "text-cyan-400",
    pill: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    icon: "text-cyan-400",
  },
  purple: {
    border: "hover:border-purple-500/50",
    tag: "text-purple-400",
    pill: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    icon: "text-purple-400",
  },
  pink: {
    border: "hover:border-pink-500/50",
    tag: "text-pink-400",
    pill: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    icon: "text-pink-400",
  },
};

const Education = () => {
  return (
    <section id="education" className="bg-black py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-14"
        >
          Education
        </motion.h2>

        <div className="flex flex-col gap-8">
          {educationData.map((edu, index) => {
            const c = colorMap[edu.color];
            const Icon = edu.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 ${c.border} transition`}
              >
                <div className="flex items-start gap-4">
                  <div className={`mt-1 text-2xl ${c.icon}`}>
                    <Icon />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-400 text-sm mb-1">{edu.institution}</p>
                    <p className={`text-sm font-medium mb-2 ${c.tag}`}>
                      {edu.period} &nbsp;·&nbsp; {edu.detail}
                    </p>

                    {edu.coursework.length > 0 && (
                      <div className="mt-4">
                        <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">
                          Relevant Coursework
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, i) => (
                            <span
                              key={i}
                              className={`text-xs px-3 py-1 rounded-full border ${c.pill}`}
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
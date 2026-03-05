import { motion } from "framer-motion";
import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { GitHubCalendar } from "react-github-calendar";

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const PURPLE = ["#2d2d3b", "#4c1d95", "#7c3aed", "#a855f7", "#d8b4fe"];

const CodingActivity = () => {
  const leetcodeImg = `https://leetcard.jacoblin.cool/bhumishah24?theme=dark&font=DM%20Mono&ext=heatmap&bgColor=000000&border=0&v=${new Date().getTime()}`;

  useEffect(() => {
    const repaint = () => {
      const wrapper = document.querySelector(".github-calendar-purple");
      if (!wrapper) return;
      // Recolor all rects by data-level
      wrapper.querySelectorAll("rect[data-level]").forEach((rect) => {
        const level = parseInt(rect.getAttribute("data-level"), 10);
        rect.style.fill = PURPLE[level] || PURPLE[0];
      });
      // Recolor legend rects (no data-level, just sequential)
      const legendRects = wrapper.querySelectorAll("footer rect, [class*='legend'] rect");
      legendRects.forEach((rect, i) => {
        rect.style.fill = PURPLE[i] || PURPLE[PURPLE.length - 1];
      });
    };

    // Run after render and again after a short delay (calendar loads async)
    repaint();
    const t1 = setTimeout(repaint, 500);
    const t2 = setTimeout(repaint, 1500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <section className="py-12 md:py-24 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-3">
          Coding Activity
        </h2>
        <p className="text-center text-gray-400 mb-8 md:mb-14 text-sm md:text-base">
          A glimpse of my problem-solving journey on GitHub & LeetCode
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">

          {/* GitHub Card - PURPLE THEME */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="flex flex-col h-full bg-white/5 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-4 md:p-6 shadow-xl hover:shadow-purple-500/20 transition"
          >
            <div className="flex items-center gap-3 mb-6">
              <FaGithub className="text-2xl md:text-3xl text-white" />
              <span className="text-lg md:text-xl font-semibold text-white truncate">@bhumishah2411</span>
            </div>

            <div className="flex-grow overflow-x-auto pb-2 custom-scrollbar">
              <div className="min-w-[600px] lg:min-w-0 github-calendar-purple">
                <GitHubCalendar
                  username="bhumishah2411"
                  blockSize={12}
                  blockMargin={4}
                  fontSize={14}
                  colorScheme="dark"
                  theme={{
                    dark: PURPLE,
                  }}
                />
              </div>
            </div>

            <a
              href="https://github.com/bhumishah2411"
              target="_blank"
              rel="noreferrer"
              className="mt-6 w-fit px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-400 text-white text-sm md:text-base font-semibold"
            >
              View GitHub
            </a>
          </motion.div>

          {/* LeetCode Card - GREEN THEME */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="flex flex-col h-full bg-white/5 backdrop-blur-xl border border-green-500/20 rounded-2xl p-4 md:p-6 shadow-xl hover:shadow-green-500/20 transition"
          >
            <div className="flex items-center gap-3 mb-6">
              <SiLeetcode className="text-2xl md:text-3xl text-yellow-400" />
              <span className="text-lg md:text-xl font-semibold text-white truncate">@bhumishah24</span>
            </div>

            <div className="flex-grow overflow-x-auto pb-2 custom-scrollbar">
              <div className="min-w-[500px] lg:min-w-0">
                <img
                  src={leetcodeImg}
                  alt="LeetCode Stats"
                  className="w-full rounded-xl"
                  loading="lazy"
                />
              </div>
            </div>

            <a
              href="https://leetcode.com/u/bhumishah24/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 w-fit px-6 py-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-black text-sm md:text-base font-semibold"
            >
              View Profile
            </a>
          </motion.div>

        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { height: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #333; border-radius: 10px; }

        /* CSS override for grid squares */
        .github-calendar-purple rect[data-level="0"] { fill: #2d2d3b !important; }
        .github-calendar-purple rect[data-level="1"] { fill: #4c1d95 !important; }
        .github-calendar-purple rect[data-level="2"] { fill: #7c3aed !important; }
        .github-calendar-purple rect[data-level="3"] { fill: #a855f7 !important; }
        .github-calendar-purple rect[data-level="4"] { fill: #d8b4fe !important; }
      `}</style>
    </section>
  );
};

export default CodingActivity;
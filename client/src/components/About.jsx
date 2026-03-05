import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImg from "../assets/bhumiShah.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-black px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{
            rotateX: 4,
            rotateY: -4,
            scale: 1.04,
          }}
          transition={{ type: "spring", stiffness: 160, damping: 20 }}
          style={{ perspective: 1000 }}
          className="relative"
          >
          </motion.div>
            {/* Image Card */}       
            <div className="relative bg-black rounded-2xl p-1">
            <img
               src={profileImg}
               alt="Bhumi Shah"
               className="relative w-80 md:w-[420px] aspect-square rounded-2xlx object-cover shadow-xl"
            />

          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-cyan-400 text-lg mb-2">Hi 👋, I’m</h3>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bhumi <span className="text-cyan-400">Shah</span>
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6 max-w-xl">
          I’m a motivated aspiring Full-Stack Developer with a strong foundation in Data Structures & Algorithms. I love building scalable web applications and solving challenging problems.
            <br /><br />
          Currently exploring React, Node.js, Express, and relational databases through hands-on projects and real-world contributions.          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 mt-6">
            <a
              href="https://github.com/bhumishah2411"
              target="_blank"
              className="text-gray-400 hover:text-cyan-400 text-2xl transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/bhumi-shah-b0517a30a/"
              target="_blank"
              className="text-gray-400 hover:text-cyan-400 text-2xl transition"
            >
              <FaLinkedin />
            </a>
         <a
  href="mailto:bhumishah2406@gmail.com?subject=Portfolio Contact"
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-cyan-400 text-2xl transition"
>
  <FaEnvelope />
</a>


             </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;

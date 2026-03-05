import { motion } from "framer-motion";

const Navbar = () => {
  const links = ["Experience", "Skills", "Projects", "Education", "Contact"];

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-cyan-500"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between px-6 py-4">
        <h1 className="text-cyan-400 font-bold text-xl">Bhumi</h1>
        <div className="hidden md:flex gap-6">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-cyan-400 transition"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

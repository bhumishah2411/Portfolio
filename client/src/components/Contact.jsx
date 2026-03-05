import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

const contacts = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "bhumishah2406@gmail.com",
    href: "mailto:bhumishah2406@gmail.com",
    color: "cyan",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+91 63522 81640",
    href: "tel:+916352281640",
    color: "green",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/bhumi-shah",
    href: "https://www.linkedin.com/in/bhumi-shah-b0517a30a/",
    color: "blue",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/bhumishah2411",
    href: "https://github.com/bhumishah2411",
    color: "purple",
  },
];

const colorMap = {
  cyan: {
    border: "hover:border-cyan-500/50",
    icon: "text-cyan-400",
    glow: "hover:shadow-cyan-500/10",
  },
  green: {
    border: "hover:border-green-500/50",
    icon: "text-green-400",
    glow: "hover:shadow-green-500/10",
  },
  blue: {
    border: "hover:border-blue-500/50",
    icon: "text-blue-400",
    glow: "hover:shadow-blue-500/10",
  },
  purple: {
    border: "hover:border-purple-500/50",
    icon: "text-purple-400",
    glow: "hover:shadow-purple-500/10",
  },
};

const Contact = () => {
  return (
    <section id="contact" className="bg-black py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Contact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 mb-14 max-w-xl"
        >
          Feel free to reach out — whether it's a project, opportunity, or just a hello!
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
          {contacts.map((contact, index) => {
            const c = colorMap[contact.color];
            const Icon = contact.icon;
            return (
              <motion.a
                key={index}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className={`flex items-center gap-5 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 shadow-xl ${c.border} ${c.glow} transition`}
              >
                <div className={`text-3xl ${c.icon}`}>
                  <Icon />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                    {contact.label}
                  </p>
                  <p className="text-white text-sm font-medium">{contact.value}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
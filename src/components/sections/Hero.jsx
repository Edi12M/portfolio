import { motion } from "framer-motion";
import { FiArrowDown, FiGithub, FiMail } from "react-icons/fi";
import Button from "../ui/Button";
import { PERSONAL_INFO } from "../../constants/data";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
    >
      <motion.div
        className="max-w-5xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-dark-300">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight"
        >
          <span className="text-white">Hi, I'm </span>
          <span className="gradient-text">{PERSONAL_INFO.name}</span>
        </motion.h1>

        {/* Role */}
        <motion.div variants={itemVariants} className="mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-semibold text-dark-200">
            {PERSONAL_INFO.role}
          </h2>
          <p className="text-lg md:text-xl text-accent-purple font-mono mt-2">
            {PERSONAL_INFO.tagline}
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-dark-400 max-w-2xl mx-auto mb-10"
        >
          I build{" "}
          <span className="text-white font-medium">
            scalable backend systems
          </span>{" "}
          and{" "}
          <span className="text-white font-medium">
            full-stack applications
          </span>{" "}
          that solve real problems with clean, efficient code.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button
            variant="primary"
            onClick={scrollToProjects}
            className="w-full sm:w-auto"
          >
            View My Projects
          </Button>
          <Button
            variant="secondary"
            onClick={scrollToContact}
            icon={FiMail}
            iconPosition="left"
            className="w-full sm:w-auto"
          >
            Contact Me
          </Button>
        </motion.div>

        {/* Tech Stack Preview */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3"
        >
          {["AI","CNN","Data Mining",".NET", "MySQL", "React", "REST APIs", "C#"].map((tech, index) => (
            <motion.span
              key={tech}
              className="badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.button
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex flex-col items-center gap-2 text-dark-500 hover:text-accent-purple transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-label="Scroll to about section"
        >
          <span className="text-xs font-medium uppercase tracking-widest">
            Scroll
          </span>
          <FiArrowDown className="w-5 h-5" />
        </motion.button>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-10 w-px h-32 bg-gradient-to-b from-transparent via-accent-purple/50 to-transparent hidden lg:block" />
      <div className="absolute top-1/2 right-10 w-px h-32 bg-gradient-to-b from-transparent via-accent-cyan/50 to-transparent hidden lg:block" />
    </section>
  );
};

export default Hero;

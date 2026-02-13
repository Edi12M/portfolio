import { motion } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiFolder,
  FiArrowRight,
} from "react-icons/fi";
import SectionWrapper from "../ui/SectionWrapper";
import { useInView } from "../../hooks/useAnimations";
import { PROJECTS } from "../../constants/data";

const ProjectCard = ({ project, index }) => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const colorClasses = {
    purple: {
      border: "hover:border-accent-purple/60",
      icon: "bg-accent-purple/20 text-accent-purple",
      glow: "hover:shadow-accent-purple/20",
      badge: "badge-primary",
      gradient: "from-accent-purple/20 via-transparent to-transparent",
    },
    cyan: {
      border: "hover:border-accent-cyan/60",
      icon: "bg-accent-cyan/20 text-accent-cyan",
      glow: "hover:shadow-accent-cyan/20",
      badge: "badge-cyan",
      gradient: "from-accent-cyan/20 via-transparent to-transparent",
    },
    pink: {
      border: "hover:border-accent-pink/60",
      icon: "bg-accent-pink/20 text-accent-pink",
      glow: "hover:shadow-accent-pink/20",
      badge: "badge-pink",
      gradient: "from-accent-pink/20 via-transparent to-transparent",
    },
  };

  const colors = colorClasses[project.color] || colorClasses.purple;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`group relative card card-hover ${colors.border} ${colors.glow} hover:shadow-xl overflow-hidden`}
    >
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-xl ${colors.icon}`}>
            <FiFolder className="w-6 h-6" />
          </div>

          <div className="flex gap-2">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-dark-400 hover:text-white hover:bg-dark-800/50 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="View GitHub repository"
              >
                <FiGithub className="w-5 h-5" />
              </motion.a>
            )}
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-dark-400 hover:text-white hover:bg-dark-800/50 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="View live demo"
              >
                <FiExternalLink className="w-5 h-5" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-dark-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className={`px-2.5 py-1 rounded-md text-xs font-medium ${colors.badge}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Link - Only show if demo exists */}
        {project.demo && (
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-dark-400 hover:text-white transition-colors group/link"
          >
            Live Demo
            <motion.span className="group-hover/link:translate-x-1 transition-transform">
              <FiArrowRight className="w-4 h-4" />
            </motion.span>
          </motion.a>
        )}
      </div>

      {/* Hover Border Effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(var(--tw-gradient-stops)) border-box`,
          WebkitMask:
            "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
    </motion.div>
  );
};

const Projects = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <SectionWrapper id="projects">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="inline-block text-accent-cyan font-mono text-sm mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            {"<Projects />"}
          </motion.span>
          <h2 className="section-title">
            <span className="text-white">Featured </span>
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A collection of projects I've built to solve real problems and
            explore new technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="https://github.com/Edi12M"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border-dark-600 hover:border-accent-purple/50 text-dark-300 hover:text-white transition-all duration-300 group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub className="w-5 h-5" />
            <span className="font-medium">View More on GitHub</span>
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;

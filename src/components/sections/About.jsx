import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiServer, FiZap } from "react-icons/fi";
import SectionWrapper from "../ui/SectionWrapper";
import { useInView } from "../../hooks/useAnimations";
import { ABOUT_TEXT } from "../../constants/data";

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const strengths = [
    {
      icon: FiServer,
      title: "Backend Architecture",
      description:
        "Designing scalable and maintainable server-side solutions with .NET Core",
      color: "purple",
    },
    {
      icon: FiDatabase,
      title: "AI & Data Systems",
      description:
        "Building data-driven applications and integrating machine learning models",
      color: "cyan",
    },
    {
      icon: FiCode,
      title: "Clean Code",
      description: "Writing readable, testable, and well-documented code",
      color: "pink",
    },
    {
      icon: FiZap,
      title: "API Development",
      description:
        "Building RESTful APIs with authentication and best practices",
      color: "purple",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <SectionWrapper id="about">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="inline-block text-accent-purple font-mono text-sm mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            {"<About />"}
          </motion.span>
          <h2 className="section-title">
            <span className="gradient-text">{ABOUT_TEXT.title}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-dark-300 leading-relaxed mb-8">
              {ABOUT_TEXT.description}
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-display font-semibold text-white mb-4">
                What I bring to the table:
              </h3>
              <ul className="space-y-3">
                {ABOUT_TEXT.highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3 text-dark-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-purple to-accent-cyan" />
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-dark-800"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              {[
                { value: "6+", label: "Projects" },
                { value: "5+", label: "Technologies" },
                { value: "100%", label: "Passion" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-display font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-dark-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Strength Cards */}
          <motion.div
            className="grid sm:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card card-hover group"
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 
                    ${strength.color === "purple" ? "bg-accent-purple/20" : ""}
                    ${strength.color === "cyan" ? "bg-accent-cyan/20" : ""}
                    ${strength.color === "pink" ? "bg-accent-pink/20" : ""}
                  `}
                >
                  <strength.icon
                    className={`w-6 h-6 
                      ${strength.color === "purple" ? "text-accent-purple" : ""}
                      ${strength.color === "cyan" ? "text-accent-cyan" : ""}
                      ${strength.color === "pink" ? "text-accent-pink" : ""}
                    `}
                  />
                </div>
                <h4 className="text-lg font-display font-semibold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                  {strength.title}
                </h4>
                <p className="text-sm text-dark-400">{strength.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;

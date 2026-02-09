import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import { useInView } from "../../hooks/useAnimations";
import { SKILLS } from "../../constants/data";

const SkillBar = ({ skill, index, isInView }) => {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="flex items-center gap-4 mb-3">
        <div className="w-10 h-10 rounded-lg bg-dark-800/80 flex items-center justify-center text-dark-400 group-hover:text-accent-purple group-hover:bg-accent-purple/20 transition-all duration-300">
          <skill.icon className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-white">{skill.name}</span>
            <span className="text-xs font-mono text-dark-500">
              {skill.level}%
            </span>
          </div>
          <div className="h-1.5 bg-dark-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-accent-purple via-accent-pink to-accent-cyan rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: `${skill.level}%` } : {}}
              transition={{
                duration: 1,
                delay: 0.3 + index * 0.1,
                ease: "easeOut",
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ categoryKey, category, index }) => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="card group"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-dark-800">
        <div className="p-2.5 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-cyan/20">
          <category.icon className="w-5 h-5 text-accent-purple" />
        </div>
        <h3 className="text-lg font-display font-semibold text-white">
          {category.title}
        </h3>
      </div>

      {/* Skills */}
      <div className="space-y-4">
        {category.items.map((skill, skillIndex) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            index={skillIndex}
            isInView={isInView}
          />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <SectionWrapper id="skills">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="inline-block text-accent-pink font-mono text-sm mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            {"<Skills />"}
          </motion.span>
          <h2 className="section-title">
            <span className="text-white">Technical </span>
            <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(SKILLS).map(([key, category], index) => (
            <SkillCategory
              key={key}
              categoryKey={key}
              category={category}
              index={index}
            />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          <p className="text-dark-500 text-sm">
            Always learning and exploring new technologies to stay ahead
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;

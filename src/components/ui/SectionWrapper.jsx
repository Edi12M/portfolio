import { motion } from "framer-motion";
import { useInView } from "../../hooks/useAnimations";

const SectionWrapper = ({ children, id, className = "" }) => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`section relative overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;

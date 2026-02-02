import { motion } from "framer-motion";

const LoadingScreen = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-dark-950"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      onAnimationComplete={onComplete}
    >
      <div className="relative">
        {/* Logo Animation */}
        <motion.div
          className="text-6xl md:text-8xl font-display font-bold"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="gradient-text">EM</span>
        </motion.div>

        {/* Loading Bar */}
        <motion.div
          className="absolute -bottom-8 left-0 right-0 h-1 bg-dark-800 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-accent-purple via-accent-pink to-accent-cyan"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Decorative rings */}
        <motion.div
          className="absolute inset-0 -m-8 rounded-full border border-accent-purple/30"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.2, opacity: [0, 0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute inset-0 -m-16 rounded-full border border-accent-cyan/20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.4, opacity: [0, 0.3, 0] }}
          transition={{ duration: 2, delay: 0.3, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;

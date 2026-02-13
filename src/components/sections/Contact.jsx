import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiArrowRight, FiCoffee, FiMessageCircle } from "react-icons/fi";
import SectionWrapper from "../ui/SectionWrapper";
import { useInView } from "../../hooks/useAnimations";
import { PERSONAL_INFO } from "../../constants/data";

const Contact = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const contactMethods = [
    {
      icon: FiMail,
      title: "Email Me",
      description: "Drop me an email anytime",
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      color: "purple",
    },
    {
      icon: FiLinkedin,
      title: "LinkedIn",
      description: "Let's connect professionally",
      value: "Connect with me",
      href: PERSONAL_INFO.linkedin,
      color: "cyan",
    },
    {
      icon: FiGithub,
      title: "GitHub",
      description: "Check out my projects",
      value: "View my code",
      href: PERSONAL_INFO.github,
      color: "pink",
    },
  ];

  const colorClasses = {
    purple: {
      bg: "bg-accent-purple/20",
      border: "hover:border-accent-purple/60",
      text: "text-accent-purple",
      glow: "group-hover:shadow-accent-purple/20",
    },
    cyan: {
      bg: "bg-accent-cyan/20",
      border: "hover:border-accent-cyan/60",
      text: "text-accent-cyan",
      glow: "group-hover:shadow-accent-cyan/20",
    },
    pink: {
      bg: "bg-accent-pink/20",
      border: "hover:border-accent-pink/60",
      text: "text-accent-pink",
      glow: "group-hover:shadow-accent-pink/20",
    },
  };

  return (
    <SectionWrapper id="contact">
      <div className="max-w-4xl mx-auto" ref={ref}>
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
            {"<Contact />"}
          </motion.span>
          <h2 className="section-title">
            <span className="text-white">Let's </span>
            <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            I'm currently looking for internship and junior developer opportunities.
            Feel free to reach out!
          </p>
        </motion.div>

        {/* Main CTA Card */}
        <motion.div
          className="card text-center mb-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 via-transparent to-accent-cyan/10" />
          
          <div className="relative z-10">
            <motion.div
              className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent-purple to-accent-cyan flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            >
              <FiMessageCircle className="w-10 h-10 text-white" />
            </motion.div>
            
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Have a project in mind?
            </h3>
            <p className="text-dark-400 max-w-lg mx-auto mb-8">
              I'm always excited to work on new challenges. Whether it's an internship,
              a junior position, or a collaboration opportunity — let's talk!
            </p>
            
            <motion.a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-accent-purple to-accent-cyan hover:shadow-lg hover:shadow-accent-purple/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMail className="w-5 h-5" />
              Say Hello
              <FiArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => {
            const colors = colorClasses[method.color];
            return (
              <motion.a
                key={method.title}
                href={method.href}
                target={method.href.startsWith("mailto") ? undefined : "_blank"}
                rel={method.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className={`group card card-hover ${colors.border} ${colors.glow} hover:shadow-xl text-center`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl ${colors.bg} flex items-center justify-center`}>
                  <method.icon className={`w-7 h-7 ${colors.text}`} />
                </div>
                
                <h4 className="text-lg font-display font-semibold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                  {method.title}
                </h4>
                <p className="text-dark-500 text-sm mb-3">
                  {method.description}
                </p>
                <span className={`text-sm font-medium ${colors.text} inline-flex items-center gap-1`}>
                  {method.value}
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
            );
          })}
        </div>

        {/* Bottom Quote */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-dark-500 text-sm flex items-center justify-center gap-2">
            <FiCoffee className="w-4 h-4" />
            Always open to grab a virtual coffee and chat
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;

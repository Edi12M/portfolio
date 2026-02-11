import { motion } from "framer-motion";
import { FiHeart, FiCode } from "react-icons/fi";
import { PERSONAL_INFO, SOCIAL_LINKS, NAV_LINKS } from "../../constants/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 border-t border-dark-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <motion.a
              href="#home"
              className="inline-block text-2xl font-display font-bold gradient-text mb-4"
              whileHover={{ scale: 1.05 }}
            >
              EM
            </motion.a>
            <p className="text-dark-500 text-sm leading-relaxed">
              Backend Developer building scalable systems with .NET, MySQL, and
              React.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-dark-500 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-dark-800/50 flex items-center justify-center text-dark-400 hover:text-accent-purple hover:bg-accent-purple/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-dark-500 text-sm flex items-center gap-1">
              <FiCode className="w-4 h-4" />
              Built with
              <FiHeart className="w-4 h-4 text-accent-pink" />
              by {PERSONAL_INFO.name}
            </p>
            <p className="text-dark-600 text-sm">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-t from-accent-purple/5 to-transparent rounded-full blur-3xl" />
      </div>
    </footer>
  );
};

export default Footer;

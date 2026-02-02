import { motion } from "framer-motion";

const Button = ({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  icon: Icon,
  iconPosition = "right",
  disabled = false,
  ...props
}) => {
  const baseClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "btn-ghost",
  };

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="w-5 h-5 mr-2" />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="w-5 h-5 ml-2" />}
    </>
  );

  const buttonClasses = `${baseClasses[variant]} inline-flex items-center justify-center ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={buttonClasses}
        whileHover={{ scale: disabled ? 1 : 1.05 }}
        whileTap={{ scale: disabled ? 1 : 0.95 }}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;
